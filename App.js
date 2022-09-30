
import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';



export default function App() {

  const [nome, setNome ] = useState('');
  const [password, setPassword] = useState('');
  const [botao, setBotao] = useState(true);

  useEffect(()=>{
      setNome('admin')
      alert("Ola "+nome)
  },[])

  useEffect(()=>{
    if(password !== ''){
      setBotao(false)
    }else{
      setBotao(true)
    }
    
},[password])

function validaCampos(){
  if (nome == '' || password == ''){
    alert('Preencha todos os campos')
  }
  else{
    alert('OK')
  }
}

  return (
    <View style={styles.container}>
      
      
      <Button
        onPress={() => Alert.alert('clicou')}
        title="Clique"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"/>
      <TextInput style={styles.input}value={nome} placeholder='usuario' onChangeText={setNome}/>
      <TextInput style={styles.input}value={password} placeholder='senha' onChangeText={setPassword} secureTextEntry/>
      <Text style={styles.texto}>Sejaaa bem vindo {nome} </Text>


      <Button title='Entrar' onPress={validaCampos} color='blue' disabled={botao}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
  },
  input: {
    borderColor: '#555',
    borderWidth: 2,
    width: 240,
    margin: 20,
    padding: 10,

  }
});