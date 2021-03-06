const buildMeta = (meta) => {
    const date = generateDate();

    const metaSection =
        `#--------------------------------------------------------------------\n` +
        `# Author: David Lefort-Gormally\n` +
        `# Date: ${date}\n` +
        `# Type: ${meta.FeedType}\n` +
        `# Ticket Number: ${meta.JiraTicketNumber}\n` +
        `# Board ID: ${meta.BoardId}\n` +
        `# Tags: ${meta.FeedType}, ${meta.ContentType}\n` +
        `# Notes:\n` +
        `# - Supports POST and DELETE only\n` +
        `#\n` +
        `#--------------------------------------------------------------------\n` +
        `\n` +
        `name: ${meta.NiceName}\n` +
        `\n` +
        `module: http\n` +
        `delmethod: http\n` +
        `method: POST\n` +
        `\n` +
        `html_support: ${meta.SupportHtml}\n` +
        `salary_banding: ${meta.SalaryBanding}\n` +
        `\n` +
        `content_escape: 1\n` +
        `content_type: application/x-www-form-urlencoded\n` +
        `content_charset: utf-8\n` +
        `\n` +
        `# Live URL\n` +
        `#url: https://internal-batchaws.adcourier.com/services/\n` +
        `\n` +
        `# Staging URL\n` +
        `#url: http://batch.dev.aws.adcourier.com/services/\n` +
        `\n` +
        `# Dump URL\n` +
        `url: http://prod-gs-cheerleader-4.broadbean.local/dump_stuff.cgi\n` +
        `\n` +
        `success: <AddStatus>Added.\n` +
        `deletesuccess: <DeleteStatus>Deleted.\n` +
        `\n` +
        `job_id: %jobref%\n` +
        `\n` +
        `jobtitle_char_limit: 255\n` +
        `\n` +
        `combined_description_fields: %html_summary% %html_client_details% %html_description% %html_profile% %html_belgium_offer%\n` +
        `\n` +
        `body: board=${meta.TemplateName}&action=job&subaction=add&username=%username%&aplitrakid=%aplitrakid%&jobref=%jobref%&advertise_days=%${meta.TemplateName}_advertisefor%&add_body=%${meta.TemplateName}_postjob%&brand_id=%brand_id%\n` +
        `delete: board=${meta.TemplateName}&action=job&subaction=delete&username=%username%&aplitrakid=%aplitrakid%&jobref=%jobref%\n` +
        `\n`;

        return metaSection;
}

const generateDate = () => {
    let [month, date, year] = new Date().toLocaleDateString('en-US').split("/");
    const dateValue = date + "/" + month + "/" + year;

    return dateValue;
}

module.exports = {
    buildMeta: buildMeta
}