import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const SOFIA = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/yzlq9t704vuwfwnl6nob.jpg",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/he4kaihmuansnlx0cjxk.jpg",
  },
  
];


export default function Sofia() {

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
          <Text style={{fontSize:30,}}>SOFIA HOOPS</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>Multicoloured gold</Text>
              <Text style={styles.productdetails}>Available in one size</Text>
              <Text style={styles.productdetails,{color:'green',fontWeight: 'bold'}}> NEW</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$85</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={SOFIA}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text style={styles.productdetails}>*  3 micron gold plated brass rings with glass stones</Text>
          <Text style={styles.productdetails}>*  These earrings are suitable for pierced ears</Text>
          <Text style={styles.productdetails}>*  Weight of an earring : 1 g / 0.03 oz</Text>
          <Text style={styles.productdetails}>*  Height : 1.2 cm / 0.47 in</Text>
                              
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