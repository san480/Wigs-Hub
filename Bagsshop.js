import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList, View, Image,TextInput, TouchableOpacity } from 'react-native';

const BAGS=  [{
  id: "07e3ab81-b7ab-41c9-8f31-6c6813e72823",
  title:"Hourglass Mini leather tote",
  price: "$715",
  picture:'https://img.mytheresa.com/258/258/33/jpeg/catalog/product/a1/P00502722.jpg'
},
{
  id: "ce857dd3-7b74-44fd-84d9-190f0333a831",
  title: "Loulou Small leather shoulder bag",
  price: "$1,555",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8d/P00596013.jpg'
},
{
  id: "a9e72069-93be-446d-8040-004f07a32b62",
  title: "Ghost Small leather shoulder bag",
  price: "$856",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5a/P00480613.jpg'
},
{
  id: "de8051ab-d567-400f-aea1-52fa58ecc910",
  title:"Rachel Mini leather shoulder bag",
  price: "$245",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/47/P00472827.jpg'
},
{
  id: "6bf47533-8f67-4614-b0e2-4c5b8ccce1bc",
  title:"Anagram Small leather tote",
  price: "$1,470",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/35/P00522826.jpg'
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "Chain Pouch leather shoulder bag",
  price: "$2,439",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3c/P00556638.jpg'
},
];


export default function Bagsshop({navigation}) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() =>navigation.navigate(item.title)}>
    <View style={styles.categories}>
      <Image resizeMode='contain' style={{height:300,width:400,borderRadius:20,}} source={{uri:item.picture}}/>
      <Text style={styles.itemstyle}>{item.title}</Text>
      <Text>{item.price}</Text>
    </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection:'row',
        backgroundColor:'#e8e9eb',
        justifyContent: 'space-between',
        margin: 5,
        padding:20,
        borderRadius:30,
        width:350}}>
          <AntDesign name="search1" size={24} color="black" />     
          <TextInput style={{color:'black',width:250}} placeholder='Search here'/>
          <TouchableOpacity>        
            <Feather name="menu" size={24} color="black" />       
          </TouchableOpacity>
        </View>
      <FlatList
        data={BAGS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categories: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});
