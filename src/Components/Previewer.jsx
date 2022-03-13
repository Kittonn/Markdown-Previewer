import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { Window, TitleBar, Text } from "react-desktop/macOs";
const Previewer = ({ text }) => {
  return (
    <div>
      <Window chrome width="40%" height="50%" padding="0%">
        <TitleBar title="Previewer" controls />
        <Text id="preview"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(text)) }}
        ></Text>
      </Window>
    </div>
  );
};

export default Previewer;
