import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const INDIRA = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://assets.cassandragoad.com/images/product_medium/59044-58870-02-02-324-756-20-05-00-no-hoop-ruby-copy.jpg",
  },
  
  
];


export default function Indira() {

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
          <Text style={{fontSize:30,}}>Indira Ruby, Diamond and Pearl Earring Drops</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
            <Text style={styles.productdetails}>Indira diamond, cabochon ruby and pearl earring pendants in 18ct white gold to be worn on Astrea hoops. From the Journey to India.</Text>
              <Text style={styles.productdetails}>Available in all lengths. </Text>
              <Text style={styles.productdetails,{color:'green'}}> Reviews (344) <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="#fac064"/>
              <AntDesign name="star" size={15} color="grey"/>
              </Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$9,840</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={INDIRA}
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