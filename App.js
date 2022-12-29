import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style='auto' backgroundColor='#00ab41'/>
        <View style={styles.postWrap}>
          <Image 
            source={{uri: "https://media.istockphoto.com/id/171259869/photo/villa-sri-lanka.jpg?s=612x612&w=0&k=20&c=KxBqowg7IOR5J0G81fkouPh_xAc5S7cN7TAQmsVjAio="}}
            style={styles.postImage}
          ></Image> 
          <View style={styles.postContentWrap}> 
            <View>
              <Text style={styles.postTitle}>Hotel A</Text>
              <Text style={styles.postPlace}>Kurunegala</Text>
            </View>
            <Text style={styles.postValue}>Rs:5000 Day</Text>
          </View> 
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightgreen',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  safeArea:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 60 : 0
  },
  postWrap:{
    display: "flex", 
    flexDirection: "row", 
    backgroundColor: "white", 
    marginVertical:10, 
    marginHorizontal:10, 
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {width:0, height:1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  postImage: {
    height:100, 
    width:100, 
    borderRadius:30, 
    marginLeft:10, 
    marginRight:20, 
    marginVertical:10
  },
  postContentWrap: {
    justifyContent: "space-around", 
    paddingVertical: 10
  },
  postValue: {
    color: 'orange', 
    backgroundColor:'#293241', 
    alignSelf:'flex-end', 
    padding:5, 
    borderRadius:10
  },
  postPlace: {color: '#293241'},
  postTitle: {fontWeight:'bold'}
});
