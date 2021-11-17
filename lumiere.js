import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const LUMIERE = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.chanel.com/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/perles-de-lumiere-illuminating-blush-powder-0-28oz--packshot-default-151547-8838252265502.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/perles-de-lumiere-illuminating-blush-powder-0-28oz--basic-texture-151547-8833425571870.jpg",
  },
  
];


export default function Lumiere() {

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
          <Text style={{fontSize:30,}}>Blush Powder PERLES DE LUMIÈRE</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Illuminating Blush Powder</Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (5) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$70</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={LUMIERE}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={30} style={styles.productdetails}>    A limited-edition blush created exclusively for the Perles et Éclats de CHANEL makeup collection. 
          The luminous powder formula adds a touch of rosy champagne colour and radiance to the complexion. Embossed with a pearl motif.


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