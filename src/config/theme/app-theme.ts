import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#4e4f4d',
    ligthGray: '#969695',
    orange:'#ff8517',
    textPrimary: 'white',
    textSecondary: 'gray'
}

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black'
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    display: {
        paddingHorizontal: 10,
        marginBottom: 20
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: 300
    }, 
    subResult: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'space-evenly'
    },
    button: {
        height: 80, 
        width: 80, 
        borderRadius: 50, 
        justifyContent: 'center'
    },
    textButton: {
        color: colors.textPrimary, 
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 300
    }
})