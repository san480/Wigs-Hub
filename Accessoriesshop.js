import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList, View,TextInput, Image, TouchableOpacity } from 'react-native';

const ACCESSORIES=  [{
  id: "07e3ab81-b7ab-41c9-8f31-6c6813e72823",
  title:"DIOR SEA GARDEN EARRING",
  price: "$520",
  picture:'https://media.dior.com/img/en_us/sku/couture/E1784DSGRS_D301_TU?imwidth=460'
},
{
  id: "ce857dd3-7b74-44fd-84d9-190f0333a831",
  title: "Suzanne chain necklace",
  price: "$250",
  picture:'https://www.apcstore.com/media/catalog/product/cache/258b547aeaf5280ae5496fb71c8c910d/m/e/meacc-f70632raa_02.jpg'
},
{
  id: "a9e72069-93be-446d-8040-004f07a32b62",
  title: "SOFIA HOOPS",
  price: "$85",
  picture:"https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/dzs3xdgbczoiaa066dlp.jpg"
},
{
  id: "de8051ab-d567-400f-aea1-52fa58ecc910",
  title:"Finetrace Pearl Chain",
  price: "$1,125",
  picture:"https://assets.cassandragoad.com/images/product_medium/49553-35714-01-08-001-375-43-07-16-copy.jpg"
},
{
  id: "6bf47533-8f67-4614-b0e2-4c5b8ccce1bc",
  title:"Indira Ruby, Diamond and Pearl Earring Drops",
  price: "$9,043",
  picture:'https://assets.cassandragoad.com/images/product_medium/59044-58870-02-02-324-756-20-05-00-no-hoop-ruby-copy.jpg'
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "Rolex Day-Date 40",
  price: "$750",
  picture:'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m228348rbr-0002.png?imwidth=380'
},
];


export default function Accessoriesshop({navigation}) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.title)}>
    <View style={styles.nikeshoes}>
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
        data={ACCESSORIES}
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