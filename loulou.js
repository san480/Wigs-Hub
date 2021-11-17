import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const LOULOU = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://img.mytheresa.com/258/258/33/jpeg/catalog/product/8d/P00596013.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://img.mytheresa.com/258/258/33/jpeg/catalog/product/8d/P00596013_b1.jpg",
  },
  
];


export default function Loulou() {

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
          <Text style={{fontSize:30,}}>Loulou Small leather shoulder bag</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Women's handbag</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Monthly Payments Available.</Text>
              <Text style={styles.productdetails}>2 Colors</Text>
              <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$1,555</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={LOULOU}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={8} style={styles.productdetails}>    Bring Parisian panache to any look with one of Saint Laurent’s best-loved bags: the Loulou Small, presented here in nut brown. 
          No attention to detail is spared in the making of this style classic: 
          unique tanning and treatment processes are used to give the leather a soft feel, and a specially designed foam is added to create soft quilting.

</Text>
        </View>

        <View style={{margin:10}}>
          <Text style={styles.productdetails}>*  material: calf leather</Text>
          <Text style={styles.productdetails}>*  internal details: fabric lining, two internal compartments, internal zipped pocket, internal slot pocket</Text>
          <Text style={styles.productdetails}>*  colour of fastening: gold</Text>
          <Text style={styles.productdetails}>*  chain and leather shoulder strap</Text>
          <Text style={styles.productdetails}>*  magnetic-tab fastening</Text>
          <Text style={styles.productdetails}>*  Made in Italy</Text>
          <Text style={styles.productdetails}>*  comes with dust bag</Text>
          <Text style={styles.productdetails}>*  Height 18cm-7"</Text>
          <Text style={styles.productdetails}>*  Width 25cm-10"</Text>
          <Text style={styles.productdetails}>*  Depth 9cm-3.5"</Text>
          
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