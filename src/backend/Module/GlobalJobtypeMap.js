const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (fieldName, templateName, token) => {
    const globalJobtypeMap = {
        global_jobtype_map: {
            forceParse: `%${templateName}_jobtype% `,
            descriptor: `\n# == Job Type == #` +
                `\ndescriptor: %${templateName}_jobtype%,Type=Hidden,Helper=global_jobtype_map(${templateName}|%jobtype%),HelperMetric=50,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_jobtype%|`
        }
    }

    if (globalJobtypeMap[token]) {
        ForceParse.addToForceParseLine(globalJobtypeMap[token].forceParse);
        Descriptor.addToDescriptorLine(globalJobtypeMap[token].descriptor);
        PostBody.addToPostBodyDescriptor(globalJobtypeMap[token].postBody);
    }
}

module.exports = {
    buildDescriptor: buildDescriptor
}