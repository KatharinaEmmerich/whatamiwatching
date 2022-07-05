import React, { useState, useEffect, useContext } from "react";
import { View, Button, Image, TextInput, ToastAndroid, Platform, AlertIOS, Text } from "react-native";
import api from "../../services/api";
import styles from "./styles";
import { ContextTest } from "../../../App";
import DropDownPicker from 'react-native-dropdown-picker';


const ProfileScreen = (route) => {
  const things = useContext(ContextTest);
  const userID = things.userID;
  const api2 = new api();

  //Dropdown
  const [open, setOpen] = useState(false);
  const [genreID, setGenreID] = useState(null);
  const [items, setItems] = useState([]);
  const [favoriteGenre, setFavoriteGenre] = useState([]);


  useEffect(() => {
    async function getGenres() {
      await getGenresList().then((items) => setItems(items.map(item => {
        return { label: item.name, value: item.id };
      })));
    }
    async function getFavoritGenreForUser(userID) {
      await getFavoritGenreFromApi(userID).then((genre) => {
        setFavoriteGenre(genre)
        setGenreID(genre.genreID)
      })
    }
    getGenres();
    getFavoritGenreForUser(userID);
  }, []);

  async function getGenresList() {
    genreList = await api2.getGenres();
    return genreList;
  }

  async function getFavoritGenreFromApi(userIdParameter) {
    favGenre = await api2.getFavoriteGenre(userIdParameter);
    return favGenre;
  }

  async function postChanges(newFavGenreID) {
    postResponse = await api2.updateFavoriteGenre(userID, newFavGenreID)
    if (postResponse) {
      notifyMessage("Changes saved");
    } else {
      notifyMessage("Changes could not be saved")
    }
    //reload seite
  }

  function notifyMessage(message) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
          <Text style={styles.label}>user name</Text>
          <TextInput style={styles.textInput} editable={false} value={favoriteGenre && favoriteGenre.user ? favoriteGenre.user.userName : "Loading..."} />

          <Text style={styles.label}>favorite genre</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={open}
            value={genreID}
            items={items}
            setOpen={setOpen}
            setValue={setGenreID}
            setItems={setItems}
          />

          <Button title={"Save changes"} titleStyle={styles.buttonText} containerStyle={styles.button} onPress={() => postChanges(genreID)} />

      </View>
    </View>
  )
};

export default ProfileScreen;
