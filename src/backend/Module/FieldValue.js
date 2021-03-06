const NiceName = require('../util/NiceName');
const ForceParse = require('../force/ForceParse');
const Descriptor = require('../descriptor/Descriptor');
const PostBody = require('../body/PostBody');

/*
  Module that builds those descriptors where only one value is provided to the custom descriptors
  i.e. aplitrakurl - is it force or template name
  i.e. linkedlist - what is the v4 sort metric
*/
const buildDescriptor = (templateName, data) => {
    const tokenName = data.Descriptor;
    const fieldName = data.FieldName;
    const value = data.Value;

    const niceName = NiceName.getNiceName(templateName);
    const fieldNiceName = NiceName.getNiceName(fieldName);

    const customDescriptor = {
        LinkedList: {
            forceParse: `%${templateName}_${fieldName}% `,
            descriptor: `\n# == ${fieldNiceName} == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Name=${niceName} ${fieldNiceName},Type=LinkedList(${templateName}/${fieldName}.txt),V4SortMetric=${value},Mandatory=SelectVal1-1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        },
        Step3LifeList: {
            forceParse: `%${templateName}_advertisefor% `,
            descriptor: `\n# == Advertise For == #` +
                `\ndescriptor: %${templateName}_advertisefor%,Type=Step3LifeList(7 days|14 days|21 days|28 days),AllowedValues=(1-${value})\n`,
            postBody: `${fieldName}|%${templateName}_advertisefor%|`
        },
        aplitrakurl: {
            forceParse: `%${templateName}_aplitrakurl% `,
            descriptor: `\n# == Apply Online == #` +
                `\ndescriptor: %${templateName}_aplitrakurl%,Type=Hidden,Helper=generate_redirect(%username%|%applyonline%||${value}),HelperMetric=50,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_aplitrakurl%|`
        },
        dateformat: {
            forceParse: `%${templateName}_date_posted% `,
            descriptor: `\n# == Date Job Posted == #` +
                `\ndescriptor: %${templateName}_date_posted%,Type=Hidden,Helper=dateformat(%${templateName}_advertisefor%|${value}),HelperMetric=70,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_date_posted%|`
        },
        define_constant: {
            forceParse: `%${templateName}_${fieldName}% `,
            descriptor: `\n# == Define Constant == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Type=Hidden,Helper=define_constant(${value}),HelperMetric=10,PostingOnly=1,DeleteOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        },
        get_credential_for_board: {
            forceParse: `%${templateName}_${fieldName}% `,
            descriptor: `\n# == Get Credential for Board == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Type=Hidden,Helper=get_credential_for_board(${templateName}|${fieldName}|${value}),HelperMetric=12,PostingOnly=1,DeleteOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        },
        build_new_salary: {
            forceParse: `%${templateName}_${fieldName}% %salary_from% %salary_to% %salary_per% %salary_cur% %salary_benefits% `,
            descriptor: `\n# == Build Salary == #` +
                `\ndescriptor: %${templateName}_${fieldName}%,Type=Hidden,Helper=build_new_salary(%salary_from%|%salary_to%|%salary_per%|%salary_benefits%|%salary_cur%|${value}|%salary_banding%|%locale%|Negotiable),HelperMetric=100,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_${fieldName}%|`
        },
        strip_html: {
            forceParse: `%${templateName}_description% %build_description% `,
            descriptor: `\n# == Strip HTML == #` +
                `\ndescriptor: %${templateName}_description%,Type=Hidden,Helper=strip_html(%build_description%|${value}),HelperMetric=210,PostingOnly=1\n`,
            postBody: `${fieldName}|%${templateName}_description%|`
        },
        startdate_format_check: {
            forceParse: `%${templateName}_startdate% %startdate% `,
            descriptor: `\n# == Start Date Check == #` +
                `\ndescriptor: %${templateName}_startdate%,Type=Hidden,Helper=startdate_format_check(%startdate%||${value}|DD/MM/YYYY),HelperMetric=50\n`,
            postBody: `${fieldName}|%${templateName}_startdate%|` 
        }
    }

    if (customDescriptor[tokenName]) {
        ForceParse.addToForceParseLine(customDescriptor[tokenName].forceParse);
        Descriptor.addToDescriptorLine(customDescriptor[tokenName].descriptor);
        PostBody.addToPostBodyDescriptor(customDescriptor[tokenName].postBody);
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
      Value: value,
      module: props.module
    };
*/