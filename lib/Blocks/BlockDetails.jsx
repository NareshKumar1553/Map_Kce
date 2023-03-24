import React, { useEffect } from 'react';
import { View, Text,StyleSheet,Image,ScrollView,TouchableOpacity,Linking,StatusBar} from 'react-native';
import openMap from 'react-native-open-maps';
const BlockDetails = ({navigation,route}) => {
  useEffect(()=>{
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor('#78756e')
  }) 
    const { location } = route.params.user;
    const {name,loc,dep,InchargeName,image} = route.params.user;
    const lon = toArray(location);
    const Longitude = lon[0];
    const Latitude = {lon}.lon[1];
    let InChargeNameUpdate,imageUpdate;
    if(InchargeName == null || InchargeName == ""){
      InChargeNameUpdate = "Not Available"
    }
    else{
      InChargeNameUpdate = InchargeName
    }
    if(image == null || image == ""){
      imageUpdate = "https://github.com/pavanpk811/KCE_Map/raw/main/others.png"
    }
    else{
      imageUpdate = image
    }
    return (
      console.log({image}),
        <View style={{backgroundColor:'white',flex:1}}>
        <Image source={{uri:imageUpdate}} 
        style={{width:'100%',height:250}}/>
        <ScrollView>
        <Text style={{justifyContent:'center',alignItems:'center',paddingTop:10,fontWeight:'bold',textAlign:'center',fontSize:24,color:'black'}}> {name} </Text>
        <Text style={styles.title}>Lab name </Text>
        <Text style={styles.container}>{name}</Text>
        <Text style={styles.title}>Location : </Text>
        <Text style={styles.container}>{loc}</Text>
        <Text style={styles.title}>Department : </Text>
        <Text style={styles.container}>{dep}</Text>
        <Text style={styles.title}>In Charge Name : </Text>
        <Text style={styles.container}>{InChargeNameUpdate}</Text>
        <Text style={styles.title}>Location : </Text>
        <Text style={styles.container}>Longitude :{Longitude} Latitude:{Latitude}</Text>
        <View style={{}}>
        <TouchableOpacity style={{backgroundColor:'black',padding:10,margin:10,borderRadius:10}} onPress={() => Linking.openURL('geo://app?saddr'+{Latitude}+{Longitude}+'&daddr=10.8801+77.0224')}>
            <Text style={{color:'white',textAlign:'center',fontSize:18}}>Navigate Me </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    );
  }
export default BlockDetails;
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 10,
        marginLeft:15,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        fontSize:18,
        marginLeft:15,
        marginRight:15,
        paddingTop:10,

    }
});
function Open() {
  openMap({ latitude: 37.865101, longitude: -119.538330 });
}
function toArray(obj) {
  const result = [];
  for (const prop in obj) {
      const value = obj[prop];
      if (typeof value === 'object') {
          result.push(toArray(value)); // <- recursive call
      }
      else {
          result.push(value);
      }
  }
  return result;
}