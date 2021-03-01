import React, { useState } from "react";

import Header from "./components/headerComponent/Header";
import MetaSelection from "./components/MetaSelection";
import Descriptor from "./components/DescriptorBuilder/Descriptor";

function App() {
  const [isMetaSelected, setIsMetaSelected] = useState(false);

  const handleFinalMetaToSend = (meta) => {
    alert("Final Meta to Send: " + JSON.stringify(meta));
    console.log(JSON.stringify(meta));
  };

  const handleMetaSelected = () => {
    setIsMetaSelected(true);
  };

  const handleDescriptorsToBeSent = (descriptors) => {
    alert(JSON.stringify(descriptors));
    console.log(JSON.stringify(descriptors));
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
    </div>
  );
}

export default App;
