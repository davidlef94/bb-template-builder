const GeneratorType = require('../generator/GeneratorType');

const getDeleteBody = (templateName, contentType) => {

    if (GeneratorType.DeleteBodyTypeGenerator[contentType]) {
        const generatorType = GeneratorType.DeleteBodyTypeGenerator[contentType];
        return `\n# == Delete Job == #\n` +
            `descriptor: %${templateName}_deletejob%,Type=Hidden,Helper=${templateName}${generatorType}(username|%${templateName}_username%|password|%${templateName}_password%|job_reference|%unique_time_txt_jobref%),HelperMetric=300,DeleteOnly=1`;
    } else {
        return "";
    }
}

module.exports = {
    getDeleteBody: getDeleteBody
}