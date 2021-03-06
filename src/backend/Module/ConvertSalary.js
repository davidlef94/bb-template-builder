const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (templateName, data) => {
    const descriptor = data.Descriptor;
    const fieldName = data.FieldName;
    const currency = data.Currency;
    const target = data.Target;

    const fieldNiceName = NiceName.getNiceName(fieldName);

    const convertSalary = {
        convert_salary: {
            forceParse: `%${templateName}_${fieldName}% %salary_from% %salary_to% %salary_cur_iso% `,
            descriptor: `\n# == ${fieldNiceName} == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Type=Hidden,Helper=convert_salary(%salary_from%|%salary_to%|%salary_cur_iso%|${currency}|${target}),HelperMetric=75,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        }
    }

    if (convertSalary[descriptor]) {
        ForceParse.addToForceParseLine(convertSalary[descriptor].forceParse);
        Descriptor.addToDescriptorLine(convertSalary[descriptor].descriptor);
        PostBody.addToPostBodyDescriptor(convertSalary[descriptor].postBody);
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
      Currency: currency,
      Target: target,
      module: props.module
    };
*/