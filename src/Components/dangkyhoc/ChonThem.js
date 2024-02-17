import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faCheck } from '@fortawesome/free-brands-svg-icons/faCheck'
// import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
// import { faMoneyCheckEdit } from '@fortawesome/free-brands-svg-icons/faMoneyCheckEdit'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
// import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
// import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

import DangKyHoc from './DangKyHocController'
// import Core from '../../Core'
// import ModalLoading from '../ModalLoading'
let objDangKy = {};
let dtLopChonThem = [];

let btnDangKy = (navigation) => {
    var objHocPhan = {...DangKyHoc.objLopHocPhan};
    for(let x in objDangKy){
        objHocPhan.ID += ',' + objDangKy[x];
    }
    DangKyHoc.DangKyLopHocPhan(objHocPhan)
    navigation.goBack();
}

export default function ChonThem({ navigation }){
    let [count, setCount] = useState(0);
    useEffect(() => {
        let strMaNhomLop = DangKyHoc.objLopHocPhan.MANHOMLOP;

        DangKyHoc.getList_LopHocPhanTheoNhom(data => {
            // console.log(data);
            let dataThuocTinh = data.rsThuocTinhLopHocPhan.filter(e => e.LOPHOCPHANCHINH !== 1 && e.MANHOMLOP === strMaNhomLop);
            
            dataThuocTinh.forEach(e => {
                var x = data.rs.find(ele => e.THUOCTINHLOP_ID === ele.THUOCTINHLOP_ID && ele.SOTHUCTEDANGKYHOC < ele.SOLUONGDUKIENHOC);
                if(x){
                    objDangKy[e.THUOCTINHLOP_ID] = x.ID;
                }
            });
            dtLopChonThem = data.rs.filter(e => e.LOPHOCPHANCHINH !== 1);
            setCount(++count);
        }, strMaNhomLop);
    }, [])
    return(
<ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>

<View style={[styles.sgWrapper, styles.mainSwapper]}>
            <ScrollView>
        <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle]}>
                <TouchableOpacity style={styles.flexR} href="../home.html" onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Chọn thêm lớp học phần</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => btnDangKy(navigation)} style={[styles.btn, styles.btnOutline, styles.height33, styles.mlAuto, styles.bgPrimary, {borderWidth: 1, borderColor: 'white', marginRight: -35, marginTop: -5}]}>
                    <Text style={[styles.px18, styles.colorWhite, styles.fs18]}>Đăng ký</Text>
                </TouchableOpacity>
            </View>


        </View>
        <View style={styles.contentRTop}>
            <View style={[styles.bgWhite, styles.radiusTop20, styles.fs15, {backgroundColor: '#f1f1f1'}]}>
                <Text style={[styles.px15, styles.pt8, styles.fwBold, styles.lineHeight16, styles.fs18, styles.pb10]}>{DangKyHoc.objHocPhan.DAOTAO_HOCPHAN_MA + " - " + DangKyHoc.objHocPhan.DAOTAO_HOCPHAN_TEN}</Text>
            </View>
            <View style={[styles.sgModalBody, styles.fs15, {backgroundColor: '#f1f1f1'}]}>
                <View style={styles.selectedClassList}>
                    
                <View style={[styles.px15, styles.mb10, {opacity: 0.5}]}>
                        <View style={[styles.selectedClassItem, {borderColor: '#f26552'}]}>
                            <Text style={[styles.fw500, styles.px13, styles.py6, styles.lineHeight20, styles.fs15]}>{DangKyHoc.objLopHocPhan.TENLOP}</Text>
                            <View style={[styles.line1, styles.bgE9]}></View>
                            <View style={[styles.flex, styles.alignCenter, styles.py5, styles.mt3, styles.px15, styles.flexR]}>
                                <Text style={styles.fs15}>{DangKyHoc.objLopHocPhan.THUOCTINHLOP_TEN}</Text>
                                <Text style={[styles.w40p, styles.mlAuto, styles.fs15]}>Thứ: {DangKyHoc.objLopHocPhan.THUHOC}</Text>
                            </View>
                            <View style={[styles.flex, styles.alignCenter, styles.py5, styles.px15, styles.flexR]}>
                                <Text style={styles.fs15}>Tổng số: {DangKyHoc.objLopHocPhan.SOLUONGDUKIENHOC}</Text>
                                <Text style={[styles.w40p, styles.mlAuto, styles.fs15]}>Đã đăng ký: {DangKyHoc.objLopHocPhan.SOTHUCTEDANGKYHOC}</Text>
                            </View>
                            {
                                DangKyHoc.objLopHocPhan.GIANGVIEN? (<View  style={[styles.flex, styles.alignCenter, styles.py5, styles.px15, styles.flexR]}>
                                    <Text style={styles.fs15}>Giảng viên: {DangKyHoc.objLopHocPhan.GIANGVIEN}</Text>
                                    {/* <Text style={[styles.w40p, styles.mlAuto,styles.fs15]}>{aData.GIANGVIEN}</Text> */}
                                </View>): (<View></View>)
                            }
                            <View style={[styles.flex, styles.alignCenter, styles.px15, styles.bgF1, styles.mt3, styles.bottom, styles.flexR]}>
                                <Text style={[styles.colorQuinary, styles.fwBold, styles.fs15]}>{DangKyHoc.objLopHocPhan.PHISAUKHITRUMIEN}</Text>
                                <TouchableOpacity onPress={() =>{DangKyHoc.strLopHocPhan_Id = DangKyHoc.objLopHocPhan.ID; navigation.navigate('DangKyHocChiTiet') }} style={[styles.btn, styles.btnSm, styles.mlAuto, styles.btnWhite, styles.borderWhite, styles.mr12, styles.fs15, styles.flexR, styles.borderNone]} href="phenikaa-4-dangkyhoc-dangkyhoc.html">
                                    <Text style={[styles.fs15, styles.fw500]}>Chi tiết </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btn, styles.btnSm, styles.bgQuinary, styles.colorWhite, styles.borderWhite, styles.my7, styles.fs15, styles.flexR, styles.borderNone]} href="phenikaa-4-dangkyhoc-dangkyhoc-xacnhandangky.html">
                                    
                                    <Text style={[styles.fs15, styles.fw500, styles.colorWhite]}> Chọn thêm {DangKyHoc.objLopHocPhan.SOLOPTHUOCCUNGNHOM -1} </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                    {dtLopChonThem.map((item, index) =>  (
                        <View style={[styles.px15, styles.mb10]} key={index}>
                            <View style={[styles.selectedClassItem, {borderColor: '#aaaaaa'}]}>
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
                                        objDangKy[item.THUOCTINHLOP_ID] == item.ID ?
                                        (<TouchableOpacity style={[styles.btn, styles.btnSm, styles.bgSenary, styles.colorWhite, styles.borderWhite, styles.my7, styles.fs15, styles.flexR, styles.borderNone]} href="phenikaa-4-dangkyhoc-dangkyhoc-xacnhandangky.html">
                                            <FontAwesomeIcon icon={ faCheck }  size={14}  style={styles.colorSenary} />
                                            <Text style={[styles.fs15, styles.fw500, styles.colorWhite]}>Đã chọn lớp {item.THUOCTINHLOP_TEN} </Text>
                                        </TouchableOpacity>)
                                        :
                                        (<TouchableOpacity onPress={() => {objDangKy[item.THUOCTINHLOP_ID] = item.ID; setCount(++count) }} style={[styles.btn, styles.btnSm, styles.btnDefault, styles.colorWhite, styles.borderWhite, styles.my7, styles.fs15, styles.flexR, styles.borderNone]} href="phenikaa-4-dangkyhoc-dangkyhoc-xacnhandangky.html">
                                        
                                            <Text style={[styles.fs15, styles.fw500]}>Chọn lớp {item.THUOCTINHLOP_TEN} </Text>
                                        </TouchableOpacity>)
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
