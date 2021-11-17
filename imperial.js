import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const IMPERIAL = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.creedfragrances.co.uk/tco-images/unsafe/1154x866/filters:upscale():fill(white)/https://www.creedfragrances.co.uk/static/uploads/2020/06/MI-image-3-1100x825_new1.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://www.creedfragrances.co.uk/tco-images/unsafe/769x961/filters:upscale():fill(white)/https://www.creedfragrances.co.uk/static/uploads/2020/06/MI-image-1-800x1000_new.jpg",
  },
  
];


export default function Imperial() {

  const renderItem = ({ item }) => (

    <View>
      <Image 
      resizeMode='cover' 
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
          <Text style={{fontSize:30,}}>Creed Millésime Impérial</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Women's Perfume</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Volumes: 50ml, 100ml, 250ml, 500ml</Text>
              <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$245</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={IMPERIAL}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={15} style={styles.productdetails}>    A milestone in Creed history, Millésime Impérial marks the House perfumery’s 150-year
           anniversary since its establishment in Paris. Relocated at the request of Napoleon III and the Empress Eugenie, Creed has savoured a long and rich 
           history to the elite, including the Imperial courts of Europe. Paying homage to Creed’s royal and influential clientele, this fresh and stylish scent 
           captures warm and sparkling notes richly layered with a sophisticated base.


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