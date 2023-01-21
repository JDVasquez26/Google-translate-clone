import React from 'react'

const SelectDropDown = ({style, setShowModal, selectedLanguage}) => {
  return (
    <div className='select-drop-down'
      onClick={() => setShowModal(style)}
    >
      <input value={selectedLanguage} />
      <div className='down-arrow'>
        {/* svg from the google app itself */}
        <svg
          focusable="false"
          xmlns='hhtp://www.w3.org/2000/svg'
          viewBox='0 0 24 25'
        >
          {/* using the path to draw an arrow */}
          <path d="M7 10l5 5 5-5z"></path>

        </svg>
      </div>
    </div>
  )
}

export default SelectDropDown