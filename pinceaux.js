import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const PINCEAUX = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.chanel.com/images//t_one//w_0.55,h_0.55,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/les-pinceaux-de-chanel-retractable-kabuki-brush-n-108-1pce-packshot-default-138861-8825969704990.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://www.chanel.com/images//t_one/t_fnbedito//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/les-pinceaux-de-chanel-retractable-kabuki-brush-n-108-1pce-packshot-alternative-v1-138861-8846894891038.jpg",
  },
  
];


export default function Pinceaux() {

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
          <Text style={{fontSize:30,}}>MISS DIOR</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>RETRACTABLE POWDER BRUSH</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (34) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="grey"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$60</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={PINCEAUX}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={15} style={styles.productdetails}>    LES PINCEAUX DE CHANEL brushes give everyone access to makeup artist techniques. Their simple yet functional design makes this a collection of desirable on-the-go accessories. 
          Featuring a selection of synthetic bristles as soft as they are resilient, protected by a black lacquered case, they elegantly stand the test of time.
Protected by a cap, the on-the-go RETRACTABLE KABUKI BRUSH is specially designed for expert powder application. Its round shape and velvety feel make it the perfect tool for an ultra-natural makeup result.
In its retractable format, it is easy to slip into a handbag for touch-ups during the day.


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