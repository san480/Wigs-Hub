import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList, View,TextInput, Image, TouchableOpacity } from 'react-native';

const MAKEUPKITS=  [{
  id: "07e3ab81-b7ab-41c9-8f31-6c6813e72823",
  title:"LES PINCEAUX DE CHANEL",
  price: "$60",
  picture:'https://www.chanel.com/images//t_one//w_0.55,h_0.55,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/les-pinceaux-de-chanel-retractable-kabuki-brush-n-108-1pce-packshot-default-138861-8825969704990.jpg'
},
{
  id: "ce857dd3-7b74-44fd-84d9-190f0333a831",
  title: "ROUGE ALLURE",
  price: "$45",
  picture:'https://www.chanel.com/images//t_one//w_0.38,h_0.38,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/rouge-allure-limited-edition-luminous-intense-lip-colour-99-pirate-0-12oz--packshot-default-151167-8846287175710.jpg'
},
{
  id: "a9e72069-93be-446d-8040-004f07a32b62",
  title: "Eyeshadow LES 4 OMBRES",
  price: "$65",
  picture:'https://www.chanel.com/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/les-4-ombres-multi-effect-quadra-eyeshadow-334-modern-glamour-0-07oz--packshot-default-164334-8819563626526.jpg'
},
{
  id: "de8051ab-d567-400f-aea1-52fa58ecc910",
  title:"Foundation Les Beiges",
  price: "$60",
  picture:'https://www.chanel.com/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/les-beiges-healthy-glow-foundation-hydration-and-longwear-b20-1fl-oz--packshot-default-184724-8830483202078.jpg'
},
{
  id: "6bf47533-8f67-4614-b0e2-4c5b8ccce1bc",
  title:"Blush Powder PERLES DE LUMIÈRE",
  price: "$70",
  picture:'https://www.chanel.com/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/perles-de-lumiere-illuminating-blush-powder-0-28oz--packshot-default-151547-8838252265502.jpg'
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "ROUGE COCO GLOSS",
  price: "$32",
  picture:'https://www.chanel.com/images//t_one//w_0.45,h_0.45,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/rouge-coco-gloss-moisturizing-glossimer-728-rose-pulpe-0-19oz--packshot-default-156728-8800036782110.jpg'
},
];


export default function Makeupshop({navigation}) {
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
        data={MAKEUPKITS}
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