const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (templateName, data) => {
    const descriptor = data.Descriptor;
    const fieldName = data.FieldName;
    const mappedToken = data.MappedToken;
    const keyPairs = data.KeyPairs;

    const fieldNiceName = NiceName.getNiceName(fieldName);

    const defaultTokenMapped = {
        default_token_mapped: {
            forceParse: `%${templateName}_${fieldName}% %${mappedToken}% `,
            descriptor: `\n# == ${fieldNiceName} == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Type=Hidden,Helper=default_token_mapped(%${mappedToken}%|${keyPairs}),HelperMetric=55,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        }
    }

    if (defaultTokenMapped[descriptor]) {
        ForceParse.addToForceParseLine(defaultTokenMapped[descriptor].forceParse);
        Descriptor.addToDescriptorLine(defaultTokenMapped[descriptor].descriptor);
        PostBody.addToPostBodyDescriptor(defaultTokenMapped[descriptor].postBody);
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
      MappedToken: mappedToken,
      KeyPairs: keyPairs,
      module: props.module
    };
*/