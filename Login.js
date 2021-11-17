import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text,TextInput,Image, View, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';

export default function Login({navigation}) {
  return (

    <ImageBackground
      style={styles.container}
      source={{uri:'https://raw.githubusercontent.com/san480/Wigs-Hub/main/background.jpg'}}>



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

<TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
<View style={{margin:30}}>
  <Text style={{color:'blue',fontSize:20}}> SIGN UP NOW!! </Text>
</View>
</TouchableOpacity>
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