import React from "react";
import { Window, TitleBar, Text } from "react-desktop/macOs";

const Editor = ({ text, setText }) => {
  return (
    <div>
      <Window chrome width="45vw" height="49.4vh" padding="0%">
        <TitleBar title="Editor" controls />
        <Text>
          <textarea
            id="editor"
            placeholder="Type here"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
        </Text>
      </Window>
    </div>
  );
};

export default Editor;
