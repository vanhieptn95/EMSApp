import React, {useEffect,useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faSearch } from '@fortawesome/free-brands-svg-icons/faSearch'
import { faBook } from '@fortawesome/free-brands-svg-icons/faBook'
import { faChevronRight } from '@fortawesome/free-brands-svg-icons/faChevronRight'

import Core from '../../Core'
// import ModalLoading from '../ModalLoading'

let dtHocPhan = [];
let objChuongTrinh = {};
export default function KhoiLuaChonBatBuoc({ navigation }){
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
                action: 'KHCT_KhoiBatBuoc/LayDanhSach',
                type: 'GET',
                data: {
                    strDaoTao_ToChucCT_Id: objChuongTrinh.DAOTAO_TOCHUCCHUONGTRINH_ID,
                    strTuKhoa: '',
                    strDaoTao_KhoiBatBuoc_Cha_Id: '',
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
        getList_ChuongTrinh()
       
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
<View  style={[styles.sgWrapper, styles.mainSwapper]}>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                <TouchableOpacity style={styles.flexR} onPress={() => navigation.goBack()} href="phenikaa-3-1cua-choxacnhan.html">
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                    <Text style={styles.textTitle}>Khối lựa chọn bắt buộc</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View  style={[styles.radiusTop20, styles.bgWhite]}>
        {dtHocPhan.map((item, index) =>  (
            <View key={index}>
                <TouchableOpacity onPress={() => navigation.navigate('ChuongTrinhHocHocPhan', {HAM: 'KHCT_HocPhan_KhoiBatBuoc/LayDanhSach',strDaoTao_KhoiBatBuoc_Id: item.ID ,strDaoTao_ToChucCT_Id: objChuongTrinh.DAOTAO_TOCHUCCHUONGTRINH_ID , CHUONGTRINH: item.TEN, SOTIN: item.TONGSOTINCHI })}  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.flexR]}>
                <FontAwesomeIcon icon={ faBook }  size={24} style={[styles.colorPrimary]} />
                <Text style={[styles.lineHeight15, styles.ml10, styles.flexC]}>
                    <Text style={[styles.fw500, styles.mb6, styles.block, styles.fs15]}>{item.TEN}</Text>
                    {'\n'}
                    <Text style={[styles.block, styles.color13, styles.fs14]}>(Tổng số HP: {item.TONGSOHOCPHAN}; Tổng số TC: {item.TONGSOTINCHI})</Text>
                </Text>
                <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mlAuto, styles.colorSeptenary]} />
            </TouchableOpacity>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            </View>
        ))}
            
        </View>

    </View>
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
    </ImageBackground>
    )
}
