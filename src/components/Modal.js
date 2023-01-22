import { useState } from "react";

//What is a modal: https://blog.hubspot.com/website/modal-web-design

const Modal = ({ setShowModal, languages, chosenLanguage, setChosenLanguage }) => {
  //our searched language is diff than chosen langue..
  //..we dont want to make multiple calls everytime we type, also to not go over API calls!
  const [searchedLanguage, setSearchedLanguage] = useState("");

  //show the one we're searching for when by filtering,
  //for each language lowercase it and make sure it starts with
  //whatever is being passed through search language input and lowecase
  //that as well just in case
  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().startsWith(searchedLanguage.toLowerCase())
  );

  const handleChange = (evt) => {
    //as we're searching we are just setting searchvalue in the input to whatever the target value is chosen on our input
    setSearchedLanguage(evt.target.value);
  };

  const handleClick = (e) => {
    //as we're clicking we are choosing and changing the language and exiting the modal
    setChosenLanguage(e.target.textContent)
    setShowModal(null);
  };

  //check if search language is updating; only for when we type
  // console.log(searchedLanguage);
  return (
    // give options for list of languages
    <div className="option-list">
      <div className="search-bar">
        {/* the input will be the chosen language */}
        <input value={searchedLanguage} onChange={handleChange} />
        {/* this closes the modal byy setting the modal state back to null in App.js */}
        <div className="close-button" onClick={() => setShowModal(null)}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>
      {/* gives us all of our options with an un-ordered list of languages that are 
being mapped out from the API*/}
      <div className="option-container">
        <ul>
          {filteredLanguages?.map((filteredLanguage, _index) => (
            <div className="list-item">
              <div className="icon">
              {/* https://unicode-table.com/en/2713/ */}
                {chosenLanguage === filteredLanguage ? '✓' : ''}
              </div>
              <li
                key={_index}
                onClick={handleClick}
                style={{
                  //the chosen language choosing here will control either the input langugage or the output language
                  color: chosenLanguage === filteredLanguage ? '#8ab4f8' : null,
                }}
              >
                {filteredLanguage}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
