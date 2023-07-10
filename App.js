import React, { useState, useEffect, Component, useRef } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const [result, setResult] = useState(0);

  const dis = async () => {
    setResult(Math.sqrt(x * x + y * y + z * z));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Distance of (x, y, z) from (0, 0, 0)</Text>
      <View>
        <Text allowFontScaling={false}>
          Write the code for this app which calculates
        </Text>
        <Text allowFontScaling={false}>d = Math.sqrt(x*x+y*y+z*z)</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          allowFontScaling={false}
          placeholder="Input x"
          clearButtonMode="while-editing"
          keyboardType="text"
          defaultValue={x || ''}
          placeholderTextColor="grey"
          onChangeText={(x) => setX(x)}
        />
        <TextInput
          style={styles.input}
          allowFontScaling={false}
          placeholder="Input y"
          clearButtonMode="while-editing"
          keyboardType="text"
          defaultValue={y || ''}
          placeholderTextColor="grey"
          onChangeText={(y) => setY(y)}
        />
        <TextInput
          style={styles.input}
          allowFontScaling={false}
          placeholder="Input z"
          clearButtonMode="while-editing"
          keyboardType="text"
          defaultValue={z || ''}
          placeholderTextColor="grey"
          onChangeText={(z) => setZ(z)}
        />
      </View>

      <Button title="CALCULATE DISTANCE" onPress={() => dis()} />
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        distance to ({x}, {y}, {z}) is d = {result.toFixed(2)}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 15,
  },
  inputs: {
    marginTop: 30,
    marginBottom: 120,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
  },
});
