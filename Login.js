import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text,TextInput,Image, View, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => console.log('clicked')}>
      <Image style={{height:170}} source={require("./assets/welcome.png")}/>

      </TouchableHighlight>

        

      <View style={{marginTop:15,alignContent:'flex-end'}}>
        <Text style ={{fontSize: 18}}>username or email</Text>
      </View>
      <View style={{        
        borderRadius: 28,
        backgroundColor:"#f2f5f4"}}>
        <TextInput style={{
          padding: 20,
          width:370
        }}
        placeholder="username or email"
        />
      </View>
      <View style={{alignItems:'flex-start',marginTop:15}}>
        <Text style ={{fontSize: 18}}>password</Text>
      </View>
      <View style={{        
        borderRadius: 28,
        backgroundColor:"#f2f5f4"}}>
        <TextInput style={{
          padding: 20,
          width:370
        }}
        placeholder="password"
        secureTextEntry= {true}
        />
      </View>
      
      <View style={{width:370, marginTop:20}}>
        <Button
        onPress={()=>navigation.navigate('Home')}
        color='#000'
        title ='sign in'/>
      </View>
      <StatusBar style="auto" />
    </View>
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