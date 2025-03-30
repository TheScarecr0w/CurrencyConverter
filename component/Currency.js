import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function Currency({ setCurrency }) { // setCurrency приходит из родителя

    const [curr, setCurr] = useState('');

    const onChangeCurrency = (text) => {
        setCurr(text);
        setCurrency(text);
    };

    return (
        <View>
            <TextInput 
                placeholder='Тип валюты (USD, EUR...)' 
                style={styles.TypeOfCurrency} 
                value={curr} 
                onChangeText={onChangeCurrency}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    TypeOfCurrency: {
        borderBottomWidth: 1,
        minWidth: '60%',
        textAlign: 'center',
        fontSize: 18,
    },
});