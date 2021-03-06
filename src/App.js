import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import VisibilityIcon from '@material-ui/icons/Visibility';

import Header from "./components/headerComponent/Header";
import MetaSelection from "./components/MetaSelection";
import Descriptor from "./components/DescriptorBuilder/Descriptor";
import PreviewTemplate from './components/templateComponent/PreviewTemplate';
import Template from './backend/TemplateBuilder'

function App() {
  const [isMetaSelected, setIsMetaSelected] = useState(false);
  const [meta, setMeta] = useState("");
  const [descriptors, setDescriptors] = useState([]);
  const [template, setTemplate] = useState([]);

  const handleFinalMetaToSend = (meta) => {
    setMeta(() => {
      return [meta]
    });
  };

  const handleMetaSelected = () => {
    setIsMetaSelected(true);
  };

  const handleDescriptorsToBeSent = (descriptors) => {
    setDescriptors(() => {
      return [descriptors]
    })
  };

  const handleBuildTemplate = () => {
    const template = Template.buildTemplate(meta, descriptors);
    /*
      regex here to replace new line (\n) with <br> tag
      
    */
    const cleanTemplate = template.split('\n');
    //console.log(cleanTemplate);
    setTemplate(cleanTemplate)
  };

  return (
    <div>
      <Header />
      <MetaSelection
        onHandleFinalMetaToSend={handleFinalMetaToSend}
        onIsMetaSelected={handleMetaSelected}
      />
      {isMetaSelected && (
        <Descriptor onHandleDescriptorsToBeSent={handleDescriptorsToBeSent} />
      )}
      {isMetaSelected && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: 36,
          padding: 10
        }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<VisibilityIcon />}
            onClick={handleBuildTemplate}
          >
            Preview Template
          </Button>
        </div>
      )}
      <PreviewTemplate templateData={template} />
    </div>
  );
}

export default App;
