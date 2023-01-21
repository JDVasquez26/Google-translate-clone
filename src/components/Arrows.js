import React from 'react'

// used in App.js for between the two text boxes; 
//if you click on them they switch the languages, see App.js
const Arrows = () => {
  return (
    <svg
      focusable="false"
      xmlns='hhtp://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {/* from the site itself */}
      <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
    </svg>
  )
}

export default Arrows