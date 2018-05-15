import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import {Header} from './src/components/commen';


export default class App extends React.Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDeU-1I62XhzU8xwuuNxDjX0wxF4RiHWw8',
            authDomain: 'auth-d4cbc.firebaseapp.com',
            databaseURL: 'https://auth-d4cbc.firebaseio.com',
            projectId: 'auth-d4cbc',
            storageBucket: 'auth-d4cbc.appspot.com',
            messagingSenderId: '834195931721'
          });  
    }
  render() {
    return (
      <View style={styles.container}>
       <Header headerText="Authentication" />
       <Text>Sandhani</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
