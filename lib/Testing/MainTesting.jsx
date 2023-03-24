import React, { useState } from 'react';
import { View } from 'react-native';
import List from './List';
import SearchBar from './SearchBar';


const DATA = [
  'Apple',
  'Banana',
  'Cherry',
  'Durian',
  'Eggplant',
  'Fig',
  'Grape',
];

const MainTest = () => {
  const [searchText, setSearchText] = useState('');
  const filteredData = DATA.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={{ flex: 1 ,backgroundColor:'black'}}>
      <SearchBar onChangeText={setSearchText} />
      <List data={filteredData} />
    </View>
  );
};

export default MainTest;
