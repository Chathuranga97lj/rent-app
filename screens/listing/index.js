import { View, Text} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import {Auth } from 'aws-amplify';

const Listing = () => {
  //Auth.signOut();
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log(user.attributes.email);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })

  return (
    <View>
      <Text>Listing Page</Text>
    </View>
  );
}

export default withAuthenticator(Listing);
