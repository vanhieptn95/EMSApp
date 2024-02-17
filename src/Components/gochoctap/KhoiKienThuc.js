import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons/faChevronCircleDown'
import { faChevronUp } from '@fortawesome/free-regular-svg-icons/faChevronUp'
import { faChevronDown } from '@fortawesome/free-regular-svg-icons/faChevronDown'
import { faChevronCircleUp } from '@fortawesome/free-regular-svg-icons/faChevronCircleUp'
// import Core from '../../Core'
import Diem from './DiemController'
// import ModalLoading from '../ModalLoading'
let dtTongHop = [];
let dtChiTiet = [];
let arrHienThi = [];
export default function KhoiKienThuc({ navigation, route }){
    let [count, setCount] = useState(0);
    let iSoTinChi = 0;
    let iSoTichLuy = 0;
    useEffect(() => {
        Diem.getList_TichLuyTheoKhoi(data => {
            dtTongHop = data.rsTongHop;
            dtChiTiet = data.rsChiTiet;
            setCount(++count);
        });
    }, [])
    return(
<ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
    <View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
            
    <ScrollView>
            <View  style={styles.pageHeader}>
                <Text style={styles.topOfMobi}> </Text>
                <View  style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                    <TouchableOpacity style={styles.flexR} onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                        <Text style={styles.textTitle}>Bảng điểm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        <View  style={[styles.bgWhite, styles.radiusTop20]}>
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
                    <Text style={[styles.mt8, styles.fw500, styles.color66, styles.lineHeight20, styles.itemActive]}>Hiển thị theo khối kiến thức</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.line1, styles.bgD1]}></Text>

            <View >
                <View  style={[styles.fs15]}>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.colorWhite, styles.bgPrimary, styles.flexR]}>
                        <FontAwesomeIcon icon={ faFileSignature }  size={22} style={[styles.colorWhite, styles.px15]} />
                        <Text style={[styles.fs18, styles.fwBold, styles.colorWhite]}> Tổng điểm theo khối</Text>
                    </View>
                    <View  style={[styles.radiusTop20, styles.bgWhite, styles.mb120]}>
                        <View  style={[styles.bgF4, styles.px15, styles.color66, styles.fs15, styles.pt10, styles.pb8, styles.flex, styles.alignCenter, styles.flexR, styles.bgE1]}>
                            <Text>Tên khối</Text>
                            <Text style={[styles.w55px, styles.mlAuto, styles.flex, styles.justifyCenter, styles.flexShrink0, styles.textCenter]}>Số TC</Text>
                            <Text style={[styles.w55px, styles.textCenter, styles.flexShrink0]}>Tích lũy</Text>
                        </View>
                        <Text style={[styles.line1, styles.bgD1]}></Text>
                        {dtTongHop.map((item, index) => {
                            iSoTinChi += item.SOBATBUOC;
                            iSoTichLuy += item.SODATICHLUY;
                            return (
                                <View key={index}>
                                    <View  href="chuongtrinhhoc-01-chitiet.html" style={[styles.flex, styles.alignCenter, styles.fs15, styles.px15, styles.py13, styles.flexR, styles.justifyBetween]}>
                                        <View style={[styles.firstView]}><Text>{item.MAKHOI + " - " + item.TENKHOI}</Text></View>
                                        <View style={[styles.flexR]}>
                                            <Text style={[styles.w55px, styles.flex, styles.justifyCenter, styles.textCenter]}>{item.SOBATBUOC}</Text>
                                            <Text style={[styles.w55px, styles.textCenter, styles.flexShrink0]}>{item.SODATICHLUY}</Text>
                                        </View>
                                    </View>
                                    <Text style={[styles.line1, styles.bgD1]}></Text>
                                </View>
                            )
                        })

                        }
                        
                        <View  style={[styles.bgF4, styles.px15, styles.color66, styles.fs15, styles.pt10, styles.pb8, styles.flex, styles.alignCenter, styles.flexR, styles.bgE1]}>
                            <Text style={[styles.bold]}>Tổng</Text>
                            <Text style={[styles.w55px, styles.mlAuto, styles.flex, styles.justifyCenter, styles.flexShrink0, styles.textCenter]}>{iSoTinChi}</Text>
                            <Text style={[styles.w55px, styles.textCenter, styles.flexShrink0]}>{iSoTichLuy}</Text>
                        </View>
                    </View>
                    <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.colorWhite, styles.bgQuinary, styles.flexR, styles.pb25]}>
                        <FontAwesomeIcon icon={ faFileSignature } size={22} style={[styles.colorWhite, styles.px15]}  />
                        <Text style={[styles.fs18, styles.fwBold, styles.colorWhite]}>Tổng hợp chi tiết theo khối và học phần</Text>
                    </View>
                    {dtTongHop.map((item, index) => {
                        if(arrHienThi.indexOf(index) === -1) {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={() => {if(arrHienThi.indexOf(index) === -1) {arrHienThi.push(index); setCount(++count)}}} href="tracuudiem-05-hienthitheokhoikienthuc-2.html" style={[styles.flex, styles.justifyBetween, styles.py15, styles.px15, styles.flexR]}>
                                        <Text style={[styles.fwBold, styles.mr20]}><Text>{item.MAKHOI}</Text> - {item.TENKHOI}</Text>
                                        <FontAwesomeIcon icon={ faChevronCircleUp }  size={20}  />
                                    </TouchableOpacity>
                                    <Text style={[styles.line1, styles.bgD1]}></Text>
                                    <Text style={[styles.line10, styles.bgF6]}></Text>
                                    <Text style={[styles.line1, styles.bgD1]}></Text>
                                </View>
                            )
                        }
                        else{

                            let jsonDiem = dtChiTiet.filter(element => element.MAKHOI === item.MAKHOI);

                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={() => {let iViTri = arrHienThi.indexOf(index); arrHienThi.splice(iViTri, 1); setCount(++count)}} href="tracuudiem-05-hienthitheokhoikienthuc-2.html" style={[styles.flex, styles.justifyBetween, styles.py15, styles.px15, styles.flexR]}>
                                        <Text style={[styles.fwBold, styles.mr20, styles.color15]}><Text>{item.MAKHOI}</Text> - {item.TENKHOI}</Text>
                                        <FontAwesomeIcon icon={ faChevronCircleDown }  size={18} style={[styles.color15]}  />
                                    </TouchableOpacity>
                                    <Text style={[styles.line1, styles.bgE9]}></Text>
                                    {jsonDiem.map((element, nRow) => (
                                        <View  style={[nRow%2?null: styles.bgF6]} key={nRow}>
                                            <View  href="tracuudiem-05-hienthitheokhoikienthuc-3.html" style={[styles.flex, styles.justifyBetween, styles.py12, styles.px15, styles.flexR]}>
                                                <Text style={[styles.mr20, styles.fwBold]}>{element.DAOTAO_HOCPHAN_TEN}</Text>
                                                <FontAwesomeIcon icon={ faChevronUp }  size={14} style={[styles.color66, styles.mr3]}  />
                                            </View>
                                            <Text style={[styles.line1, styles.bgE9]}></Text>
                                            <View  style={[styles.flex, styles.pl15, styles.flexR]}>
                                                <View  style={[styles.flex1, styles.mr15]}>

                                                    <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Số tín chỉ</Text>
                                                        <Text style={[styles.truncase1]}>{element.DAOTAO_HOCPHAN_HOCTRINH}</Text>
                                                    </View>
                                                    <Text style={[styles.line1, styles.bgE9]}></Text>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm</Text>
                                                        <Text style={[styles.truncase1]}>{element.DIEM}</Text>
                                                    </View>
                                                    <Text style={[styles.line1, styles.bgE9]}></Text>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Đánh giá</Text>
                                                        <Text style={[styles.truncase1]}>{element.DANHGIA_TEN}</Text>
                                                    </View>
                                                </View>
                                                <View  style={[styles.flex1, styles.ml15]}>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm quy đổi</Text>
                                                        <Text style={[styles.truncase1]}>{element.DIEMQUYDOI}</Text>
                                                    </View>
                                                    <Text style={[styles.line1, styles.bgE9]}></Text>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Điểm Chữ</Text>
                                                        <Text style={[styles.truncase1]}>{element.DIEMQUYDOI_TEN}</Text>
                                                    </View>
                                                    <Text style={[styles.line1, styles.bgE9]}></Text>
                                                    <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.pr15, styles.flexR]}>
                                                        <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Kết quả</Text>
                                                        <Text style={[styles.truncase1]}> {element.KETQUA == 1 ? "Hoàn thành" : ""}</Text>
                                                    </View>
                                                </View>

                                            </View>
                                            <Text style={[styles.line1, styles.bgE9, styles.ml15]}></Text>
                                            <View style={[styles.flex, styles.justifyBetween, styles.py15, styles.px15, styles.flexR]}>
                                                <Text style={[styles.color66, styles.mr20, styles.flexShrink0]}>Ghi chú</Text>
                                                <Text style={[styles.truncase1]}> {element.HOCPHANTHUA == 1 ? element.HOCPHANTHUA_LOAIXULY : ""}</Text>
                                            </View>
                                            <Text style={[styles.line1, styles.bgE9]}></Text>
                                        </View>
                                    ))

                                    }
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
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
    </ImageBackground>
    )
}
