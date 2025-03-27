import React, { useState, useRef, useEffect } from 'react';

enum Operations {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '÷',
    percentage = '%'
}

export const useCalculator = () => {
    const [number, setNumber] = useState('');
    const [previusNumber, setPreviusNumber] = useState('');
    const operation = useRef<Operations>();
    const [formula, setFormula] = useState('');
    const typeNumber = (userInput: string) => {
        // validaciones a la hora de ingresar el numero
        setNumber(number + userInput);
    };

    useEffect(() => {
        if (operation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${operation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        //TODO: TAREA Realizar el calculo previo
    }, [formula]);

    const clean = () => {
        setNumber('');
        setPreviusNumber('');
        setFormula('');
        operation.current = undefined;
    };

    const toggleSign = () => {
        // put your code this
    };

    const addOperation = () => {
        operation.current = Operations.add;
        setPreviusNumber(number);
        setNumber('');
    };

    const substractOperation = () => {
        operation.current = Operations.substract;
        setPreviusNumber(number);
        setNumber('');
    };

    const multiplyOperation = () => {
        operation.current = Operations.multiply;
        setPreviusNumber(number);
        setNumber('');
    };

    const divideOperation = () => {
        operation.current = Operations.divide;
        setPreviusNumber(number);
        setNumber('');
    };

    const percentageOperation = () => {
        operation.current = Operations.percentage;
        setPreviusNumber(number);
        setNumber('');
    };

    const calculate = () => {
        const resultado = calculator();
        setFormula(`${resultado}`);
        setNumber(`${resultado}`);
        operation.current = undefined;
    };

    const calculator = (): number => {
        let resultado: number;
        const [firstValue, operator, secondValue] = formula.split(' ');
        const firstNumber = Number(firstValue);
        const secondNumber = Number(secondValue);
        switch (operator) {
            case Operations.add:
                resultado = firstNumber + secondNumber;
                break;
            case Operations.substract:
                resultado = firstNumber - secondNumber;
                break;
            case Operations.multiply:
                resultado = firstNumber * secondNumber;
                break;
            case Operations.divide:
                resultado = firstNumber / secondNumber;
                break;
            case Operations.percentage:
                break;
            default:
                console.log('Error, operacion no soportada');
        }
        return resultado;
    };

    return {
        formula,
        number,
        previusNumber,
        typeNumber,
        clean,
        toggleSign,
        addOperation,
        substractOperation,
        multiplyOperation,
        divideOperation,
        percentageOperation,
        calculate
    };
};
