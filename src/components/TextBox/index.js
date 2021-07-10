import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, ScrollView, StyleSheet} from 'react-native';
import { getWidth, TEXT_STYLE } from "../../constants/Styles";

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
        style={[styles.textBox, styleTextBox, TEXT_STYLE.body2]}
        onChange={setData}
        value={data}
        secureTextEntry={type === 'password'}
        onSubmitEditing={() => onSubmit(data)}
        onBlur={() => onSubmit(data)}
        placeholder={placeholder}
        placeholderTextColor={'#9B9B9B'}
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
    paddingHorizontal: getWidth(16),
  },
  placeholderColor: {},
});

export default TextBox;
