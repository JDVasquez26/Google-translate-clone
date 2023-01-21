import React from "react";
import SelectDropDown from "./SelectDropDown";

const TextBox = ({ selectedLanguage, style, setShowModal }) => {
  return (
    // this div could be named input or output depending on the style passed
    <div className={style}>
      <SelectDropDown 
          style={style}
          setShowModal={setShowModal}
          selectedLanguage ={selectedLanguage}
      />
      <textarea
        placeholder={
          style === "input"
            ? //if it's input then "Enter Text", else it has "Translation"
              "Enter Text"
            : "Translation"
        }
        // disables the translation so no writing in it
        disabled={style === "output"}
      />
    </div>
  );
};

export default TextBox;
