import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faChevronCircleDown } from '@fortawesome/free-brands-svg-icons/faChevronCircleDown'
// import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons/faChevronCircleUp'
// import Core from '../../Core'
import DangKyHoc from './DangKyHocController'
// import ModalLoading from '../ModalLoading'
export default function TongLopDaDangKy({ navigation }){
    let [count, setCount] = useState(0);
    useEffect(() => {
        DangKyHoc.state = setCount;
    }, [])
    let arrKetQua = [];
    let arrMau = ["#d36f51", "#0232b9", "#a12529", "#71b636", "#f94341", "#f6c531"];
    let oKetQua = [];
    let tempHocPhan = "";
    DangKyHoc.dtKetQuaDangKy.forEach((item, index) => {
        if(item.DAOTAO_HOCPHAN_ID !== tempHocPhan){
            tempHocPhan = item.DAOTAO_HOCPHAN_ID;
            if(oKetQua.length > 0 ) arrKetQua.push(oKetQua)
            oKetQua = [];
        }
        oKetQua.push(item)
    });
    if(oKetQua.length > 0 ) arrKetQua.push(oKetQua)
    oKetQua=[];
    
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>
        <View  style={[styles.sgWrapper, styles.mainSwapper]}>
                <ScrollView>
                <View  style={[styles.pageHeader]}>
                    <Text style={styles.topOfMobi}>  </Text>
                    <View style={[styles.pageTitle]}>
                        <TouchableOpacity style={styles.flexR}  onPress={() => navigation.goBack()} href="../home.html">
                            <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                            <Text style={styles.textTitle}> Tổng lớp đã đăng ký</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mlAuto, styles.pageTitleSpan]}><Text style={[styles.fs18, styles.colorQuinary, styles.bold]}>{DangKyHoc.dtKetQuaDangKy.length}</Text></TouchableOpacity>
                        {/* <FontAwesomeIcon icon={ faMoneyCheckEdit }  size={22} style={[styles.mlAuto, styles.colorWhite]}  /> 
                        <Text style={[styles.mr14, styles.colorWhite, styles.fs11, {bottom: -3}]}>Đăng ký</Text> */}
                    </View>
        
                </View>
                <View  style={styles.contentRTop}>
                    
                    {arrKetQua.map((item, index) =>  (
                        <View key={index} style={[index == 0 ? styles.radiusTop20: {},styles.pb15, {backgroundColor: arrMau[index%arrMau.length]}]}>
                            <View  style={[styles.fwBold, styles.px15, styles.py12, styles.colorWhite, styles.fs18, styles.fwBold, styles.flex, styles.flexR]}>
                                <Text style={[styles.mr20, styles.colorWhite, styles.fs18, styles.fwBold]}>{item[0].DAOTAO_HOCPHAN_TEN}</Text>
                                <FontAwesomeIcon icon={ faChevronCircleDown }  size={20}  style={[styles.mlAuto, styles.colorWhite]} />
                            </View>
                            {item.map((aData, index2) =>  (
                                <View key={index2}  style={styles.registerClassItem}>
                                    <Text style={[styles.fw500, styles.px13, styles.py6, styles.lineHeight20, styles.fs15]}>
                                        {aData.DANGKY_LOPHOCPHAN_TEN}
                                    </Text>
                                    <Text style={[styles.line1, styles.bgE9]}></Text>
                                    <View  style={[styles.flex, styles.alignCenter, styles.py5, styles.mt3, styles.px15, styles.flexR]}>
                                        <Text style={styles.fs15}>{aData.THUOCTINHLOP_TEN}</Text>
                                        <Text style={[styles.w40p, styles.mlAuto,styles.fs15]}>Thứ: {aData.THUHOC}</Text>
                                    </View>
                                    <View  style={[styles.flex, styles.alignCenter, styles.py5, styles.px15, styles.flexR]}>
                                        <Text style={styles.fs15}>Tổng số: {aData.SOLUONGDUKIENHOC}</Text>
                                        <Text style={[styles.w40p, styles.mlAuto,styles.fs15]}>Đã đăng ký: {aData.SOTHUCTEDANGKYHOC}</Text>
                                    </View>
                                    {
                                        aData.GIANGVIEN? (<View  style={[styles.flex, styles.alignCenter, styles.py5, styles.px15, styles.flexR]}>
                                            <Text style={styles.fs15}>Giảng viên: {aData.GIANGVIEN}</Text>
                                            {/* <Text style={[styles.w40p, styles.mlAuto,styles.fs15]}>{aData.GIANGVIEN}</Text> */}
                                        </View>): (<View></View>)
                                    }
                                    
                                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.bgF1, styles.mt3, styles.bottom, styles.flexR, {borderRadius: 8}]}>
                                        <Text style={[styles.colorQuinary, styles.fwBold, styles.fs15]}>{aData.PHISAUKHITRUMIEN}</Text>
                                        <TouchableOpacity style={[styles.btn, styles.btnSm, styles.mlAuto, styles.btnWhite, styles.borderWhite, styles.mr12, styles.fs15, styles.flexR, styles.borderNone]} href="phenikaa-4-dangkyhoc-dangkyhoc.html">
                                            <Text style={[styles.fs15, styles.fw500]}>Đổi lịch </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => DangKyHoc.HuyDangKy(item)} style={[styles.btn, styles.btnSm, styles.btnRed, styles.colorWhite, styles.borderWhite, styles.my7, styles.fs15, styles.flexR, styles.borderNone]} href="phenikaa-4-dangkyhoc-dangkyhoc-xacnhandangky.html">
                                            
                                            <Text style={[styles.fs15, styles.fw500, styles.colorWhite]}>Hủy </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
            
                        </View>
                    ))}
        
                    
        
        
                </View>
                </ScrollView>
            </View>
            {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
            </ImageBackground>
    )
}
