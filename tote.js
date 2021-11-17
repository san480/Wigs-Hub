import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const TOTE = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/27/P00502723.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://img.mytheresa.com/258/258/33/jpeg/catalog/product/a1/P00502722.jpg",
  },
  
];


export default function Tote() {

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
          <Text style={{fontSize:30,}}>Hourglass Mini leather tote</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Women's handbag</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Monthly Payments Available.</Text>
              <Text style={styles.productdetails}>2 Colors</Text>
              <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$715</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={TOTE}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={8} style={styles.productdetails}>    The design of Balenciaga's Hourglass Mini tote celebrates the house’s archives while remaining undeniably modern. 
          Inspired by Cristóbal Balenciaga’s iconic tailoring, it has a unique concave silhouette made from smooth calfskin, and it’s trimmed with a metallic B monogram charm. 
          You’ll love its versatility: it can be carried crossbody, over the shoulder or in hand.

</Text>
        </View>

        <View style={{margin:10}}>
          <Text style={styles.productdetails}>*  material: leather</Text>
          <Text style={styles.productdetails}>*  internal details: leather lining, centre slot compartment, internal slot pocket</Text>
          <Text style={styles.productdetails}>*  detachable, adjustable shoulder strap</Text>
          <Text style={styles.productdetails}>*  magnetic fastening</Text>
          <Text style={styles.productdetails}>*  comes with dust bag</Text>
          <Text style={styles.productdetails}>*  Designer colour name: White</Text>
          
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