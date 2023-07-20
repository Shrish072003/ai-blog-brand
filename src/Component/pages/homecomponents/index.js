import React, { useState } from 'react';
import './MoodSetting.css';

const MoodSetting = () => {
  const [selectedMood, setSelectedMood] = useState('');

  const handleMoodChange = (event) => {
    const newMood = event.target.value;
    setSelectedMood((prevMood) => (prevMood === newMood ? '' : newMood));
  };
  

  return (
    <div className="mood-container">
      <h2>Set the Mood</h2>

      <div className="radio-buttons">
        <input
          type="radio"
          id="mood1"
          name="mood"
          value="happy"
          checked={selectedMood === 'happy'}
          onChange={handleMoodChange}
          disabled={selectedMood === 'happy'}
        />
        <label htmlFor="mood1">Happy</label>

        <input
          type="radio"
          id="mood2"
          name="mood"
          value="calm"
          checked={selectedMood === 'calm'}
          onChange={handleMoodChange}
          disabled={selectedMood === 'calm'}
        />
        <label htmlFor="mood2">Calm</label>

        <input
          type="radio"
          id="mood3"
          name="mood"
          value="energetic"
          checked={selectedMood === 'energetic'}
          onChange={handleMoodChange}
          disabled={selectedMood === 'energetic'}
        />
        <label htmlFor="mood3">Energetic</label>

        <input
          type="radio"
          id="mood4"
          name="mood"
          value="relaxed"
          checked={selectedMood === 'relaxed'}
          onChange={handleMoodChange}
          disabled={selectedMood === 'relaxed'}
        />
        <label htmlFor="mood4">Relaxed</label>

        <input
          type="radio"
          id="mood5"
          name="mood"
          value="motivated"
          checked={selectedMood === 'motivated'}
          onChange={handleMoodChange}
          disabled={selectedMood === 'motivated'}
        />
        <label htmlFor="mood5">Motivated</label>
      </div>
    </div>
  );
}

export default MoodSetting;
