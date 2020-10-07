import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function App() {
  const [modoEscuro, setmodoEscuro] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultado:{
      backgroundColor: modoEscuro ? "#282f3b" : "#ffffff",
      width: '100%',
      minHeight:360,
      alignItems:'flex-end',
      justifyContent:'flex-end',
    },
    resultadotexto:{
      margin: 10,
      fontSize: 45,
      color:  modoEscuro ? "#7FFFD4" : "#008B8B",
    }, 
    botaotema:{
      alignSelf: 'flex-start',
      backgroundColor: modoEscuro  ? "#7b8084" :"#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      bottom: 130,
      margin: 10,
    },
    botao:{
      borderColor: modoEscuro ? "#7FFFD4" : "#008B8B",
      minWidth: 90, 
      minHeight: 90,
      flex: 3,
      alignItems:'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    buttons:{
      flexDirection:'row',
      flexWrap: 'wrap',
    },
    textobotao: {
      color: modoEscuro ? "#7FFFD4" : "#008B8B",
      fontSize: 30,
    },
    historicotexto:{
      color: modoEscuro ? "#7FFFD4" : "#008B8B",
      fontSize: 22,
      alignSelf: 'flex-end',
      marginRight: 10,
    }
  });
  
  return (
    <View>
      <View style={styles.resultado}>
        <TouchableOpacity style={styles.botaotema}>
        <Entypo name={modoEscuro ? "light-up" : 'moon'} size={24} color={modoEscuro ? "black" : 'black'} onPress={() => modoEscuro ? setmodoEscuro(false): setmodoEscuro(true)}/>
        </TouchableOpacity>
        <Text style={styles.historicotexto}> 2 + 2 = 4</Text>
        <Text style={styles.resultadotexto}> 2 + 2 = 4</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((botao) =>
        botao === '='?
        <TouchableOpacity key={botao} style={[styles.botao, {backgroundColor: modoEscuro ? "#7FFFD4" : "#008B8B",}]}><Text style={[styles.textobotao, {color: "white", fontSize: 30}]}>{botao}</Text></TouchableOpacity>
        :
        <TouchableOpacity key={botao} style={[styles.botao, {backgroundColor: typeof(botao)==='number' ? modoEscuro === true ? '#303946' : '#fff' : modoEscuro === true ? '#414853' : '#ededed' }]}>
          <Text style={styles.textobotao}>{botao}</Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

