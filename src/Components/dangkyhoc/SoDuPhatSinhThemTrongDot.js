import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faChevronCircleDown } from '@fortawesome/free-brands-svg-icons/faChevronCircleDown'
// import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons/faChevronCircleUp'
// import Core from '../../Core'
import DangKyHoc from './DangKyHocController'

export default function SoDuPhatSinhThemTrongDot({ navigation }){
    
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>
<View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
        <ScrollView>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle]}>
                <TouchableOpacity style={styles.flexR}  href="../home.html" onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Số phát sinh thêm trong đợt</Text>
                </TouchableOpacity>
                {/* <FontAwesomeIcon icon={ faMoneyCheckEdit }  size={22} style={[styles.mlAuto, styles.colorWhite]}  /> 
                <Text style={[styles.mr14, styles.colorWhite, styles.fs11, {bottom: -3}]}>Đăng ký</Text> */}
            </View>

        </View>
        <View  style={[styles.contentRTop]}>
            <View  style={[styles.bgWhite, styles.radiusTop20]}>
            {DangKyHoc.dtTinhTrangTaiChinh.rsConPhaiNopTrongDotDK.map((item, index) =>  (
                    <View key={index}>
                        <View  style={[styles.fwBold, styles.pt16, styles.px15, styles.pb10, styles.lineHeight24, styles.flex, styles.itemCenter, styles.flexR]}>
                        <Text style={[styles.numberLabelL]}>{index < 10? "0" + (index + 1): index + 1}</Text>
                            <Text style={[styles.mr25, styles.lineHeight24, styles.bold, styles.fs17]}>Lớp: {item.DANGKY_LOPHOCPHAN_TEN}</Text>
                            {/* <FontAwesomeIcon icon={ faChevronCircleDown }  size={20}  /> */}
                        </View>
                        <Text style={[styles.line1, styles.bgE9]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.flexShrink0, styles.w1/4, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Học phần: {item.DAOTAO_HOCPHAN_TEN + " - " + item.DAOTAO_HOCPHAN_MA}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Loại khoản</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.TAICHINH_CACKHOANTHU_TEN}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số tín chỉ</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.SOTINCHI}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Kiểu học</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.KIEUHOC_TEN}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số tiền phải nộp ban đầu</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.SOTIEN}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Phần trăm được miễn</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.SOTIENDUOCMIEN}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số được miễn</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.SOTIENDUOCMIEN}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số còn phải nộp</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.SOTIENPHAINOP}</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <View  style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Chuyển kế toán</Text>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>{item.DACHUYENKETOAN > 0? "Đã chuyển kế toán": ""}</Text>

                        </View>
                        <Text style={[styles.line1, styles.bgE9, styles.mt7]}></Text>
                        <Text style={[styles.line10, styles.bgF6]}></Text>
                        <Text style={[styles.line1, styles.bgE9]}></Text>
                    </View>
                ))}
                
                <View style={{height: 50}}></View>
            </View>


        </View>
        </ScrollView>
        <View  style={[styles.fixedBottom, styles.shadowTop, styles.bgWhite]}>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View  style={[styles.flex, styles.itemCenter, styles.py17, styles.px15, styles.flexR]}>
                <Text style={[styles.fs16]}>Tổng Số tiền phát sinh thêm</Text>
                <Text style={[styles.fwBold, styles.colorQuinary, styles.mlAuto, styles.fs16]}>{DangKyHoc.dSoNo} đ</Text>
            </View>
        </View>
    </View></ImageBackground>
    )
}
