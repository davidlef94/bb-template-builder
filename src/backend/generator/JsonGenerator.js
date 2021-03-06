const buildGenerator = (templateName) => {
    return `\n## ===============\n` +
        `## === HELPERS ===\n` +
        `## ===============\n` +
        `\n` +
        `helper: sub ${templateName}_json {\n` +
        `helper:\n` +
        `helper:     use Tie::IxHash;\n` +
        `helper:\n` +
        `helper:     tie my %args, 'Tie::IxHash', encode_clean(@_);\n` +
        `helper:\n` +
        `helper:     my $json = JSON::to_json( \%args  , { pretty => 1 } );\n` +
        `helper:\n` +
        `helper:     return $json;\n` +
        `helper: }`;
}

module.exports = {
    buildGenerator: buildGenerator
}