import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, ScrollView, StyleSheet} from 'react-native';

const TextBox = ({
  styleContainer,
  styleTextBox,
  label,
  placeholder,
  value,
  type,
  errorMsg,
  icon,
  iconColor,
  iconSize,
  onSubmit,
}) => {
  const [data, setData] = useState('');

  useEffect(() => {
    if (value) {
      setData(value);
    }
    return () => {};
  }, [value]);
  return (
    <View style={styleContainer}>
      <TextInput
        style={[styles.textBox, styleTextBox]}
        onChange={setData}
        value={data}
        secureTextEntry={type === 'password'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  textBox: {
    height: 53,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DBDFE3',
  },
});

export default TextBox;
