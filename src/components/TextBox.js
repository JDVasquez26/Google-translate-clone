import React from "react";
import SelectDropDown from "./SelectDropDown";

const TextBox = ({
  selectedLanguage,
  style,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) => {


const handleClick = () => {
  setTextToTranslate("")
  setTranslatedText("")
}


  return (
    // this div could be named input or output depending on the style passed
    <div className={style}>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        className={style}
        placeholder={
          style === "input"
            ? //if it's input then "Enter Text", else it has "Translation"
              "Enter Text"
            : "Translation"
        }
        // disables the translation so no writing in it
        disabled={style === "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === 'input' ? textToTranslate : translatedText}
      />
{/* option to delete everything we've writen */}
      {style === 'input' && (
        //https://unicode-table.com/en/search/?q=x+small
        <div className="delete" onClick={handleClick}>ₓ</div>
      )}
    </div>
  );
};

export default TextBox;
