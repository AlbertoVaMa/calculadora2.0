import React from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const {
    formula,
    number,
    previusNumber,
    clean,
    typeNumber,
    toggleSign,
    addOperation,
    substractOperation,
    multiplyOperation,
    divideOperation,
    percentageOperation,
    calculate
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style= {styles.display}>
        <Text style={styles.mainResult}>{formula}</Text>
        <Text style={styles.subResult}>{previusNumber}</Text>
      </View>
      <View style= {styles.row}>
        <CalculatorButton onPress={clean} label="AC" color={colors.ligthGray}/>
        <CalculatorButton onPress={toggleSign} label="+/-" color={colors.ligthGray}/>
        <CalculatorButton onPress={percentageOperation} label="%" color={colors.ligthGray}/>
        <CalculatorButton onPress={divideOperation} label="÷" color= {colors.orange}/>
      </View>
      <View style= {styles.row}>
        <CalculatorButton onPress={() => {typeNumber('7')}} label="7"/>
        <CalculatorButton onPress={() => {typeNumber('8')}} label="8"/>
        <CalculatorButton onPress={() => {typeNumber('9')}} label="9"/>
        <CalculatorButton onPress={multiplyOperation} label="x" color= {colors.orange}/>
      </View>
      <View style= {styles.row}>
        <CalculatorButton onPress={() => {typeNumber('4')}} label="4"/>
        <CalculatorButton onPress={() => {typeNumber('5')}} label="5"/>
        <CalculatorButton onPress={() => {typeNumber('6')}} label="6"/>
        <CalculatorButton onPress={substractOperation} label="-" color= {colors.orange}/>
      </View>
      <View style= {styles.row}>
        <CalculatorButton onPress={() => {typeNumber('1')}} label="1"/>
        <CalculatorButton onPress={() => {typeNumber('2')}} label="2"/>
        <CalculatorButton onPress={() => {typeNumber('3')}} label="3"/>
        <CalculatorButton onPress={addOperation} label="+" color= {colors.orange}/>
      </View>
      <View style= {styles.row}>
        <CalculatorButton onPress={() => {typeNumber('0')}} label="0" doubleSize= {true}/>
        <CalculatorButton onPress={() => {typeNumber('.')}} label="."/>
        <CalculatorButton onPress={calculate} label="=" color= {colors.orange}/>
      </View>
    </View>
  )
}
