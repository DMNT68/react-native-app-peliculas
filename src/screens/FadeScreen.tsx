import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity: opacity,
        }}
      />

      <Button title="fadein" onPress={() => fadeIn} />
      <Button title="fadeout" onPress={() => fadeOut} />
    </View>
  );
};
