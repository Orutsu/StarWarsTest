import React, {FC, useCallback, useEffect, useMemo} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {LikedCharactersParamList} from 'src/navigation/LikedCharactersNavigator';
import {useQuery} from '@apollo/client';
import {FETCH_CHARACTER_DETAILS} from 'src/queries/person';
import {Person} from 'src/__generated__/graphql';
import {Icon} from 'src/components/Icon';
import {COLORS, positionHelpers, spacingHelpers} from 'src/styles';
import navigationService from 'src/navigation/navigationService';
import EpisodeItem from 'src/components/EpisodeItem';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from 'src/store';
import {
  addLikedCharacter,
  removeLikedCharacter,
} from 'src/store/LikedCharacters';

export type CharactersDetailsScreenProps = {
  navigation: StackNavigationProp<
    LikedCharactersParamList,
    'Liked_Character_Details'
  >;
  route: RouteProp<LikedCharactersParamList, 'Liked_Character_Details'>;
};

interface FetchPerson {
  person: Person;
}

const CharactersDetailsScreen: FC<CharactersDetailsScreenProps> = props => {
  const {likedCharacters} = useTypedSelector(store => store.likedCharacters);
  const dispatch = useDispatch();
  const {data, loading, error} = useQuery<FetchPerson>(
    FETCH_CHARACTER_DETAILS,
    {
      variables: {
        personId: props.route.params?.characterId,
      },
    },
  );
  console.log('CharactersDetailsScreen', props.route.name);

  useEffect(() => {
    if (error) {
      Alert.alert('Error happened!', error.message);
    }
  }, [error]);

  const character = useMemo(() => {
    if (!data) {
      return null;
    } else {
      return data.person;
    }
  }, [data]);

  const isCharacterLiked = useMemo(() => {
    if (
      likedCharacters.find(
        likedCharacter => likedCharacter?.id === character?.id,
      )
    ) {
      return true;
    } else {
      return false;
    }
  }, [character, likedCharacters]);

  const handleOnBack = useCallback(() => {
    navigationService.goBack();
  }, []);

  const handleLike = useCallback(() => {
    if (isCharacterLiked) {
      dispatch(removeLikedCharacter(character?.id));
    } else {
      dispatch(addLikedCharacter(character));
    }
  }, [character, dispatch, isCharacterLiked]);

  const handleNavigationToEpisode = useCallback(
    (id?: string) => {
      navigationService.push(
        props.route.name === 'Liked_Character_Details'
          ? 'Liked_Character_Episode_Details'
          : 'Episode_Details',
        {
          episodeId: id,
        },
      );
    },
    [props.route.name],
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <ActivityIndicator
          color={COLORS.BLACK}
          size="large"
          style={spacingHelpers.mT16}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <ScrollView contentContainerStyle={[spacingHelpers.pH16]}>
        <View style={[positionHelpers.rowStart]}>
          <TouchableOpacity onPress={handleOnBack}>
            <Icon name="GoBack" width={30} height={25} />
          </TouchableOpacity>
          <View style={spacingHelpers.mL8}>
            <Text style={styles.characterName}>{character?.name}</Text>
          </View>
        </View>
        <View style={positionHelpers.rowFill}>
          <View>
            <Text style={[styles.subTitle, spacingHelpers.mT8]}>
              Personal information
            </Text>
            <Text
              style={[styles.personalInformationFields, spacingHelpers.mT8]}>
              Birth Year:{' '}
              <Text style={{color: COLORS.DARK_YELLOW}}>
                {character?.birthYear}
              </Text>
            </Text>
            <Text
              style={[styles.personalInformationFields, spacingHelpers.mT8]}>
              Height:{' '}
              <Text style={{color: COLORS.DARK_YELLOW}}>
                {character?.height} cm
              </Text>
            </Text>
            <Text
              style={[styles.personalInformationFields, spacingHelpers.mT8]}>
              Mass:{' '}
              <Text style={{color: COLORS.DARK_YELLOW}}>
                {character?.mass} kg
              </Text>
            </Text>
            <Text
              style={[styles.personalInformationFields, spacingHelpers.mT8]}>
              Homeworld:{' '}
              <Text style={{color: COLORS.DARK_YELLOW}}>
                {character?.homeworld?.name}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleLike}
            style={[styles.likeContainer, positionHelpers.alighCenter]}>
            <Icon
              name={isCharacterLiked ? 'LikeFill' : 'LikeEmpty'}
              width={100}
              height={100}
              color={isCharacterLiked ? COLORS.YELLOW : COLORS.WHITE}
            />
            <Text
              style={[
                styles.likeText,
                spacingHelpers.mT4,
                {color: isCharacterLiked ? COLORS.YELLOW : COLORS.WHITE},
              ]}>
              {isCharacterLiked ? 'Remove' : 'Like'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.subTitle, spacingHelpers.mT16]}>Appearances</Text>
        {character?.filmConnection?.films?.map(item => {
          return (
            <EpisodeItem
              key={`${item?.id}`}
              onPress={() => handleNavigationToEpisode(item?.id)}
              film={item}
              style={spacingHelpers.mT16}
            />
          );
        })}
        <View style={{height: 50}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharactersDetailsScreen;
