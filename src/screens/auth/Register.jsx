import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.loginContainer}>
      <Image
        source={require('../../images/logo.jpg')}
        style={{width: 100, height: 100, alignSelf: 'center'}}
      />
      <Text style={styles.text_header}>Sign Up</Text>
      <Text style={styles.text}>
        Stay connected, follow teams,follow teams and never miss thrilling, Stay
        connected
      </Text>

      <Text style={styles.text2}>First Name</Text>
      <View style={styles.action}>
        <FontAwesome
          name="pencil"
          size={25}
          color="black"
          style={styles.smallIcon}
        />
        <TextInput
          placeholder="Enter Your First Name"
          placeholderTextColor={'rgba(0,0,0,0.8)'}
          style={styles.textInput}
          onChange={e => setEmail(e.nativeEvent.text)}
        />
      </View>

      <Text style={styles.text2}>Last Name</Text>
      <View style={styles.action}>
        <FontAwesome
          name="pencil"
          size={25}
          color="black"
          style={styles.smallIcon}
        />
        <TextInput
          placeholder="Enter Your Last Name"
          placeholderTextColor={'rgba(0,0,0,0.8)'}
          style={styles.textInput}
          onChange={e => setEmail(e.nativeEvent.text)}
        />
      </View>

      <Text style={styles.text2}>Email</Text>
      <View style={styles.action}>
        <FontAwesome
          name="user-o"
          size={25}
          color="black"
          style={styles.smallIcon}
        />
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={'rgba(0,0,0,0.8)'}
          style={styles.textInput}
          onChange={e => setEmail(e.nativeEvent.text)}
        />
      </View>

      <Text style={styles.text2}>Password</Text>
      <View style={styles.action}>
        <FontAwesome
          name="lock"
          size={25}
          color="black"
          style={styles.smallIcon}
        />
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor={'rgba(0,0,0,0.8)'}
          style={styles.textInput}
          onChange={e => setPassword(e.nativeEvent.text)}
        />
      </View>
      <Text style={styles.text2}>Confirm Password</Text>
      <View style={styles.action}>
        <FontAwesome
          name="lock"
          size={25}
          color="black"
          style={styles.smallIcon}
        />

        <TextInput
          placeholder="Confirm your Password"
          placeholderTextColor={'rgba(0,0,0,0.8)'}
          style={styles.textInput}
          onChange={e => setPassword(e.nativeEvent.text)}
        />
      </View>

      <TouchableOpacity style={styles.inBut}>
        <Text style={styles.textSign}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
          Already have an Account
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              marginLeft: 5,
            }}>
            Sign In here
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.continuewith}>----Or Continue with----</Text>
      <View style={styles.inBut2}>
        <FontAwesome name="google" style={styles.smallIcon} />
        <TouchableOpacity>
          <Text style={styles.textSign2}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.inBut2, {marginBottom: 50}]}>
        <FontAwesome name="apple" style={styles.smallIcon} />
        <TouchableOpacity>
          <Text style={styles.textSign2}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
