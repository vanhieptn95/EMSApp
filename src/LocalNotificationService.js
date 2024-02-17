import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, {Importance}  from "react-native-push-notification";
import {Platform} from 'react-native';

class LocalNotificationService{
    configure  = (onOpenNotification) =>{
        PushNotification.configure({
            onRegister: function(token){
                //onRegister(token)
                console.log("TOKEN:", token);
                if(Platform.OS !== 'ios'){
                    PushNotification.createChannel(
                        {
                          channelId: "sssword", // (required)
                          channelName: "sssword", // (required)
                          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                          playSound: false, // (optional) default: true
                          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                          importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                          vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
                        },
                        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
                      );
                }
            },

            onNotification: function(notification){
                console.log("NOTIFICATION:" + notification);
                if(!notification?.data){
                    return;
                }

                notification.userInteraction = true;
                onOpenNotification(Platform.OS === 'ios' ? notification.data.item: notification.data)

                if(Platform.OS === 'ios'){
                    notification.finish(PushNotificationIOS.FetchResult.NoData)
                }
            },
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);
            
                // process the action
              },

            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            popInitialNotification: true,
            requestPermissions: true,
        })
    }

    _buildAndroidNotification = (id, title, message, data ={}, options ={}) =>{
        return{
            id: id,channelId: "sssword", // (required)
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    _buildIOSNotification = (id, title, message, data ={}, options ={}) =>{
        return {
            alertAction: options.alertAction || "view",
            category: options.category || "",
            userInfo: {
                id: id,
                item: data
            }
        }
    }

    showNotification = (id, title, message, data ={}, options = {}) =>{
        console.log(11111);
        PushNotification.localNotification({
            ...this._buildAndroidNotification(id, title, message, data, options),
            ...this._buildIOSNotification(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    cancelAllLocalNotification =() =>{
        if(Platform.OS === 'ios'){
            PushNotificationIOS.removeAllDeliveredNotifications()
        }else{
            PushNotification.cancelAllLocalNotifications()
        }
    }

    unregister =() =>{
        PushNotification.unregister()
    }

    removeDeliveredNotificationByID =(notificationId) =>{
        console.log("[LocalNotificationService] removeDeliveredNotificationByID: ", notificationId)
        PushNotification.cancelLocalNotifications({id: `${notificationId}`})
    }
}

export const localNotificationService = new LocalNotificationService()