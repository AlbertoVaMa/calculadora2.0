/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { CalculatorScreen } from './screens/presentation/screens/CalculatorScreen';
import { View } from 'react-native';
import { styles } from './config/theme/app-theme';

function App() {
  return (
    <View style={ styles.background}>
      <CalculatorScreen />
    </View>
  );
}


export default App;
