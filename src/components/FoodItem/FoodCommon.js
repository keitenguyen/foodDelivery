import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {getHeight, getWidth, TEXT_STYLE} from '../../constants/Styles';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FoodCommon = ({
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
    <View>
      <View style={styles.container}>
        <Image source={image} style={[styles.imageStyle, imageStyle]} />
        <View style={styles.infoWrapper}>
          <View>
            <View style={[styles.container, styles.titleWrapper]}>
              <Text style={[styles.title, Colors.n1, TEXT_STYLE.headline1]}>
                {title}
              </Text>
              {!!subTitle && (
                <Text style={[TEXT_STYLE.caption1, Colors.n1, styles.subTitle]}>
                  {' - ' + subTitle}
                </Text>
              )}
            </View>

            <View>
              <Text style={[Colors.n3, TEXT_STYLE.caption1]}>
                {description}
              </Text>
            </View>
          </View>

          <View style={[styles.bottom]}>
            <View style={[styles.container, styles.timeWrapper]}>
              {!!time && (
                <Text style={[TEXT_STYLE.caption1, Colors.n1]}>
                  <Icon name="clock" size={12} color="#4F585E" />
                  {' ' + time}
                </Text>
              )}

              <View style={[styles.container]}>
                {!!price && (
                  <Text
                    style={[
                      TEXT_STYLE.headline2,
                      !!priceColor && {color: priceColor},
                      !priceColor && Colors.p1,
                      styles.infoMargin,
                    ]}>
                    {price}
                  </Text>
                )}
                {!!originalPrice && (
                  <Text
                    style={[
                      TEXT_STYLE.caption1,
                      Colors.n3,
                      styles.originalPrice,
                      styles.infoMargin,
                    ]}>
                    {originalPrice}
                  </Text>
                )}
                {!!rating && (
                  <Text
                    style={[TEXT_STYLE.caption1, Colors.n1, styles.infoMargin]}>
                    <Icon name="star" size={12} color="#FFD65A" solid />
                    {' ' + rating}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>

      {!!moreInfo && (
        <Text style={[TEXT_STYLE.caption1, Colors.n1, styles.moreInfoText]}>
          <Icon name="check-circle" size={12} color="#9B9B9B" />
          {' ' + moreInfo}
        </Text>
      )}

      {!!isBorder && <View style={styles.borderBottom} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: getWidth(80),
    height: getHeight(80),
    borderRadius: 8,
  },
  infoWrapper: {
    marginLeft: getWidth(12),
    flex: 1,
  },
  titleWrapper: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
  },
  subTitle: {
    fontWeight: '500',
  },
  bottom: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  timeWrapper: {
    justifyContent: 'space-between',
  },
  priceWrapper: {
    alignItems: 'center',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  infoMargin: {
    marginLeft: getWidth(16),
  },
  moreInfoText: {
    color: '#9B9B9B',
    marginTop: getHeight(8),
  },
  borderBottom: {
    borderColor: '#EFF0F3',
    borderWidth: 1,
    marginTop: getHeight(16),
  },
});

export default FoodCommon;

/**
 * luongtien_tb:
 *  - Tong: gid = 0;
 *  - gameId: gid = 2001;
 *  doanh thu = tien phat sinh * -1
 *
 *  luongtienuser_tb
 *    tx: doanh thu thang = doanh thu + bet * 0.98
 */
