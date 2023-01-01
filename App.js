import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import Home from './screens/home';
import { colors } from './models/colors';
import { StatusBar } from 'expo-status-bar';
import Route from './navigation/router';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style='auto' backgroundColor='#00ab41'/>
      <Route />
      {/* <Home /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    // backgroundColor:colors.backgroundColor
  },
});
