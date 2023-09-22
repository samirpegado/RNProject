import { StyleSheet, Text, View } from 'react-native';

import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
      </View>
      <View
        style={{
          backgroundColor: 'black'
        }}>
        <Footer />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});