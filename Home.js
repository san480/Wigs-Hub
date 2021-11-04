import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View, Image } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
     <View style={{flexDirection:'row',alignContent:'space between'}}>
      <View>
        <Image style={{height:200, width:300, marginRight:20}} source={require('./assets/bagss2.jpg')}/>
        <Text style={{fontSize:30}}>Bags</Text>
      </View>
      <View>
        <Image style={{height:200, width:300}} source={require('./assets/accessories 1.jpg')}/>
        <Text style={{fontSize:30}}>Accessories</Text>
      </View>
    </View> 
     <View style={{flexDirection:'row',alignContent:'space between'}}>
      <View>
        <Image style={{height:200, width:300, marginRight:20}} source={require('./assets/makeupkit1.jpg')}/>
        <Text style={{fontSize:30}}>Makeupkits</Text>
      </View>
      <View>
        <Image style={{height:200, width:300}} source={require('./assets/perfumes1.jpg')}/>
        <Text style={{fontSize:30}}>Perfumes</Text>
      </View>
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