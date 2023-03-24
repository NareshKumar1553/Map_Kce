import React from 'react';
import { FlatList, Text } from 'react-native';

const List = ({ data }) => {
  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

export default List;
