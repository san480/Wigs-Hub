import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const FINETRACE = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://assets.cassandragoad.com/images/product_medium/49553-35714-01-08-001-375-43-07-16-copy.jpg",
  },
  
  
];


export default function Finetrace() {

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
          <Text style={{fontSize:30,}}>Finetrace Pearl Chain</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
            <Text style={styles.productdetails}>Fine trace chain 9ct yellow gold 16" chain set with six pearls. From Cassandra's Classic Collection.</Text>
              <Text style={styles.productdetails}>Available in all lengths. </Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (344) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="grey"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$1,045</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={FINETRACE}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
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