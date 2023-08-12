import React, {ReactElement} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {AllRoutes, RootRoutes} from '../../navigation/routes';
import styles from './styles';
import navigationService from '../../navigation/navigationService';
import {COLORS, positionHelpers} from '../../styles';
import {Icon} from 'src/components/Icon';

type TabBarItem = {
  icon: ReactElement<SvgProps> | null;
  iconActive: ReactElement<SvgProps> | null;
  label: string;
  route: RootRoutes;
  activeRoutes: AllRoutes[];
};

const BottomTabBar = () => {
  const tabBarItems: TabBarItem[] = [
    {
      icon: <Icon name="HeartEmpty" width={28} height={28} />,
      iconActive: <Icon name="HeartFill" width={28} height={28} />,
      label: 'Episodes',
      route: 'Episodes',
      activeRoutes: ['Episodes_list', 'Movie_Details', 'Episodes'],
    },
    {
      icon: <Icon name="HeartEmpty" width={28} height={28} />,
      iconActive: <Icon name="HeartFill" width={28} height={28} />,
      label: 'Liked Characters',
      route: 'Liked_Characters',
      activeRoutes: [
        'Liked_Characters',
        'Liked_Characters_List',
        'Character_Details',
      ],
    },
  ];

  const activeRouteName =
    navigationService.getActiveRouteNameWithDefaultRoute('Episodes_list');

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={[positionHelpers.rowFill, styles.tabbar]}>
        {tabBarItems.map(item => {
          const isActive = item.activeRoutes.includes(
            activeRouteName as AllRoutes,
          );
          const ItemIcon = isActive ? item.iconActive : item.icon;

          return (
            <TouchableOpacity
              key={item.route}
              onPress={() => navigationService.navigate(item.route)}>
              <View style={styles.optionContainer}>
                {ItemIcon}
                <Text
                  style={[
                    styles.optionsText,
                    isActive ? {color: COLORS.YELLOW} : {color: COLORS.WHITE},
                  ]}>
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomTabBar;
