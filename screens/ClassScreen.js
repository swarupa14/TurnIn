import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from "./MessageStyles";

const Classwork = [
  {
    id: "1",
    val: 1, //value=0 means it's a post, value=1 means it's an assignment, value=3 means it's aquiz
    title: "LAB 2 on DFT",
    // intructor: require('../assets/users/instructor.png'),
    Time: "4 mins ago",
    Text:
      "Perform DFT on a 256 point signal using GNU Octave. Submit the .zip file",
  },
  {
    id: "2",
    val: 0,
    title: "Guidelines for FINAL PRESENTATION",
    // intructor: require('../assets/users/instructor.png'),
    Time: "2 days ago",
    Text:
      "Hello everyone, The final project presentation for CSE - 1 will be conducted on 15 February, 2021 at 4pm . All of you MUST be present during the whole session. During the Q/A session there will be provision for other groups to ask questions to the presenting group.",
  },
  {
    id: "3",
    val: 0,
    title: "QUIZ 4 Syllabus",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Jan 15",
    Text: "Lecture: 12 to 15. Study the codes properly. Good luck!",
  },
  {
    id: "4",
    val: 3,
    title: "QUIZ 3",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Jan 13",
    Text: "Quiz closes at 4:30pm ",
  },
  {
    id: "5",
    val: 0,
    title: "QUIZ 3 Notice",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Jan 11",
    Text:
      "Hello everyone, I'll taking your last quiz on 13 January 2021, 3:00pm. The syllabus will be posted later.",
  },
  {
    id: "6",
    val: 0,
    title: "LAB 1 on Convolution",
    // intructor: require('../assets/users/instructor.png'),
    Time: "Dec 29",
    Text:
      "Perform Convolution and Inverse convolution on the given signal using GNU Octave. Do not use built in functions. Submit the .zip file",
  },
];

const ClassScreen = ({ navigation }) => {
  return (
    <View style={styles.cardsWrapper}>
      <FlatList
        data={Classwork}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.val === 0) {
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
                  {/* <View style={styles.cardImgWrapper}>
                <Image
                source={item.classImg}
                //  resizeMode ="cover"
                style={styles.cardImg}
              ></Image>
              </View> */}
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>Notice: {item.title}</Text>
                    {/* <Text style={styles.cardTitle}>{item.Course_Name}</Text> */}
                    <Text style={styles.cardDetails}>{item.Time}</Text>
                  </View>
                </View>

                <View style={styles.cardInfo}>
                  <Text style={styles.cardinsDetails}>{item.Text}</Text>
                </View>
              </TouchableOpacity>
            );
          } else if (item.val === 1) {
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
                  {/* <View style={styles.cardImgWrapper}>
                <Image
                source={item.classImg}
                //  resizeMode ="cover"
                style={styles.cardImg}
              ></Image>
              </View> */}
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>
                      Assignment: {item.title}
                    </Text>
                    {/* <Text style={styles.cardTitle}>{item.Course_Name}</Text> */}
                    <Text style={styles.cardDetails}>{item.Time}</Text>
                  </View>
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
                  {/* <View style={styles.cardImgWrapper}>
                <Image
                source={item.classImg}
                //  resizeMode ="cover"
                style={styles.cardImg}
              ></Image>
              </View> */}
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>Quiz: {item.title}</Text>
                    {/* <Text style={styles.cardTitle}>{item.Course_Name}</Text> */}
                    <Text style={styles.cardDetails}>{item.Time}</Text>
                  </View>
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

export default ClassScreen;

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
    backgroundColor: "#d3e0ea",
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
    backgroundColor: "#99bbad",
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
    backgroundColor: "#e7d9ea",
    borderRadius: 8,
  },
  cardheader: {
    padding: 10,
    flexDirection: "row",
  },
  cardheaderinfo: {
    flex: 3,
    paddingLeft: 10,
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
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
    fontWeight: "300",

    // marginTop: 5,
  },
  cardinsDetails: {
    fontSize: 12,
    color: "#444",
    // marginTop: 10,
    paddingVertical: 10,
  },
});
