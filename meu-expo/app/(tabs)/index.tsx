import React, { useState } from "react";
import { Text, TextInput, StyleSheet, KeyboardAvoidingView, Keyboard } from "react-native";

export default function Home() {

  const [idade, setIdade] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anoNascimento, setAnoNascimento] = useState("");

  function calcularAno(novaIdade, novoDia, novoMes) {

    if (novaIdade === "" || novoDia === "" || novoMes === "") {
      setAnoNascimento("");
      return;
    }

    const hoje = new Date();

    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    let ano = anoAtual - parseInt(novaIdade);

    if (parseInt(novoMes) > mesAtual) {
      ano = ano - 1;
    }

    if (parseInt(novoMes) === mesAtual && parseInt(novoDia) > diaAtual) {
      ano = ano - 1;
    }

    setAnoNascimento(String(ano));

    Keyboard.dismiss();
  }

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <Text style={styles.titulo}>Calculadora de Ano de Nascimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={(texto)=>{
          setIdade(texto)
          calcularAno(texto, dia, mes)
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Dia de nascimento"
        keyboardType="numeric"
        value={dia}
        onChangeText={(texto)=>{
          setDia(texto)
          calcularAno(idade, texto, mes)
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Mês de nascimento"
        keyboardType="numeric"
        value={mes}
        onChangeText={(texto)=>{
          setMes(texto)
          calcularAno(idade, dia, texto)
        }}
      />

      <Text style={styles.resultado}>
        Ano de nascimento: {anoNascimento}
      </Text>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:20
  },

  titulo:{
    fontSize:22,
    textAlign:"center",
    marginBottom:20
  },

  input:{
    borderWidth:1,
    borderColor:"#999",
    padding:10,
    marginBottom:10,
    borderRadius:5
  },

  resultado:{
    fontSize:20,
    marginTop:20,
    textAlign:"center"
  }

});