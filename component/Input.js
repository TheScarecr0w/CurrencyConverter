import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function InputValue({ rate }) {

    const [value, setValue] = useState('')
    const [result, setResult] = useState(null);

    const onChangeHandler = (text) => {
        setValue(text);
    }

    const onPressHandler = () => {
        if (value) {
            const converted = (parseFloat(value) * rate).toFixed(2);
            setResult(converted);
        } else {
            Alert.alert('Converter', 'Нужно ввести сумму');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.Input} 
                placeholder='Ввести $' 
                keyboardType="numeric"
                value={value}
                onChangeText={onChangeHandler}
            />
            <Button title={'Конвертировать'} color={'blue'} onPress={onPressHandler} />
            {result !== null && <Text style={styles.OutResult}>Сумма в RUB: {result}</Text>}  {}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    Input: {
        paddingTop: 20,
        borderBottomWidth: 1,
        minWidth: '60%',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
    },
    OutResult: {
        fontSize: 22,
        paddingTop: 40,
        fontWeight: 'bold',
    }
});