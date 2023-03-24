import React, { useState } from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ onChangeText }) => {
  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value);
    onChangeText(value);
  };

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={handleChangeText}
      value={text}
      placeholder="Search"
    />
  );
};

export default SearchBar;
