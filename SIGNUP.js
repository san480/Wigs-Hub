import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function signup({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textview}>
          <Text style={styles.text}>Full Name</Text>
      </View>
      <View>
          <TextInput style={styles.inputstyle}/>
      </View>
      <View style={styles.textview}>
          <Text style={styles.text}>Email</Text>
      </View>
      <View>
          <TextInput style={styles.inputstyle}/>
      </View>
      <View style={styles.textview}>
          <Text style={styles.text}>Date of Birth</Text>
      </View>
      <View>
          <TextInput style={styles.inputstyle}/>
      </View>
      <View style={styles.textview}>
          <Text style={styles.text}>Password</Text>
      </View>
      <View>
          <TextInput style={styles.inputstyle} secureTextEntry= {true}/>
      </View>
      <View style={styles.textview}>
          <Text style={styles.text}>Confirm Password</Text>
      </View>
      <View>
          <TextInput style={styles.inputstyle} secureTextEntry= {true}/>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={{
          backgroundColor:'black',
          padding:20,
          borderRadius:30,
          marginTop:40,
          margin:10,
          alignItems:'center'}}>
          <Text style={{color:'white'}}>SIGN UP</Text>
      </View>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  inputstyle:{
    backgroundColor: '#e8e9eb',
    borderRadius: 20,
    padding:15,
    marginLeft:8,
    width: 370

  },
  textview:{
      margin:15

  },
  text:{
      fontSize:15

  }
});