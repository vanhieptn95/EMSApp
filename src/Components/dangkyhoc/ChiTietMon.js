import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import DangKyHoc from './DangKyHocController'
// import Core from '../../Core'
// import ModalLoading from '../ModalLoading'

let dtChiTietLopHocPhan= [];

export default function ChiTietMon({ navigation }){
    let [count, setCount] = useState(0);
    useEffect(() => {
        let objLopHocPhan = DangKyHoc.dtLopHocPhan.rs.find(e => e.ID === DangKyHoc.strLopHocPhan_Id);
        DangKyHoc.getList_ChiTietLopHocPhan(data => {dtChiTietLopHocPhan= data; setCount(++count) });
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>
<View style={[styles.sgWrapper, styles.mainSwapper, styles.flex1]}>
        <ScrollView>
        <View style={styles.pageHeader}>
        <Text style={styles.topOfMobi}> </Text>
            <View  style={[styles.pageTitle]}>
                <TouchableOpacity style={styles.flexR} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Chi tiết môn</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.contentRTop}>
            <View style={[styles.bgWhite, styles.radiusTop20]}>
                <Text style={[styles.fwBold, styles.pt16, styles.px15, styles.pb10, styles.lineHeight24, styles.flex, styles.itemCenter, styles.fs16]}>
                    {objLopHocPhan.TENLOP}
                </Text>
                {dtChiTietLopHocPhan.map((item, index) =>  (
                        <View key={index}>
                            <View style={[styles.line1, styles.bgE9]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.itemCenter, styles.flexR]}>
                                <Text style={styles.numberLabelL}>{index < 9? "0" + (index + 1): index + 1}</Text>
                                <Text style={[styles.color66, styles.flexShrink0, styles.w1/4, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}> Buổi học</Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fwBold, styles.fs15]}>{item.BUOIHOC}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Ngày bắt đầu</Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.NGAYBATDAU}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Ngày kết thúc</Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.NGAYKETTHUC}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Thứ </Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.THUHOC}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số tiết </Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.SOTIET}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Tiết bắt đầu</Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.TIETBATDAU}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Tiết kết thúc  </Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.TIETKETTHUC}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Phòng học</Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.PHONGHOC_TEN}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Giảng viên</Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.GIANGVIEN}</Text>
                            </View>
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                                <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Kiểu học</Text>
                                <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.THUOCTINH_TEN}</Text>
                            </View>
        
                            <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                            <View style={[styles.line10, styles.bgF6]}></View>
                            <View style={[styles.line1, styles.bgE9]}></View>
                        </View>
                    ))}
                
            </View>



        </View>
        </ScrollView>

    </View>
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
    </ImageBackground>
    )
}
