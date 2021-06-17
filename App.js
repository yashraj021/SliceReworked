import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as RNStatusBar,
  Image,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Page } from "./src/features/TopOffers/component/Page";

import Image1 from "./assets/1.jpg";
import Image2 from "./assets/2.jpg";
import Image3 from "./assets/3.jpg";
import Image4 from "./assets/4.jpg";
import Image5 from "./assets/5.jpg";
import Image6 from "./assets/6.jpg";
import Image7 from "./assets/7.jpg";
import Image8 from "./assets/8.jpg";
import Image9 from "./assets/9.jpg";
import Image10 from "./assets/2.jpg";
import Image11 from "./assets/4.jpg";
import Image12 from "./assets/7.jpg";

export default function App() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  const translateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((e) => {
    console.log(e.contentOffset.y);
    translateY.value = e.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "left",
          marginLeft: 30,
        }}
      >
        Shop from your favourite brands
      </Text>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {images.map((image, index) => (
            <Page
              image={image}
              key={index.toString()}
              index={index}
              tY={translateY}
            />
          ))}
        </Animated.ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 30,
    marginTop: RNStatusBar.currentHeight + 20,
  },
  scroll: {
    width: "100%",
    marginVertical: 10,
  },
});
