import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image,ScrollView, FlatList,View, TouchableOpacity } from 'react-native';

const ROLEX = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m228348rbr-0002.png?imwidth=380",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://content.rolex.com/dam/2021/bg/model-popin-background-yellow-gold.jpg?impolicy=v6-model-feature&c1path=/dam/2021/harmonised/dial-raw-with-colored-shadow/51220_y_40.png&sc1=1.7&c1x=-474&c1y=-760&imwidth=1920",
  },
  {
    id: "b4ff9dd4in_rolex_profiles_evr_05a6232f6",
    picture: "https://content.rolex.com/dam/model-page/features/material/materials-yellow-gold-pop-in_rolex_profiles_evr_05a6232.jpg?imwidth=1920",
  },
  {
    id: "b4f61789&c1x=-607&c1y63ef6",
    picture: "https://content.rolex.com/dam/2021/bg/model-popin-background-yellow-gold.jpg?impolicy=v6-model-feature&c1path=/dam/2021/harmonised/bracelet-ud/42410.png&sc1=1.89&c1x=-607&c1y=-32&imwidth=1920",
  },
  {
    id: "b4ffy-yellow-gold-pop-ef6",
    picture: "https://content.rolex.com/dam/model-page/features/special-features/day-display-yellow-gold-pop-in.jpg?imwidth=1920",
  },
  {
    id: "yclop-yellow-gold-pop-in_elmt_1701rlx_001ef6",
    picture: "https://content.rolex.com/dam/model-page/features/cyclop/cyclop-yellow-gold-pop-in_elmt_1701rlx_001.jpg?imwidth=1920",
  },
  
];


export default function Rolex() {

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
          <Text style={{fontSize:30,}}>Rolex Day-Date 40</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.productdetails}>The Oyster Perpetual Day-Date 40 in 18 ct yellow gold with a white dial, fluted bezel and a President bracelet.</Text>
              <Text style={styles.productdetails}>Available </Text>
              <Text style={styles.productdetails,{color:'green',fontWeight: 'bold'}}> NEW</Text>
            </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$750</Text>
          
        </View>
        </View>
        <FlatList
          horizontal={true}
          data={ROLEX}
          renderItem={renderItem}
         keyExtractor={item => item.id}/>

        <View style={{alignItems:'center',padding:20}}>
          <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
        </View>

        <View style={{margin:10}}>
          <Text numberOfLines={20} style={styles.productdetails}>    The Day-Date was the first watch to indicate the day of the week spelt 
          out in full when it was first presented in 1956.The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a 
          functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. 
          It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. 
          Over time, the fluting became an aesthetic element, a genuine Rolex signature feature.
           Today the fluted bezel is a mark of distinction, always in gold.


</Text>
        </View></ScrollView>
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