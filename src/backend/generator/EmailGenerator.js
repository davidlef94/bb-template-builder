const buildGenerator = (templateName) => {
    return `\n## ===============\n` +
        `## === HELPERS ===\n` +
        `## ===============\n` +
        `\n` +
        `helper: sub ${templateName}_email_body {\n` +
        `helper:\n` +
        `helper:    my %args = encode_clean(@_);\n` +
        `helper:\n` +
        `helper:\n` +
        `helper:    my $email_body .= "\n` +
        `helper:\n` +
        `helper:       ";\n` +
        `helper: }`;
}

module.exports = {
    buildGenerator: buildGenerator
}