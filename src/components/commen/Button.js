import React from 'react';
import  { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) =>{
    const { buttonStyle, textStyle } = styles;
    return(
        <TouchableOpacity  style = {buttonStyle} >
            <Text onPress={onPress} style = {textStyle}>
              { children}
            </Text>
        </TouchableOpacity >
    );
};

const styles ={
    textStyle:{
        alignSelf:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'900',
        padding: 10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#ffcc00',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ffcc00',
        marginLeft:5,
        marginRight:5
    }
}


export  { Button };