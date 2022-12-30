import { StyleSheet, Platform, SafeAreaView, View, Text, TextInput } from 'react-native';
import PostItems from './components/posts';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{paddingVertical:10, paddingHorizontal:20, marginBottom:10, backgroundColor:'#00ab41', alignItems:'center', borderBottomLeftRadius: 20, borderBottomRightRadius:20}}>
        <View style={{backgroundColor:'white', flexDirection:'row', margin:10, padding:10, borderRadius:10}}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput placeholder='Search in Rent.com' style={{width:'100%', marginLeft:5}} multiline={false}/>
        </View>
       <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', paddingVertical:10}}>
        <View style={{flexDirection:'row'}}>
            <Text>Location :</Text>
            <Text style={{fontWeight:'bold', marginLeft:5}}>Kurunegala</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Category :</Text>
            <Text style={{fontWeight:'bold', marginLeft:5}}>Vehical</Text>
        </View>        
       </View>
        
      </View>
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
