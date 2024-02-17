import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import Core from '../../Core'
// import ModalLoading from '../ModalLoading'
let dtKhoan = []

export default function KhoanPhaiNop({ navigation, route }){
    let [count, setCount] = useState(0);
    useEffect(()=>{
        Core.makeRequest({
            action: 'TC_ThongTinChung/'+ route.params.HAM,
            type: 'GET',
            data: {
                strQLSV_NguoiHoc_Id: Core.userId,
                pageIndex: 1,
                pageSize: 1000000,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    dtKhoan = data.Data;
                    setCount(++count)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)

            }
        })
    }, [])
    return(
    <ImageBackground source={require('../../../assets/images/finance-background.png')} style={{flex: 1, height: 110}}>
        <View style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
            <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
                <View style={[styles.pageTitle]}>
                    <TouchableOpacity style={styles.flexR}  onPress={() => navigation.goBack()} href="../home.html">
                        <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                        <Text style={styles.textTitle}> Chi tiết {route.params.TEN}</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView>
            <View style={styles.contentRTop}>
                <View style={[styles.radiusTop20, styles.bgWhite, styles.fs15, styles.pt20, styles.mb50]}>
                    
                    {dtKhoan.map((item, index) =>  (
                    <View key={index}>
                    <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.itemCenter, styles.flexR]}>
                        <Text style={[styles.numberLabelL, styles.numberLabel12]}>{index < 9? "0" + (index + 1): index + 1}</Text>
                        <Text style={[styles.color66, styles.flexShrink0, styles.w1/4, styles.mr20, styles.block, styles.lineHeight20, styles.fs15, styles.fwBold]}> Học kỳ</Text>
                        <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fwBold, styles.fs15]}>{item.DAOTAO_THOIGIANDAOTAO}</Text>
                    </View>
                    <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                    <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                        <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Đợt</Text>
                        <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.DAOTAO_THOIGIANDAOTAO_DOT}</Text>
                    </View>
                    <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                    <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Loại khoản </Text>
                        <View style={[styles.secondView]}><Text style={[styles.colorRaw, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.TAICHINH_CACKHOANTHU_TEN}</Text></View>
                    </View>
                    <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                    <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Nội dung </Text>
                        <View style={[styles.secondView]}><Text style={[styles.colorRaw, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.NOIDUNG}</Text></View>
                    </View>
                    <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                    <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                        <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số tiền </Text>
                        <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{Core.formatCurrency(item.SOTIEN)}</Text>
                    </View>
                    <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                    <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                        <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Ngày tạo </Text>
                        <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.NGAYTAO_DD_MM_YYYY}</Text>
                    </View>
                    <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                    <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                        <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Người tạo</Text>
                        <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>{item.NGUOITAO_TENDAYDU}</Text>
                    </View>
                    

                    <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                    <View style={[styles.line10, styles.bgF6]}></View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                </View>
                ))}
                </View>
<View style={{height: 50}}></View>


            </View>
            </ScrollView>
            <View style={[styles.fixedBottom, styles.shadowTop, styles.bgWhite]}>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.flex, styles.itemCenter, styles.py17, styles.px15, styles.flexR]}>
                    <Text style={[styles.fs16]}>Tổng:</Text>
                    <Text style={[styles.fwBold, styles.colorQuinary, styles.mlAuto, styles.fs16]}>{Core.formatCurrency(route.params.TONGTIEN)}</Text>
                </View>
            </View>
        </View>
        {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
    </ImageBackground>
    )
}
