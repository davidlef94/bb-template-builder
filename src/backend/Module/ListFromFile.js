const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (templateName, data) => {
    const descriptor = data.Descriptor;
    const fieldName = data.FieldName;
    const metric = data.Metric;

    const niceName = NiceName.getNiceName(templateName);
    const fieldNiceName = NiceName.getNiceName(fieldName);

    const listFromFile = {
        ListFromFile: {
            forceParse: `%${templateName}_${fieldName}% `,
            descriptor: `\n# == ${fieldNiceName} == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Name=${niceName} ${fieldNiceName},Type=ListFromFile(${templateName}/${fieldName}.txt),V4SortMetric=${metric},Mandatory=SelectNotFirst\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        }
    }

    if (listFromFile[descriptor]) {
        ForceParse.addToForceParseLine(listFromFile[descriptor].forceParse);
        Descriptor.addToDescriptorLine(listFromFile[descriptor].descriptor);
        PostBody.addToPostBodyDescriptor(listFromFile[descriptor].postBody);
    }
}

module.exports = {
    buildDescriptor: buildDescriptor
}

/*
    {
      id: props.id,
      Descriptor: props.descriptor,
      FieldName: fieldName,
      Metric: metric,
      module: props.module
    };
*/