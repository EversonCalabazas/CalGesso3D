import React,{Component} from 'react';

import { ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class CalculaTela extends Component{
  constructor(props){
    super(props);
    this.state={
      valor1:0, 
      valor2:0,
      valor3:0,
      valor4:0};
  }
  
  Calcular=()=>{

    var V1 = parseFloat(this.state.valor1.replace(',', '.'));
    var V2 = parseFloat(this.state.valor2.replace(',', '.'));
    var V3 = parseFloat(this.state.valor3.replace(',', '.'));
    var V4 = parseFloat(this.state.valor4.replace(',', '.'));
    var L1 = V1 / V3
    var L2 = V2 / V4
    var R1 = (V1 * V2).toFixed(2);
    var R2 = (L1 * L2).toFixed(2);
    if(V1 == 0 || V2 == 0 || V3 == 0 || V4 == 0){
      Alert.alert("Por favor! Insira os valores para calcular!");  
    }else{
      Alert.alert("Parede:" + R1 +"m²", "Você precisa de "+ R2 +"placas");
    }  
  }
  render(){
  return(
    <ScrollView style={style.container}>
      <Text style={style.title}>Calcule a área do seu projeto</Text>
      <TextInput 
        style={style.input}
        onChangeText={ valor1=>this.setState({valor1}) }
        placeholder="Altura Parede(m)"
        keyboardType="numeric"
      />

      <TextInput 
        style={style.input}
        onChangeText={ valor2=>this.setState({valor2})}
        placeholder="Largura Parede(m)"
        keyboardType="numeric"
      />

      <TextInput 
        style={style.input}
        onChangeText={ valor3=>this.setState({valor3}) }
        placeholder="Altura Placa(cm)"
        keyboardType="numeric"
      />

      <TextInput 
        style={style.input}
        onChangeText={ valor4=>this.setState({valor4}) }
        placeholder="Largura Placa(cm)"
        keyboardType="numeric"
      />  
      

      <TouchableOpacity 
      style={style.button}
      onPress={ () => {this.Calcular()} }>
        <Text style={style.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  }
}
 
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1476A1',
    
  },
  title:{
    textAlign:"center",
    marginTop:25,
    fontSize:26,
    color:'#fff',
  },
  input:{
    backgroundColor:'#f0f0f0',
    borderRadius:10,
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    padding:10,
    color:'#000',
    fontSize:20,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin: 15,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
  },

  buttonText:{
    color:'#000',
    fontSize:25,
  }
});