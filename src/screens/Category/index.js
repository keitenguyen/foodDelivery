import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {CustomHeader} from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MenuHorizontal } from "../../components/Menu";
import { FoodCommon } from "../../components/FoodItem";
import { PizzaImage } from "../../constants/Images";

const CategoryScreen = () => {
  const backButton = <Icon name="chevron-left" size={14} color="#4F585E" />;
  const iconLove = <Icon name="heart" size={14} color="#4F585E" regular />;
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        icon={null}
        iconBack={backButton}
        title={'Day la header'}
        description={'11km - 15km'}
        hasBorder={false}
      />
      <MenuHorizontal onClickMenu={null} />

      <FoodCommon
        title={'Pizzon - Crib Ln'}
        subTitle={'KCal: 14'}
        description={'Shrimp, mushroom, cheese, tomato'}
        price={'$10'}
        originalPrice={'$20'}
        rating={5}
        time={'30mins - 4,2km'}
        image={PizzaImage}
        moreInfo={'twice by you'}
        isBorder={true}
        priceColor={''}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoryScreen;
