/*
      {
        TypeOfMeta: "HanuMeta",
        JiraTicketNumber: jiraTicket,
        BoardId: boardId,
        NiceName: niceName,
        TemplateName: templateName,
        SupportHtml: supportHTML,
        SalaryBanding: salaryBanding,
        Email: email,
      };
*/

const buildMeta = (meta) => {
    const date = generateDate();

    const metaSection =
        `#--------------------------------------------------------------------\n` +
        `# Author: David Lefort-Gormally\n` +
        `# Date: ${date}\n` +
        `# Type: Job Board\n` +
        `# Ticket Number: ${meta.JiraTicketNumber}\n` +
        `# Board ID: ${meta.BoardId}\n` +
        `# Tags: Job Board, Hanu\n` +
        `# Notes:\n` +
        `# - Supports POST only\n` +
        `#\n` +
        `#--------------------------------------------------------------------\n` +
        `\n` +
        `name: ${meta.NiceName}\n` +
        `\n` +
        `module: email\n` +
        `\n` +
        `html_support: ${meta.SupportHtml}\n` +
        `salary_banding: ${meta.SalaryBanding}\n` +
        `\n` +
        `content_html: 1\n` +
        `content_charset: utf-8\n` +
        `\n` +
        `from: adcourier-daemon@adcourier.com\n` +
        `to: david.lefort-gormally@broadbean.com\n` +
        `#to: swapnashree.sarangi@careerbuilder.com\n` +
        `#to: Broadbeanjobs@hanu.com,hanujobs@broadbean.com,broadbeanjobs@in.hanusoftware.com\n` +
        `cc: adcourier-daemon@adcourier.com\n` +
        `\n` +
        `subject: Job Submission (${meta.NiceName}): %jobtitle%\n` +
        `\n` +
        `combined_description_fields: %html_summary% %html_client_details% %html_description% %html_profile% %html_belgium_offer%\n` +
        `\n` +
        `body: %${meta.TemplateName}_postjob%\n` +
        `\n` +
        `jobtitle_char_limit: 255\n`;

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