import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';
import Login from "./screens/Login"
import Home from "./screens/Home"
import SIGNUP from "./screens/SIGNUP"
import Bagsshop from "./screens/Bagsshop"
import pouch from "./screens/pouch"
import tote from "./screens/tote"
import anagram from "./screens/anagram"
import rachel from "./screens/rachel"
import ghost from "./screens/ghost"
import loulou from "./screens/loulou"
import Makeupkitshop from "./screens/Makeupkitshop"
import coco from "./screens/coco"
import lumiere from "./screens/lumiere"
import beiges from "./screens/beiges"
import ombres from "./screens/ombres"
import rouge from "./screens/rouge"
import pinceaux from "./screens/pinceaux"
import Perfumeshop from "./screens/Perfumeshop"
import noir from "./screens/noir"
import chanel from "./screens/chanel"
import silver from "./screens/silver"
import miss from "./screens/miss"
import imperial from "./screens/imperial"
import escale from "./screens/escale"
import Accessoriesshop from "./screens/Accessoriesshop"
import rolex from "./screens/rolex"
import indira from "./screens/indira"
import finetrace from "./screens/finetrace"
import sea from "./screens/sea"
import suzanne from "./screens/suzanne"
import sofia from "./screens/sofia"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Sign up" component={SIGNUP}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Bags" component={Bagsshop}/>
        <Stack.Screen name="Hourglass Mini leather tote" component={tote}/>
        <Stack.Screen name="Chain Pouch leather shoulder bag" component={pouch}/>
        <Stack.Screen name="Anagram Small leather tote" component={anagram}/>
        <Stack.Screen name="Loulou Small leather shoulder bag" component={loulou}/>
        <Stack.Screen name="Rachel Mini leather shoulder bag" component={rachel}/>
        <Stack.Screen name="Ghost Small leather shoulder bag" component={ghost}/>
        <Stack.Screen name="Makeup kits" component={Makeupkitshop}/>
        <Stack.Screen name="Blush Powder PERLES DE LUMIÈRE" component={lumiere}/>
        <Stack.Screen name="ROUGE COCO GLOSS" component={coco}/>
        <Stack.Screen name="ROUGE ALLURE" component={rouge}/>
        <Stack.Screen name="Eyeshadow LES 4 OMBRES" component={ombres}/>
        <Stack.Screen name="Foundation Les Beiges" component={beiges}/>
        <Stack.Screen name="LES PINCEAUX DE CHANEL" component={pinceaux}/>
        <Stack.Screen name="Accessories" component={Accessoriesshop}/>
        <Stack.Screen name="DIOR SEA GARDEN EARRING" component={sea}/>
        <Stack.Screen name="SOFIA HOOPS" component={sofia}/>
        <Stack.Screen name="Suzanne chain necklace" component={suzanne}/>
        <Stack.Screen name="Finetrace Pearl Chain" component={finetrace}/>
        <Stack.Screen name="Indira Ruby, Diamond and Pearl Earring Drops" component={indira}/>
        <Stack.Screen name="Rolex Day-Date 40" component={rolex}/>
        <Stack.Screen name="Perfumes" component={Perfumeshop}/>
        <Stack.Screen name="GABRIELLE CHANEL" component={chanel}/>
        <Stack.Screen name="COCO NOIR" component={noir}/>
        <Stack.Screen name="DIOR ESCALE À PORTOFINO" component={escale}/>
        <Stack.Screen name="Creed Millésime Impérial" component={imperial}/>
        <Stack.Screen name="Miss Dior" component={miss}/>
        <Stack.Screen name="Creed Silver Mountain Water" component={silver}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}