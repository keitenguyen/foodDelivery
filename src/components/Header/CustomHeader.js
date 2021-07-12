import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { COLORS, getHeight, getWidth, TEXT_STYLE } from "../../constants/Styles";
import FontSize from '../../styles/FontSize';

const CustomHeader = ({
  iconBack,
  title,
  description,
  icon,
  onIconClick,
  navigation,
  hasBorder,
}) => {
  return (
    <View>
      <View style={[styles.mainHeaderWrapper]}>
        <View>
          {iconBack && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>{iconBack}</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text
          numberOfLines={1}
          style={[TEXT_STYLE.headline1, styles.mainHeaderText]}>
          {title}
        </Text>

        <View>
          {icon && (
            <TouchableOpacity onPress={onIconClick}>
              <Text>{icon}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {description && (
        <View style={styles.descriptionWrapper}>
          <Text style={[TEXT_STYLE.body2, styles.descriptionText]}>
            {description}
          </Text>
        </View>
      )}

      {hasBorder && <View style={styles.borderBottom} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(24),
    alignItems: 'center',
  },
  mainHeaderText: {
    color: COLORS.neutral.n1,
  },
  descriptionWrapper: {
    marginTop: getHeight(2),
  },
  descriptionText: {
    color: COLORS.neutral.n2,
    textAlign: 'center',
  },
  borderBottom: {
    height: getHeight(8),
    borderBottomWidth: 1,
    borderBottomColor: '#EAEDF2',
  },
});

export default CustomHeader;
