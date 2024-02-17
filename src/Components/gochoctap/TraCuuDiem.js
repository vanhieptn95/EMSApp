import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faChevronDown } from '@fortawesome/free-regular-svg-icons/faChevronDown'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faIdCard } from '@fortawesome/free-regular-svg-icons/faIdCard'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt'
import { faUsersClass } from '@fortawesome/free-regular-svg-icons/faUsersClass'
import { faSmile } from '@fortawesome/free-regular-svg-icons/faSmile'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature'
import { faFileSpreadsheet } from '@fortawesome/free-solid-svg-icons/faFileSpreadsheet'
import Core from '../../Core'
import Diem from './DiemController'
import ModalLoading from '../ModalLoading'

let oNguoiHoc = {};
let dtDiemMoi = [];


let lblTongTinChi = "";
let lblTrungBinh10 = "";
let lblTrungBinh4 = "";
let lblTichLuy = "";
let lblTichLuy10 = "";
let lblTichLuy4 = "";

export default function TraCuuDiem({ navigation }){
    let [count, setCount] = useState(0);
    if(Diem.dtKetQua.rsThongTinNguoiHoc && Diem.dtKetQua.rsThongTinNguoiHoc.length > 0) {
        oNguoiHoc = Diem.dtKetQua.rsThongTinNguoiHoc[0];
        dtDiemMoi = Diem.dtKetQua.rsDiemMoiNhat;
        let jsonSV = Diem.dtKetQua.rsDiemTrungBinhChung;
        let temp = jsonSV.find(element => element.DAOTAO_THOIGIANDAOTAO_ID === null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHCHUNG' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10');
        lblTongTinChi = temp !== undefined ? temp.TONGSOTINCHI : "";
    
        //temp = jsonSV.find(element => element.DAOTAO_THOIGIANDAOTAO_ID === null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHCHUNG' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10');
        lblTrungBinh10 = temp !== undefined ? temp.DIEMTRUNGBINH : "";

        temp = jsonSV.find(element => element.DAOTAO_THOIGIANDAOTAO_ID === null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHCHUNG' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '4');
        lblTrungBinh4 = temp !== undefined ? temp.DIEMTRUNGBINH : "";
        
        temp = jsonSV.find(element => element.DAOTAO_THOIGIANDAOTAO_ID === null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHTICHLUY' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10');
        lblTichLuy = temp !== undefined ? temp.TONGSOTINCHI : "";

        //temp = jsonSV.find(element => element.DAOTAO_THOIGIANDAOTAO_ID === null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHTICHLUY' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10');
        lblTichLuy10 = temp !== undefined ? temp.DIEMTRUNGBINH : "";

        temp = jsonSV.find(element => element.DAOTAO_THOIGIANDAOTAO_ID === null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHTICHLUY' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '4');
        lblTichLuy4 = temp !== undefined ? temp.DIEMTRUNGBINH : "";
    }
    useEffect(() => {
        Diem.state = setCount;
        Diem.strSinhVien_Id = Core.userId
        Diem.getList_ChuongTrinh();
    }, [])
    return(
<ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
    <View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
            
    <ScrollView>
            <View  style={styles.pageHeader}>
                <Text style={styles.topOfMobi}> </Text>
                <View  style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                    <TouchableOpacity style={styles.flexR}  onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                        <Text style={styles.textTitle}>Bảng điểm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View  style={styles.contentRTop}>
                <View  style={[styles.bgWhite, styles.radiusTop20, styles.fs15, styles.pt18]}>
                    <View  style={[styles.formControl]}>
                        <Text style={[styles.color66, styles.textCenter, styles.bold, styles.fs18, styles.colorQuinary]}>{oNguoiHoc.DAOTAO_CHUONGTRINH_TEN}</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9, styles.mt15]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR, styles.justifyBetween]}>
                        <View style={[styles.flexR]}>
                            <FontAwesomeIcon icon={ faUser }  size={18} style={[styles.mr10, styles.colorPrimary]} />
                            <Text style={styles.color66}>Họ và tên </Text>
                        </View>
                        <View style={[styles.secondView]}><Text style={[styles.fwBold]}>{oNguoiHoc.QLSV_NGUOIHOC_HODEM ? oNguoiHoc.QLSV_NGUOIHOC_HODEM + " " + oNguoiHoc.QLSV_NGUOIHOC_TEN: ""}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR, styles.justifyBetween]}>
                        <View style={[styles.flexR]}>
                            <FontAwesomeIcon icon={ faIdCard }   size={18} style={[styles.mr10, styles.colorPrimary]} />
                            <Text style={styles.color66}>Mã số </Text>
                        </View>
                        <View style={[styles.secondView]}><Text>{oNguoiHoc.QLSV_NGUOIHOC_MASO}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR, styles.justifyBetween]}>
                        <View style={[styles.flexR]}>
                            <FontAwesomeIcon icon={ faUsersClass }  size={18} style={[styles.mr10, styles.colorPrimary]} />
                            <Text style={styles.color66}>Lớp </Text>
                        </View>
                        <View style={[styles.secondView]}><Text>{oNguoiHoc.DAOTAO_LOPQUANLY_TEN}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR, styles.justifyBetween]}>
                        <View style={[styles.flexR]}>
                            <FontAwesomeIcon icon={ faSmile } size={18} style={[styles.mr10, styles.colorPrimary]} />
                            <Text style={styles.color66}>Trạng thái </Text>
                        </View>
                        <View style={[styles.secondView]}><Text>{oNguoiHoc.QLSV_TRANGTHAINGUOIHOC_TEN}</Text></View>
                    </View>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.colorWhite, styles.bgQuinary, styles.flexR]}>
                        <FontAwesomeIcon icon={ faFileSignature }  size={22} style={[styles.colorWhite]} />
                        <Text style={[styles.fs18, styles.fwBold, styles.uppercase, styles.colorWhite]}> Điểm mới</Text>
                    </View>
                    {dtDiemMoi.map((item, index) =>{
                        let classBG = "";
                        if (item.DIEM === 0) classBG = "red";
                        if (item.DIEM >= 3) classBG = "orange";
                        if (item.DIEM >= 5) classBG = "";
                        if (item.DIEM >= 7) classBG = "blue";
                        if (item.DIEM >= 8.5) classBG = "green";
                        return (
                            <View key={index}>
                                <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
    
                                    <Text style={[styles.pr20, styles.truncase1]}>{item.DAOTAO_HOCPHAN_TEN}</Text>
                                    <Text style={[styles.mlAuto, styles.fwBold, {color: classBG}]}>{item.DIEM}</Text>
                                </View>
                                <Text style={[styles.line1, styles.bgE9]}></Text>
                            </View>
                            
                        )
                    } )

                    }
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.colorWhite, styles.bgSenary, styles.flexR]}>
                        <FontAwesomeIcon icon={ faFileSpreadsheet }  size={22} style={[styles.colorWhite]} />
                        <Text style={[styles.fs18, styles.fwBold, styles.uppercase,  styles.colorWhite]}> Tổng điểm</Text>
                    </View>

                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
                        <Text style={[styles.pr20, styles.truncase1]}>
                            Tổng số tín chỉ
                        </Text>
                        <Text style={[styles.mlAuto, styles.fwBold]}>{lblTongTinChi}</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
                        <Text style={[styles.pr20, styles.truncase1]}>
                            Tổng số tín chỉ tích lũy 
                        </Text>
                        <Text style={[styles.mlAuto, styles.fwBold]}>{lblTichLuy}</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
                        <Text style={[styles.pr20, styles.truncase1]}>
                            Điểm trung bình trung hệ 10
                        </Text>
                        <Text style={[styles.mlAuto, styles.fwBold]}>{lblTrungBinh10}</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
                        <Text style={[styles.pr20, styles.truncase1]}>
                            Điểm trung bình trung hệ 4 
                        </Text>
                        <Text style={[styles.mlAuto, styles.fwBold]}>{lblTrungBinh4}</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
                        <Text style={[styles.pr20, styles.truncase1]}>
                            Điểm trung bình trung tích lũy hệ 10
                        </Text>
                        <Text style={[styles.mlAuto, styles.fwBold]}>{lblTichLuy10}</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
                        <Text style={[styles.pr20, styles.truncase1]}>
                            Điểm trung bình trung tích lũy hệ 4 
                        </Text>
                        <Text style={[styles.mlAuto, styles.fwBold]}>{lblTichLuy4}</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.bgF6]}>
                        <Text style={[styles.pr20, styles.truncase1, styles.fwBold, styles.alignCenter]}>
                        Chi tiết bảng điểm
                        </Text>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.justifyBetween, styles.textCenter, styles.px15, styles.pt15, styles.pb20, styles.flexR, styles.justifyBetween]}>
                        <TouchableOpacity  style={[styles.block, styles.wContent, styles.px10, {justifyContent: "center", alignItems: 'center'}]} href="tracuudiem-02-bangdiem.html"  onPress={() => navigation.navigate('BangDiem')}>
                            <Image source={require('../../../assets/images/5-gochoctap/icon-1.png')} style={[styles.justifyBetween]} alt=""></Image>
                            <Text style={[styles.mt8, styles.fw500, styles.color66, styles.lineHeight20]}>Bảng điểm</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity  style={[styles.block, styles.wContent, styles.px10, {justifyContent: "center", alignItems: 'center'}]} href="tracuudiem-02-hocphanchuaqua.html">
                            <Image source={require('../../../assets/images/5-gochoctap/icon-2.png')} style={[styles.justifyBetween]}></Image>
                            <Text style={[styles.mt8, styles.fw500, styles.color66, styles.lineHeight20]}>Học phần chưa qua</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity  style={[styles.block, styles.wContent, styles.px10, {justifyContent: "center", alignItems: 'center'}]} href="tracuudiem-02-bangdiem.html"  onPress={() => navigation.navigate('KhoiKienThuc')}>
                            <Image source={require('../../../assets/images/5-gochoctap/icon-3.png')} alt=""></Image>
                            <Text style={[styles.mt8, styles.fw500, styles.color66, styles.lineHeight20]}>Hiển thị theo khối kiến thức</Text>
                        </TouchableOpacity>
                    </View>


                </View>



            </View>


    </ScrollView>
    </View>
    <ModalLoading modalVisible={Diem.modalVisible}></ModalLoading>
    </ImageBackground>
    )
}
