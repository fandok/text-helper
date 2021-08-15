import { useState } from "react";

const Text = () => {
  const [text, setText] = useState("");
  const [preText, setPreText] = useState("");
  const [postText, setPostText] = useState("");

  const updateText = (e) => {
    setText(e.target.value);
  };

  const updatePreText = (e) => {
    setPreText(e.target.value);
  };

  const updatePostText = (e) => {
    setPostText(e.target.value);
  };

  return (
    <div>
      <div>input text original:</div>
      <input onChange={updateText}></input>
      <div>text result</div>
      {text && <div>{text}</div>}
      <div>pre text:</div>
      <input onChange={updatePreText}></input>
      <div>post text:</div>
      <input onChange={updatePostText}></input>
      <div>new text result</div>
      <div>
        {preText}
        {text}
        {postText}
      </div>
    </div>
  );
};

export default Text;
