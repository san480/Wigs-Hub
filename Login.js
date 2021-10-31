import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text,TextInput,Image, View, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';

export default function Login({navigation}) {
  return (

    <ImageBackground
      style={styles.container}
      resizeMode = "contain"
      source={require('./assets/background.jpg')}>



<View style={{        
  borderRadius: 28,
  backgroundColor:"#f2f5f4"}}>
  <TextInput style={{
    padding: 20,
    width:370,
    
  }}
  placeholder="username or email"
  />
</View>
<View style={{        
  borderRadius: 28,
  marginTop:35,
  backgroundColor:"#f2f5f4"}}>
  <TextInput style={{
    padding: 20,
    width:370
  }}
  placeholder="password"
  secureTextEntry= {true}
  />
</View>

<View style={{width:370, marginTop:35}}>
  <Button
  onPress={()=>navigation.navigate('Home')}
  color='#000'
  title ='sign in'/>
</View>
<StatusBar style="auto" />
    </ImageBackground> 


   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});