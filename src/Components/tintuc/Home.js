import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faSearch } from '@fortawesome/free-regular-svg-icons/faSearch'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import Core from '../../Core'
import ModalLoading from '../ModalLoading'

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width - 30;
const imageHeight = Math.round(imageWidth * 9 / 16) ;

let dtNguonTin = [];
let dtTinTuc = [];
let strDaoTao_CoCauToChuc_Id = '';

let getList_NguonTin = () => {
    Core.makeRequest({
        action: 'TT_DonViCungCapNguon/LayDanhSach',
        type: 'GET',
        data: {
            strQLSV_NguoiHoc_Id: Core.userId,
        },
        success: function(data){
            if(data.Success){
                dtNguonTin = data.Data;
                Core.state(++Core.countState)
            }else{
                Core.alert(data.Message)
            }
        },
        error: function(err){
            console.log(err)

        }
    })
}

let getList_TinTuc = () => {
    Core.modalVisible = true;
    Core.state(++Core.countState)
    Core.makeRequest({
        action: 'TT_BangTin_NguoiDung/LayDanhSach',
        type: 'GET',
        data: {
            strTuKhoa: "",
            strTuNgay: "",
            strDenNgay: "",
            strChuyenMuc_Id: "",
            strChung_UngDung_Id: "",
            strDaoTao_CoCauToChuc_Id: strDaoTao_CoCauToChuc_Id,
            dTinQuanTrong: -1,
            dHieuLuc: 1,
            pageIndex: 1,
            pageSize: 1000000,
            strNguoiThucHien_Id: Core.userId,
        },
        success: function(data){
            if(data.Success){
                dtTinTuc = data.Data;
                Core.modalVisible = false;
                Core.state(++Core.countState)
            }else{
                Core.alert(data.Message)
            }
        },
        error: function(err){
            console.log(err)
            Core.modalVisible = false;
            Core.state(++Core.countState)
        }
    })
}

let actionNguonTin = (strId) => {
    strDaoTao_CoCauToChuc_Id = strId; 
    getList_TinTuc();
}

export default function Home({ navigation }){
    let [count, setCount] = useState(0);
    useEffect(()=>{
        Core.state= setCount;
        navigation.addListener('focus', () => {
            Core.state= setCount;
        });
        getList_NguonTin();
        getList_TinTuc();
    }, [])
    return(
        
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
<View  style={[styles.sgWrapper, styles.mainSwapper]}>
            <ScrollView>
        <View  style={styles.pageHeader}>
            <View style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                {/* <View href="phenikaa-3-1cua-choxacnhan.html"><FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   /></View> */}

                {/* <Text style={styles.textTitle}>Tin tức</Text> */}
                <TouchableOpacity style={[styles.mlAuto, { marginRight: -35}]}><FontAwesomeIcon icon={ faSearch }  size={20} style={{color: 'white'}} /></TouchableOpacity>
        
            </View>
            
        </View>
        <View  style={[styles.radiusTop20, styles.bgWhite]}>
            <ScrollView horizontal={true} >
                <View  style={[styles.navScollX, styles.fs15, styles.fw500, styles.scrollbarHidden, styles.pt20, styles.flexR]}>
                    <TouchableOpacity onPress={() => actionNguonTin("")}  style={[styles.navScollXItem]}>
                        <Text style={[styles.fs15, styles.fw500, strDaoTao_CoCauToChuc_Id? null: styles.itemActive]}>Toàn bộ</Text>
                    </TouchableOpacity>
                    {
                        dtNguonTin.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => actionNguonTin(item.ID)}  href="phenikaa-8-tintuc-categoty.html" style={styles.navScollXItem}>
                                <Text style={[styles.fs15, styles.fw500, strDaoTao_CoCauToChuc_Id == item.ID ? styles.itemActive: null]}>{item.TEN}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    
                </View>
            </ScrollView>
            
            <Text style={[styles.line1, styles.bgD1, styles.Mt2]}></Text>
            {
                dtTinTuc.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('TinTucChiTiet', item)}>
                        <View  style={[styles.px15, styles.py15]} >
                            <View  href="phenikaa-8-tintuc-chitiet.html">
                                <Image resizeMode={'cover'} style={[styles.cover, { width: imageWidth,  height: imageHeight}]} source={{uri: Core.getImage(item.DUONGDANANHHIENTHI)}}></Image>
                            </View>
                            <Text style={[styles.fs20, styles.lineHeight27, styles.colorPrimary, styles.fwBold, styles.mt10, styles.block]}>{item.TIEUDE}</Text>
                            <View style={[styles.color66, styles.fs14, styles.mt10, styles.flexR]}>
                                <View style={[styles.w20]}><FontAwesomeIcon icon={ faCalendarAlt }  size={14} style={[styles.color66, styles.mt2]} /></View>
                                <Text>{item.NGAYBATDAU} - {item.DAOTAO_COCAUTOCHUC_TEN}</Text>
                            </View>
                        </View>
                        <Text style={[styles.line1, styles.bgE9]}></Text>
                    </TouchableOpacity>
                ))
            }
            
            
            
        </View>
            </ScrollView>
    </View>
    <ModalLoading modalVisible={Core.modalVisible}></ModalLoading>
    </ImageBackground>
    )
}
