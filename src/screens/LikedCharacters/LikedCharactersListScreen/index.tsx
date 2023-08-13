import React, {useCallback} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {spacingHelpers} from 'src/styles';
import CharacterItem from 'src/components/CharacterItem';
import {useTypedSelector} from 'src/store';
import navigationService from 'src/navigation/navigationService';

const LikedCharactersListScreen = () => {
  const {likedCharacters} = useTypedSelector(store => store.likedCharacters);
  const EpisodesEmptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Apparently you don't like any characters of Star Wars :{'('}
        </Text>
      </View>
    );
  }, []);

  const EpisodesHeaderComponent = useCallback(() => {
    return (
      <View>
        <Text style={styles.headerText}>Liked characters</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <FlatList
        data={likedCharacters}
        ListHeaderComponent={<EpisodesHeaderComponent />}
        ListEmptyComponent={<EpisodesEmptyComponent />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[spacingHelpers.pH16, spacingHelpers.pB16]}
        renderItem={({item}) => {
          return (
            <CharacterItem
              onPress={() => {
                navigationService.push('Liked_Character_Details', {
                  characterId: item?.id,
                });
              }}
              person={item}
              style={spacingHelpers.mT16}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default LikedCharactersListScreen;
