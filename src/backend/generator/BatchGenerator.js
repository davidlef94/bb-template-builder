const buildGenerator = (templateName, contentType, typeOfBatchFeed) => {

    let generator = "";

    if ((contentType === "text/xml") && (typeOfBatchFeed === "allClients")) {
        generator = `\n## ===============\n` +
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
            `helper: }\n` +
            `\n` +
            `batch: job_envelope=${templateName}_envelope\n` +
            `helper: sub ${templateName}_envelope {\n` +
            `helper:\n` +
            `helper:     use XML::Writer;\n` +
            `helper:\n` +
            `helper:     my ($username, %options) = @_;\n` +
            `helper:     my $xml = '';\n` +
            `helper:     my($doc) = new XML::Writer(OUTPUT => \$xml, DATA_MODE => 1, DATA_INDENT => 1);\n` +
            `helper:\n` +
            `helper:     $doc->xmlDecl('UTF-8');\n` +
            `helper:             $doc->startTag('jobs'); # Here will be the root element of the envelope\n` +
            `helper:                 $doc->characters('BBTECH_RESERVED_JOBS');\n` +
            `helper:             $doc->endTag('jobs');\n` +
            `helper:     $doc->end();\n` +
            `helper:\n` +
            `helper:     return $xml;\n` +
            `helper: }`;

    } else if ((contentType === "text/xml") && (typeOfBatchFeed === "perClient")) {
        generator = `\n## ===============\n` +
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
            `helper: }\n` +
            `\n` +
            `batch: job_envelope=${templateName}_envelope\n` +
            `helper: sub ${templateName}_envelope {\n` +
            `helper:\n` +
            `helper:     use XML::Writer;\n` +
            `helper:\n` +
            `helper:     my ($username, %options) = @_;\n` +
            `helper:     my $xml = '';\n` +
            `helper:     my($doc) = new XML::Writer(OUTPUT => \$xml, DATA_MODE => 1, DATA_INDENT => 1);\n` +
            `helper:\n` +
            `helper:     $doc->xmlDecl('UTF-8');\n` +
            `helper:             $doc->startTag('jobs'); # Here will be the root element of the envelope\n` +
            `helper:                 $doc->characters('BBTECH_RESERVED_JOBS');\n` +
            `helper:             $doc->endTag('jobs');\n` +
            `helper:     $doc->end();\n` +
            `helper:\n` +
            `helper:     return $xml;\n` +
            `helper: }\n` +
            `\n` +
            `batch: subscription_signature=${templateName}_subscription_signature\n` +
            `helper: sub ${templateName}_subscription_signature {\n` +
            `helper:     require Bean::Username;\n` +
            `helper:     my ($username)= @_;\n` +
            `helper:\n` +
            `helper:     my $user = Bean::Username->new( $username );\n` +
            `helper:     return $user->company();\n` +
            `helper: }`;

    } else if ((contentType === "application/json") && (typeOfBatchFeed === "allClients")) {
        generator = `\n## ===============\n` +
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
            `helper: }\n` +
            `\n` +
            `batch: job_envelope=${templateName}_envelope\n` +
            `helper: sub ${templateName}_envelope {\n` +
            `helper:\n` +
            `helper:     use XML::Writer;\n` +
            `helper:\n` +
            `helper:     my ($username, %options) = @_;\n` +
            `helper:     my $xml = '';\n` +
            `helper:     my($doc) = new XML::Writer(OUTPUT => \$xml, DATA_MODE => 1, DATA_INDENT => 1);\n` +
            `helper:\n` +
            `helper:     $doc->xmlDecl('UTF-8');\n` +
            `helper:             $doc->startTag('jobs'); # Here will be the root element of the envelope\n` +
            `helper:                 $doc->characters('BBTECH_RESERVED_JOBS');\n` +
            `helper:             $doc->endTag('jobs');\n` +
            `helper:     $doc->end();\n` +
            `helper:\n` +
            `helper:     return $xml;\n` +
            `helper: }\n` +
            `\n` +
            `batch: http_presubmit=${templateName}_tojson\n` +
            `helper: sub ${templateName}_tojson {\n` +
            `helper:\n` +
            `helper:    use XML::Simple;\n` +
            `helper:    use JSON;\n` +
            `helper:\n` +
            `helper:    my ($http_agent, %options) = @_;\n` +
            `helper:\n` +
            `helper:    #Get XML Request\n` +
            `helper:    my $xml = '';\n` +
            `helper:    open my $tempfile, '<', $http_agent->{'filename'};\n` +
            `helper:    while (<$tempfile>) {\n` +
            `helper:    $xml .= $_;\n` +
            `helper:    }\n` +
            `helper:    close $tempfile;\n` +
            `helper:\n` +
            `helper:    #Convert XML to Hash\n` +
            `helper:    my $struct = XMLin( $xml, KeepRoot => 1 );\n` +
            `helper:\n` +
            `helper:    my $listofjobs = $struct->{'jobs'};\n` +
            `helper:\n` +
            `helper:    #Convert Hash to JSON\n` +
            `helper:    my $json = to_json( $listofjobs, { pretty => 1, utf8 => 1 } );\n` +
            `helper:\n` +
            `helper:    #Replace XML content with JSON content\n` +
            `helper:    open my $tempfile2, '>', $http_agent->{'filename'};\n` +
            `helper:    print $tempfile2 $json;\n` +
            `helper:    close $tempfile2;\n` +
            `helper:\n` +
            `helper:    return 0; # This signifies that the header has not been printed\n` +
            `helper: }`;
    
        } else if ((contentType === "application/json") && (typeOfBatchFeed === "perClient")) {
            generator = `\n## ===============\n` +
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
            `helper: }\n` +
            `\n` +
            `batch: job_envelope=${templateName}_envelope\n` +
            `helper: sub ${templateName}_envelope {\n` +
            `helper:\n` +
            `helper:     use XML::Writer;\n` +
            `helper:\n` +
            `helper:     my ($username, %options) = @_;\n` +
            `helper:     my $xml = '';\n` +
            `helper:     my($doc) = new XML::Writer(OUTPUT => \$xml, DATA_MODE => 1, DATA_INDENT => 1);\n` +
            `helper:\n` +
            `helper:     $doc->xmlDecl('UTF-8');\n` +
            `helper:             $doc->startTag('jobs'); # Here will be the root element of the envelope\n` +
            `helper:                 $doc->characters('BBTECH_RESERVED_JOBS');\n` +
            `helper:             $doc->endTag('jobs');\n` +
            `helper:     $doc->end();\n` +
            `helper:\n` +
            `helper:     return $xml;\n` +
            `helper: }\n` +
            `\n` +
            `batch: http_presubmit=${templateName}_tojson\n` +
            `helper: sub ${templateName}_tojson {\n` +
            `helper:\n` +
            `helper:    use XML::Simple;\n` +
            `helper:    use JSON;\n` +
            `helper:\n` +
            `helper:    my ($http_agent, %options) = @_;\n` +
            `helper:\n` +
            `helper:    #Get XML Request\n` +
            `helper:    my $xml = '';\n` +
            `helper:    open my $tempfile, '<', $http_agent->{'filename'};\n` +
            `helper:    while (<$tempfile>) {\n` +
            `helper:    $xml .= $_;\n` +
            `helper:    }\n` +
            `helper:    close $tempfile;\n` +
            `helper:\n` +
            `helper:    #Convert XML to Hash\n` +
            `helper:    my $struct = XMLin( $xml, KeepRoot => 1 );\n` +
            `helper:\n` +
            `helper:    my $listofjobs = $struct->{'jobs'};\n` +
            `helper:\n` +
            `helper:    #Convert Hash to JSON\n` +
            `helper:    my $json = to_json( $listofjobs, { pretty => 1, utf8 => 1 } );\n` +
            `helper:\n` +
            `helper:    #Replace XML content with JSON content\n` +
            `helper:    open my $tempfile2, '>', $http_agent->{'filename'};\n` +
            `helper:    print $tempfile2 $json;\n` +
            `helper:    close $tempfile2;\n` +
            `helper:\n` +
            `helper:    return 0; # This signifies that the header has not been printed\n` +
            `helper: }\n` +
            `\n` +
            `batch: subscription_signature=${templateName}_subscription_signature\n` +
            `helper: sub ${templateName}_subscription_signature {\n` +
            `helper:     require Bean::Username;\n` +
            `helper:     my ($username)= @_;\n` +
            `helper:\n` +
            `helper:     my $user = Bean::Username->new( $username );\n` +
            `helper:     return $user->company();\n` +
            `helper: }`;
        }

    return generator;
}

module.exports = {
    buildGenerator: buildGenerator
}