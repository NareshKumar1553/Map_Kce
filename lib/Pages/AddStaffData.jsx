import React from "react";
import { useEffect,useState } from "react";
import { View,Text,Button} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { TextInput } from 'react-native-gesture-handler';

const AddStaffData = () => {
    const [deg,setDeg] = useState("");
    const degs = ["ASP","HOD","PROF","AP","ASSI","TUT","LAB","LIB","SEC","REG","COUN","DEAN","PRINC","OTHERS"];
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [dep, setDep] = useState("");
        const [LI, setLI] = useState("");
        const [image, setImage] = useState("");
    return (
        <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:"white",fontWeight:'bold',fontSize:20}}>Enter the Data to Add</Text>
        <TextInput placeholder='Enter the Name' onChangeText={(name) => setName(name)}></TextInput>
        <TextInput placeholder='Enter the Email ' onChangeText={(InName) => setEmail(InName)}></TextInput>
        <TextInput placeholder='Enter the Department' onChangeText={(dep) => setDep(dep)}></TextInput>
        <TextInput placeholder='Enter the LinkedIn Id' onChangeText={(ll) => setLI(ll)}></TextInput>
        <TextInput placeholder='Enter the Image Link ' onChangeText={(img) => setImage(img)}></TextInput>
            <SelectDropdown
            data={degs}
            onSelect={(selectedItem, index) => {
                setDeg(selectedItem);
            }}
            buttonStyle={{width:200,backgroundColor:'white',borderRadius:10,marginBottom:20}}
            buttonTextStyle={{color:'black',fontSize:18}}
            renderDropdownIcon={() => {
                return (
                    <View style={{width:20,height:20,backgroundColor:'black',borderRadius:10}}/>
                )
            }}
            dropdownIconPosition={"right"}
            rowTextForSelection={(item, index) => {
                return item;
            }}
            defaultButtonText={"Select Designation"}
            />
             <Button title="Submit" onPress={() => DataSet(name,dep,email,deg,image,LI)}/>
        </View>
        
    );
}
export default AddStaffData;

function DataSet(name,dep,email,deg,image,LI) {
    let img,Linked;
    if(image=="" || image==null){
        img = "https://github.com/pavanpk811/KCE_Map/raw/main/Error.png";
    }
    else{
        img = image;
    }
    if(LI=="" || LI==null){
        Linked = "https://www.linkedin.com/school/wekceians/";
    }
    else{
        Linked = LI;
    }
    if(name!="" && deg !="" && dep!="" && email!=""){
    const subscriber = firestore()
            .collection("Faculties")
            .add({
                name: name,
                deg: deg,
                Department:dep,
                email:email,
                image : img,
                LinkedIn : Linked
            })
            .then(() => console.log('Data updated.'))
            .then(() => alert("Data Added Successfully...")
            );
        }
        else{
            alert("Enter the Data...");
        }
    }


