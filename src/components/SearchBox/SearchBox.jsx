import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('please write some thing');
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
