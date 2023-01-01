import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const PostItems = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
        <Pressable onPress={() => {navigation.navigate("PostDetails")}} style={styles.postWrap}>
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
        </Pressable>
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
    )
}

export default PostItems;