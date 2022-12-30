import { StyleSheet } from "react-native";
import { colors } from '../../models/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // backgroundColor: 'lightgreen',
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
      backgroundColor: colors.white, 
      marginVertical:10, 
      marginHorizontal:10, 
      borderRadius:10,
      shadowColor: colors.black,
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
      backgroundColor:colors.secondary, 
      alignSelf:'flex-end', 
      padding:5, 
      borderRadius:10
    },
    postPlace: {color: colors.secondary},
    postTitle: {fontWeight:'bold'}
  });
  
  export default styles;