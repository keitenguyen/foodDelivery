import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {FoodCommon} from './index';
import {getHeight, getWidth} from '../../constants/Styles';

const FoodWrapperBordered = ({
  image,
  imageStyle,
  title,
  subTitle,
  description,
  time,
  price,
  originalPrice,
  rating,
  moreInfo,
  isBorder,
  priceColor,
}) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={[styles.wrapper]}>
        <FoodCommon
          image={image}
          imageStyle={imageStyle}
          title={title}
          subTitle={subTitle}
          description={description}
          time={time}
          rating={rating}
          price={price}
          originalPrice={originalPrice}
          moreInfo={moreInfo}
          isBorder={false}
          priceColor={priceColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  wrapper: {
    marginHorizontal: getWidth(16),
    marginVertical: getHeight(16),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
export default FoodWrapperBordered;
