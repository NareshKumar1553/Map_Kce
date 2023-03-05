import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image, ImageBackground } from "react-native";
const TestPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent:'center',alignItems:'center',flexDirection: 'column', backgroundColor: '#ffffff' }}>
            
             {/*<Text style={{ flex: 0, fontSize: 42, textAlign: 'center', fontFamily: 'Times', color: "#63e0de", paddingLeft: 15, fontWeight: 'bold' }}>Name...</Text> */}
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity activeOpacity={0.75} style={sty.TopRight} onPress={() => navigation.push('Product')}>
            
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('Service')} style={sty.TopLeft}>
                       
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={sty.BottomLeft} onPress={()=>{navigation.push('Gov')}}>
                     
                    
                </TouchableOpacity>
                <TouchableOpacity style={sty.BottomRight} onPress={()=>{navigation.push('Edu')}}>
                </TouchableOpacity>
            </View>
        </View>
    );


}
const sty = StyleSheet.create({
    image: {
        flex: 1
    },
    PadImage: {
        height: 100,
        width: 100,
    },
    fullview: {
        flex: 1,
        backgroundColor: 'white',
    },
    TopLeft: {
        justifyContent: 'space-evenly',
        margin: 5,
        backgroundColor: '#7424ff',
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        height: 120,
        width: 100,

    },
    TopRight: {
        justifyContent: 'space-evenly',
        margin: 5,
        height: 120,
        width: 100,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: '#54d8f0',
    },
    BottomRight: {
        justifyContent: 'space-evenly',
        margin: 5,
        height: 120,
        width: 100,
        backgroundColor: '#86ff6e',
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,

    },
    BottomLeft: {
        justifyContent: 'space-evenly',
        margin: 5,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#fab300',
        height: 120,
        width: 100,
    },
    second: {
        flex: 1,
        height: 500,
        width: 400,
        backgroundColor: 'red',
    },
    itemText: {
        fontFamily: "RobotoCondensed-Bold",
        fontSize: 42,
        color: "black"
    },
    backImageTR: {
        margin: 2,
        height: 170,
        width: 170,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
})
export default TestPage;