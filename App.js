import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputValue from './component/Input';

export default function App() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/7c33873b4eb2a1476c8623d9/latest/USD')
      .then(response => response.json())
      .then(data => setRate(data.conversion_rates.RUB))
      .catch(error => console.error('Ошибка загрузки:', error));
  }, []);

  return (
    <View style={styles.container}>
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
