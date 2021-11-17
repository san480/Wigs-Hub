import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const GHOST = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://img.mytheresa.com/258/258/33/jpeg/catalog/product/5a/P00480613.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://img.mytheresa.com/258/258/33/jpeg/catalog/product/5a/P00480613_b1.jpg",
  },
  
];


export default function Ghost() {

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
          <Text style={{fontSize:30,}}>Ghost Small leather shoulder bag</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Women's handbag</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Monthly Payments Available.</Text>
              <Text style={styles.productdetails}>2 Colors</Text>
              <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$865</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={GHOST}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={8} style={styles.productdetails}>    The Ghost shoulder bag from Balenciaga is the ultimate stealth-style investment. 
          Made in Italy from luxe croc-embossed leather, it features gold-toned hardware and a belt-inspired strap.
           You'll be able to wear it with anything in this timeless black colorway.
</Text>
        </View>

        <View style={{margin:10}}>
          <Text style={styles.productdetails}>*  material: leather</Text>
          <Text style={styles.productdetails}>*  internal details: leather lining, internal zipped pocket</Text>
          <Text style={styles.productdetails}>*  adjustable shoulder strap</Text>
          <Text style={styles.productdetails}>*  push lock fastening</Text>
          <Text style={styles.productdetails}>*  comes with dust bag</Text>
          <Text style={styles.productdetails}>*  back slot pocket</Text>
          <Text style={styles.productdetails}>*  Designer colour name: Black</Text>
          <Text style={styles.productdetails}>*  Made in Italy</Text>
          
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