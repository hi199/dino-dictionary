 import * as React from 'react';
import db from './localdb'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "word":word ,
      "definition":definition,
      "lexicalCategory":lexicalCategory,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Dino Dictionary',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = db[text]["word"]
            var definition = db[text]["definition"]
            var  lexicalCategory= db[text]["lexicalCategory"]
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
       
          return(
            <TouchableOpacity style={styles.chunkbutton}>
             <Text style={styles.displayText}></Text>
            </TouchableOpacity>
          )
      
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    color:'red',
    fontSize: 30,
  },
  chunkbutton:{
     margin: 5,
    width: '60%',
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor:'green',
    backgroundColor:'green'
  }
});
