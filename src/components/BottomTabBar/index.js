import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {
  HomeIcon,
  HomeIconActive,
  OrderIcon,
  OrderIconActive,
  SavedIcon,
  SavedIconActive,
  UserIcon,
  UserIconActive,
} from '../../assets/images';
import Routes from '../../constants/Routes';
import {COLORS, FONT_DEMI, getHeight, getWidth} from '../../constants/Styles';

const TabIcon = {
  [Routes.home]: HomeIcon,
  [Routes.order]: OrderIcon,
  [Routes.saved]: SavedIcon,
  [Routes.user]: UserIcon,
};

const TabIconActive = [
  HomeIconActive,
  OrderIconActive,
  SavedIconActive,
  UserIconActive,
];

const BottomTabBar = props => {
  const {state, navigation} = props;

  return (
    <>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const isActive = index === state.index;
          return (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={onPress}
              key={route.key}
              style={[
                styles.menuWrapper,
                isActive && [styles.icon, styles.menuActiveBackground],
              ]}>
              {isActive && (
                <>
                  <Image source={TabIconActive[state.index]} />
                  <Text style={styles.menuText}>{route.name}</Text>
                </>
              )}

              {!isActive && <Image source={TabIcon[route.name]} />}
            </TouchableOpacity>
          );
        })}
      </View>
      <SafeAreaInsetsContext.Consumer>
        {inserts => <View style={{height: inserts.bottom}} />}
      </SafeAreaInsetsContext.Consumer>
    </>
  );
};

const styles = StyleSheet.create({
  overrideBackground: {
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: getHeight(60),
  },
  menuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getWidth(15),
    paddingVertical: getHeight(8),
  },
  icon: {
    marginRight: getWidth(10),
  },
  menuText: {
    fontFamily: FONT_DEMI,
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.primaryColor.p1,
  },
  menuActiveBackground: {
    backgroundColor: '#FFF1E5',
    borderRadius: 40,
  },
});

export default BottomTabBar;
