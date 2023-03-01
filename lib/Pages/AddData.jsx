import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { TextInput } from 'react-native-gesture-handler';
function AddData(){
const [name, setName] = useState("");
const [block, setBlock] = useState("");
const [loc, setLoc] = useState("");
const [InchargeName, setInchargeName] = useState("");
const [dep, setDep] = useState("");
    return (
    <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:"white",fontWeight:'bold',fontSize:20}}>Enter the Data to Add</Text>
        <TextInput placeholder='Enter the Block' onChangeText={(block) => setBlock(block)}></TextInput>
        <TextInput placeholder='Enter the Lab Name' onChangeText={(name) => setName(name)}></TextInput>
        <TextInput placeholder='Enter the Location 'onChangeText={(loc) => setLoc(loc)}></TextInput>
        <TextInput placeholder='Enter the Incharge Name' onChangeText={(InName) => setInchargeName(InName)}></TextInput>
        <TextInput placeholder='Enter the Lab Department' onChangeText={(dep) => setDep(dep)}></TextInput>
        <Button title="Submit" onPress={() => DataSet(block,name,loc,InchargeName,dep)}/>
    </View>
);

    }
function DataSet(block,name,loc,InchargeName,dep) {
    if(name!="" || block!="" || loc!="" ||dep!="" || InchargeName !=""){
    const subscriber = firestore()
            .collection(block)
            .add({
                name: name,
                location: loc,
                InchargeName: InchargeName,
                Department:dep
            })
            .then(() => console.log('Data updated.'))
            .then(() => alert("Data Added Successfully...")
            );
        }
        else{
            alert("Enter the Data...");
        }
    }

export default AddData;
