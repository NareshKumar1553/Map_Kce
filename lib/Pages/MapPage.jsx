import React, { Component } from 'react';
import {SafeAreaView,Image,Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const MainPage =( {navigation} ) =>{
    //const [search,setSearch] = React.useState('');
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
                 <TouchableOpacity 
                 onPress={()=>{navigation.navigate('Tabs')}}
                 style={{backgroundColor:'white',width:50,height:50,borderRadius:50}}>
                  <Text>Hai</Text>
                  </TouchableOpacity>
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