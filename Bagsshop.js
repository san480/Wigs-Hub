import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View, Image } from 'react-native';

const BAGS=  [{
  id: "07e3ab81-b7ab-41c9-8f31-6c6813e72823",
  title:"GG Marmont medium tote bag",
  price: "$150",
  picture:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1630395005/675796_UM8BN_1711_001_073_0000_Light-GG-Marmont-medium-tote-bag.jpg'
},
{
  id: "ce857dd3-7b74-44fd-84d9-190f0333a831",
  title: "Loulou Small leather shoulder bag",
  price: "$125",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8d/P00596013.jpg'
},
{
  id: "a9e72069-93be-446d-8040-004f07a32b62",
  title: "Ghost Small leather shoulder bag",
  price: "$100",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5a/P00480613.jpg'
},
{
  id: "de8051ab-d567-400f-aea1-52fa58ecc910",
  title:"Rachel Mini leather shoulder bag",
  price: "$159",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/47/P00472827.jpg'
},
{
  id: "6bf47533-8f67-4614-b0e2-4c5b8ccce1bc",
  title:"Anagram Small leather tote",
  price: "$170",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/35/P00522826.jpg'
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "Chain Pouch leather shoulder bag",
  price: "$220",
  picture:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3c/P00556638.jpg'
},
];

const renderItem = ({ item }) => (
  <View style={styles.nikeshoes}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
  </View>
);

export default function Bagsshop() {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nikeshoes: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});