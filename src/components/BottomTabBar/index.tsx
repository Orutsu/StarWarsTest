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
      icon: <Icon name="Film" color={COLORS.WHITE} width={28} height={28} />,
      iconActive: (
        <Icon name="Film" color={COLORS.YELLOW} width={28} height={28} />
      ),
      label: 'Episodes',
      route: 'Episodes',
      activeRoutes: [
        'Episodes_List',
        'Episode_Details',
        'Episodes',
        'Episodes_Character_Details',
      ],
    },
    {
      icon: (
        <Icon name="HeartEmpty" color={COLORS.WHITE} width={28} height={28} />
      ),
      iconActive: (
        <Icon name="HeartFill" color={COLORS.YELLOW} width={28} height={28} />
      ),
      label: 'Liked Characters',
      route: 'Liked_Characters',
      activeRoutes: [
        'Liked_Characters',
        'Liked_Characters_List',
        'Liked_Character_Details',
        'Liked_Character_Episode_Details',
      ],
    },
  ];

  const activeRouteName =
    navigationService.getActiveRouteNameWithDefaultRoute('Episodes_List');
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={[positionHelpers.rowFill, styles.tabBar]}>
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
