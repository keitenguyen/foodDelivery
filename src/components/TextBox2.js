import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import Sizes from '../styles/FontSize';

const TextBox2 = ({label, placeholder, value, onSubmitText}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  return (
    <View>
      <TextInput
        value={text}
        placeholder={placeholder}
        placeholderTextColor={Colors.n3}
        placeholderStyle={[Colors.n3, Sizes.body1]}
        onChangeText={setText}
        style={styles.input}
        onSubmitEditing={() => onSubmitText(text)}
        onBlur={() => onSubmitText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DBDFE3',
  },
});

export default TextBox2;
