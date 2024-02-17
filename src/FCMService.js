import messaging from '@react-native-firebase/messaging'
import {Platform} from 'react-native';

class FCMService {
    register = (onRegister, onNotification, onOpenNotification) =>{
        this.checkPermission(onRegister)
        this.createNotificationListeners(onRegister, onNotification, onOpenNotification)
    }

    registerAppWithFCM = async(callback) =>{
        if(Platform.OS === 'ios'){
            console.log(12345667)
            
            const authStatus = await messaging().requestPermission();
            const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
            if (enabled) {
                console.log('Authorization status:', authStatus);
              }else{
                console.log('Authorization status:', authStatus);
              }
        }
    }

    checkPermission = (onRegister) =>{
        messaging().hasPermission()
        .then(enabled =>{
            if(enabled){
                this.getToken(onRegister)
            }else{
                this.requestPermission(onRegister)
            }
        })
        .catch(error =>{
            console.log("[FCMService] Permission rejected", error)
        })
    }

    getToken =(onRegister) =>{
        messaging().getToken()
        .then(fcmToken =>{
            if(fcmToken){
                onRegister(fcmToken)
            }else{
                console.log("[FCMService] User does not have a device token")
            }
        }).catch(error =>{
            console.log("[FCMService] getToken rejected", error)
        })
    }

    requestPermission = (onRegister) =>{
        messaging().requestPermission()
        .then(() =>{
            this.getToken(onRegister)
        }).catch(error =>{
            console.log("[FCMService] Request Permission rejected", error)
        })
    }

    deleteToken =() =>{
        console.log("[FCMService] deleteToken")
        messaging().deleteToken()
        .catch(error =>{
            console.log("[FCMService] Delete token rejected", error)
        })
    }

    createNotificationListeners = (onRegister, onNotification, onOpenNotification) =>{

        console.log(11111);
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
            if(remoteMessage){
                const notification = remoteMessage.notification
                onNotification(notification)
            }
          });


          this.messageListener = messaging().onMessage(async remoteMessage =>{
            console.log("[FCMService] A new FCM message arrived!", remoteMessage);
            if(remoteMessage){
                let notification = null
                if(Platform.OS === 'ios'){
                    notification = remoteMessage.notification
                }else{
                    notification = remoteMessage.notification;
                }
                onNotification(notification)
            }
        });

        messaging().onTokenRefresh(fcmToken => {
            console.log("[FCMService] New token refresh: ", fcmToken)
            onRegister(fcmToken)
        })

        messaging()
        .onNotificationOpenedApp(remoteMessage =>{
            console.log("[FCMService] onNotificationOpenedApp Notification caused app to open");
            if(remoteMessage){
                const notification = remoteMessage.notification;
                onOpenNotification(notification);
            }
        })
        //When the application is opened from a quit state.
        messaging()
        .getInitialNotification()
        .then(remoteMessage =>{
            console.log('[FCMService] getInitialNotification caused app to open from quit state: ', remoteMessage)

            if(remoteMessage){
                const notification = remoteMessage.notification
                onOpenNotification(notification)
            }
        })
    //     console.log(1111);
    //         const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

          
    }

    unRegister =() =>{
        this.messageListener()
    }
}

export const fcmService = new FCMService()