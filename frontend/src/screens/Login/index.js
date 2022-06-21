import { React, useState } from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import { Image, Button, } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import api from "./../../services/api";

const LoginDisplay = (props) => {
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const navigation = useNavigation();
  const api2 = new api();

  async function login(userName, password) {
    const { loginSucessful, userID } = await api2.getLoginValidation(userName, password);
    if (loginSucessful === true) {
      navigation.navigate("FilmListScreen", { userID: userID });
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/logo.png")} style={styles.image} />
      <SafeAreaView style={styles.inputContainer}>
        <TextInput value={username} style={styles.input} placeholder={"user"} onChangeText={onChangeUsername} />
        <TextInput value={password} style={styles.input} placeholder={"password"} secureTextEntry={true} onChangeText={onChangePassword} />
      </SafeAreaView>
      <Button title={"Login"} titleStyle={styles.buttonText} containerStyle={styles.button} onPress={() => login(username, password)} />
    </View>
    
  );
};

export default LoginDisplay;