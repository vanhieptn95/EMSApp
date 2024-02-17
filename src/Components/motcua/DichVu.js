import React from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faCogs } from '@fortawesome/free-brands-svg-icons/faCogs'
import { faAlarmClock } from '@fortawesome/free-brands-svg-icons/faAlarmClock'
import { faFileImport } from '@fortawesome/free-brands-svg-icons/faFileImport'
import { faReceipt } from '@fortawesome/free-brands-svg-icons/faReceipt'
export default function DichVu({ navigation }){
    
    return(
<View style={[styles.sgWrapper, styles.oneDoor]}>
    
<ScrollView>
        <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={styles.pageTitle}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.colorPrimary} href="../home.html"><FontAwesomeIcon icon={ faChevronLeft }  size={20}  /></TouchableOpacity>
                <Image source={require('../../../assets/images/dashboad-item-82.png')} style={styles.pageTitleImg}></Image>
                <Text style={[styles.colorRaw, styles.pageTitle]}>Hệ thống 1 cửa sinh viên</Text>
            </View>


        </View>
        <View style={styles.oneDoorContent}>
            <View style={[styles.oneDoorContentHead, styles.mb12, styles.flex, styles.alignCenter, styles.px15, styles.flexR]}>
                <TouchableOpacity style={[styles.textCenter, styles.block, styles.colorQuinary, styles.px4, styles.w25pt]} href="phenikaa-3-1cua-dichvu.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faCogs }  size={30}  style={[styles.itemActive]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5,styles.itemActive]}>Dịch vụ</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MotCuaChoXacNhan')} style={[styles.textCenter, styles.block, styles.colorPrimary, styles.px4]} href="phenikaa-3-1cua-choxacnhan.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faAlarmClock }  size={30} style={[styles.colorPrimary]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5, styles.colorPrimary]}>Chờ xác nhận</Text></View>
                    <View style={[styles.oneDoorContentHeadSpan]}><Text style={styles.oneDoorContentHeadSpanText}>3</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MotCuaChoXacNhan')} style={[styles.textCenter, styles.block, styles.colorPrimary, styles.px4]} href="phenikaa-3-1cua-datiepnhan.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faFileImport }  size={30} style={[styles.colorPrimary]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5, styles.colorPrimary]}>Đã tiếp nhận</Text></View>
                    <View style={[styles.oneDoorContentHeadSpan]}><Text style={styles.oneDoorContentHeadSpanText}>20</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MotCuaChoXacNhan')} style={[styles.textCenter, styles.block, styles.colorPrimary, styles.px4]} href="phenikaa-3-1cua-dangxuly.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faReceipt }  size={30} style={[styles.colorPrimary]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5, styles.colorPrimary]}>Đang xử lý</Text></View>
                </TouchableOpacity>

            </View>
            <View style={styles.oneDoorContentBody}>
                <View style={[styles.oneDoorList, styles.flexR]}>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={[styles.oneDoorItem]}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-01-vayvon.png')} style={styles.oneDoorItemImg}></Image></View>
                            

                            <Text style={styles.oneDoorItemP}>Vay vốn sinh viên</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={styles.oneDoorItem}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-02-donthoihoc.png')} style={styles.oneDoorItemImg}></Image></View>
                            <Text style={styles.oneDoorItemP}>Đơn xin thôi học</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={styles.oneDoorItem}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-03-chungnhan.png')} style={styles.oneDoorItemImg}></Image></View>
                            <Text style={styles.oneDoorItemP}>Giấy chứng nhận sinh viên tạm thôi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={styles.oneDoorItem}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-04-caplaithesv.png')} style={styles.oneDoorItemImg}></Image></View>
                            <Text style={styles.oneDoorItemP}> Đơn xin cấp lại thẻ sinh viên</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={styles.oneDoorItem}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-05-gioithieusv.png')} style={styles.oneDoorItemImg}></Image></View>
                            <Text style={styles.oneDoorItemP}>Giấy giới thiệu sinh viên</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={styles.oneDoorItem}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-06-baoluu.png')} style={styles.oneDoorItemImg}></Image></View>
                            <Text  style={styles.oneDoorItemP}>Đơn xin bảo lưu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={styles.oneDoorItem}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-07-thanhtoan.png')} style={styles.oneDoorItemImg}></Image></View>
                            <Text style={styles.oneDoorItemP}> Phiếu thanh toán</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MotCuaXemPhieu')} style={styles.oneDoorItem}>
                        <View style={styles.oneDoorItemCover} >
                            <View style={[styles.alignCenter, styles.justifyCenter]}><Image source={require('../../../assets/images/1cua/sv-08-hoclai.png')} style={styles.oneDoorItemImg}></Image></View>
                            <Text style={styles.oneDoorItemP}>Đơn xin học lại</Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        </View>

        </ScrollView>
    </View>
    )
}
