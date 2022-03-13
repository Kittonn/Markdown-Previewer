import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
const Previewer = ({ text }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(text)) }}
    ></div>
  );
};

export default Previewer;
