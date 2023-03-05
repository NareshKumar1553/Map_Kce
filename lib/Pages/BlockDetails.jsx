import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';

export default class BlockDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.route.params.user.name,
        loc : this.props.route.params.user.location,
        dep : this.props.route.params.user.Department,
        InchargeName : this.props.route.params.user.InchargeName,
    };
  }
  render() {
    const {name} = this.state;
    const {loc} = this.state;
    const {dep} = this.state;
    const {InchargeName} = this.state;
    return (
        <View style={{backgroundColor:'white',flex:1}}>
        <Image source={{uri: "https://www.bollywoodbiography.in/wp-content/uploads/2022/05/sayyeshaa-saigal.jpg"}} 
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
        <Text style={styles.container}>{InchargeName}</Text>
        <View style={{}}>
        <TouchableOpacity style={{backgroundColor:'black',padding:10,margin:10,borderRadius:10}} onPress={() => Linking.openURL('https://www.example.com')}>
            <Text style={{color:'white',textAlign:'center',fontSize:18}}>Navigate Me </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    );
  }
}
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
