import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faAddressBook } from '@fortawesome/free-brands-svg-icons/faAddressBook'
import { faFileAlt } from '@fortawesome/free-brands-svg-icons/faFileAlt'

export default function Intro({ navigation }){
    
    return(
    <View style={[styles.sgWrapper, styles.oneDoor, styles.oneDoorIntro]}>
        <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <TouchableOpacity style={styles.pageTitle} onPress={() => navigation.goBack()}>
                <View style={styles.colorPrimary} href="../home.html"  ><FontAwesomeIcon icon={ faChevronLeft }  size={20}  /></View>
                <Image source={require('../../../assets/images/dashboad-item-82.png')} style={styles.pageTitleImg}></Image>
                <Text style={[styles.colorRaw, styles.pageTitle]}>Hệ thống 1 cửa sinh viên</Text>
            </TouchableOpacity>
            <Text style={[styles.fs22, styles.textCenter, styles.mt40, styles.px15, styles.colorPrimary]}>Chào mừng bạn đến với chức năng</Text>
            <Text style={[styles.textCenter, styles.fwBold, styles.fs32, styles.colorPrimary, styles.lineHeight40, styles.mt10, styles.px15]}>HỆ THỐNG MỘT CỬA CỦA SINH VIÊN</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MotCuaDichVu')} style={[styles.btn, styles.btnQuinary, styles.borderNone, styles.mx35, styles.mt16, styles.flexR]}>
                <FontAwesomeIcon icon={ faAddressBook }  size={20} style={[styles.colorWhite, styles.mr10]} />
                <Text style={[styles.fs22, styles.colorWhite]}>Bắt đầu</Text>
            </TouchableOpacity>
            {/* <View style={[styles.btn, styles.btnPrimary, styles.borderNone, styles.mx35, styles.mt16, styles.flexR]} >
                <FontAwesomeIcon icon={ faFileAlt }  size={20}  style={[styles.colorWhite, styles.mr10]} />
                <Text style={[styles.fs22, styles.colorWhite]}>Hướng dẫn</Text>
            </View> */}
        </View>

    </View>
    )
}
