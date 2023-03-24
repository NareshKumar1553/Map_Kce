import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image,ScrollView,StatusBar,StyleSheet } from 'react-native';
import Anim from '../Pages/Animation';
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
    'hai'
  ];
function SearchPage({ navigation,route }) {
    //let bgColor = '#faeecd'
    let bannerColor = 'white'
    const bgColor = 'white'
     useEffect(()=>{
    StatusBar.setBarStyle( 'dark-content',false)
    StatusBar.setBackgroundColor(bgColor)
  }) 
    var img = [];
   
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Faculty')
            .get()
            .then(querySnapshot => {
                console.log('Total Data: ', querySnapshot.size);
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                   // console.log(documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setUsers(users);
                setLoading(false);
            });
        return () => subscriber
    }, []);

    if (loading) {
        return <Anim/>;
    }
    users.map(user => {
        img.push(
            user.name
        )
    });
    const [searchText, setSearchText] = useState('');
    const filteredData = DATA.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );
    return(
        console.log("Search Bar"),
        <View style={{ flex: 1 ,backgroundColor:'black'}}>
      <SearchBar onChangeText={setSearchText} />
      <List data={filteredData} />
    </View>
    );
}

export default SearchPage;

const styles = StyleSheet.create({
    Bar:{
        backgroundColor:'#ddebe1',
        height:70,
        width:350,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        elevation:5,
        marginBottom:10,
        borderRadius:10,
        marginTop:15,
    },
    BarText:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
});
