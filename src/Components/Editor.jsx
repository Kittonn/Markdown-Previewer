import React from "react";
import { Window, TitleBar, Text } from "react-desktop/macOs";
import { useSelector, useDispatch } from "react-redux";
import { textActions } from "../store/text-slice";
const Editor = () => {
  const { text } = useSelector((state) => state.text);
  const dispatch = useDispatch();
  return (
    <div>
      <Window chrome width="45vw" height="49.4vh" padding="0%">
        <TitleBar title="Editor" controls />
        <Text>
          <textarea
            id="editor"
            placeholder="Type here"
            onChange={(e) => dispatch(textActions.newText(e.target.value))}
            value={text}
          ></textarea>
        </Text>
      </Window>
    </div>
  );
};

export default Editor;
