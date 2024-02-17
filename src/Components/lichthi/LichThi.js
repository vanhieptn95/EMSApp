import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt'
//import { faChevronRight } from '@fortawesome/free-regular-svg-icons/faChevronRight'
import { faFileSignature } from '@fortawesome/free-regular-svg-icons/faFileSignature'
import Core from '../../Core'
// import ModalLoading from '../ModalLoading'
let dtThoiGian = [];
let dtLichCaNhan = [];
let dtLichChung = [];
let strThoiGian_Id = "";
let setCoun ;
let getList_ThoiGian = () => {
    Core.makeRequest({
        action: 'SV_ThongTin/LayDSThoiGianLichThi',
        type: 'GET',
        data: {
            'strNguoiThucHien_Id': Core.userId,
        },
        success: function(data){
            if(data.Success){
                dtThoiGian = data.Data;
                if(dtThoiGian.length){
                    strThoiGian_Id = dtThoiGian[0].ID
                    getList_LichThi()
                } else{
                    setCoun(++Core.countState)
                }
            }else{
                Core.alert(data.Message)
            }
        },
        error: function(err){
            console.log(err)

        }
    })
}
let getList_LichThi = () => {
    Core.makeRequest({
        action: 'SV_ThongTin/LayDSLichThi_KeHoachThi',
        type: 'GET',
        data: {
            'strTuKhoa': '',
            'strDaoTao_HocPhan_Id': '',
            'strDaoTao_ThoiGianDaoTao_Id': strThoiGian_Id,
            'strQLSV_NguoiHoc_Id': Core.userId
        },
        success: function(data){
            if(data.Success){
                dtLichCaNhan= data.Data.rsLichThiCaNhan
                dtLichChung= data.Data.rsKeHoachThiChung
                setCoun(++Core.countState)
            }else{
                Core.alert(data.Message)
            }
        },
        error: function(err){
            console.log(err)

        }
    })
}

export default function LichThi({ navigation, route }){
    let [count, setCount] = useState(0);
    useEffect(()=>{
        setCoun = setCount;
        getList_ThoiGian();
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
                    <Text style={styles.textTitle}>Lịch thi</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View  style={[styles.bgWhite, styles.radiusTop20]}>
        <View  style={[styles.flex, styles.alignCenter, styles.mx15, styles.pt15, styles.mb10]}>
                <View  style={[styles.formControl, styles.w100, styles.flexR]}>
                    <Text>Học kỳ:  </Text>
                    {dtThoiGian.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => {strThoiGian_Id = item.ID; getList_LichThi() }} ><Text style={[strThoiGian_Id === item.ID? styles.itemActive: null]}>{item.THOIGIAN}  </Text></TouchableOpacity>

                    ))
                    }
                </View>

            </View>
            <View  style={[styles.fs15]}>
                <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.colorWhite, styles.bgPrimary, styles.flexR]}>
                    <FontAwesomeIcon icon={ faCalendarAlt }  size={22} style={[styles.colorWhite]}  />
                    <Text style={[styles.fs18, styles.colorWhite]}> Lịch thi cá nhân</Text>
                </View>
                <View  style={[styles.radiusTop20, styles.bgWhite, styles.mb120]}>
                    {/* <View  style={[styles.bgF4, styles.px15, styles.color66, styles.fs15, styles.pt10, styles.pb8, styles.flex, styles.alignCenter, styles.flexR, styles.bgE1]}>
                        <Text>Học phần</Text>
                        <Text style={[styles.w55px, styles.mlAuto, styles.flex, styles.justifyCenter, styles.flexShrink0, styles.textCenter]}>Phòng thi</Text>
                        <Text style={[styles.w55px, styles.textCenter, styles.flexShrink0]}>Ngày thi</Text>
                    </View>
                    <Text style={[styles.line1, styles.bgD1]}></Text> */}
                    {dtLichCaNhan.map((item, index) => {
                        return (
                            <View key={index} style={[index%2? styles.bgF9: null]}>
                                <View  href="chuongtrinhhoc-01-chitiet.html" style={[styles.flex, styles.alignCenter, styles.fs15, styles.px15, styles.py3, styles.flexR]}>
                                <Text style={[styles.bold]}>{item.MAHOCPHAN} - {item.TENHOCPHAN}</Text>
                                </View>
                                <View  href="chuongtrinhhoc-01-chitiet.html" style={[styles.flex, styles.alignCenter, styles.fs15, styles.px15, styles.py3, styles.flexR]}>
                                    
                                    <Text style={[ styles.flex, styles.justifyCenter, styles.textCenter]}>Phòng: {item.PHONGHOC_TEN}</Text>
                                    <Text style={[styles.textCenter, styles.flexShrink0, styles.mlAuto]}>{item.NGAYHOC + " (" +item.GIOBATDAU + ":" + item.PHUTBATDAU + "-" +item.GIOKETTHUC + ":" + item.PHUTKETTHUC+ ")"}</Text>
                                </View>
                                <Text style={[styles.line1, styles.bgD1]}></Text>
                            </View>
                        )
                    })

                    }
                    
                    
                </View>
                <Text style={[styles.line1, styles.bgD1]}></Text>
                <Text style={[styles.line15, styles.bgE9]}></Text>
                <Text style={[styles.line1, styles.bgD1]}></Text>
                <View  style={[styles.flex, styles.alignCenter, styles.px15, styles.py15, styles.colorWhite, styles.bgQuinary, styles.flexR]}>
                    <FontAwesomeIcon icon={ faFileSignature }  size={22}  style={[styles.colorWhite]} />
                    <Text style={[styles.fs18, styles.colorWhite]}> Kế hoạch thi chung</Text>
                </View>
                <View  style={[styles.radiusTop20, styles.bgWhite, styles.mb120]}>
                    {dtLichChung.map((item, index) => {
                        return (
                            <View key={index} style={[index%2? styles.bgF9: null]}>
                                <View  href="chuongtrinhhoc-01-chitiet.html" style={[styles.flex, styles.alignCenter, styles.fs15, styles.px15, styles.py3, styles.flexR]}>
                                <Text style={[styles.bold]}>{item.MAHOCPHAN} - {item.TENHOCPHAN}</Text>
                                </View>
                                <View  href="chuongtrinhhoc-01-chitiet.html" style={[styles.flex, styles.alignCenter, styles.fs15, styles.px15, styles.py3, styles.flexR]}>
                                    
                                    <Text style={[ styles.flex, styles.justifyCenter, styles.textCenter]}>Phòng: {item.PHONGHOC_TEN}</Text>
                                    <Text style={[styles.textCenter, styles.flexShrink0, styles.mlAuto]}>{item.NGAYHOC + " (" +item.GIOBATDAU + ":" + item.PHUTBATDAU + "-" +item.GIOKETTHUC + ":" + item.PHUTKETTHUC+ ")"}</Text>
                                </View>
                                <Text style={[styles.line1, styles.bgD1]}></Text>
                            </View>
                        )
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
