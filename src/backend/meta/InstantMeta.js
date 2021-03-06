/*
      {
        TypeOfMeta: "InstantMeta",
        JiraTicketNumber: jiraTicket,
        BoardId: boardId,
        NiceName: niceName,
        TemplateName: templateName,
        FeedType: feedType,
        SupportHtml: supportHTML,
        SalaryBanding: salaryBanding,
        ContentType: contentType,
        LiveUrl: liveUrl,
        StagingUrl: stagingUrl,
        SuccessMessage: successMessage,
        DeleteSuccessMessage: deleteSuccessMessage,
        JobUrl: jobUrl,
      };
*/

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
        `content_escape: 0\n` +
        `content_type: ${meta.ContentType}\n` +
        `content_charset: utf-8\n` +
        `\n` +
        `# Live URL\n` +
        `#url: ${meta.LiveUrl}\n` +
        `\n` +
        `# Staging URL\n` +
        `#url: ${meta.StagingUrl}\n` +
        `\n` +
        `# Dump URL\n` +
        `url: http://prod-gs-cheerleader-4.broadbean.local/dump_stuff.cgi\n` +
        `\n` +
        `combined_description_fields: %html_summary% %html_client_details% %html_description% %html_profile% %html_belgium_offer%\n` +
        `\n` +
        `body: %${meta.TemplateName}_postjob%\n` +
        `delete: %${meta.TemplateName}_deletejob%\n` +
        `\n` +
        `success: ${meta.SuccessMessage}\n` +
        `deletesuccess: ${meta.DeleteSuccessMessage}\n` +
        `\n` +
        `job_url: ${meta.JobUrl}\n` +
        `\n` +
        `jobtitle_char_limit: 255`;

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