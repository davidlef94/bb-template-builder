const buildGenerator = (templateName) => {
    return `\n## ===============\n` +
        `## === HELPERS ===\n` +
        `## ===============\n` +
        `\n` +
        `helper: sub ${templateName}_xml_generator {\n` +
        `helper:\n` +
        `helper:     use XML::Writer;\n` +
        `helper:     use Tie::IxHash;\n` +
        `helper:\n` +
        `helper:     tie my %args, 'Tie::IxHash', encode_clean(@_);\n` +
        `helper:     my $xml = q{};\n` +
        `helper:     my $doc = XML::Writer->new(\n` +
        `helper:         OUTPUT      => \$xml,\n` +
        `helper:         DATA_MODE   => 1,\n` +
        `helper:         DATA_INDENT => 1,\n` +
        `helper:         ENCODING    => 'UTF-8'\n` +
        `helper:     );\n` +
        `helper:\n` +
        `helper:     $doc->startTag('job');\n` +
        `helper:         $doc->dataElement($_, $args{$_}) for (keys %args);\n` +
        `helper:     $doc->endTag('job');\n` +
        `helper:\n` +
        `helper:     return $xml;\n` +
        `helper: }`;
}

module.exports = {
    buildGenerator: buildGenerator
}