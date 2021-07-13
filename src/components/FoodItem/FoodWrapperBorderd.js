import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FoodCommon} from './index';
import {getHeight, getWidth, TEXT_STYLE} from '../../constants/Styles';

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
  discount,
  priceColor,
}) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.discountWrapper}>
        <Text style={[TEXT_STYLE.body2, styles.discountText]}>{discount}</Text>
      </View>
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
    backgroundColor: '#fff',
  },
  wrapper: {
    marginHorizontal: getWidth(16),
    marginVertical: getHeight(16),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  discountWrapper: {
    width: getWidth(56),
    height: getHeight(25),
    backgroundColor: '#3ABC5E',
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  discountText: {
    color: '#fff',
  },
});
export default FoodWrapperBordered;
