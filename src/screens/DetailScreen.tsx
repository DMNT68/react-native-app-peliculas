import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image style={styles.posterImage} source={{uri}} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  imageBorder: {
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    flex: 1,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  backButton: {
    borderRadius: 100,
    position: 'absolute',
    zIndex: 999,
    elevation: 11,
    top: 30,
    left: 5,
  },
});
