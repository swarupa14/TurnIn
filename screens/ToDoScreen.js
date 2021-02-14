import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Assignments = [
  {
    id: "1",
    status: 1, //status=1 means missing , status=2 means assigned but not submitted yet, status=3 means already done/submitted
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    Course_Code: "DSP 4432",
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Feb 4, 2021 11.59pm",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
  {
    id: "2",
    status: 2, //status=1 means missing , status=2 means assigned but not submitted yet, status=3 means already done/submitted
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    Course_Code: "DSP 4432",
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Feb 4, 2021 11.59pm",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
  {
    id: "3",
    status: 2, //status=1 means missing , status=2 means assigned but not submitted yet, status=3 means already done/submitted
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    Course_Code: "DSP 4432",
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Feb 4, 2021 11.59pm",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
  {
    id: "4",
    status: 2, //status=1 means missing , status=2 means assigned but not submitted yet, status=3 means already done/submitted
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    Course_Code: "DSP 4432",
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Feb 4, 2021 11.59pm",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
  {
    id: "5",
    status: 3, //status=1 means missing , status=2 means assigned but not submitted yet, status=3 means already done/submitted
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    Course_Code: "DSP 4432",
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Feb 4, 2021 11.59pm",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
  {
    id: "6",
    status: 3, //status=1 means missing , status=2 means assigned but not submitted yet, status=3 means already done/submitted
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    Course_Code: "DSP 4432",
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Feb 4, 2021 11.59pm",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
  {
    id: "7",
    status: 3, //status=1 means missing , status=2 means assigned but not submitted yet, status=3 means already done/submitted
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    Course_Code: "DSP 4432",
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Feb 4, 2021 11.59pm",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
];

const ToDoScreen = ({ navigation }) => {
  return (
    <View style={styles.cardsWrapper}>
      <FlatList
        data={Assignments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.status === 1) {
            return (
              <TouchableOpacity
                style={styles.card0}
                onPress={() =>
                  navigation.navigate("Assign", {
                    AssignTitle: item.title,
                    AssignDeet: item.Text,
                  })
                }
              >
                <View style={styles.cardheader}>
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>{item.Course_Code}</Text>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardstatus1}>Missing</Text>
                  </View>
                  <Text style={styles.cardDetails}>Due : {item.Time}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardinsDetails}>{item.Text}</Text>
                </View>
              </TouchableOpacity>
            );
          } else if (item.status === 2) {
            return (
              <TouchableOpacity
                style={styles.card1}
                onPress={() =>
                  navigation.navigate("Assign", {
                    AssignTitle: item.title,
                    AssignDeet: item.Text,
                  })
                }
              >
                <View style={styles.cardheader}>
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>{item.Course_Code}</Text>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardstatus2}>Assigned</Text>
                  </View>
                  <Text style={styles.cardDetails}>Due : {item.Time}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardinsDetails}>{item.Text}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                style={styles.card2}
                onPress={() =>
                  navigation.navigate("Assign", {
                    AssignTitle: item.title,
                    AssignDeet: item.Text,
                  })
                }
              >
                <View style={styles.cardheader}>
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>{item.Course_Code}</Text>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardstatus3}>Turned in</Text>
                  </View>
                  <Text style={styles.cardDetails}>Due : {item.Time}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardinsDetails}>{item.Text}</Text>
                </View>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

export default ToDoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card0: {
    // height: 200,
    marginVertical: 10,
    // flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#e7d9ea",
    borderRadius: 8,
  },
  card1: {
    // height: 200,
    marginVertical: 10,
    // flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#d3e0ea",
    borderRadius: 8,
  },
  card2: {
    // height: 200,
    marginVertical: 10,
    // flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#99bbad",
    borderRadius: 8,
  },
  cardheader: {
    padding: 10,
    // flexDirection: "row",
  },
  cardheaderinfo: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  cardstatus1: {
    color: "#f00",
    fontStyle: "italic",
    fontWeight: "100",
    // justifyContent: "flex-end",
    alignContent: "flex-end",
    paddingLeft: 50,
  },
  cardstatus2: {
    color: "#19456b",
    fontStyle: "italic",
    fontWeight: "100",
    // justifyContent: "flex-end",
    alignContent: "flex-end",
    paddingLeft: 50,
  },
  cardstatus3: {
    color: "#206a5d",
    fontStyle: "italic",
    fontWeight: "100",
    // justifyContent: "flex-end",
    alignContent: "flex-end",
    paddingLeft: 50,
  },
  cardImgWrapper: {
    flex: 1,
    height: "100%",
    // backgroundColor: '#f4f9f9',
    backgroundColor: "#000",
    // borderBottomLeftRadius: 8,
    // borderTopLeftRadius: 8,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 100,
  },
  cardInfo: {
    // flex: 3,
    padding: 10,
    borderColor: "#ccc",
    borderTopWidth: 1,
    // borderRadius: 5,
    margin: 5,
    // borderLeftWidth: 0,
    // borderBottomRightRadius: 8,
    // borderTopRightRadius: 8,
    // backgroundColor: "#d3e0ea",
    textAlign: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#63686e",
    fontSize: 14,
    paddingRight: 15,
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
    fontWeight: "300",
    paddingLeft: 10,

    // marginTop: 5,
  },
  cardinsDetails: {
    fontSize: 12,
    color: "#444",
    // marginTop: 10,
    paddingVertical: 10,
  },
});
