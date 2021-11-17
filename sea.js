import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const SEA = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://media.dior.com/couture/ecommerce/media/catalog/product/M/C/1633627069_E1784DSGRS_D301_E03_ZHC.jpg?imwidth=870",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://media.dior.com/couture/ecommerce/media/catalog/product/L/1/1634312373_F_22_1_LOOK_037_E08_GH.jpg?imwidth=430",
  },
  
];


export default function Sea() {

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
          <Text style={{fontSize:30,}}>DIOR SEA GARDEN EARRING</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Gold-Finish Metal with a White Resin Pearl</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails,{color:'green',fontWeight: 'bold'}}> NEW</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$520</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={SEA}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={8} style={styles.productdetails}>    In true spirit of the collection, the Dior Sea Garden earring is a delicate and elegant creation. 
          The finely crafted gold-finish metal design is composed of a tiger with a fishtail at the base of the ear, while a white resin pearl hangs from the rear. 
          The refined earring can be coordinated with other creations from Dior Sea Garden line.

</Text>
        </View>

        <View style={{margin:10}}>
          <Text style={styles.productdetails}>*  White resin pearl</Text>
          <Text style={styles.productdetails}>*  Tiger with fishtail detailing</Text>
          <Text style={styles.productdetails}>*  Gold-finish metal</Text>
          <Text style={styles.productdetails}>*  Push-button clasp</Text>
          <Text style={styles.productdetails}>*  Sold individually</Text>
          <Text style={styles.productdetails}>*  Made in Germany</Text>
                    
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