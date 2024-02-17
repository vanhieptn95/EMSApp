import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
export default function HocPhanChuaQua(){
    
    return(
<View  style={[styles.sgWrapper, styles.mainSwapper]}>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View  style={[styles.pageTitle, styles.hasButton]}>
                <View  href="phenikaa-4-nguyenvong.html"><FontAwesomeIcon icon={ faChevronLeft }  size={20}  /></View>

                <Text>Chi tiết bảng điểm</Text>

            </View>


        </View>
        <View  style={[styles.bgWhite, styles.radiusTop20]}>
            <View  style={[styles.navIsIcon, styles.flex, styles.justifyBetween, styles.px15, styles.py15, styles.fs15, styles.fw500]}>
                <View  href="tracuudiem-02-bangdiem.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px10]}>
                    <Image style={styles.mb11} source={require('../../../assets/images/5-gochoctap/icon-1.png')} alt=""></Image>

                    <Text style={styles.color66}>Bảng điểm</Text>
                </View>
                <View  href="tracuudiem-02-hocphanchuaqua.html" style={[styles.navIsIconItem, styles.active, styles.wContent, styles.textCenter, styles.px10]}>
                    <Image style={styles.mb11} source={require('../../../assets/images/5-gochoctap/icon-2.png')} alt=""></Image>

                    <Text style={styles.color66}>Học phần chưa qua</Text>
                </View>
                <View  href="tracuudiem-02-khoikienthuc.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px10]}>
                    <Image style={styles.mb11} source={require('../../../assets/images/5-gochoctap/icon-3.png')} alt=""></Image>

                    <Text style={styles.color66}>Hiển thị theo khối kiến thức</Text>
                </View>

            </View>
            <Text style={[styles.line1, styles.bgD1]}></Text>

            
            <View  style={[styles.textCenter, styles.mt100]}>
                <Image source={require('../../../assets/images/no-data.png')} alt=""></Image>
            </View>
        </View>


    </View>
    )
}
