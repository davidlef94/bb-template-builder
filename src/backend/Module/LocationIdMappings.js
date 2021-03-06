const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (fieldName, templateName, token) => {
    const niceName = NiceName.getNiceName(templateName);

    const locationMapping = {
        location_id_mapping: {
            forceParse: `%${templateName}_location% `,
            descriptor: `\n# == Location == #` +
                `\ndescriptor: %${templateName}_location%,Name=${niceName} Location,Type=Hidden,Helper=location_id_mapping(${templateName}|%location_id%),HelperMetric=100,V4SortMetric=151\n`,
            postBody: `${fieldName}|%${templateName}_location%|`
        }
    }

    if (locationMapping[token]) {
        ForceParse.addToForceParseLine(locationMapping[token].forceParse);
        Descriptor.addToDescriptorLine(locationMapping[token].descriptor);
        PostBody.addToPostBodyDescriptor(locationMapping[token].postBody);
    }
}

module.exports = {
    buildDescriptor: buildDescriptor
}