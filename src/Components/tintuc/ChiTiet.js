import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView, useWindowDimensions, WebView , SafeAreaView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faBookmark } from '@fortawesome/free-brands-svg-icons/faBookmark'
// import { faShareAlt } from '@fortawesome/free-brands-svg-icons/faShareAlt'
// import { faFont } from '@fortawesome/free-brands-svg-icons/faFont'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import { faCommentAltLines } from '@fortawesome/free-brands-svg-icons/faCommentAltLines'
import RenderHtml from 'react-native-render-html';
import Core from '../../Core'
export default function ChiTiet({ navigation, route }){
    let { width } = useWindowDimensions();
    width = width - 100;
    let strNoiDung = route.params.NOIDUNG;
    strNoiDung = strNoiDung.replace(/ href="\//g,' href="'+ Core.server + '\/');
    return(
        <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
        <View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
            
        <ScrollView>
            <View  style={styles.pageHeader}>
                <Text style={styles.topOfMobi}> </Text>
                <View style={[styles.pageTitle]}>
                    <TouchableOpacity  style={styles.flexR}  onPress={() => navigation.goBack()} >
                        <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                        <Text style={styles.textTitle}>Tin tức</Text>
                    </TouchableOpacity>

                    {/* <View  style={[styles.fs14, styles.flex, styles.alignCenter, styles.mlAuto]} >

                        <FontAwesomeIcon icon={ faBookmark }  size={20}   style={{color: 'white'}}  />
                    </View>
                    <View  style={[styles.fs14, styles.flex, styles.alignCenter, styles.ml20]} >

                        <FontAwesomeIcon icon={ faShareAlt }  size={20}  style={{color: 'white'}}   />
                    </View>
                    <View   style={[styles.fs14, styles.flex, styles.alignCenter, styles.ml20]} >
                        <FontAwesomeIcon icon={ faFont }  size={20}  style={{color: 'white'}}   />
                    </View> */}
                </View>

            </View>
            <View  style={[styles.radiusTop20, styles.bgWhite]}>
                <View  style={[styles.newsDetails, styles.px15, styles.py15, styles.lineHeight24, {flex: 1}]}>
                    <Text style={[styles.fs24, styles.lineHeight32, styles.mt0, styles.mb0]}>{route.params.TIEUDE}</Text>
                    <View style={[styles.color66, styles.fs14, styles.mt10, styles.mb10, styles.flexR]}>
                        <View style={[styles.w20, styles.mt2]}>
                            <FontAwesomeIcon icon={ faCalendarAlt }  size={14} style={[styles.color66]} />
                        </View>
                        <Text>{route.params.NGAYBATDAU} - {route.params.DAOTAO_COCAUTOCHUC_TEN}</Text>
                    </View>
                    <View>
                    <RenderHtml
                        contentWidth={width}
                        source={{html : strNoiDung}}
                        />
                    </View>
                    
                </View>

                
            </View>
            <View style={{height: 50}}></View>
            </ScrollView>
            <View  style={[styles.fixedBottom, styles.shadowTop, styles.bgWhite]}>
                <View  style={[styles.flex, styles.itemCenter, styles.py11, styles.px15, styles.fs16, styles.flexR]}>
                    <Text style={[styles.color88, styles.fs16]}>Bình luận của bạn</Text>
                    <View  style={[styles.colorPrimary, styles.mlAuto]} href="phenikaa-8-tintuc-danhsachbinhluan.html">
                        <FontAwesomeIcon icon={ faCommentAltLines }  size={28}  />
                    </View>
                </View>
            </View>
        </View>
    </ImageBackground>
    </SafeAreaView>
    )
}
