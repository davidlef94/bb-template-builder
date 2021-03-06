/*
  Module - builds the force parse line for the template
*/

let forceParseLine = "";
let forceParseTokens = [];

const addToForceParseLine = (token) => {
    /*
      may be more than one token to be force parse (i.e. convert_salary and all its token arguments)
    */
    const tokens = token.split(" ");

    /*
      remove any unwanted white space
    */
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "") {
            delete tokens[i];
        }
    }

    /*
      check to see if token already exists in the array
    */
    for (let j = 0; j < tokens.length; j++) {
        if (!forceParseTokens.includes(tokens[j])) {
            forceParseTokens.push(tokens[j]);
        }
    }
}

const getForceParseLine = (templateName, hasStep3LifeList) => {

    for (let n = 0; n < forceParseTokens.length; n++) {
        if (forceParseTokens[n] !== undefined) {
            forceParseLine += forceParseTokens[n] + " ";
        }
    }

    forceParseLine = forceParseLine.trim();

    if (hasStep3LifeList) {
        return `\n## ===================\n` +
            `## === FORCE PARSE ===\n` +
            `## ===================\n` +
            `force_parse: ${forceParseLine}`;
    } else {
        return `\n## ===================\n` +
            `## === FORCE PARSE ===\n` +
            `## ===================\n` +
            `force_parse: ${forceParseLine} %${templateName}_advertisefor%`;
    }
}

module.exports = {
    addToForceParseLine: addToForceParseLine,
    getForceParseLine: getForceParseLine
}