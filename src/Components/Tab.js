import React,{ Component, useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBiohazard } from '@fortawesome/free-brands-svg-icons/faBiohazard'
import { faNewspaper } from '@fortawesome/free-brands-svg-icons/faNewspaper'
import { faComment } from '@fortawesome/free-brands-svg-icons/faComment'
import { faUser } from '@fortawesome/free-brands-svg-icons/faUser'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Router';
import TinTuc from './tintuc/Home'
import Chat from './Chat/Home'
import Profile from './profile/CaNhan'
// import {fcmService} from '../FCMService'
// import {localNotificationService} from '../LocalNotificationService'
import config from '../config'
import Core from '../Core'
import {View, StyleSheet, Modal, Text, ActivityIndicator} from 'react-native'

const Tab = createBottomTabNavigator();

let checkQuest = true;


const onLogin = (user) => {
  checkQuest = false;
  console.log("onLogin" + user);
  let userId= user.ID;
  Core.startApp(user)
  // fcmService.registerAppWithFCM();
  // fcmService.register(onRegister, onNotification, onOpenNotification)
  // localNotificationService.configure(onOpenNotification)

  function onRegister(token){
    // console.log("[App] onRegister 1: ", token)
    const data = { userId: userId, fcmToken: token};
    // console.log("post: " + config.server + '/notifyuser')
    //Core.updateFCMToken(data);
  }

  function onNotification(notify){
    //console.log("[App] onNotification: ", notify)

    const options ={
      soundName: 'default',
      playSound: true
    }
    localNotificationService.showNotification(
      0,
      notify.title,
      notify.body,
      notify,
      options
    )
  }

  function onOpenNotification(notify){
    if(notify.body)
    alert(notify.body)
  } 
} 

const checkDataUser = async (navigation) => {
  try {
    const value = await AsyncStorage.getItem('allUser');
    if (value) {
      // We have data!!
      var aUser = JSON.parse(value);
      if(aUser.ID.length !== ""){
        onLogin(aUser)
      }else{
        navigation.navigate('Login')
      }
    }else{console.log('Login')
      navigation.navigate('Login')
    }
  } catch (error) {
    // Error retrieving data
  }
};

export default function TabNavigator({ navigation, route}) {
  if(route.params) {onLogin (route.params);}
  useEffect(()=>{
    if(route.params) onLogin (route.params)
    else {
      checkDataUser(navigation);}

}, [])
    

    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch(route.name ){
                case "Home":  iconName = faBiohazard; break;
                case "TinTuc":  iconName = faNewspaper; break;
                case "Chat":  iconName = faComment; break;
                case "Profile":  iconName = faUser; break;
            }


            // You can return any component that you like here!
            return <FontAwesomeIcon icon={ iconName }  size={30} style={{color: color}} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
          
        })
      }
          >
              <Tab.Screen name="Home" component={Home} initialParams={route.params}
              options={{
                  headerShown: false,
                  title: 'Trang chủ'
              }}
              
              />
              <Tab.Screen name="TinTuc" component={TinTuc} initialParams={route.params}
              options={{
                  headerShown: false,
                  title: 'Tin tức'
              }} />
              <Tab.Screen name="Chat" component={Chat} initialParams={route.params} 
              options={{
                  headerShown: false,
                  title: 'Tin nhắn',
                  tabBarVisible: false
              }}
              
              />
              <Tab.Screen name="Profile" component={Profile} initialParams={route.params} options={{
                  headerShown: false,
                  title: 'Cá nhân'
              }} />
          </Tab.Navigator>
        
        );
}