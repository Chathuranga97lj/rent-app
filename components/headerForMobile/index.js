import {  View, Text, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../models/colors';
import styles from './styles';

const HeaderForMobile = () => {
    return(
        <>
        <View style={styles.headerWrap}>
        <View style={styles.searchByTextWrap}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput placeholder='Search in Rent.com' style={styles.searchPlaceholder} multiline={false}/>
        </View>
       <View style={styles.locationCatSearchWrap}>
        <View style={styles.locationCatRow}>
            <Entypo name="location-pin" size={24} color="black" />
            <Text style={styles.LocationCatTextHeader}>Location :</Text>
            <Text style={styles.LocationCatTextValue}>Kurunegala</Text>
        </View>
        <View style={styles.locationCatRow}>
            <AntDesign name="bars" size={24} color="black" />
            <Text style={styles.LocationCatTextHeader}>Category :</Text>
            <Text style={styles.LocationCatTextValue}>Vehical</Text>
        </View>        
       </View>    
      </View>
        </>
    )
}

export default HeaderForMobile;