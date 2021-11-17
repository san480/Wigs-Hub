import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const SILVER = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.creedfragrances.co.uk/tco-images/unsafe/fit-in/1730x1730/filters:upscale():fill(fafafa):quality(100)/https://www.creedfragrances.co.uk/static/media/catalog/product/s/i/silver-mountain-water-100ml-ingredients.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://www.creedfragrances.co.uk/tco-images/unsafe/3893x1668/filters:upscale():fill(fafafa)/https://www.creedfragrances.co.uk/static/media/catalog/product/s/m/smw_lifestyle_desktop_-_oct21.jpg",
  },
  
];


export default function Silver() {

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
          <Text style={{fontSize:30,}}>Creed Silver Mountain Water</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Men's Perfume</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Volumes: 50ml, 100ml, 250ml, 500ml</Text>
              <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$320</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={SILVER}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={15} style={styles.productdetails}>    An invigorating breeze of fresh, icy, mentholated mountainous air, Silver Mountain Water brings to life the extensive and pristine beauty of Switzerland and 
          their breath-taking Alpine region. The fragrance captures the essence of crystal clear Alpine streams descending over frosted rock face, whilst retaining the comfort of a warm and plush jacket.A contemporary unisex 
          scent, Silver Mountain Water perfectly balances crisp & sharp citric notes with warming sweet blackcurrant and charming musk.


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