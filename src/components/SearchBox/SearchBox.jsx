import { useState } from 'react';

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
    <div>
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
