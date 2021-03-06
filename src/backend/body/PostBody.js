const generatorType = {
    "text/xml": "_xml_generator",
    "application/json": "_json",
    "application/x-www-form-urlencoded": "_xml_generator",
    "email": "_email_body"
}

let postBodyDescriptor = "";

const addToPostBodyDescriptor = (fieldAndValue) => {
    postBodyDescriptor += fieldAndValue;
}

const getPostBodyDescriptor = (templateName, contentType) => {
    postBodyDescriptor = postBodyDescriptor.slice(0, -1);

    if (generatorType[contentType]) {
        const generator = generatorType[contentType];

        return `\n# == Post Job == #\n` +
            `descriptor: %${templateName}_postjob%,Type=Hidden,Helper=${templateName}${generator}(${postBodyDescriptor}),HelperMetric=300,PostingOnly=1`;
    }

    return postBodyDescriptor;
}

module.exports = {
    addToPostBodyDescriptor: addToPostBodyDescriptor,
    getPostBodyDescriptor: getPostBodyDescriptor
}