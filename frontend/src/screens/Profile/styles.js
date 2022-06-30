import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
    backgroundColor: 'black',
  },
  body: {
    marginTop: 80,
    backgroundColor: 'black',
    height: '100 %'
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
    backgroundColor: 'black',
  },
  textInput: {
    marginTop: 10,
    height: 50,
<<<<<<< HEAD
=======
    textAlignVertical: 'center',
>>>>>>> 8dbf4e971a35e4d0fa6a14e69234e2547ec32ad9
    flexDirection: 'row',
    paddingBottom: 20,
    width: 350,
    backgroundColor: "white",
    borderRadius: 50,
    textAlign: "center",
  },
  dropdown: {
    marginTop: 10,
    height: 50,
<<<<<<< HEAD
    flexDirection: 'row',
    paddingBottom: 20,
    width: 350,
    backgroundColor: "white",
    borderRadius: 50,
    textAlign: "center",
=======
    width: 350,
    textAlign: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
>>>>>>> 8dbf4e971a35e4d0fa6a14e69234e2547ec32ad9
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#59c9a1',
  },
});

export default styles;