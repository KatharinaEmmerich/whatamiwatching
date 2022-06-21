import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const MovieOfTheDayListScreen = (route) => {
  const navigation = useNavigation();
  //const { userID } = route.params;
  const api2 = new api();

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function getMovies() {
      await getMovieOfTheDayList().then((items) => setMovies(items));
    }
    getMovies();
  }, []);

  async function getMovieOfTheDayList() {
    list2 = [
      {
        adults,
        genre_ids: [],
        id,
        overview,
        release_date,
        title,
      },
    ] = await api2.getMovieOfTheDay(1);
    return list2;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies of the Day:</Text>
      {
        <FlatList
          data={movies}
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <TouchableOpacity onPress={() => navigation.navigate("FilmDetails", { movieID: item.id })}>
              <View>
                <Text style={styles.item}>{item.title}</Text>
              </View>

            </TouchableOpacity>;
          }}
        />
      }
    </View>
  );
};

export default MovieOfTheDayListScreen;
