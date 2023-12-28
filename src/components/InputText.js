import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
const InputText = props => {
  const {placeholder, value, onChangeText, error, lableName,isNumber, secureTextEntry} = props;
  const handleTextChange = (text) => {
    if (isNumber) {
      const x = text.replace(/\D/g, '');
      const op = x.slice(0, 10);
  
      onChangeText(op);
    } else {
      onChangeText(text);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{lableName}</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {error ? <Text style={styles.errortext}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: width / 1.1,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'green',
    height: 45,
    opacity: 0.7,
  },
  input: {
    flex: 1,
    color:"#1E1E1E",
    fontSize: 15,
  },
  labelStyle:{
    fontSize: 15,
    color: '#1E1E1E',
},
  errortext: {
    color: 'red',
  },
});

export default InputText;
