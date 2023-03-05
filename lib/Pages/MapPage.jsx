import React, { useEffect } from 'react';
import {SafeAreaView,Image,Text, StyleSheet, TouchableOpacity, View, ImageBackground} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {StatusBar} from 'react-native';
const MainPage=({navigation})=> {
     useEffect(()=>{
      StatusBar.setBarStyle( 'light-content',true)
      StatusBar.setBackgroundColor('black')
    }) 
    
    return (
        <SafeAreaView style={{flex: 1}}>
         
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            
            mapType='satellite'
            //zoomEnabled={true}
            initialRegion={{
                latitude: 10.8801,
                longitude: 77.0224,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            customMapStyle={mapStyle}>
                <Marker coordinate={{
                latitude: 10.8801,
                longitude: 77.0224,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }} 
            title="KCE" description="Karpagam College of Engineering" ></Marker>
                 </MapView>
            <View 
            style={{
              justifyContent:'space-between',
              backgroundColor:'white',
              alignItems:'center',
              flex:0.095,
              flexDirection:'row',
              width:'100%',
              borderTopLeftRadius:30,
              borderTopRightRadius:30
              }}>
                 <TouchableOpacity 
                 onPress={()=>{navigation.push('List')}}
                 style={{justifyContent:'center',marginLeft:40,marginRight:10}}>
                  <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/010/157/862/original/house-and-home-icon-symbol-sign-free-png.png'}} style={{width:30,height:30,borderRadius:30}}/>
                  <Text style={{color:'black',fontSize:12}}> Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                 onPress={()=>{navigation.push('List')}}
                 style={{justifyContent:'center',marginLeft:10,marginRight:10}}>
                  <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/010/157/862/original/house-and-home-icon-symbol-sign-free-png.png'}} style={{width:30,height:30,borderRadius:30}}/>
                  <Text style={{color:'black',fontSize:12,textAlign:'center'}}>All Block</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                 onPress={()=>{navigation.push('Faculty')}}
                 style={{justifyContent:'center',marginLeft:10,marginRight:50}}>
                  <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/010/157/862/original/house-and-home-icon-symbol-sign-free-png.png'}} style={{width:30,height:30,borderRadius:30}}/>
                  <Text style={{color:'black',fontSize:12}}>Faculty</Text>
                  </TouchableOpacity>
            </View>
      </View>
      
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
  ];

export default MainPage;