import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View, Image, TouchableOpacity } from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
     <View style ={styles.cagtegory}>
         <TouchableOpacity onPress={() => navigation.navigate('Bags')}>
         <View style={{alignItems:'center'}}>
             <Image style={{width:190,height:250,borderRadius:20,margin:3}} resizeMode='cover' source={{uri:'https://raw.githubusercontent.com/san480/Wigs-Hub/main/bagss2.jpg'}}/>
             <Text style={{fontSize:20}}>Bags</Text>
         </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Accessories')}>
         <View style={{alignItems:'center'}}>
             <Image style={{width:190,height:250,borderRadius:20,margin:3}} resizeMode='cover' source={{uri:'https://raw.githubusercontent.com/san480/Wigs-Hub/main/accessories%201.jpg'}}/>
             <Text style={{fontSize:20}}>Accessories</Text>
         </View>
         </TouchableOpacity>

     </View>

     <View style ={styles.cagtegory}>

         <TouchableOpacity onPress={() => navigation.navigate('Makeup kits')}>
            <View style={{alignItems:'center'}}>
                <Image style={{width:190,height:250,borderRadius:20,margin:3}} resizeMode='cover' source={{uri:'https://raw.githubusercontent.com/san480/Wigs-Hub/main/makeupkit1.jpg'}}/>
                <Text style={{fontSize:20}}>Makeup kits</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Perfumes')}>
            <View style={{alignItems:'center'}}>
                <Image style={{width:190,height:250,borderRadius:20,margin:3}} resizeMode='cover' source={{uri:'https://raw.githubusercontent.com/san480/Wigs-Hub/main/perfumes1.jpg'}}/>
                <Text style={{fontSize:20}}>Perfumes</Text>        
            </View>
         </TouchableOpacity>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  cagtegory:{
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop:20 

  }
});