const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (templateName, data) => {
    const descriptor = data.Descriptor;
    const fieldName = data.FieldName;
    const metric = data.Metric;
    const value = data.Value;
    const delimeter = data.Delimeter;

    const niceName = NiceName.getNiceName(templateName);
    const fieldNiceName = NiceName.getNiceName(fieldName);

    const multiListFromFile = {
        MultiListFromFile: {
            forceParse: `%${templateName}_${fieldName}% %${templateName}_${fieldName}_multi% `,
            descriptor: `\n# == ${fieldNiceName} == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Name=${niceName} ${fieldNiceName},Type=MultiListFromFile(${templateName}/${fieldName}.txt),V4SortMetric=${metric},Mandatory=Select1-${value}` +
                `\ndescriptor: %${templateName}_${fieldName}_multi%,Type=Hidden,Helper=multi_list(|${delimeter}|%${templateName}_${fieldName}%),HelperMetric=50,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}_multi%|`
        }
    }

    if (multiListFromFile[descriptor]) {
        ForceParse.addToForceParseLine(multiListFromFile[descriptor].forceParse);
        Descriptor.addToDescriptorLine(multiListFromFile[descriptor].descriptor);
        PostBody.addToPostBodyDescriptor(multiListFromFile[descriptor].postBody);
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
      Value: value,
      Delimeter: delimeter,
      module: props.module
    };
*/