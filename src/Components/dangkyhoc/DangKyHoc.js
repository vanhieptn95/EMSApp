import React, {useEffect, useState} from 'react'
import {View, TextInput, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faFilter } from '@fortawesome/free-regular-svg-icons/faFilter'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faSearch } from '@fortawesome/free-brands-svg-icons/faSearch'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import DangKyHoc from './DangKyHocController'
// import Core from '../../Core'
// import ModalLoading from '../ModalLoading'
export default function DangKyHocH2({ navigation }){ 
    let [count, setCount] = useState(0);
    useEffect(() => {
        DangKyHoc.state = setCount;
        DangKyHoc.getList_HocPhan();
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>
<View style={[styles.sgWrapper, styles.mainSwapper]}>
    
<ScrollView>
        <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle,  {paddingBottom: 10}]}>
                <TouchableOpacity style={styles.flexR}  href="../home.html" onPress={() => navigation.goBack()} >
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Chọn học phần</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contentRTop}>
            <View style={[styles.bgWhite, styles.radiusTop20, styles.fs15]}>
                <View style={[styles.formControl, styles.mx15, styles.li]}>
                    <Text style={[styles.mt10, styles.lineHeight16, styles.fs16]}>Thời gian: {DangKyHoc.objKeHoach.NGAYBATDAU} {DangKyHoc.objKeHoach.GIODANGKYTRONGNGAYDAU}:{DangKyHoc.objKeHoach.PHUTDANGKYTRONGNGAYDAU} - {DangKyHoc.objKeHoach.NGAYKETTHUC} {DangKyHoc.objKeHoach.GIOKETTHUCTRONGNGAYCUOI}:{DangKyHoc.objKeHoach.PHUTKETTHUCTRONGNGAYCUOI}</Text>
                </View>
                <Text style={[styles.line1, styles.bgE9, styles.mt10]}></Text>
                <View style={[styles.flex, styles.px15, styles.mt10, styles.alignCenter, styles.flexR]}>
                    {/* <Text style={[styles.fs16, styles.lineHeight16, styles.fwBold, styles.mr20, styles.block, styles.flexShrink0]}>Học phần</Text> */}
                    <View style={[styles.formControl, styles.w100,  styles.flexR]}>
                        <TextInput type="text" placeholder="Tìm kiếm học phần" style={[styles.formInput, styles.borderNone, styles.bgF6, styles.fs16]} />
                        <FontAwesomeIcon icon={ faSearch }  size={20}  style={{position: 'absolute', right: 10, top: 12, height: 34}} />
                    </View>
                </View>
                <Text style={[styles.line1, styles.bgE9, styles.mt10]}></Text>
                <ScrollView>
                <View style={styles.lineHeight20}>
                {DangKyHoc.dtHocPhan.map((item, index) =>  (
                    <View key={index}>
                        <TouchableOpacity onPress={() => {DangKyHoc.strHocPhan_Id = item.DAOTAO_HOCPHAN_ID;DangKyHoc.actionHocPhan(item.DAOTAO_HOCPHAN_ID);navigation.navigate('DangKyHocChonMon') }} style={[styles.flex, styles.py8, styles.mx8, styles.radius4, styles.my6, styles.flexR]}>
                            <Text  style={[styles.fs15, styles.lineHeight20, styles.bold]}>{item.DAOTAO_HOCPHAN_MA + " - " + item.DAOTAO_HOCPHAN_TEN}</Text>
                            {item.DADANGKY > 0 ? (<FontAwesomeIcon icon={ faCheckCircle }  size={20} style={[styles.mlAuto, styles.colorSenary]} />) : null}
                        </TouchableOpacity>
                        <Text style={[styles.line1, styles.bgE9]}></Text>
                    </View>
                    
                ))}
                </View>
                </ScrollView>
            </View>
        </View>
        
        </ScrollView>
    </View>
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
        </ImageBackground>
    )
}
