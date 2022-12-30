import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import PostItems from './components/posts';


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 60 : 0
  },
});
