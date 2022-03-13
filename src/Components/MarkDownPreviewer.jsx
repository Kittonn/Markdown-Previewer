import React, { useState, useEffect } from "react";
import { startText } from "../startText";
import Editor from "./Editor";
import Previewer from "./Previewer";

const MarkDownPreviewer = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(startText);
  }, []);
  return (
    <div>
      <Editor setText={setText} text={text} />
      <Previewer text={text} />
    </div>
  );
};

export default MarkDownPreviewer;
