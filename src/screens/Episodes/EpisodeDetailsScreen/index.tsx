import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {EpisodesParamList} from 'src/navigation/EpisodesNavigator';
import {RouteProp} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {FETCH_FILM_CHARACTERS, FETCH_FILM_DETAILS} from 'src/queries/film';
import {Film, Person} from 'src/__generated__/graphql';
import {COLORS, positionHelpers, spacingHelpers} from 'src/styles';
import {Icon} from 'src/components/Icon';
import navigationService from 'src/navigation/navigationService';
import CharacterItem from 'src/components/CharacterItem';

export type EpisodeDetailsScreenProps = {
  navigation: StackNavigationProp<EpisodesParamList, 'Episode_Details'>;
  route: RouteProp<EpisodesParamList, 'Episode_Details'>;
};

interface FetchFilm {
  film: Film;
}

const EpisodeDetailsScreen: FC<EpisodeDetailsScreenProps> = props => {
  const [episodeId, setEpisodeId] = useState(props.route.params?.episodeId);
  const [pagination, setPagination] = useState({first: 10, last: 10});
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [characters, setCharacters] = useState<Person[]>([]);
  const {
    data: filmData,
    loading: filmLoading,
    error: filmError,
  } = useQuery<FetchFilm>(FETCH_FILM_DETAILS, {
    variables: {
      filmId: episodeId,
    },
  });

  useEffect(() => {
    setCharacters([]);
    setEpisodeId(props.route.params?.episodeId);
    setPagination({first: 10, last: 10});
  }, [props.route.params?.episodeId]);

  const {
    data: charactersData,
    loading: charactersLoading,
    error: charactersError,
  } = useQuery<FetchFilm>(FETCH_FILM_CHARACTERS, {
    variables: {
      filmId: props.route.params?.episodeId,
      first: pagination.first,
      last: pagination.last,
    },
  });

  useEffect(() => {
    let newCharacters = charactersData?.film.characterConnection?.characters
      ? [...charactersData?.film.characterConnection?.characters]
      : [];
    //@ts-expect-error
    setCharacters(prev => [...prev, ...newCharacters]);
  }, [charactersData]);

  useEffect(() => {
    if (filmError) {
      Alert.alert('Error happened!', filmError.message);
    }
    if (charactersError) {
      Alert.alert('Error happened!', charactersError.message);
    }
  }, [filmError, charactersError]);

  const film = useMemo(() => {
    if (!filmData) {
      return null;
    } else {
      return filmData.film;
    }
  }, [filmData]);

  const handleOnBack = useCallback(() => {
    navigationService.goBack();
  }, []);

  const handleNavigationToCharacter = useCallback(
    (id?: string) => {
      navigationService.push(
        props.route.name === 'Episode_Details'
          ? 'Episodes_Character_Details'
          : 'Liked_Character_Details',
        {
          characterId: id,
        },
      );
    },
    [props.route.name],
  );

  const onEndReached = async () => {
    if (
      !onEndReachedCalledDuringMomentum &&
      charactersData?.film?.characterConnection?.totalCount
    ) {
      const totalCount = charactersData?.film?.characterConnection?.totalCount;
      if (pagination.first < totalCount) {
        const newPagination = {
          first: pagination.first + 10,
          last:
            pagination.first + 10 > totalCount
              ? totalCount % 10
              : pagination.last,
        };
        setPagination(newPagination);
      }
    }
    setOnEndReachedCalledDuringMomentum(true);
  };

  const FilmHeaderComponent = useCallback(() => {
    if (filmLoading) {
      return (
        <ActivityIndicator
          color={COLORS.BLACK}
          size="large"
          style={spacingHelpers.mT16}
        />
      );
    } else {
      return (
        <View>
          <View style={[positionHelpers.rowStart]}>
            <TouchableOpacity onPress={handleOnBack}>
              <Icon name="GoBack" width={30} height={25} />
            </TouchableOpacity>
            <View style={spacingHelpers.mL8}>
              <Text style={styles.episodeText}>Episode {film?.episodeID}</Text>
              <Text style={[styles.filmReleaseDate]}>
                Release date: {film?.releaseDate}
              </Text>
            </View>
          </View>
          <View style={[styles.filmItemContainer, spacingHelpers.mT16]}>
            <Text style={styles.aLongTimeText}>
              a long time ago in a galaxy{'\n'}far, far away..
            </Text>
            <Text style={[styles.filmTitle, spacingHelpers.mT8]}>
              {film?.title}
            </Text>
            <Text style={[styles.filmOpeningScroll, spacingHelpers.mT8]}>
              {film?.openingCrawl}
            </Text>
          </View>
          <Text style={[styles.statsText, spacingHelpers.mT16]}>
            In this film you will see {film?.planetConnection?.totalCount}{' '}
            planets, {film?.vehicleConnection?.totalCount} vehicles,{' '}
            {film?.speciesConnection?.totalCount} species, and characters listed
            below:
          </Text>
        </View>
      );
    }
  }, [film, handleOnBack, filmLoading]);

  const FilmFooterComponent = useCallback(() => {
    if (charactersLoading) {
      return (
        <ActivityIndicator
          color={COLORS.BLACK}
          size="large"
          style={spacingHelpers.mT16}
        />
      );
    } else {
      return null;
    }
  }, [charactersLoading]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <FlatList
        data={characters}
        ListHeaderComponent={<FilmHeaderComponent />}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={[spacingHelpers.pH16, spacingHelpers.pB16]}
        renderItem={({item}) => {
          return (
            <CharacterItem
              onPress={() => handleNavigationToCharacter(item?.id)}
              person={item}
              style={spacingHelpers.mT8}
            />
          );
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FilmFooterComponent />}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
      />
    </SafeAreaView>
  );
};

export default EpisodeDetailsScreen;
