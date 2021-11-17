import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';
import { StyleSheet, Text,TextInput,FlatList, View, Image, TouchableOpacity } from 'react-native';

const PERFUMES=  [{
  id: "1562765403",
  title:"Creed Silver Mountain Water",
  price: "$320",
  picture:"https://cdn.shopify.com/s/files/1/0271/3298/5441/products/1110035_SMW_100ml_600x.jpg?v=1622063759"
},
{
  id: "1545327905",
  title: "Creed Millésime Impérial",
  price: "$245",
  picture:'https://cdn.shopify.com/s/files/1/0271/3298/5441/products/1110033_IMP_100ml_600x.jpg?v=1622063937'
},
{
  id: "11396485742622",
  title: "Miss Dior",
  price: "$115",
  picture:'https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw813bd630/assets/Y0326210/Y0326210_F032624889_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=300'
},
{
  id: "6bf47533-8f67-4614-b0e2-4c5b8ccce1bc",
  title:"DIOR ESCALE À PORTOFINO",
  price: "$115",
  picture:'https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw0306264e/assets/Y0651230/Y0651230_F065125800_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=300'

},
{
  id: "de8051ab-d567-400f-aea1-52fa58ecc910",
  title:"COCO NOIR",
  price: "$210",
  picture:'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/coco-noir-parfum-0-5fl-oz--packshot-default-113630-8833881112606.jpg'
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "GABRIELLE CHANEL",
  price: "$138",
  picture:'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/gabrielle-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-120525-8841593290782.jpg'
},
];


export default function Perfumesshop({navigation}) {
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
        data={PERFUMES}
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