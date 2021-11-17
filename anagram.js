import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const ANAGRAM = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://img.mytheresa.com/258/258/33/jpeg/catalog/product/35/P00522826.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://img.mytheresa.com/258/258/33/jpeg/catalog/product/35/P00522826_b1.jpg",
  },
  
];


export default function Anagram() {

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
          <Text style={{fontSize:30,}}>Anagram Small leather tote</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Women's handbag</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Monthly Payments Available.</Text>
              <Text style={styles.productdetails}>2 Colors</Text>
              <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$1,470</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={ANAGRAM}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={8} style={styles.productdetails}>    Invest in versatility with this brown tote bag from LOEWE. 
          Made in Spain from calf leather, this roomy style hangs from two sets of varyingly long handles, meaning it can also be slung over the shoulder, and is subtly debossed with the house's Anagram logo on the front.
</Text>
        </View>

        <View style={{margin:10}}>
          <Text style={styles.productdetails}>*  material: calf leather</Text>
          <Text style={styles.productdetails}>*  internal details: suede lining, internal slot pockets</Text>
          <Text style={styles.productdetails}>*  Made in Spain</Text>
          <Text style={styles.productdetails}>*  comes with dust bag</Text>
          <Text style={styles.productdetails}>*  top handles</Text>
          
          
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