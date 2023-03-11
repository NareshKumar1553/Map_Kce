import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { TextInput } from 'react-native-gesture-handler';
function AddData({navigation}){
const [name, setName] = useState("");
const [block, setBlock] = useState("");
const [loc, setLoc] = useState("");
const [InchargeName, setInchargeName] = useState("");
const [dep, setDep] = useState("");
const [image, setImage] = useState("");
    return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:"black",fontWeight:'bold',fontSize:20}}>Enter the Data to Add</Text>
        <TextInput placeholder='Enter the Block' style={{color:'black'}} onChangeText={(block) => setBlock(block)}>Enter the Block</TextInput>
        <TextInput placeholder='Enter the Lab Name' style={{color:'black'}} onChangeText={(name) => setName(name)}>Enter the Lab Name</TextInput>
        <TextInput placeholder='Enter the Location 'style={{color:'black'}} onChangeText={(loc) => setLoc(loc)}>Enter the Location</TextInput>
        <TextInput placeholder='Enter the Incharge Name' style={{color:'black'}} onChangeText={(InName) => setInchargeName(InName)}>Enter the Incharge Name</TextInput>
        <TextInput placeholder='Enter the Lab Department' style={{color:'black'}} onChangeText={(dep) => setDep(dep)}>Enter the Lab Department</TextInput>
        <TextInput placeholder='Enter the Image Link ' style={{color:'black'}} onChangeText={(img) => setImage(img)}>Enter the Image Link</TextInput>
        <Button title="Submit" onPress={() => DataSet(block,name,loc,InchargeName,dep,image)}/>
    </View>
);

    }
function DataSet(block,name,loc,InchargeName,dep,image) {
    if(name!="" || block!="" || loc!="" ||dep!="" || InchargeName !=""){
    const subscriber = firestore()
            .collection(block)
            .add({
                name: name,
                location: loc,
                InchargeName: InchargeName,
                Department:dep,
                image:image,
            })
            .then(() => {navigation.push("Success")})
            .then(() => console.log('Data updated.'))
            .then(() => alert("Data Added Successfully...")
            );
        }
        else{
            alert("Enter the Data...");
        }
    }

export default AddData;
