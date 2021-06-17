import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const IMAGE_HEIGHT = height / 3 - 70;

export const Page = ({ index, image, tY }) => {
  const ImageStyle = useAnimatedStyle(() => {
    const translateY =
      tY.value +
      interpolate(
        tY.value,
        [0, (IMAGE_HEIGHT + 25) * index],
        [0, -(IMAGE_HEIGHT + 25) * index],
        Extrapolate.CLAMP
      );

    const scale = interpolate(
      tY.value,
      [0, IMAGE_HEIGHT * index, (IMAGE_HEIGHT + 20) * (index + 2)],
      [1, 1, 0],
      Extrapolate.CLAMP
    );

    const opcity = interpolate(
      tY.value,
      [0, IMAGE_HEIGHT * index, (IMAGE_HEIGHT + 20) * (index + 1)],
      [1, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY }, { scale }],
      opacity: opcity,
    };
  });

  return <Animated.Image style={[styles.image, ImageStyle]} source={image} />;
};

const styles = StyleSheet.create({
  image: {
    height: IMAGE_HEIGHT,
    width: 400,
    borderRadius: 20,
    marginVertical: 10,
  },
});
