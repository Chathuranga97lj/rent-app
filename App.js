import { StyleSheet, Platform, SafeAreaView, View, Text, TextInput } from 'react-native';
import PostItems from './components/posts';
import HeaderForMobile from './components/headerForMobile';
import { colors } from './models/colors';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style='auto' backgroundColor='#00ab41'/>
      <HeaderForMobile />
      <PostItems />
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
