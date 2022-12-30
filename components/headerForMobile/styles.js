import { StyleSheet } from "react-native";
import { colors } from '../../models/colors';

const styles = StyleSheet.create({
    headerWrap:{
      paddingVertical:10, 
      paddingHorizontal:20, 
      marginBottom:10, 
      backgroundColor: colors.primary, 
      alignItems:'center', 
      borderBottomLeftRadius: 20, 
      borderBottomRightRadius:20
    },
    searchByTextWrap:{
      backgroundColor:'white', 
      flexDirection:'row',
      margin:10, 
      padding:10, 
      borderRadius:10
    },
    searchPlaceholder:{
      width:'100%', 
      marginLeft:5
    },
    locationCatSearchWrap:{
      flexDirection:'row', 
      justifyContent:'space-between', 
      width:'100%', 
      paddingVertical:10
    },
    locationCatRow:{
      flexDirection:'row'
    },
    LocationCatTextHeader:{
      marginLeft: 5
    },
    LocationCatTextValue:{
      fontWeight:'bold', 
      marginLeft:5
    }
  });
  
  export default styles;