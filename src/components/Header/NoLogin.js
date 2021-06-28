import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getHeight, getWidth} from '../../constants/Styles';

const NoLogin = ({navigateLink}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={!!navigateLink} onPress={navigateLink}>
        <Icon name="chevron-left" size={16} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: getHeight(60),
    marginLeft: getWidth(32),
  },
});

export default NoLogin;
