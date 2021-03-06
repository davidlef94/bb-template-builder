const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (templateName, data) => {
    const descriptor = data.Descriptor;
    const fieldName = data.FieldName;
    const defaultToken = data.DefaultToken;
    const valueToMatch = data.ValueToMatch;
    const returnMatch = data.ReturnMatch;
    const returnOtherwise = data.ReturnOtherwise;

    const matchMapping = {
        match_mapping: {
            forceParse: `%${templateName}_${fieldName}% `,
            descriptor: `\n# == Match Mapping == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Type=Hidden,Helper=match_mapping(%${defaultToken}%|${valueToMatch}|${returnMatch}|${returnOtherwise}),HelperMetric=50,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        }
    }

    if (matchMapping[descriptor]) {
        ForceParse.addToForceParseLine(matchMapping[descriptor].forceParse);
        Descriptor.addToDescriptorLine(matchMapping[descriptor].descriptor);
        PostBody.addToPostBodyDescriptor(matchMapping[descriptor].postBody);
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
      DefaultToken: defaultToken,
      ValueToMatch: valueToMatch,
      ReturnMatch: returnMatch,
      ReturnOtherwise: returnOtherwise,
      module: props.module
    };
*/