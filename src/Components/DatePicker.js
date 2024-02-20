import React, { useState } from 'react';
import '../Style/Dropdown.css'; // Import CSS file for styling dropdown

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select value={selectedLanguage} onChange={handleChange} className="dropdown-select">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Urdu">Urdu</option>
      </select>
    </div>
  );
};

export default Dropdown;
