import { useEffect, useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from "axios";


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [languages, setLanguages] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Polish");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const getLanguages = async () => {
    const response = await axios.get("http://localhost:4040/languages");
    setLanguages(response.data);
  };
  useEffect(() => {
    getLanguages();
  }, []);

  const translate = async () => {
    console.log("translate");
    const data = {
      textToTranslate,
      outputLanguage,
      inputLanguage,
    };
    const response = await axios.get("http://localhost:4040/translation", {
      params: data,
    });
    console.log("response", response);
    setTranslatedText(response.data);
  };

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="content">
      <div className="header">
        <h1>Translate It!</h1>
        <h1>Translate It!</h1>
      </div>
      <br></br>
      <div className="app">
        {!showModal && (
          <>
            <TextBox
              style="input"
              setShowModal={setShowModal}
              selectedLanguage={inputLanguage}
              setTextToTranslate={setTextToTranslate}
              textToTranslate={textToTranslate}
              setTranslatedText={setTranslatedText}
            />
            <div className="arrow-container" onClick={handleClick}>
              <Arrows />
            </div>
            <TextBox
              style="output"
              setShowModal={setShowModal}
              selectedLanguage={outputLanguage}
              translatedText={translatedText}
            />
            <div className="button-container" onClick={translate}>
              <Button />
            </div>
          </>
        )}
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            languages={languages}
            chosenLanguage={
              showModal === "input" ? inputLanguage : outputLanguage
            }
            setChosenLanguage={
              showModal === "input" ? setInputLanguage : setOutputLanguage
            }
          />
        )}
      </div>
      <div
      className="links"
      >
      <a href=''>Overview</a>
                {"   "}
       <a href='https://github.com/JDVasquez26/Google-translate-clone'>GitHub Repo</a>
      </div>
    </div>
  );
};

export default App;
