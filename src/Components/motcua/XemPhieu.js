import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
export default function XemPhieu({ navigation }){
    
    return(
        
<ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
        <ScrollView>
        <View style={styles.pageHeader} >
            
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                <TouchableOpacity style={styles.flexR}  onPress={() => navigation.goBack()} href="phenikaa-3-1cua-choxacnhan.html">
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                    <Text style={styles.textTitle}>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('MotCuaChoXacNhanSua')} style={[styles.btn, styles.btnOutline, styles.height33, styles.mlAuto, {borderWidth: 1, borderColor: 'white', marginRight: -35, marginTop: -5}]}><Text style={[styles.px18, styles.colorWhite, styles.fs18]}>Sửa thông tin</Text></TouchableOpacity>
        
            </View>


        </View>
        <View style={[styles.bgWhite, styles.radiusTop20]}>
            <Text style={[styles.textCenter, styles.fw600, styles.fs18, styles.lineHeight22, styles.pt15, styles.pb10, styles.px15]}>Mẫu ĐƠN XIN CẤP LẠI THẺ SINH VIÊN</Text>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.mb50, styles.block]} href="phenikaa-3-1cua-choxacnhan-sua-xemdon.html">
                <Image style={styles.w100} source={require('../../../assets/images-demo/don.png')} alt=""></Image>
            </View>
        </View>
        <View style={[styles.fixedBottom, styles.shadowTop]}>
            <View style={[styles.flex, styles.pl15, styles.pr30, styles.bgWhite, styles.pb20, styles.pt10, styles.flexR]}>
                <TouchableOpacity style={[styles.btn, styles.btnOutline, styles.height40, styles.fs16, styles.w50pt, styles.colorSenary, styles.mr15, styles.flexR]} >
                    <FontAwesomeIcon icon={ faPrint }  size={20}  style={[styles.colorSenary, styles.btnI]} />
                    <Text style={[styles.fs18, styles.colorSenary]}>In đơn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnOutline, styles.height40, styles.fs16, styles.w50pt, styles.colorPrimary, styles.flexR]} >
                    <FontAwesomeIcon icon={ faDownload }   size={20}  style={[styles.colorPrimary, styles.btnI]} />
                    <Text style={[styles.fs18, styles.colorPrimary]}>Tải về</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    </ImageBackground>
    )
}
