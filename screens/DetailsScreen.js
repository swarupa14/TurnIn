import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

/*import { Title } from 'react-native-paper'*/
import {
  Container,
  Header,
  Body,
  Checkbox,
  Title,
  Card,
  CardItem,
  Left,
  Right,
  Content,
  Icon,
  Thumbnail,
  Grid,
  Col,
} from "native-base";
// import { FlatList } from 'react-native-gesture-handler';

const Courses = [
  {
    id: "1",
    Course_Code: "CSE 4615",
    Course_Name: "Wireless Networks",
    JustText:
      "BONUS LAB: It's not mandatory. Syllabus: Explain the features of tiny OS ",
  },

  {
    id: "2",
    Course_Code: "MATH 4649",
    Course_Name: "PROBABILITY",
    JustText:
      "Syllabus for maths assignment: ALL THE CHAPTERS COVERED IN CLASS",
  },

  {
    id: "3",
    Course_Code: "PHY 4645",
    Course_Name: "PHYSICS II",
    JustText: "lab 2 is due in 11:59 PM",
  },
  {
    id: "4",
    Course_Code: "CHEM 4621",
    Course_Name: "CHEMISTRY LAB",
    JustText:
      "The next lab is cancelled for section 2. Await for further instructions",
  },

  {
    id: "5",
    Course_Code: "ICT 4632",
    Course_Name: "STRUCTURED PROGRAMMING",
    JustText: "pending lab tasks are to be submitted by next lab",
  },
  {
    id: "6",
    Course_Code: "BIO 4647",
    Course_Name: "BOTANY",
    JustText: "Classes will continue as per the previous routine for this week",
  },
  {
    id: "7",
    Course_Code: "CSE 4615",
    Course_Name: "Wireless Networks",
    JustText:
      "BONUS LAB: It's not mandatory. Syllabus: Explain the features of tiny OS ",
  },

  {
    id: "8",
    Course_Code: "MATH 4649",
    Course_Name: "PROBABILITY",
    JustText:
      "Syllabus for maths assignment: ALL THE CHAPTERS COVERED IN CLASS",
  },

  {
    id: "9",
    Course_Code: "PHY 4645",
    Course_Name: "PHYSICS II",
    JustText: "lab 2 is due in 11:59 PM",
  },
  {
    id: "10",
    Course_Code: "CHEM 4621",
    Course_Name: "CHEMISTRY LAB",
    JustText:
      "The next lab is cancelled for section 2. Await for further instructions",
  },

  {
    id: "11",
    Course_Code: "ICT 4632",
    Course_Name: "STRUCTURED PROGRAMMING",
    JustText: "pending lab tasks are to be submitted by next lab",
  },
  {
    id: "12",
    Course_Code: "BIO 4647",
    Course_Name: "BOTANY",
    JustText: "Classes will continue as per the previous routine for this week",
  },
];

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.cardsWrapper}>
      <FlatList
        data={Courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.id % 2 === 1) {
            return (
              <TouchableOpacity
                style={styles.card1}
                onPress={() =>
                  navigation.navigate("Class", { className: item.Course_Code })
                }
              >
                <View style={styles.cardheader}>
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>{item.Course_Code}</Text>
                    <Text style={styles.cardTitle}>{item.Course_Name}</Text>
                    {/* <Text style={styles.cardDetails}>{item.JustText}</Text> */}
                  </View>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardinsDetails}>{item.JustText}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                style={styles.card2}
                onPress={() =>
                  navigation.navigate("Class", { className: item.Course_Code })
                }
              >
                <View style={styles.cardheader}>
                  <View style={styles.cardheaderinfo}>
                    <Text style={styles.cardTitle}>{item.Course_Code}</Text>
                    <Text style={styles.cardTitle}>{item.Course_Name}</Text>
                    {/* <Text style={styles.cardDetails}>{item.JustText}</Text> */}
                  </View>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardinsDetails}>{item.JustText}</Text>
                </View>
              </TouchableOpacity>
            );
          }

          // <TouchableOpacity
          //   style={styles.card}
          //   onPress={() =>
          //     navigation.navigate("Class", { className: item.Course_Code })
          //   }
          // >
          //   <View style={styles.cardImgWrapper}>
          //     <Image
          //       source={item.classImg}
          //       //  resizeMode ="cover"
          //       style={styles.cardImg}
          //     ></Image>
          //   </View>
          //   <View style={styles.cardInfo}>
          //     <Text style={styles.cardTitle}>{item.Course_Code}</Text>
          //     <Text style={styles.cardTitle}>{item.Course_Name}</Text>

          //     <Text style={styles.cardinsDetails}>{item.JustText}</Text>
          //   </View>
          // </TouchableOpacity>
        }}
      />
    </View>
  );
};

export default DetailsScreen;

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
    // marginTop: 10,
    width: "100%",
    alignSelf: "center",
  },
  card1: {
    // height: 100,
    // marginVertical: 8,
    // flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#dff3e3",
    paddingVertical: 20,
  },
  card2: {
    // height: 100,
    // marginVertical: 8,
    // flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  cardheader: {
    paddingHorizontal: 10,
    paddingTop: 5,
    // flexDirection: "row",
  },
  cardheaderinfo: {
    flexDirection: "row",
    paddingLeft: 10,
  },

  cardInfo: {
    // flex: 2,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    // borderWidth: 1,
    // borderLeftWidth: 0,
    // borderBottomRightRadius: 8,
    // borderTopRightRadius: 8,
    // borderTopLeftRadius: 8,
    // borderBottomLeftRadius: 8,
    // backgroundColor: "#94e3d1",
    // backgroundColor: "#dff3e3",
    textAlign: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#323232",
    fontSize: 12,
    paddingRight: 15,
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
    margin: 5,
    // paddingLeft: 30,
  },
});
