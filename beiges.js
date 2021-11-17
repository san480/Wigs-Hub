import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const BEIGES = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.chanel.com/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/les-beiges-healthy-glow-foundation-hydration-and-longwear-b20-1fl-oz--packshot-default-184724-8830483202078.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/les-beiges-healthy-glow-foundation-hydration-and-longwear-b20-1fl-oz--basic-texture-184724-8830468554782.jpg",
  },
  
];


export default function Beiges() {

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
          <Text style={{fontSize:30,}}>Foundation Les Beiges</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Healthy Glow Foundation Hydration and Longwear</Text>
              <Text style={styles.productdetails}> 35 Shades Available </Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (56) <AntDesign name="star" size={15} color="#fac064"/>
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
          data={BEIGES}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={30} style={styles.productdetails}>    A light-to-medium coverage fluid foundation that lasts up to 12 hours* 
          and features a weightless texture and radiant finish for a natural, healthy-looking glow.


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