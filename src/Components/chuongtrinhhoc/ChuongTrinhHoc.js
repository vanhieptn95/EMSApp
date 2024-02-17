import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faSearch } from '@fortawesome/free-brands-svg-icons/faSearch'
// import { faChevronRight } from '@fortawesome/free-brands-svg-icons/faChevronRight'

import Core from '../../Core'
// import ModalLoading from '../ModalLoading'

let dtHocPhan = [];
let objChuongTrinh = {};

export default function ChuongTrinhHoc({ navigation, route }){
    let [count, setCount] = useState(0);
    useEffect(()=>{

        let getList_ChuongTrinh = () => {
            Core.makeRequest({
                action: 'DKH_Chung/LayDSChuongTrinh',
                type: 'GET',
                data: {
                    strQLSV_NguoiHoc_Id: Core.userId,
                    strNguoiThucHien_Id: Core.userId
                },
                success: function(data){
                    if(data.Success){
                        objChuongTrinh = data.Data[0];
                        getList_HocPhan();
                    }else{
                        Core.alert(data.Message)
                    }
                },
                error: function(err){
                    console.log(err)
    
                }
            })
        }
        let getList_HocPhan = () => {
            Core.makeRequest({
                action: route.params? route.params.HAM :'KHCT_HocPhan_ChuongTrinh/LayDanhSach',
                type: 'GET',
                data: {
                    strDaoTao_ChuongTrinh_Id: objChuongTrinh.DAOTAO_TOCHUCCHUONGTRINH_ID,
                    strDaoTao_HocPhan_Id: '',
                    strTuKhoa: '',
                    strDaoTao_ToChucCT_Id: route.params? route.params.strDaoTao_ToChucCT_Id: '',
                    strDaoTao_KhoiBatBuoc_Id: route.params? route.params.strDaoTao_KhoiBatBuoc_Id: '',
                    strDaoTao_KTuChon_Don_Id: route.params? route.params.strDaoTao_KTuChon_Don_Id: '',
                    pageIndex: 1,
                    pageSize: 1000000,
                    strNguoiThucHien_Id: Core.userId
                },
                success: function(data){
                    if(data.Success){
                        dtHocPhan = data.Data;
                        setCount(++count)
                    }else{
                        Core.alert(data.Message)
                    }
                },
                error: function(err){
                    console.log(err)
    
                }
            })
        }
        if(route.params){
            getList_HocPhan();
        }else
        getList_ChuongTrinh()
       
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>

<View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
        <ScrollView>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                <TouchableOpacity style={styles.flexR} onPress={() => navigation.goBack()} href="phenikaa-3-1cua-choxacnhan.html">
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                    <Text style={styles.textTitle}>Chương trình</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View  style={[styles.radiusTop20, styles.bgWhite, styles.mb120]}>
            <View style={[styles.bgF4, styles.radiusTop20, styles.px15, styles.color66, styles.fs15, styles.lineHeight16, styles.pt20, styles.pb16, styles.flex, styles.alignCenter, styles.flexR]}>
                <Text style={[styles.color66, styles.fs15, styles.lineHeight16]}>Học phần: {route.params ? route.params.CHUONGTRINH :objChuongTrinh.DAOTAO_TOCHUCCHUONGTRINH_TEN}</Text>
                
            </View>
            {dtHocPhan.map((item, index) =>  (
                <View key={index}>
                    <Text style={[styles.line1, styles.bgD1]}></Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ChuongTrinhHocChiTiet', item)} href="chuongtrinhhoc-01-chitiet.html" style={[styles.flex, styles.alignCenter, styles.fs15, styles.px15, styles.py13, styles.flexR]}>
                        <Text style={[styles.numberLabelL, styles.flexShrink0]}>{index < 9? "0" + (index + 1): index + 1}</Text>
                        <Text style={[styles.fs15, styles.colorPrimary]}>{item.DAOTAO_HOCPHAN_MA + " - " + item.DAOTAO_HOCPHAN_TEN + " (TC: "+ item.HOCTRINHAPDUNGHOCTAP +")"}</Text>
                    </TouchableOpacity>
                </View>
            ))}
            
            <View style={{height: 50}}></View>
        </View>
        </ScrollView>
        <View  style={[styles.fixedBottom, styles.shadowTop, styles.bgWhite, styles.lineHeight30, styles.px15, styles.py15]}>
            <View style={[styles.flex, styles.alignCenter, styles.flexR]}>
                <Text style={[styles.fs16]}>Tổng số tín chỉ</Text>
                <Text style={[styles.mlAuto, styles.fs16]}>{route.params ? route.params.SOTIN: objChuongTrinh.TONGSOTINCHIQUYDINH}</Text>
            </View>
        </View>
    </View>
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
    </ImageBackground>
    )
}
