import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Button from './Button';
import Greeter from './Greeter';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      submitted: false
    };
  }

  inputChange(name) {
    this.setState({submitted: false, name: name});
  }

  submitName() {
    this.setState({submitted: true, name: this.state.name});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.submitted ? <Greeter name={this.state.name}/> : null}
        <TextInput
          value = {this.state.name}
          onChangeText={(name) => this.inputChange(name)}
          style={styles.input}
          placeholder='What is your name?'
          placeholderTextColor='#CACACA'
          selectionColor='#666666' />
        <Button submitName={this.submitName.bind(this)} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 60,
    width: 300,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
});
