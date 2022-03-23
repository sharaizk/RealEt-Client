import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.scss";

const TextEditor = ({ value, onChange }) => {
  return (
    <>
      <ReactQuill
        className="react-quill"
        theme="snow"
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link"],
          ],
        }}
        value={value || ""}
        onChange={onChange}
      />
    </>
  );
};

export default TextEditor;
