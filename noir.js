import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const NOIR = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/coco-noir-parfum-0-5fl-oz--packshot-default-113630-8833881112606.jpg",
  },
  
];


export default function Noir() {

  const renderItem = ({ item }) => (

    <View>
      <Image 
      resizeMode='contain' 
      style={{height: 350,
              width:450,
              borderRadius:50,
              margin:20}} 
      source={{uri:item.picture}} />
    </View>

  );
  return (
    <View style={styles.container}>

      <ScrollView style={styles.container}>
        <View>
          <Text style={{fontSize:30,}}>COCO NOIR</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Women's Perfume</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Volumes: 50ml, 100ml, 250ml, 500ml</Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (3) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$210</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={NOIR}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={23} style={styles.productdetails}>   THROUGH BLACK... LIGHT REVEALED. Chanel has always entrusted black with an essential role: to highlight a woman. COCO NOIR — an intimate, seductive and intensely brilliant fragrance with luminous notes — celebrates this paradoxical statement by using a deep black to bring a dazzling femininity to light.
          COCO NOIR is presented in a striking, black glass version of the iconic Classic Bottle.
          Designed in 1921, The Classic Bottle is noteworthy for its simplicity and modernity. 
          The chiseled stopper reflects the geometry of Place Vendôme, which Gabrielle Chanel could view from her room at the Ritz in Paris.
          Since then, Chanel has practiced the art of baudruchage to seal bottles of Parfum. 
          Carried out by hand, it consists of covering the neck of the bottle with a fine membrane, which is held in place by a strand of pearl-cotton thread, then sealed with a black wax stamp.


</Text>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={{
          alignItems:'center',
          paddingHorizontal:100,
          backgroundColor:'black',
          padding:20,
          borderRadius:30}}>
          <Text style={{fontSize:20,color:'white'}}>Add to Cart <Zocial name="cart" size={24} color="white" /></Text>

        </View>
      </TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    padding:5
  },
  productdetails: {
    fontSize:15,
    color: 'grey'
  }
});