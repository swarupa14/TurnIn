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
    Course_Code: "PHY 4645",
    Course_Name: "PHYSICS II",
    section: "2A",
    classImg: require("../assets/courses/physics.png"),
    instructor: "Md. Shafayet Hossain",
  },
  {
    id: "2",
    Course_Code: "CHEM 4621",
    Course_Name: "CHEMISTRY LAB",
    section: "2",
    classImg: require("../assets/courses/chemistry.png"),
    instructor: "Nazrul Islam",
  },
  {
    id: "3",
    Course_Code: "BIO 4647",
    Course_Name: "BOTANY",
    section: "2A",
    classImg: require("../assets/courses/biology.png"),
    instructor: "Sharmin Farhana",
  },
  {
    id: "4",
    Course_Code: "ICT 4632",
    Course_Name: "STRUCTURED PROGRAMMING",
    section: "2A",
    classImg: require("../assets/courses/CSE.png"),
    instructor: "Ahnaf Munir",
  },
  {
    id: "5",
    Course_Code: "MATH 4649",
    Course_Name: "PROBABILITY",
    section: "2A",
    classImg: require("../assets/courses/math.png"),
    instructor: "Abu Taher",
  },
  {
    id: "6",
    Course_Code: "CSE 4615",
    Course_Name: "Wireless Networks",
    section: "2A",
    classImg: require("../assets/courses/CSE.png"),
    instructor: "Talha Ibn Aziz",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.cardsWrapper}>
      <FlatList
        data={Courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Class", { className: item.Course_Code })
            }
          >
            <View style={styles.cardImgWrapper}>
              <Image
                source={item.classImg}
                //  resizeMode ="cover"
                style={styles.cardImg}
              ></Image>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.Course_Code}</Text>
              <Text style={styles.cardTitle}>{item.Course_Name}</Text>
              <Text style={styles.cardDetails}>Section: {item.section}</Text>
              <Text style={styles.cardinsDetails}>{item.instructor}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

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
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
    // backgroundColor: '#f4f9f9',
    backgroundColor: "#d3e0ea",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 100,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#d3e0ea",
    textAlign: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#323232",
    fontSize: 14,
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
    fontWeight: "300",
    marginTop: 5,
  },
  cardinsDetails: {
    fontSize: 12,
    color: "#444",
    marginTop: 10,
  },
});