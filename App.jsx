import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import './global.css';
import { ThemeProvider } from './src/providers/ThemeProviders';

function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
