import React, {useEffect, useState} from 'react'
import {View, TextInput, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-regular-svg-icons/faSearch'
import { faPlus } from '@fortawesome/free-regular-svg-icons/faPlus'
// import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt'
// import { faBellSlash } from '@fortawesome/free-regular-svg-icons/faBellSlash'
import config from '../../config'
import Core from '../../Core'
import TinNhan from './ChatController';

let dtNguoiDung = [];

export default function Home({ navigation, route}){
    let [count, setCount] = useState(0);
    useEffect(() => {
        fetch(config.serverChat + '/userchat?userId=' + Core.userId)
        .then((response) => response.json())
        .then((json) => {
            console.log(config.serverChat + '/userchat?userId=' + Core.userId);
            console.log(json);
            dtNguoiDung = json;
                setCount(++count);

        })
        .catch((error) => {
            
        });
        TinNhan.initMain();
    }, [])
    return(
      <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
        <View  style={[styles.sgWrapper, styles.mainSwapper]}>
        <ScrollView>
            
            <View  style={[styles.pageHeader]}>
                <View  style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                    <View  style={[styles.flex, styles.alignCenter, styles.w100, styles.mr20, styles.flexR]}>
                        <Text for="search" ><FontAwesomeIcon icon={ faSearch }  size={20}  style={styles.colorWhite} /></Text>
                        <TextInput type="text" style={[styles.flex1, styles.bgTransparent, styles.borderNone, styles.fs18, styles.colorWhite, styles.ml10]} placeholder="Tìm kiếm" placeholderTextColor="gray" />
                    </View>
                    <View  style={[styles.dropIcon, styles.mlAuto, {marginRight: -35}]}>
                        <FontAwesomeIcon icon={ faPlus }  size={20} style={[styles.colorWhite]} />
                    </View>
                </View>

            </View>
            <View  style={[styles.radiusTop20, styles.bgWhite]}>
            {
                dtNguoiDung.map((item, index) => {
                    if (item.chat == null) return null;
                    let you ="";
                    if (item.chat.userId === Core.userId) you = "Bạn: ";
                    return (
                    <View key={index} >
                        <TouchableOpacity  style={[styles.chatItem, styles.flex, styles.w100, styles.overflowXHidden]}  onPress={() => {TinNhan.actionNhanTin(item); navigation.navigate('ChatNoiDung', item)}}>
                            <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py12, styles.left, styles.w100, styles.flexR]}>
                                <Image style={[styles.w50px, styles.height50, styles.boxShadow, styles.flexShrink0, styles.radiusFull]} source={require('../../../assets/images/no-avata.png')} alt=""></Image>
                                <View  style={[styles.ml12, styles.content]}>
                                    <Text style={[styles.fs15, styles.lineHeight16, styles.fwBold]}>
                                        {item.user.userName}
                                    </Text>
                                    <Text numberOfLines={1} style={[styles.fs13, styles.lineHeight16, styles.truncase1]}>
                                        {you + item.chat.data}
                                    </Text>
                                </View>
                                <View  style={[styles.mlAuto, styles.w50px, styles.flexShrink0, styles.flex, styles.flexColumn, styles.alignEnd]}>
                                    {/* <TouchableOpacity style={[ styles.bg15, styles.px5, styles.flex, styles.alignCenter, styles.justifyCenter, styles.radius10, styles.flexShrink0]}><Text style={[styles.fs12, styles.fw500, styles.colorWhite]}>2</Text></TouchableOpacity> */}
                                    <Text style={[styles.color88, styles.fs13, styles.lineHeight16, styles.flex]}>{Core.convertTimeChat(item.chat.date)}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                        <View  style={[styles.px15]}>
                            <Text style={[styles.line1, styles.bgEf]}></Text>
                        </View>
                    </View>
                )})
            }
                {/* <TouchableOpacity  style={[styles.chatItem, styles.flex, styles.w100, styles.overflowXHidden]}  onPress={() => navigation.navigate('ChatNoiDung')}>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py12, styles.left, styles.w100, styles.flexR]}>
                        <Image style={[styles.w50px, styles.height50, styles.boxShadow, styles.flexShrink0, styles.radiusFull]} source={require('../../../assets/images-demo/user-avata.jpg')} alt=""></Image>
                        <View  style={[styles.ml12, styles.content]}>
                            <Text style={[styles.fs15, styles.lineHeight16, styles.fwBold]}>
                                Trần Anh Tuấn
                            </Text>
                            <Text numberOfLines={1} style={[styles.fs13, styles.lineHeight16, styles.truncase1, {width: '40%'}]}>
                                Đăng ký lịch học cá nhân. Lớp học công nghệ. Đăng ký lịch học cá nhân. Lớp học công nghệ...
                            </Text>
                        </View>
                        <View  style={[styles.mlAuto, styles.w50px, styles.flexShrink0, styles.flex, styles.flexColumn, styles.alignEnd]}>
                            <TouchableOpacity style={[ styles.bg15, styles.px5, styles.flex, styles.alignCenter, styles.justifyCenter, styles.radius10, styles.flexShrink0]}><Text style={[styles.fs12, styles.fw500, styles.colorWhite]}>2</Text></TouchableOpacity>
                            <Text style={[styles.color88, styles.fs13, styles.lineHeight16, styles.flex]}>1 phút</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <View  style={[styles.px15]}>
                    <Text style={[styles.line1, styles.bgEf]}></Text>
                </View> */}
            </View>
        
        </ScrollView>
    </View>
    </ImageBackground>
    )
}
