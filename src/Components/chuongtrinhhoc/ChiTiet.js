import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import Core from '../../Core'
// import ModalLoading from '../ModalLoading'
let objHocPhan ={};
let dtQHHocPhan = [];
let dtQHTuongDuong = [];
let dtBaiHoc = [];
let dtPhanBo = [];
export default function ChiTiet({ navigation, route }){
    let [count, setCount] = useState(0);
    objHocPhan = route.params;
    useEffect(()=>{
        let getList_QHHocPhan = () => {
            Core.makeRequest({
                action: 'KHCT_QuanHeHocPhan/LayDanhSach',
                type: 'GET',
                data: {
                    'strTuKhoa': '',
                    'strLoaiQuanHe_Id': '',
                    'strDaoTao_ToChucCT_Id': objHocPhan.DAOTAO_TOCHUCCHUONGTRINH_ID,
                    'strDaoTao_HocPhan_QuanHe_Id': '',
                    'strDaoTao_HocPhan_Id': objHocPhan.DAOTAO_HOCPHAN_ID,
                    'strNguoiThucHien_Id': '',
                    'pageIndex': 1,
                    'pageSize': 10000,
                },
                success: function(data){
                    if(data.Success){
                        dtQHHocPhan = data.Data;
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
        let getList_QHTuongDuong = () => {
            Core.makeRequest({
                action: 'KHCT_HocPhan_TuongDuong/LayDanhSach',
                type: 'GET',
                data: {
                    'strTuKhoa': '',
                    'strDaoTao_HocPhan_TD_Id': '',
                    'strDaoTao_ToChucCT_TD_Id': '',
                    'strDaoTao_ToChucCT_Id': objHocPhan.DAOTAO_TOCHUCCHUONGTRINH_ID,
                    'strDaoTao_HocPhan_Id': objHocPhan.DAOTAO_HOCPHAN_ID,
                    'strNguoiThucHien_Id': Core.userId,
                    'pageIndex': 1,
                    'pageSize': 10000,
                },
                success: function(data){
                    if(data.Success){
                        dtQHTuongDuong = data.Data;
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
        let getList_BaiHoc = () => {
            Core.makeRequest({
                action: 'KHCT_BaiHoc/LayDanhSach',
                type: 'GET',
                data: {
                    'strTuKhoa': '',
                    'strDaoTao_HocPhan_TD_Id': '',
                    'strDaoTao_ToChucCT_TD_Id': '',
                    'strDaoTao_ToChucCT_Id': objHocPhan.DAOTAO_TOCHUCCHUONGTRINH_ID,
                    'strDaoTao_HocPhan_Id': objHocPhan.DAOTAO_HOCPHAN_ID,
                    'strNguoiThucHien_Id': '',
                    'pageIndex': 1,
                    'pageSize': 10000,
                },
                success: function(data){
                    if(data.Success){
                        dtBaiHoc = data.Data;
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
        let getList_PhanBo = () => {
            Core.makeRequest({
                action: 'KHCT_HocPhan_TietHoc/LayDanhSach',
                type: 'GET',
                data: {
                    'strTuKhoa': '',
                    'strDaoTao_HocPhan_TD_Id': '',
                    'strLoaiPhanBo_Id': '',
                    'strDaoTao_ToChucCT_Id': objHocPhan.DAOTAO_TOCHUCCHUONGTRINH_ID,
                    'strDaoTao_HocPhan_Id': objHocPhan.DAOTAO_HOCPHAN_ID,
                    'strNguoiThucHien_Id': Core.userId,
                    'pageIndex': 1,
                    'pageSize': 10000,
                },
                success: function(data){
                    if(data.Success){
                        dtPhanBo = data.Data;
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
        getList_QHHocPhan();
        getList_QHTuongDuong();
        getList_BaiHoc();
        getList_PhanBo();
       
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
<View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
        
<ScrollView>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View  style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                <TouchableOpacity style={styles.flexR} onPress={() => navigation.goBack()} href="phenikaa-3-1cua-choxacnhan.html">
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                    <Text style={styles.textTitle}>Chi tiết học phần</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View  style={[styles.radiusTop20, styles.bgWhite]}>
            <Text style={[styles.fwBold, styles.px15, styles.py15, styles.fs16]}>Thông tin học phần</Text>
            <Text style={[styles.line1, styles.bgD1]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Mã học phần </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.DAOTAO_HOCPHAN_MA}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Tên học phần </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.DAOTAO_HOCPHAN_TEN}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Số tín học phần </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.HOCTRINHAPDUNGHOCTAP}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Số tín học phí </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.HOCTRINHAPDUNGTINHHOCPHI}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Là môn tính điểm </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.LAMONTINHDIEMTHEOCHUONGTRINH ? "Có": "Không"}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Học kỳ dự kiến </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.DAOTAO_THOIGIAN_KEHOACH_TEN}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Học kỳ thực tế </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.DAOTAO_THOIGIAN_THUCTE_TEN}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Thuộc tính học kỳ </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.THUOCTINHHOCPHAN_TEN}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                <Text style={[styles.color66, styles.fs15]}>Phạm vị đảm nhiệm </Text>
                <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{objHocPhan.PHANCONGPHAMVIDAMNHIEM_TEN}</Text></View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.line10, styles.bgF6]}></Text>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.fwBold, styles.px15, styles.py15]}>Phân bổ học phần</Text>
            {dtPhanBo.map((item, index) =>  (
                <View key={index}>
                    <Text style={[styles.line1, styles.bgD1]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>{item.LOAIPHANBO_TEN} </Text>
                        <View style={[styles.secondView]}><Text style={[styles.textCenter, styles.color66]}>{item.SOTIET}</Text></View>
                    </View>
                </View>
            ))}
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.line10, styles.bgF6]}></Text>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.fwBold, styles.px15, styles.py15, styles.fs16]}>Quan hệ học phần</Text>
            {dtQHHocPhan.map((item, index) =>  (
                <View key={index}>
                    <Text style={[styles.line1, styles.bgD1]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Loại quan hệ </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.LOAIQUANHE_TEN}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Quan hệ </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.DAOTAO_HOCPHAN_QUANHE_TEN}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Mức </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.MUCDIEUKIEN_TEN}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Toán tử </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.TOANTU_TEN}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Giá trị </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.GIATRIDIEUKIEN}</Text></View>
                    </View>
                    <Text style={[styles.line2, styles.bgE9]}></Text>
                </View>
            ))}
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.line10, styles.bgF6]}></Text>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.fwBold, styles.px15, styles.py15]}>Quan hệ tương đương</Text>
            {dtQHTuongDuong.map((item, index) =>  (
                <View key={index}>
                    <Text style={[styles.line1, styles.bgD1]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Khóa đào tạo </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.DAOTAO_KHOADAOTAO_TD_TEN}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Chương trình đào tạo </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.DAOTAO_CHUONGTRINH_TD_TEN}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Học phần tương đương </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.DAOTAO_HOCPHAN_TD_TEN}</Text></View>
                    </View>
                </View>
            ))}
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.line10, styles.bgF6]}></Text>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.fwBold, styles.px15, styles.py15]}>Bài học</Text>
            {dtBaiHoc.map((item, index) =>  (
                <View key={index}>
                    <Text style={[styles.line1, styles.bgD1]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Tên bài </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.TENBAI}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Ký hiệu	</Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.KYHIEUBAI}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.alignCenter, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Số tiết </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.SOTIET}</Text></View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View style={[styles.flex, styles.py15, styles.fs15, styles.px15, styles.flexR, styles.justifyBetween]}>
                        <Text style={[styles.color66, styles.fs15]}>Nội dung </Text>
                        <View style={[styles.secondView]}><Text style={[styles.pl20, styles.fs15]}>{item.NOIDUNG}</Text></View>
                    </View>
                </View>
            ))}
            
            
            

            {/* </ScrollView> */}
        </View>
        </ScrollView>
    </View>
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
    </ImageBackground>
    )
}
