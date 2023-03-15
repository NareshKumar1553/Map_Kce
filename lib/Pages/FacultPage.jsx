import {React,useEffect} from 'react';
import { Text, View,StatusBar,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';


const DepFaculty =({navigation})=>{
    const bgColor = 'white'
     useEffect(()=>{
    StatusBar.setBarStyle( 'dark-content',false)
    StatusBar.setBackgroundColor(bgColor)
  }) 
    return(
        console.log("Department Faculty Page"),
        <View style={{flex:1,backgroundColor:bgColor,alignItems:'center'}}>
            <Text style={{textAlign:'center',color:'black',fontSize:26,fontWeight:'bold'}}>Departments</Text>
            <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('Faculty',{name:'Faculties',pos:'Department of CSE'})}}
            >
                <Text style={styles.BarText}>Computer Science and Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('Faculty',{name:'ECEFaculties',pos:'Department of ECE'})}}
            >
                <Text style={styles.BarText}>Electronics and Communication Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}>
                <Text style={styles.BarText}>Information Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}>
                <Text style={styles.BarText}>Electronics and Electrical Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}>
                <Text style={styles.BarText}>Mechanical Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}>
                <Text style={styles.BarText}>Cyber Security and Computer Science Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}>
                <Text style={styles.BarText}>Computer Science and Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}>
                <Text style={styles.BarText}>Artificial Intelligent and Data Science</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DepFaculty;

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
