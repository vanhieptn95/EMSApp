import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TextInput, Button, Touchable, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faPhone } from '@fortawesome/free-regular-svg-icons/faPhone'
// import { faEllipsisH } from '@fortawesome/free-regular-svg-icons/faEllipsisH'
import io from "socket.io-client/dist/socket.io";
import Core from '../../Core'
import config from '../../config'
import TinNhan from './ChatController'

let socket ;
let objUser ;
let roomId ;
let allUserChat ;
let pageCurrent ;
let dtChat = [];
let strMessage = ""; 
let setCoun;
let iCount= 0;
let arrChat =[];

function getList_TinNhan(){
    fetch(config.server + '/RoomChat?roomId='+ roomId + '&limit=400&skip='+ pageCurrent*400
    , {
        method:'GET'
    })
    .then((response) => response.json())
    .then((json) => {
        dtChat = json.Data
        setCoun(++iCount);
    })
    .catch((error) => {
        console.log(error)
    });
}

function genYChat(item, index){
    let date = new Date(parseInt(item.date));
    return (
        <View  style={[styles.ourChat, styles.chatRow, styles.flexR]} key={index}>
            <Image style={[styles.ourChatAvatar, styles.chatRowAvatar]} source={require('../../../assets/images/no-avata.png')} alt=""></Image>
            <View  style={[styles.contentGroup]}>
                {item.arrData.map((aData, nRow) => (
                    <View  key={nRow} style={[styles.content, styles.ourChatContent, styles.chatRowContent, !nRow? styles.firstChat: null]}>
                        <Text style={[styles.chatRowContentP]}>{aData.data}</Text>
                    </View>
                ))
                }
                <Text style={[styles.chatRowNameDate]}>
                {Core.returnTwo(date.getHours()) + ":"+ Core.returnTwo(date.getMinutes())}
                </Text>
            </View>
        </View>
    )
}

function genIChat(item, index){
    let date = new Date(parseInt(item.date));
    return (
        <View  style={[styles.myChat, styles.chatRow]} key={index}>
            <View  style={[styles.contentGroup]}>
                {item.arrData.map((aData, nRow) => (
                    <View key={nRow} style={[styles.content, styles.ourChatContent, styles.chatRowContent, !nRow? styles.firstChat: null]}>
                        <Text style={[styles.chatRowContentP]}>{aData.data}</Text>
                    </View>
                ))
                }
                <Text style={[styles.chatRowNameDate]}>
                {Core.returnTwo(date.getHours()) + ":"+ Core.returnTwo(date.getMinutes())}
                </Text>
            </View>
        </View>
    )
}
function genDate(item, index){
    let date = new Date(parseInt(item.date));
    let yearNow =  date.getFullYear() !== new Date().getFullYear() ? ("/" + date.getFullYear()): "";
    return (
        <View  key={index} style={[styles.fs13, styles.color88, styles.textCenter, styles.dayChat, styles.relative, styles.flexR]}>
            <View style={{flex: 1, height: 0.5, backgroundColor: styles.bgF9, marginTop: 9.5, marginRight: 5}} />
            <Text style={[styles.textCenter, styles.color88]}>{Core.returnTwo(date.getHours()) + ":"+ Core.returnTwo(date.getMinutes()) + " - " + Core.returnTwo(date.getDate())+ "/"+ Core.returnTwo(date.getMonth()+ 1) + yearNow}</Text>
            <View style={{flex: 1, height: 0.5, backgroundColor: styles.bgF9, marginTop: 9.5, marginLeft: 5}} />
        </View>
    )
}

export default function Chat({ navigation, route}){
    let [count, setCount] = useState(0);
    arrChat = TinNhan.arrChat;
    //     console.log("New")
    //     arrChat = [];
    //     let objChat = {
    //         "I": 0,
    //         "date": 0,
    //         "arrData": []
    //     }
    //     dtChat.forEach(item => {
    //         if((item.date - objChat.date) > 1800000) {
    //             arrChat.push({
    //                 "I": 3,
    //                 "date": item.date,
    //                 "arrData": []
    //             })
    //             objChat.date = item.date;
    //         }
    //         if(!objChat.arrData.length){
    //             objChat.I = item.userId === Core.userId ? 1 : 0;
    //             objChat.arrData = [item]
    //         }else{
    //             if((objChat.I && item.userId === Core.userId) || (!objChat.I && item.userId !== Core.userId)){
    //                 objChat.arrData.push(item);
    //             }else{
    //                 if(objChat.arrData.length) arrChat.push({...objChat})
    //                 objChat.I = item.userId === Core.userId ? 1 : 0;
    //                 objChat.date = item.date
    //                 objChat.arrData = [item];
    //             }
    //         }
    //     })
    //     if(objChat.arrData.length > 0) arrChat.push({...objChat})
    // }
    
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     if(socket) {
    //         OnConnect(route.params)
    //     }
    //   });
    useEffect(()=>{
        TinNhan.state = setCount;
        TinNhan.getList_TinNhan(data => {
        }, route.params.room.roomId)
    }, [])
    return(
      <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 105}]}>
        
    <View  style={[styles.sgWrapper, styles.mainSwapper]}>
        <View  style={[styles.pageHeader]}>
            <View  style={[styles.pageTitle, styles.hasButton]}>
            <TouchableOpacity   onPress={() => navigation.navigate('Chat')} href="phenikaa-3-1cua-choxacnhan.html"><FontAwesomeIcon icon={ faChevronLeft }  size={18} style={[{color: 'white'}, styles.mr10]}   /></TouchableOpacity>

                <Image style={[styles.radiusFull, styles.pageTitleImg, styles.w40, styles.height40]} source={require('../../../assets/images/no-avata.png')} alt=""></Image>

                <View  style={[styles.content, styles.ml9]}>
                    <Text style={[styles.fs15, styles.fwBold, styles.lineHeight16, styles.mb3, styles.colorWhite]}>{route.params.user.userName}</Text>
                    {/* <Text style={[styles.fs11, styles.lineHeight16, styles.truncase1, styles.colorWhite]}>11 Thành viên - Truy cập 6 giờ trước</Text> */}
                </View>
                
                {/* <View  style={[styles.fs14, styles.flex, styles.alignCenter, styles.mlAuto]} >
                    <FontAwesomeIcon icon={ faPhone }  size={20}  />
                </View>
                <View  >
                    <FontAwesomeIcon icon={ faEllipsisH }  size={20}  />
                </View> */}
            </View>

        </View>
        <View  style={[styles.radiusTop20, styles.bgWhite]}>
            <ScrollView  ref={ref => {this.scrollView = ref}}
    onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})} >
                <View  style={[styles.chatContent]}>
                {arrChat.map((item, index) => {
                    switch(item.I){
                        case 0 : return genYChat(item, index);
                        case 1 : return genIChat(item, index);
                        case 3 : return genDate(item, index);
                    }
                })

                }
                </View>
                <View style={{height: 120}}>

                </View>
            </ScrollView>
        </View>
            <View  style={[styles.fixedBottom, styles.chatTyping, styles.flex, styles.px15, styles.py10, styles.alignCenter, styles.flexR]}>
                <TextInput onFocus={() => this.scrollView.scrollToEnd({animated: true})} ref={input => { this.textInput = input }} onSubmitEditing={({nativeEvent: {text, eventCount, target}}) =>{ this.textInput.clear(); TinNhan.sendMessage(text)}} style={[styles.flex1, styles.chatTypingInput]} type="text" placeholder="Tin nhắn, @" placeholderTextColor={styles.colorWhite} />
                <Image style={[styles.ourChatAvatar, styles.chatRowAvatar, styles.chatTypingImg]} source={require('../../../assets/images/Smile.png')} alt=""></Image>
                <Image style={[styles.ourChatAvatar, styles.chatRowAvatar, styles.chatTypingImg]} source={require('../../../assets/images/Image_Square.png')} alt=""></Image>
                <Image  style={[styles.ourChatAvatar, styles.chatRowAvatar, styles.chatTypingImg]} source={require('../../../assets/images/Grid_9.png')} alt=""></Image>
            </View>
    </View>
    </ImageBackground>
    )
}
