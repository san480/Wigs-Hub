import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const CHANEL = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/gabrielle-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-120525-8848260497438.jpg",
  },
  
];


export default function Chanel() {

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
          <Text style={{fontSize:30,}}>GABRIELLE CHANEL</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Women's Perfume</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Volumes: 50ml, 100ml, 250ml, 500ml</Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (66) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="grey"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$138</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={CHANEL}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={20} style={styles.productdetails}>    Before creating the House of Chanel, Coco was Gabrielle. A rebel at heart...passionate and free. 
          The inspiration for the luminous floral fragrance: GABRIELLE CHANEL.
          The fragrance appears to be suspended weightlessly within the striking, square bottle crafted of ultra-thin glass, as the four transparent sides fade into the background to let the light shine through. 
          The label and the stopper have the same shape and indefinable lamé colour, 
          a delicate balance between gold and silver, and the interior is warmed with an even more resplendent gold. 
Nestled in an imprint of its silhouette, the bottle is carefully protected by a precious interior sleeve.


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