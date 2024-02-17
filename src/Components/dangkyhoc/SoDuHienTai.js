import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
//import Core from '../../Core'
import DangKyHoc from './DangKyHocController'
export default function SoDuHienTai({ navigation }){
    
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>
<View style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
        <ScrollView>
        <View style={styles.pageHeader}>
        <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle]}>
                <TouchableOpacity style={styles.flexR}  onPress={() => navigation.goBack()} href="../home.html">
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Số dư tài khoản hiện tại</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.contentRTop}>
            <View style={[styles.bgWhite, styles.radiusTop20]}>
                <Text style={[styles.fwBold, styles.pt20, styles.px15, styles.pb13, styles.fs16]}>Khoản nợ</Text>
                {DangKyHoc.dtTinhTrangTaiChinh.rsConPhaiNopHienTai.map((item, index) =>  (
                    <View key={index}>
                        <Text style={[styles.line1, styles.bgE9]}></Text>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.fs15]}>Số tiền</Text>
                            <Text style={[styles.colorQuinary, styles.fwBold, styles.mlAuto, styles.fs15]}>{item.SOTIEN} đ</Text>
                        </View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR, styles.justifyBetween]}>
                            <Text style={[styles.color66, styles.fs15]}>Nội dung </Text>
                            <View style={[styles.secondView]}><Text style={[styles.colorRaw, styles.fs15]}>{item.NOIDUNG}</Text></View>
                        </View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR, styles.justifyBetween]}>
                            <Text style={[styles.color66, styles.fs15]}>Thời gian </Text>
                            <View style={[styles.secondView]}><Text style={[styles.colorRaw, styles.fs15]}>{item.DAOTAO_THOIGIANDAOTAO}</Text></View>
                        </View>
                    </View>
                ))}
                

                {/* <View style={[styles.ml15, styles.py7]}>
                            <Text style={[styles.line1, styles.bgE9]}></Text>
                        </View>
                <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                    <Text style={[styles.color66, styles.fs15]}>Số tiền</Text>
                    <Text style={[styles.colorQuinary, styles.fwBold, styles.mlAuto, styles.fs15]}>5,828,400 đ</Text>
                </View>
                <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR]}>
                    <Text style={[styles.color66, styles.fs15]}>Nội dung </Text>
                    <Text style={[styles.colorRaw, styles.mlAuto, styles.fs15]}>Học phí 2021_2022_2 1</Text>
                </View>
                <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR]}>
                    <Text style={[styles.color66, styles.fs15]}>Thời gian</Text>
                    <Text style={[styles.colorRaw, styles.mlAuto, styles.fs15]}>15/02/2022</Text>
                </View> */}
                <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                <Text style={[styles.line20, styles.bgF6]}></Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.fwBold, styles.pt13, styles.px15, styles.pb13, styles.fs16]}>Khoản còn dư</Text>
                {DangKyHoc.dtTinhTrangTaiChinh.rsConDuHienTai.map((item, index) =>  (
                    <View key={index}>
                        <Text style={[styles.line1, styles.bgE9]}></Text>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.fs15]}>Số tiền</Text>
                            <Text style={[styles.colorSenary, styles.fwBold, styles.mlAuto, styles.fs15]}>{item.SOTIEN} đ</Text>
                        </View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR, styles.justifyBetween]}>
                            <Text style={[styles.color66, styles.fs15]}>Nội dung </Text>
                            <View style={[styles.secondView]}><Text style={[styles.colorRaw, styles.fs15]}>{item.NOIDUNG}</Text></View>
                        </View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR, styles.justifyBetween]}>
                            <Text style={[styles.color66, styles.fs15]}>Thời gian </Text>
                            <View style={[styles.secondView]}><Text style={[styles.colorRaw, styles.fs15]}>{item.DAOTAO_THOIGIANDAOTAO}</Text></View>
                        </View>
                    </View>
                ))}
                {/* <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                    <Text style={[styles.color66, styles.fs15]}>Số tiền</Text>
                    <Text style={[styles.colorSenary, styles.fwBold, styles.mlAuto, styles.fs15]}>5,828,400 đ</Text>
                </View>
                <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR]}>
                    <Text style={[styles.color66, styles.fs15]}>Nội dung </Text>
                    <Text style={[styles.colorRaw, styles.mlAuto, styles.fs15]}>Học phí 2021_2022_2 1</Text>
                </View>
                <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.flexR]}>
                    <Text style={[styles.color66, styles.fs15]}>Thời gian</Text>
                    <Text style={[styles.colorRaw, styles.mlAuto, styles.fs15]}>15/02/2022</Text>
                </View> */}
                
                
            </View>

        </View>
        </ScrollView>
        <View style={[styles.fixedBottom, styles.shadowTop, styles.bgWhite]}>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.itemCenter, styles.py17, styles.px15, styles.flexR]}>
                <Text style={[styles.fs16]}>Tổng Số dư tài khoản</Text>
                <Text style={[styles.fwBold, styles.colorSenary, styles.mlAuto, styles.fs16]}>{DangKyHoc.dSoDu} đ</Text>
            </View>
        </View>
    </View>
    </ImageBackground>
    )
}
