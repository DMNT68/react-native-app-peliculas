import React from 'react';
import {FlatList, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 10}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text style={{fontSize: 25, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 25, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text style={{fontSize: 25, marginTop: 10, fontWeight: 'bold'}}>
            Actores
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <CastItem actor={item} />}
            style={{marginTop: 10, height: 70,}}
          />
        </View>
      </View>
    </>
  );
};
