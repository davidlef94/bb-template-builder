const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (templateName, data) => {
    const descriptor = data.Descriptor;
    const fieldName = data.FieldName;
    const metric = data.Metric;
    const maxNumber = data.MaxNumber;
    const delimeter = data.Delimeter;
    const multiListDescriptor = data.MultiListDescriptor;

    const niceName = NiceName.getNiceName(templateName);
    const fieldNiceName = NiceName.getNiceName(fieldName);

    let finalMultiListDescriptorValue = "";

    /*
      need to update depending on what token is passed to the multi list helper (i.e. %template_name_industry_1%, %template_name_industry_2% %template_name_industry%)
    */
    if (multiListDescriptor === "child") {
        finalMultiListDescriptorValue = `%${templateName}_${fieldName}_2%`;

    } else if (multiListDescriptor === "parent") {
        finalMultiListDescriptorValue = `%${templateName}_${fieldName}_1%`;

    } else {
        finalMultiListDescriptorValue = `%${templateName}_${fieldName}%`;
    }

    const mLinkedList = {
        MLinkedList: {
            forceParse: `%${templateName}_${fieldName}% %${templateName}_${fieldName}_multi% `,
            descriptor: `\n# == ${fieldNiceName} == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Name=${niceName} ${fieldNiceName},Type=MLinkedList(${templateName}/${fieldName}.txt),V4SortMetric=${metric},Mandatory=SelectVal1-${maxNumber}\n` +
                `descriptor: %${templateName}_${fieldName}_multi%,Type=Hidden,Helper=multi_list(|${delimeter}|${finalMultiListDescriptorValue}),HelperMetric=50,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}_multi%|`
        }
    }

    if (multiListDescriptor === "child") {
        mLinkedList[descriptor].forceParse += `%${templateName}_${fieldName}_2% `;

    } else if (multiListDescriptor === "parent") {
        mLinkedList[descriptor].forceParse += `%${templateName}_${fieldName}_1% `;
    }

    if (mLinkedList[descriptor]) {
        ForceParse.addToForceParseLine(mLinkedList[descriptor].forceParse);
        Descriptor.addToDescriptorLine(mLinkedList[descriptor].descriptor);
        PostBody.addToPostBodyDescriptor(mLinkedList[descriptor].postBody);
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
      MaxNumber: maxNumber,
      Delimeter: delimeter,
      MultiListDescriptor: multiListDescriptor,
      module: props.module
    };
*/