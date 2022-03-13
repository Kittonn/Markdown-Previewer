import React from "react";
import { Window, TitleBar, Text } from "react-desktop/macOs";

const Editor = ({ text, setText }) => {
  return (
    <div>
      <Window chrome width="40%" height="50%" padding="0%">
        <TitleBar title="Editor" controls />
        <Text>
          <textarea
            id="editor"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
        </Text>
      </Window>
    </div>
  );
};

export default Editor;
