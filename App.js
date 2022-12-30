import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import Home from './screens/home';
import { colors } from './models/colors';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style='auto' backgroundColor='#00ab41'/>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 60 : 0,
    backgroundColor:colors.backgroundColor
  },
});
