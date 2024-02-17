import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../assets/css/all'
import Core from '../Core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faPlus } from '@fortawesome/free-regular-svg-icons/faPlus'
// import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt'
// import { faBellSlash } from '@fortawesome/free-regular-svg-icons/faBellSlash'

let dtNotify = [];

function xemThongBao(item, setCount){
    Core.alert(item.NBODY, item.TITLE);
    Core.makeRequest({
        action: 'CMS_Token/Update_StatusNotifyUser',
        type: 'POST',
        data: {
            dISTATUS: 1,
            strID: item.ID
        },
        success: function(data){
            if(data.Success){
                var iViTri = dtNotify.findIndex(e => e.ID === item.ID);
                dtNotify[iViTri]["ISTATUS"] = 1;
                setCount(++Core.countState)
            }
            else{
                console.log(data.Message)
            }
        },
        error: function(err){
            console.log(err)

        }
    })
}

export default function Notification({ navigation, route }){
    let [count, setCount] = useState(0);
    useEffect(() => {
        Core.getNotify(data => {dtNotify = data; console.log(data); setCount(++count)})
    }, [])
    return(
    <ImageBackground source={require('../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
        <View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
        <ScrollView>
            <View  style={[styles.pageHeader]}>
                <Text style={styles.topOfMobi}> </Text>
                <TouchableOpacity  onPress={() => navigation.goBack()} style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                    <View href="phenikaa-3-1cua-choxacnhan.html">
                        <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                    </View>
                    <Text style={styles.textTitle}>Thông báo</Text>
                </TouchableOpacity>
            </View>
            <View  style={[styles.radiusTop20, styles.bgWhite]}>
                {
                    dtNotify.map((item, index) => (
                        <View key={index} >
                            <TouchableOpacity onPress={() => xemThongBao(item, setCount)} style={[styles.chatItem, styles.flex, styles.w100, styles.overflowXHidden, item.ISTATUS == 1? styles.bgF1: null ]}>
                                <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py12, styles.left, styles.w100, styles.flexR]}>
                                    <Image style={[styles.w50px, styles.height50, styles.boxShadow, styles.flexShrink0, styles.radiusFull]} source={require('../../assets/images/no-avata.png')} alt=""></Image>
                                    <View  style={[styles.ml12, styles.content]}>
                                        <Text style={[styles.fs15, styles.lineHeight16, styles.fwBold]}>
                                            {item.TITLE}
                                        </Text>
                                        <Text numberOfLines={1} style={[styles.fs13, styles.lineHeight16, styles.truncase1]}>
                                            {item.NBODY}
                                        </Text>
                                    </View>
                                    <View  style={[styles.mlAuto, styles.w50px, styles.flexShrink0, styles.flex, styles.flexColumn, styles.alignEnd]}>
                                        {/* <TouchableOpacity style={[ styles.bg15, styles.px5, styles.flex, styles.alignCenter, styles.justifyCenter, styles.radius10, styles.flexShrink0]}><Text style={[styles.fs12, styles.fw500, styles.colorWhite]}>2</Text></TouchableOpacity> */}
                                        <Text style={[styles.color88, styles.fs13, styles.lineHeight16, styles.flex]}>{Core.convertTimeChat(item.NDATE)}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                            <View  style={[styles.px15]}>
                                <Text style={[styles.line1, styles.bgEf]}></Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
        </View>
    </ImageBackground>
    )
}
