import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({navigation}){
  
  return(
    <View >
      <Text style={style.title}>Escolha uma das opções</Text>

      <TouchableOpacity 
      style={style.button}
      onPress={ () => navigation.navigate('CalculaTela') }>
        <Text style={style.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={style.button}
      onPress={ () => {this.TelaProjetos()} }>
        <Text style={style.buttonText}>Projetos</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const style = StyleSheet.create({
  
  title:{
    textAlign:"center",
    marginTop:25,
    fontSize:26,
    color:'#000',
  },
  
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin: 15,
    backgroundColor:'#1476A1',
    padding:10,
    borderRadius:10,
  },

  buttonText:{
    color:'#fff',
    fontSize:25,
  }
});