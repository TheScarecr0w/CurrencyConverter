import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputValue from './component/Input';
import Currency from './component/Currency';

export default function App() {
  const [rate, setRate] = useState(null);
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    if (!currency) return;

    fetch(`https://v6.exchangerate-api.com/v6/7c33873b4eb2a1476c8623d9/latest/${currency}`)
      .then(response => response.json())
      .then(data => {
        if (data.conversion_rates) {
          setRate(data.conversion_rates.RUB);
        } else {
          console.error('Ошибка API:', data);
        }
      })
      .catch(error => console.error('Ошибка загрузки:', error));
  }, [currency]);

  return (
    <View style={styles.container}>
      <Text>{currency}</Text>
      <Currency setCurrency={setCurrency} /> {}
      {rate ? (
        <InputValue rate={rate} />
      ) : (
        <Text>Загрузка курса...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
