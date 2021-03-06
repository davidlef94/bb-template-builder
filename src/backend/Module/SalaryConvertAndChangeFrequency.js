const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

const buildDescriptor = (templateName, data) => {
    const descriptor = data.Descriptor;
    const fieldName = data.FieldName;
    const frequencyTarget = data.FrequencyTarget;
    const fromOrTo = data.FromOrTo;
    const currencyMapping = data.CurrencyMapping;

    const fieldNiceName = NiceName.getNiceName(fieldName);

    const salaryConvertFrequency = {
        salary_convert_and_change_frequency: {
            forceParse: `%${templateName}_${fieldName}% %salary_from% %salary_to% %salary_cur% %salary_per% `,
            descriptor: `\n# == ${fieldNiceName} == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Type=Hidden,Helper=salary_convert_and_change_frequency(%salary_from%|%salary_to%|%salary_cur%|%salary_per%|${frequencyTarget}|${fromOrTo}|${currencyMapping}),HelperMetric=60,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        }
    }

    if (salaryConvertFrequency[descriptor]) {
        ForceParse.addToForceParseLine(salaryConvertFrequency[descriptor].forceParse);
        Descriptor.addToDescriptorLine(salaryConvertFrequency[descriptor].descriptor);
        PostBody.addToPostBodyDescriptor(salaryConvertFrequency[descriptor].postBody);
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
      FrequencyTarget: frequencyTarget,
      FromOrTo: fromOrTo,
      CurrencyMapping: currencyMapping,
      module: props.module
    };
*/