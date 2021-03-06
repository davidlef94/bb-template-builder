/*
  Module - builds the template
*/
const ModuleList = require('./Module/ModuleList');
const ForceParse = require('./force/ForceParse');
const Descriptor = require('./descriptor/Descriptor');
const PostBody = require('./body/PostBody');
const DeleteBody = require('./body/DeleteBody');
const GeneratorType = require('./generator/GeneratorType');
const BatchGenerator = require('./generator/BatchGenerator');

const buildTemplate = (metaInformation, descriptorInformation) => {
  /*
     Build the type of meta depending on the integration
  */
  const typeOfMeta = metaInformation[0].TypeOfMeta;
  const metaModuleType = require(`./meta/${typeOfMeta}`);
  const metaData = metaModuleType.buildMeta(metaInformation[0]);

  /*
    Template name used in buildDescriptor
  */
  const templateName = metaInformation[0].TemplateName;

  /*
    Type of Feed
  */
  const feedType = metaInformation[0].FeedType;

  /*
    Content-Type
  */
  const contentType = metaInformation[0].ContentType;

  /*
    check if advertisefor is sent in the post body or not
  */
  let hasStep3LifeList = false;

  descriptorInformation[0].map(el => {
    if (ModuleList.ModuleList[el.module]) {
      if (el.Descriptor === "Step3LifeList") {
        hasStep3LifeList = true;
      }
      const module = require(`./Module/${el.module}`);
      module.buildDescriptor(templateName, el);
    }
  });

  const forceParseLine = ForceParse.getForceParseLine(templateName, hasStep3LifeList);
  const descriptorLine = Descriptor.getDescriptorLine(templateName, hasStep3LifeList, feedType);
  const postBodyLine = PostBody.getPostBodyDescriptor(templateName, contentType);
  /*
    have to make those variables below read and write only to be updated depending if
    integration is a batch one
  */
  let deleteBodyLine = DeleteBody.getDeleteBody(templateName, contentType);
  let generatorLine = "";
  /*
    get generator (content type for email has been set to "email")
    if a batch feed ....
  */
  if (typeOfMeta === "BatchMeta") {
    deleteBodyLine = "";
    const typeOfBatchFeed = metaInformation[0].BatchType;
    generatorLine = BatchGenerator.buildGenerator(templateName, contentType, typeOfBatchFeed);

  } else {
    const typeOfGenerator = GeneratorType.TypeOfGenerator[contentType];
    const generator = require(`./generator/${typeOfGenerator}`);
    generatorLine = generator.buildGenerator(templateName);
  }

  return metaData + "\n" + forceParseLine + "\n" + descriptorLine + "\n" + postBodyLine + "\n" + deleteBodyLine + "\n" + generatorLine;
}

module.exports = {
  buildTemplate: buildTemplate
}