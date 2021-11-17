import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const ROUGE = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://www.chanel.com/images//t_one//w_0.38,h_0.38,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/rouge-allure-limited-edition-luminous-intense-lip-colour-191-rouge-brulant-0-12oz--packshot-default-151187-8846287044638.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://www.chanel.com/images//t_one//w_0.38,h_0.38,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/rouge-allure-limited-edition-luminous-intense-lip-colour-191-rouge-brulant-0-12oz--packshot-other-151187-8842573381662.jpg",
  },
  
];


export default function Rouge() {

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
          <Text style={{fontSize:30,}}>ROUGE ALLURE</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>LIMITED EDITION - N°5 HOLIDAY 2021 COLLECTION LUMINOUS INTENSE LIP COLOUR</Text>
              <Text style={styles.productdetails}> 5 Shades Available </Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (14) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="grey"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$45</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={ROUGE}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={30} style={styles.productdetails}>    This holiday season, the CHANEL Makeup Creation Studio has crafted unique, limited-edition collector's items to honour a legendary number.
Now, wearing N°5 also means wearing makeup.

With ROUGE ALLURE N°5, CHANEL celebrates the colour of desire: red.
Opulent, sensual, and fascinating, red is the promise of a kiss, reinvented time and time again.

5 shades:

Emblématique: a deep and luminous red*
Légendaire: a brownish garnet*
Indépendante: a fiery red*
Pirate: a blue-based red*
Rouge Brûlant: an intense and warm orange red*


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