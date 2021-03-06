const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (fieldName, templateName, token) => {
    const niceName = NiceName.getNiceName(templateName);

    const languageMapping = {
        language_mapping: {
            forceParse: `%${templateName}_language% %language% `,
            descriptor: `\n# == Language == #` +
                `\ndescriptor: %${templateName}_language%,Name=${niceName} Language,Type=Hidden,Helper=language_mapping(${templateName}|%language%),HelperMetric=48,V4SortMetric=80\n`,
            postBody: `${fieldName}|%${templateName}_language%|`
        }
    }

    if (languageMapping[token]) {
        ForceParse.addToForceParseLine(languageMapping[token].forceParse);
        Descriptor.addToDescriptorLine(languageMapping[token].descriptor);
        PostBody.addToPostBodyDescriptor(languageMapping[token].postBody);
    }
}

module.exports = {
    buildDescriptor: buildDescriptor
}