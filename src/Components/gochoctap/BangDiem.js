import React, {useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons/faChevronCircleDown'
import { faChevronCircleUp } from '@fortawesome/free-regular-svg-icons/faChevronCircleUp'
import Diem from './DiemController'

let arrHienThi =[0]

export default function BangDiem({ navigation, route }){
    let [count, setCount] = useState(0);
    let data = Diem.dtKetQua.rsDiemKetThucHocPhan;
    let dtDiemTrungBinhTrung = Diem.dtKetQua.rsDiemTrungBinhChung;

    let arrHocKy = [];
    data.forEach(element => {
        let strHocKy = element.NAMHOC + "_" + element.HOCKY;
        if (arrHocKy.indexOf(strHocKy) === -1) arrHocKy.push(strHocKy);
    });


    return(
    <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
    <View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
            
    <ScrollView>
            <View  style={styles.pageHeader}>
                <Text style={styles.topOfMobi}> </Text>
                <TouchableOpacity  style={[styles.pageTitle, styles.hasButton, styles.flexR]} onPress={() => navigation.goBack()} >
                    <View style={styles.flexR}  href="phenikaa-3-1cua-choxacnhan.html"><FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   /></View>

                    <Text style={styles.textTitle}>Bảng điểm</Text>

                </TouchableOpacity>

            </View>
                <View  style={[styles.bgWhite, styles.radiusTop20]}>
                    <View  style={[styles.flex, styles.justifyBetween, styles.textCenter, styles.px15, styles.pt15, styles.pb20, styles.flexR, styles.justifyBetween]}>
                        <TouchableOpacity  style={[styles.block, styles.wContent, styles.px10, {justifyContent: "center", alignItems: 'center'}]} href="tracuudiem-02-bangdiem.html"  onPress={() => navigation.navigate('BangDiem')}>
                            <Image source={require('../../../assets/images/5-gochoctap/icon-1.png')} style={[styles.justifyBetween]} alt=""></Image>
                            <Text style={[styles.mt8, styles.fw500, styles.color66, styles.lineHeight20, styles.itemActive]}>Bảng điểm</Text>
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
                    <Text style={[styles.line1, styles.bgD1]}></Text>
        
                    <View >
        
        
                        <View  style={[styles.fs15]}>
                            {arrHocKy.map((element, index) => {
                                let strNamHoc = element.substring(0, element.lastIndexOf('_'));
                                let strHocKy = element.substring(element.lastIndexOf('_') + 1);
                                if(arrHienThi.indexOf(index) === -1) {
                                    return (
                                    <View  key={index}>
                                        <TouchableOpacity onPress={() => {if(arrHienThi.indexOf(index) === -1) {arrHienThi.push(index); setCount(++count)}}}  href="tracuudiem-02-bangdiem-xem.html" style={[styles.flex, styles.justifyBetween, styles.py15, styles.px15, styles.flexR]}>
                                                <Text style={[styles.fwBold, styles.mr20]}>Năm học {strNamHoc} - Học kỳ {strHocKy}</Text>
                                                <FontAwesomeIcon icon={ faChevronCircleUp }  size={18} style={[styles.colorPrimary]} />
                                            </TouchableOpacity>
                                            <Text style={[styles.line1, styles.bgD1]}></Text>
                                            <Text style={[styles.line10, styles.bgF6]}></Text>
                                            <Text style={[styles.line1, styles.bgD1]}></Text>
                                    </View>
                                    );
                                }else
                                {
                                    let jsonDiem = data.filter(element => element.NAMHOC === strNamHoc && element.HOCKY == strHocKy);
                                
                                    let temp = dtDiemTrungBinhTrung.find(element => element.DAOTAO_THOIGIANDAOTAO_ID !== null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHCHUNG' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10' && element.NAMHOC === strNamHoc && element.DAOTAO_THOIGIANDAOTAO_KY == strHocKy && element.DOTHOC === null && element.PHAMVITONGHOPDIEM_TEN == 'HOCKY');
                                    let lblTongTinChi = temp !== undefined ? temp.TONGSOTINCHI : "";
                                
                                    temp = dtDiemTrungBinhTrung.find(element => element.DAOTAO_THOIGIANDAOTAO_ID !== null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHTICHLUY' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10' && element.NAMHOC === strNamHoc && element.DAOTAO_THOIGIANDAOTAO_KY == strHocKy && element.DOTHOC === null && element.PHAMVITONGHOPDIEM_TEN == 'HOCKY');
                                    let lblTichLuy = temp !== undefined ? temp.TONGSOTINCHI : "";

                                    //temp = jsonSV.find(element => element.DAOTAO_THOIGIANDAOTAO_ID === null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHCHUNG' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10');
                                    let lblTrungBinh10 = temp !== undefined ? temp.DIEMTRUNGBINH : "";
                            
                                    temp = dtDiemTrungBinhTrung.find(element => element.DAOTAO_THOIGIANDAOTAO_ID !== null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHCHUNG' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '4' && element.NAMHOC === strNamHoc && element.DAOTAO_THOIGIANDAOTAO_KY == strHocKy && element.DOTHOC === null  && element.PHAMVITONGHOPDIEM_TEN == 'HOCKY');
                                    let lblTrungBinh4 = temp !== undefined ? temp.DIEMTRUNGBINH : "";
                                    
                                    temp = dtDiemTrungBinhTrung.find(element => element.DAOTAO_THOIGIANDAOTAO_ID !== null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHTICHLUY' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '10' && element.NAMHOC === strNamHoc && element.DAOTAO_THOIGIANDAOTAO_KY == strHocKy && element.DOTHOC === null && element.PHAMVITONGHOPDIEM_TEN == 'HOCKY');
                                    let lblTichLuy10 = temp !== undefined ? temp.DIEMTRUNGBINH : "";
                            
                                    temp = dtDiemTrungBinhTrung.find(element => element.DAOTAO_THOIGIANDAOTAO_ID !== null && element.LOAIDIEMTRUNGBINH_MA === 'TRUNGBINHTICHLUY' && element.THUOCTINHLANTINH === 0 && element.THANGDIEM_MA === '4' && element.NAMHOC === strNamHoc && element.DAOTAO_THOIGIANDAOTAO_KY == strHocKy && element.DOTHOC === null && element.PHAMVITONGHOPDIEM_TEN == 'HOCKY');
                                    let lblTichLuy4 = temp !== undefined ? temp.DIEMTRUNGBINH : "";

                                    return(
                                        <View key={index}>
                                            <TouchableOpacity onPress={() => {let iViTri = arrHienThi.indexOf(index); arrHienThi.splice(iViTri, 1); setCount(++count)}}   href="tracuudiem-02-bangdiem-xem.html" style={[styles.flex, styles.justifyBetween, styles.py15, styles.px15, styles.flexR]}>
                                                <Text style={[styles.fwBold, styles.mr20]}>Năm học {strNamHoc} - Học kỳ {strHocKy}</Text>
                                                <FontAwesomeIcon icon={ faChevronCircleDown }  size={18} style={[styles.colorPrimary]} />
                                            </TouchableOpacity>
                                            <Text style={[styles.line1, styles.bgD1]}></Text>
                                            <View  style={[styles.ml15]}>
                                                {jsonDiem.map((item, nRow) => (
                                                    <View key={nRow} style={[nRow%2? styles.bgF9: null]}>
                                                        <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                            <Text style={[styles.color66, styles.mr20]}>Mã học phần </Text>
                                                            <View style={[styles.secondView]}><Text>{item.DAOTAO_HOCPHAN_MA}</Text></View>
                                                        </View>
                                                        <Text style={[styles.line1, styles.bgE9]}></Text>
                                                        <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                            <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Tên học phần </Text>
                                                            <View style={[styles.secondView]}><Text style={[styles.truncase1]}>{item.DAOTAO_HOCPHAN_TEN}</Text></View>
                                                        </View>
                                                        <Text style={[styles.line1, styles.bgE9, styles.mr15]}></Text>
                                                        <View  style={[styles.flex, styles.flexR]}>
                                                            <View  style={[styles.flex1, styles.mr15]}>
                                
                                                                <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.flexR]}>
                                                                    <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Số tín chỉ</Text>
                                                                    <Text style={[styles.truncase1]}>{item.DAOTAO_HOCPHAN_HOCTRINH}</Text>
                                                                </View>
                                                                <Text style={[styles.line1, styles.bgE9]}></Text>
                                                                <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.flexR]}>
                                                                    <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Lần học</Text>
                                                                    <Text style={[styles.truncase1]}>{item.LANHOC}</Text>
                                                                </View>
                                                                <Text style={[styles.line1, styles.bgE9]}></Text>
                                                                <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.flexR]}>
                                                                    <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Lần thi</Text>
                                                                    <Text style={[styles.truncase1]}>{item.LANTHI}</Text>
                                                                </View>
                                                                <Text style={[styles.line1, styles.bgE9]}></Text>
                                                            </View>
                                                            <View  style={[styles.flex1, styles.ml15]}>
                                                                <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                                    <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm hệ số 10</Text>
                                                                    <Text style={[styles.truncase1]}>{item.DIEM}</Text>
                                                                </View>
                                                                <Text style={[styles.line1, styles.bgE9]}></Text>
                                                                <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                                    <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm hệ số 4</Text>
                                                                    <Text style={[styles.truncase1]}>{item.DIEMQUYDOI}</Text>
                                                                </View>
                                                                <Text style={[styles.line1, styles.bgE9]}></Text>
                                                                <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                                    <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm chữ</Text>
                                                                    <Text style={[styles.truncase1]}>{item.DIEMQUYDOI_TEN}</Text>
                                                                </View>
                                                                <Text style={[styles.line1, styles.bgE9]}></Text>
                                                                <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                                    <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Đánh giá</Text>
                                                                    <Text style={[styles.truncase1]}>{item.DANHGIA_TEN}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    <Text style={[styles.line1, styles.bgE9, styles.mr25]}></Text>
                                                    </View>
                                                ))

                                                }
                        
                                                <Text style={[styles.line1, styles.bgE9]}></Text>
                                                <View  style={[styles.lineHeight24, styles.py12]}>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Tổng số tín chỉ</Text>
                                                        <Text style={[styles.truncase1]}>{lblTongTinChi}</Text>
                                                    </View>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Tổng số tín chỉ tích lũy </Text>
                                                        <Text style={[styles.truncase1]}>{lblTichLuy}</Text>
                                                    </View>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm trung bình trung hệ 10</Text>
                                                        <Text style={[styles.truncase1]}>{lblTrungBinh10}</Text>
                                                    </View>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm trung bình trung hệ 4</Text>
                                                        <Text style={[styles.truncase1]}>{lblTrungBinh4}</Text>
                                                    </View>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm trung bình trung tích lũy hệ 10 </Text>
                                                        <Text style={[styles.truncase1]}>{lblTichLuy10}</Text>
                                                    </View>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm trung bình trung tích lũy hệ 4 </Text>
                                                        <Text style={[styles.truncase1]}>{lblTichLuy4}</Text>
                                                    </View>
                                                </View>
                        
                        
                                            </View>
                                            <Text style={[styles.line1, styles.bgD1]}></Text>
                                            <Text style={[styles.line10, styles.bgF6]}></Text>
                                            <Text style={[styles.line1, styles.bgD1]}></Text>
                                        </View>
                                    )
                                }

                                
                            })

                            }
                        </View>
        
                    </View>
        
                </View>
        
        
    </ScrollView>
    </View>
    </ImageBackground>
    )
}
