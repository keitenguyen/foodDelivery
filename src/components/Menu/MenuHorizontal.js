import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {COLORS, getHeight, getWidth} from '../../constants/Styles';
import Colors from '../../styles/Colors';

const MenuHorizontal = ({onClickMenu}) => {
  const activatedId = 1;
  const items = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
    'item 8',
    'item 9',
    'item 10',
  ];
  const renderTab = (title, index, activeId) => {
    const isMatching = index === activeId;
    return (
      <TouchableOpacity
        style={[
          styles.tabContentWrapper,
          index === 0 && styles.firstItemWrapper,
        ]}>
        <Text
          style={[
            Colors.body2,
            isMatching && styles.textActive,
            !isMatching && styles.textInactive,
          ]}>
          {title}
        </Text>
        {isMatching && <View style={styles.dot} />}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tabsContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        bounces={false}>
        <View style={styles.tabs}>
          {items.map((item, index) => renderTab(item, index, activatedId))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEDF2',
    marginTop: getHeight(24),
  },
  tabs: {
    flexDirection: 'row',
  },
  firstItemWrapper: {
    paddingLeft: getWidth(24),
  },
  tabContentWrapper: {
    paddingLeft: getWidth(38),
    alignItems: 'center',
  },
  dot: {
    width: getWidth(8),
    height: getHeight(8),
    marginTop: getHeight(4),
    marginBottom: getHeight(8),
    backgroundColor: COLORS.primaryColor.p1,
    borderRadius: 50,
  },
  textInactive: {
    color: COLORS.neutral.n2,
  },
  textActive: {
    color: COLORS.neutral.n1,
    fontWeight: '600',
  },
});

export default MenuHorizontal;
