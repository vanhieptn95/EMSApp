import React, {useEffect,useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView, Alert} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
// import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
// import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

import DangKyHoc from './DangKyHocController'
// import Core from '../../Core'
// import ModalLoading from '../ModalLoading'

const alertDangKy = () =>{
    Alert.alert(
        "Đăng ký lớp học",
        "CSE703006 - Cấu trúc dữ liệu và thuật toán Phần 2",
        [
            {
                text: 'Có',
                onPress: () => {
                    Alert.alert("Thông báo","Đăng ký thành công");
                }
            },
            {
                text: 'Không',
                onPress: () => {
                }
            }
        ]
        )
}

export default function ChonMon({ navigation }){
    let [count, setCount] = useState(0);
    let arrMau = ["#4e8d42", "#f26552", "#aaaaaa"];
    DangKyHoc.getList_LopHocPhan();
    useEffect(() => {
        DangKyHoc.state = setCount;
        navigation.addListener('focus', () => {
            DangKyHoc.state = setCount;
        });
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>

<View style={[styles.sgWrapper, styles.mainSwapper]}>
            <ScrollView>
        <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle]}>
                <TouchableOpacity style={styles.flexR} href="../home.html" onPress={() => navigation.goBack()} >
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Chọn lớp học phần</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DangKyHocLoc')}  style={[styles.mlAuto, styles.colorWhite, styles.flexR, {marginRight: -35}]}>
                    <FontAwesomeIcon icon={ faFilter }  size={20}  style={styles.colorWhite} /> 
                    <Text style={[styles.mr14, styles.colorWhite, styles.fs11, {bottom: -3}]}>Lọc</Text>
                </TouchableOpacity>
            </View>


        </View>
        <View style={styles.contentRTop}>
            <View style={[styles.bgWhite, styles.radiusTop20, styles.fs15, {backgroundColor: '#f1f1f1'}]}>
                <Text style={[styles.px15, styles.pt8, styles.fwBold, styles.lineHeight16, styles.fs18, styles.pb10]}>Lớp học phần</Text>
            </View>
            <View style={[styles.sgModalBody, styles.fs15, {backgroundColor: '#f1f1f1'}]}>
                <View style={styles.selectedClassList}>
                    {DangKyHoc.dtLopHocPhan.rs.map((item, index) =>  (
                        <View key={index} style={[styles.px15, styles.mb10]}>
                            <View style={[styles.selectedClassItem, {borderColor: arrMau[index%3]}]}>
                                <Text style={[styles.fw500, styles.px13, styles.py6, styles.lineHeight20, styles.fs15]}>{item.TENLOP}</Text>
                                <View style={[styles.line1, styles.bgE9]}></View>
                                <View style={[styles.flex, styles.alignCenter, styles.py5, styles.mt3, styles.px15, styles.flexR]}>
                                    <Text style={styles.fs15}>{item.THUOCTINHLOP_TEN}</Text>
                                    <Text style={[styles.w40p, styles.mlAuto, styles.fs15]}>Thứ: {item.THUHOC}</Text>
                                </View>
                                <View style={[styles.flex, styles.alignCenter, styles.py5, styles.px15, styles.flexR]}>
                                    <Text style={styles.fs15}>Tổng số: {item.SOLUONGDUKIENHOC}</Text>
                                    <Text style={[styles.w40p, styles.mlAuto, styles.fs15]}>Đã đăng ký: {item.SOTHUCTEDANGKYHOC}</Text>
                                </View>
                                {
                                        item.GIANGVIEN? (<View  style={[styles.flex, styles.alignCenter, styles.py5, styles.px15, styles.flexR]}>
                                            <Text style={styles.fs15}>Giảng viên: {item.GIANGVIEN}</Text>
                                            {/* <Text style={[styles.w40p, styles.mlAuto,styles.fs15]}>{aData.GIANGVIEN}</Text> */}
                                        </View>): (<View></View>)
                                    }
                                <View style={[styles.flex, styles.alignCenter, styles.px15, styles.bgF1, styles.mt3, styles.bottom, styles.flexR]}>
                                    <Text style={[styles.colorQuinary, styles.fwBold, styles.fs15]}>{item.PHISAUKHITRUMIEN} đ</Text>
                                    <TouchableOpacity onPress={() => {DangKyHoc.strLopHocPhan_Id = item.ID; navigation.navigate('DangKyHocChiTiet') }} style={[styles.btn, styles.btnSm, styles.mlAuto, styles.btnWhite, styles.borderWhite, styles.mr12, styles.fs15, styles.flexR, styles.borderNone]}>
                                        <Text style={[styles.fs15, styles.fw500]}>Chi tiết </Text>
                                    </TouchableOpacity>
                                    {
                                        DangKyHoc.objHocPhan.DADANGKY == 0?
                                        item.SOLOPTHUOCCUNGNHOM == 1 ? 
                                        (
                                            <TouchableOpacity onPress={()=> DangKyHoc.DangKyLopHocPhan(item) } style={[styles.btn, styles.btnSm, styles.bgSenary, styles.colorWhite, styles.borderWhite, styles.my7, styles.fs15, styles.flexR, styles.borderNone]}>
                                                <Text style={[styles.fs15, styles.fw500, styles.colorWhite]}>Đăng ký </Text>
                                            </TouchableOpacity>
                                        ):
                                        (
                                            <TouchableOpacity onPress={() => {DangKyHoc.objLopHocPhan = item; DangKyHoc.strLopHocPhan_Id = item; navigation.navigate('DangKyHocChonThem')}} style={[styles.btn, styles.btnSm, styles.bgQuinary, styles.colorWhite, styles.borderWhite, styles.my7, styles.fs15, styles.flexR, styles.borderNone]}>
                                                <Text style={[styles.fs15, styles.fw500, styles.colorWhite]}>Chọn thêm {item.SOLOPTHUOCCUNGNHOM -1} </Text>
                                            </TouchableOpacity>
                                        )
                                        :
                                        (
                                            <TouchableOpacity style={[styles.btn, styles.btnSm, styles.btnDefault, styles.colorWhite, styles.borderWhite, styles.my7, styles.fs15, styles.flexR, styles.borderNone]}>
                                                <Text style={[styles.fs15, styles.fw500]}>Đã đăng ký </Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                    
                                </View>
                            </View>
                        </View>
                    ))}

                </View>
            </View>
            

        </View>

        </ScrollView>
    </View>
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
        </ImageBackground>
    )
}
