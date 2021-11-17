import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const MISS = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw43ec5b8f/assets/Y0326210/Y0326210_F032624889_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw24695aab/assets/Y0326210/Y0326210_E03_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=430",
  },
  
];


export default function Miss() {

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
              <Text style={styles.productdetails}>Women's Perfume</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails}>Volumes: 50ml, 100ml, 250ml, 500ml</Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (34) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="grey"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$115</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={MISS}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={15} style={styles.productdetails}>    Miss Dior Blooming Bouquet is a fresh and sparkling eau de toilette fashioned like a dress embroidered with flowers. 
          The olfactory bouquet of this fragrance pays homage to Christian Dior's legendary love of flowers. 
          At the heart of Miss Dior Blooming Bouquet lies the tenderness of a Peony and Damascus Rose accord honed by a radiant Calabrian Bergamot. 
          The poetic trail of this eau de toilette is adorned with a lacework of White Musks. 
          Miss Dior Blooming Bouquet leaves behind its springtime floral signature, the olfactory incarnation of a playful and charming Miss Dior.


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