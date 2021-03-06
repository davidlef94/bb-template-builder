const ForceParse = require('../force/ForceParse');
const ForceParseLineTokens = require('../force/ForceParseLineTokens');
const PostBody = require('../body/PostBody');
const LocationMappings = require('../Module/LocationIdMappings');
const GlobalJobtypeMap = require('../Module/GlobalJobtypeMap');
const LanguageMapping = require('../Module/LanguageMapping');
const ExperienceMapping = require('../Module/ExperienceMapping');
/*
   This module only handles tokens by name (no descriptors) (i.e. contactname and build_description)
*/
const buildDescriptor = (templateName, data) => {
    const fieldName = data.FieldName;
    const token = data.Descriptor;
    /*
      use ForceParseLineTokens module to see if the token is valid
      if so, pass into body and check if it should be in the force parse line
    */
    if (ForceParseLineTokens.defaultTokens[token]) {
        const tokenValue = ForceParseLineTokens.defaultTokens[token].token;
        const postBodyData = `${fieldName}|${tokenValue}|`;
        PostBody.addToPostBodyDescriptor(postBodyData);
    }

    /*
     Location id mapping type
    */
    if (token === "location_id_mapping") {
        LocationMappings.buildDescriptor(fieldName, templateName, token);
        return;
    }

    /*
      global_jobtype_map
    */
    if (token === "global_jobtype_map") {
        GlobalJobtypeMap.buildDescriptor(fieldName, templateName, token);
        return;
    }

    /*
      Language Mapping
    */
    if (token === "language_mapping") {
        LanguageMapping.buildDescriptor(fieldName, templateName, token);
        return;
    }

    /*
      Experience Mapping
    */
    if (token === "experience_mapping") {
        ExperienceMapping.buildDescriptor(fieldName, templateName, token);
        return;
    }

    /*
      check if token should be in the force parse line
    */
    if (ForceParseLineTokens.defaultTokens[token].isForceParse) {
        if (token === "location_text_region") {
            const forceParseLine = `%${token}% %location_text% %location_state% `;
            ForceParse.addToForceParseLine(forceParseLine);

        } else if (token === "location_state") {
            const forceParseLine = `%${token}% %location_text_region% %location_text% `;
            ForceParse.addToForceParseLine(forceParseLine);

        } else {
            const forceParseLine = `%${token}% `;
            ForceParse.addToForceParseLine(forceParseLine);
        }
    }
}

module.exports = {
    buildDescriptor: buildDescriptor
}

/*
    {
      id: props.id,
      Descriptor: props.descriptor,
      FieldName: fieldName,
      Currency: currency,
      target: target,
      module: props.module
    };
*/