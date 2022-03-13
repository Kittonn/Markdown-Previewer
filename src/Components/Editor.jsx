import React from "react";

const Editor = ({ text, setText }) => {
  return (
    <div>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        cols="100"
        rows="25"
      ></textarea>
    </div>
  );
};

export default Editor;
