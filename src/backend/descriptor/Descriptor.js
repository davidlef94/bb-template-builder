/*
  module responsible in building out the descriptor line
*/

let descriptorLine = "";

const addToDescriptorLine = (token) => {
    descriptorLine += token;
}

const getDescriptorLine = (templateName, hasStep3LifeList, typeOfFeed) => {
    let value = "";

    if (typeOfFeed === "Client Feed") {
        value = "365";
    } else {
        value = "28";
    }

    if (hasStep3LifeList) {
        return `\n## ===================\n` +
            `## === DESCRIPTORS ===\n` +
            `## ===================\n` +
            `${descriptorLine}`;
    } else {
        return `\n## ===================\n` +
            `## === DESCRIPTORS ===\n` +
            `## ===================\n` +
            `${descriptorLine}\n` +
            `# == Advertise For == #\n` +
            `descriptor: %${templateName}_advertisefor%,Type=Step3LifeList(7 days|14 days|21 days|28 days),AllowedValues=(1-${value})`;
    }
}

module.exports = {
    addToDescriptorLine: addToDescriptorLine,
    getDescriptorLine: getDescriptorLine
}