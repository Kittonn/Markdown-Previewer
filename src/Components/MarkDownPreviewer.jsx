import React from "react";

import Editor from "./Editor";
import Previewer from "./Previewer";

const MarkDownPreviewer = () => {
  return (
    <div id="container">
      <Editor />
      <Previewer />
    </div>
  );
};

export default MarkDownPreviewer;
