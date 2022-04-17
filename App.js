import * as React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import Constants from 'expo-constants';
import styles from './styles/appStyle';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const whatsApp = 'WhatsApp';
  const sohbetler = 'SOHBETLER';
  const durum = 'DURUM';
  const aramalar = 'ARAMALAR';
  return (
    <View style={styles.container}>
      <View style={styles.contTop}>
        <View style={styles.contTopLeft}>{whatsApp}</View>
        <View style={styles.contTopRight}>
          <AntDesign
            style={{ marginRight: 10 }}
            name="search1"
            size={20}
            color="white"
          />
          <Ionicons name="ellipsis-vertical" size={20} color="white" />
        </View>
      </View>

      <View style={styles.contMiddle}>
        <Ionicons
          style={{ opacity: 0.7 }}
          name="ios-camera"
          size={20}
          color="white"
        />
        <View style={styles.contMiddleRight}>
          <Text style={styles.sohbetler}> {sohbetler} </Text>
          <Text style={styles.durum}>{durum} </Text>
          <Text style={styles.aramalar}>{aramalar}</Text>
        </View>
      </View>

      <View style={styles.contBottom}>
        <View style={styles.contBottomData1}>
          <Image
            style={styles.dataimage}
            source={require('./assets/dev1.png')}
          />
          <View style={styles.dataText}>
            <Text style={styles.dataTextName}>NOKTA ATISI</Text>
            <Text style={styles.dataTextMessage}>ders başladı arkadaşlar </Text>
          </View>
        </View>

        <View style={styles.contBottomData2}>
          <Image
            style={styles.dataimage}
            source={require('./assets/dev1.png')}
          />
          <View style={styles.dataText}>
            <Text style={styles.dataTextName}>Muhendis BEY </Text>
            <Text style={styles.dataTextMessage}>evet </Text>
          </View>
        </View>
      </View>
      <MaterialCommunityIcons
        style={styles.contSendM}
        name="message-text-outline"
        size={24}
        color="white"
      />
    </View>
  );
}
