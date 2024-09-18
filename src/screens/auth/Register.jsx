import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
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

      <CustomInput
        text={'First Name'}
        icon={'pencil'}
        value={name}
        placeholder={'Enter Your First Name'}
        onChange={e => setName(e.nativeEvent.text)}
      />
      <CustomInput
        text={'Last Name'}
        icon={'pencil'}
        value={name}
        placeholder={'Enter Your Last Name'}
        onChange={e => setName(e.nativeEvent.text)}
      />
      <CustomInput
        text={'Email'}
        icon={'user-o'}
        value={email}
        placeholder={'Enter Email'}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <CustomInput
        text={'Password'}
        icon={'lock'}
        value={password}
        placeholder={'Enter Password'}
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <CustomInput
        text={'Confirm Password'}
        icon={'lock'}
        value={password}
        placeholder={'Confirm Your password'}
        onChange={e => setPassword(e.nativeEvent.text)}
      />

      <TouchableOpacity style={styles.inBut}>
        <Text style={styles.textSign}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text className="text-[#919191] font-bold">
          Already have an Account
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-black ml-1">Sign In here</Text>
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

const CustomInput = ({text, icon, value, placeholder, onChange}) => {
  return (
    <>
      <Text style={styles.text2}>{text}</Text>
      <View style={styles.action}>
        <FontAwesome
          name={icon}
          size={25}
          color="black"
          style={styles.smallIcon}
        />
        <TextInput
          placeholder={placeholder}
          value={value}
          placeholderTextColor={'rgba(0,0,0,0.8)'}
          style={styles.textInput}
          onChange={onChange}
        />
      </View>
    </>
  );
};
