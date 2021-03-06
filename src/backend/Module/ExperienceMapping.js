const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (fieldName, templateName, token) => {
    const experienceMapping = {
        experience_mapping: {
            forceParse: `%${templateName}_experience% %experience% `,
            descriptor: `\n# == Experience == #` +
                `\ndescriptor: %${templateName}_experience%,Type=Hidden,Helper=experience_mapping(${templateName}|%experience%),HelperMetric=50,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_experience%|`
        }
    }

    if (experienceMapping[token]) {
        ForceParse.addToForceParseLine(experienceMapping[token].forceParse);
        Descriptor.addToDescriptorLine(experienceMapping[token].descriptor);
        PostBody.addToPostBodyDescriptor(experienceMapping[token].postBody);
    }
}

module.exports = {
    buildDescriptor: buildDescriptor
}