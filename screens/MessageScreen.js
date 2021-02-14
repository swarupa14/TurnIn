import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
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
} from './MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Swarupa Islam',
    userImg: require('../assets/users/user1.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey, ML assignment er deadline extend korbe nah?',
  },
  {
    id: '2',
    userName: 'Farhan Anjum',
    userImg: require('../assets/users/user2.png'),
    messageTime: '1 hour ago',
    messageText:
      'Navigation kaj kortese nah',
  },
  {
    id: '3',
    userName: 'Tabia Mosharref Borsho',
    userImg: require('../assets/users/user3.png'),
    messageTime: '2 hours ago',
    messageText:
      'Tried but shesh hoy nai , too lengthy!',
  },
  {
    id: '4',
    userName: 'Mostafa Galib',
    userImg: require('../assets/users/user4.png'),
    messageTime: '1 day ago',
    messageText:
      'Bro, you there?',
  },
  {
    id: '5',
    userName: 'Takia Mosharref Nobo',
    userImg: require('../assets/users/user5.png'),
    messageTime: '2 days ago',
    messageText:
      'I got 25 out of 30, wbu?',
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});