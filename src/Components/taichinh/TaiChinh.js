import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faEdit } from '@fortawesome/free-brands-svg-icons/faEdit'
import Core from '../../Core'
import TaiChinhC from './TaiChinhController'
import ModalLoading from '../ModalLoading'

let objThongTin = {};

const SoNo = () => {
    let iSoNo = objThongTin.NOCO;
    if(iSoNo){
        if(iSoNo < 0){
            return (
                <TouchableOpacity style={[styles.radius4, styles.bgRed, styles.px15, styles.py5]}>
                    <Text style={[styles.colorWhite, styles.fs14]}>Còn nợ : {Core.formatCurrency(iSoNo)}</Text>
                </TouchableOpacity>
            )
        }
        if(iSoNo == 0){
            return (
                <TouchableOpacity style={[styles.radius4, styles.bgSenary, styles.px15, styles.py5]}>
                    <Text style={[styles.colorWhite, styles.fs14]}>Đã hoàn thành</Text>
                </TouchableOpacity>
            )
        }
        if(iSoNo > 0){
            return (
                <TouchableOpacity style={[styles.radius4, styles.bgPrimary, styles.px15, styles.py5]}>
                    <Text style={[styles.colorWhite, styles.fs14]}>Còn dư : {Core.formatCurrency(iSoNo)}</Text>
                </TouchableOpacity>
            )
        }
    }
    return null;
}

export default function TaiChinh({ navigation }){
    let [count, setCount] = useState(0);
    useEffect(()=>{
        Core.state= setCount;
        navigation.addListener('focus', () => {
            Core.state= setCount;
        });
        Core.modalVisible = true;
        Core.state(++Core.countState)
        TaiChinhC.strSinhVien_Id = Core.userId;
        TaiChinhC.getList_TinhTrangTaiChinh(data => {
            objThongTin = data.rsThongTin[0];
            Core.modalVisible = false;
            Core.updateState();
        });
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/finance-background.png')} style={{flex: 1, height: 125}}>
<View  style={styles.financePage}>
        <ScrollView>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle, {paddingBottom: 15, paddingTop: 15}]}>
                <TouchableOpacity style={styles.flexR}  href="../home.html"  onPress={() => navigation.goBack()} >
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Tài chính</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity  style={[styles.btn, styles.bgWhite, styles.colorDenary, styles.fs15, styles.px15, styles.height33, styles.mlAuto, styles.flexR, styles.borderNone]} >
                    <FontAwesomeIcon icon={ faEdit }  size={20}  />
                    <Text> Hướng dẫn</Text>
                </TouchableOpacity> */}
            </View>

        </View>
        <View  style={[styles.radiusTop20, styles.financeContent]}>
            <View  style={[styles.userInfo, {backgroundColor: '#eef3ff'}]}>
                <Image source={Core.oUser.ANH ? {uri: Core.server + '/upload/' + Core.oUser.ANH}: require('../../../assets/images/no-avata.png')}  style={styles.userInfoImg}></Image>
                <View  style={styles.userMeta}>
                    <Text style={[styles.mb2, styles.bold, styles.fs16]}>{Core.oUser.HODEM + " " + Core.oUser.TEN}</Text>
                    <Text style={styles.fs16}>Mã: {Core.oUser.MASO}</Text>
                    <Text style={[styles.mt2, styles.fs16]}>SĐT: {Core.oUser.TTLL_DIENTHOAICANHAN}</Text>
                    
                    <SoNo />
                </View>

            </View>

            <View  style={[styles.px15, styles.mt20, styles.pb10]}>
                <View  style={[styles.titleLineCenterRight, styles.mb12]}>
                    <Text style={styles.titleLineCenterRightSpan}>Quá trình nộp tiền</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanPhaiNop", TEN: "khoản phải nộp", TONGTIEN: objThongTin.TONGKHOANPHAINOP})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#0E9347'}]} >
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#0E9347'}]}>{Core.formatCurrency(objThongTin.TONGKHOANPHAINOP)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text> 
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3, styles.fs15]}>Khoản phải nộp</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-1.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanMien", TEN: "khoản được miễn", TONGTIEN: objThongTin.TONGKHOANDUOCMIEN})} style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#C97629'}]} >
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22} >
                            <Text style={[styles.fs24, styles.fwBold, {color: '#C97629'}]}>{Core.formatCurrency(objThongTin.TONGKHOANDUOCMIEN)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text> 
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Khoản được miễn</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-2.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanDaNop", TEN: "khoản đã nộp", TONGTIEN: objThongTin.TONGKHOANDANOP})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#3D8AC7'}]} >
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22} >
                            <Text style={[styles.fs24, styles.fwBold, {color: '#3D8AC7'}]}>{Core.formatCurrency(objThongTin.TONGKHOANDANOP)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text> 
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Khoản đã nộp</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-3.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanDaRut", TEN: "khoản đã rút", TONGTIEN: objThongTin.TONGKHOANDARUT})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#ED5729'}]} >
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#ED5729'}]}>{Core.formatCurrency(objThongTin.TONGKHOANDARUT)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text>
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Khoản đã rút</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-4.png')} alt=""></Image>
                </TouchableOpacity>
            </View>
            <View  style={[styles.px15, styles.pb10]}>
                <View  style={[styles.titleLineCenterRight, styles.mt20, styles.mb12]}>
                    <Text style={styles.titleLineCenterRightSpan}>Quá trình nộp tiền</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanNoRieng", TEN: "nợ riêng các khoản", TONGTIEN: objThongTin.TONGNORIENG})} style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#FAAD33'}]}>
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#FAAD33'}]}>{Core.formatCurrency(objThongTin.TONGNORIENG)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text> 
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Tổng nợ riêng các khoản</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-5.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanNoChung", TEN: "nợ chung các khoản", TONGTIEN: objThongTin.TONGNOCHUNG})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#A56A43'}]}>
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#A56A43'}]}>{Core.formatCurrency(objThongTin.TONGNOCHUNG)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text>
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Tổng nợ chung các khoản</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-6.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanDuRieng", TEN: "dư riêng các khoản", TONGTIEN: objThongTin.TONGDURIENG})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#279B61'}]}>
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#279B61'}]}>{Core.formatCurrency(objThongTin.TONGDURIENG)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text>
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Tổng dư riêng các khoản</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-7.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhPhaiNop', {HAM: "LayDSKhoanDuChung", TEN: "dư chung các khoản", TONGTIEN: objThongTin.TONGDUCHUNG})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#29703C'}]}>
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#29703C'}]}>{Core.formatCurrency(objThongTin.TONGDUCHUNG)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text>
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Tổng dư chung các khoản</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-8.png')} alt=""></Image>
                </TouchableOpacity>

            </View>
            <View  style={[styles.px15]}>
                <View  style={[styles.titleLineCenterRight, styles.mt20, styles.mb12]}>
                    <Text style={styles.titleLineCenterRightSpan}>Danh sách chứng từ</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhChiTiet', {HAM: "LayDSPhieuDaThu", TEN: "phiếu đã thu", TONGTIEN: objThongTin.TONGTIENPHIEUTHU})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#285680'}]}>
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#285680'}]}>{Core.formatCurrency(objThongTin.TONGTIENPHIEUTHU)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text>
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Danh sách phiếu đã thu</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-9.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhChiTiet', {HAM: "LayDSPhieuDaRut", TEN: "phiếu đã rút", TONGTIEN: objThongTin.TONGTIENPHIEURUT})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#E80002'}]}>
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#E80002'}]}>{Core.formatCurrency(objThongTin.TONGTIENPHIEURUT)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text>
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Danh sách phiếu đã rút</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-10.png')} alt=""></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TaiChinhChiTiet', {HAM: "LayDSPhieuHoaDon", TEN: "phiếu hóa đơn", TONGTIEN: objThongTin.TONGTIENHOADON})}  style={[styles.financeItem, styles.py10, styles.px13, styles.mb15, styles.flexR, {borderColor: '#0094E3'}]}>
                    <View  style={styles.fs15}>
                        <Text style={styles.lineHeight22}>
                            <Text style={[styles.fs24, styles.fwBold, {color: '#0094E3'}]}>{Core.formatCurrency(objThongTin.TONGTIENHOADON)} <Text style={[styles.fs15, styles.fwNormal, styles.italic]}>vnđ</Text></Text>
                        </Text>
                        <Text style={[styles.lineHeight22, styles.mt3]}>Danh sách phiếu hóa đơn</Text>
                    </View>
                    <Image style={styles.mlAuto} source={require('../../../assets/images/7-taichinh/finance-icon-11.png')} alt=""></Image>
                </TouchableOpacity>

            </View>

            




        </View>
        </ScrollView>
    </View>
    <ModalLoading modalVisible={Core.modalVisible}></ModalLoading>
    </ImageBackground>
    )
}
