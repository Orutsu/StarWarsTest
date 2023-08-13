import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
import {useQuery} from '@apollo/client';
import {FETCH_ALL_FILMS} from 'src/queries/film';
import {FilmsConnection} from 'src/__generated__/graphql';
import {COLORS, positionHelpers, spacingHelpers} from 'src/styles';
import {Icon} from 'src/components/Icon';
import navigationService from 'src/navigation/navigationService';

interface FetchFilms {
  allFilms: FilmsConnection;
}

enum SortOrder {
  ASCENDING,
  DESCENDING,
}

const EpisodesListScreen = () => {
  const [currentSortOrder, setCurrentSortOrder] = useState<SortOrder>(
    SortOrder.ASCENDING,
  );
  const {data, loading, error} = useQuery<FetchFilms>(FETCH_ALL_FILMS);

  const episodes = useMemo(() => {
    if (!data) {
      return [];
    } else {
      let unsortedEpisodes = data?.allFilms?.films
        ? [...data?.allFilms?.films]
        : [];

      return unsortedEpisodes?.sort((a: any, b: any) => {
        if (currentSortOrder === SortOrder.ASCENDING) {
          return (
            new Date(a?.releaseDate).getTime() -
            new Date(b?.releaseDate).getTime()
          );
        } else {
          return (
            new Date(b?.releaseDate).getTime() -
            new Date(a?.releaseDate).getTime()
          );
        }
      });
    }
  }, [currentSortOrder, data]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error happened!', error.message);
    }
  }, [error]);

  const EpisodesEmptyComponent = useCallback(() => {
    if (loading) {
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
  }, [loading]);

  const EpisodesHeaderComponent = useCallback(() => {
    if (loading) {
      return null;
    } else {
      return (
        <View style={[positionHelpers.rowFill]}>
          <Text style={styles.headerText}>Episodes</Text>
          <TouchableOpacity
            onPress={() =>
              setCurrentSortOrder(prev =>
                prev === SortOrder.ASCENDING
                  ? SortOrder.DESCENDING
                  : SortOrder.ASCENDING,
              )
            }>
            {currentSortOrder === SortOrder.ASCENDING && (
              <Icon name="SortDown" width={25} height={25} />
            )}
            {currentSortOrder === SortOrder.DESCENDING && (
              <Icon name="SortUp" width={25} height={25} />
            )}
          </TouchableOpacity>
        </View>
      );
    }
  }, [currentSortOrder, loading]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <FlatList
        data={episodes}
        ListHeaderComponent={<EpisodesHeaderComponent />}
        ListEmptyComponent={<EpisodesEmptyComponent />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[spacingHelpers.pH16, spacingHelpers.pB16]}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigationService.navigate('Episodes', {
                  screen: 'Movie_Details',
                  params: {
                    episodeId: item?.id,
                  },
                });
              }}
              style={[styles.filmItemContainer, spacingHelpers.mT16]}>
              <Text style={styles.filmTitle}>{item?.title}</Text>
              <Text style={styles.filmReleaseDate}>{item?.releaseDate}</Text>
              <Text style={styles.filmOpeningScroll}>
                {`${item?.openingCrawl?.substring(0, 50)}...`}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default EpisodesListScreen;
