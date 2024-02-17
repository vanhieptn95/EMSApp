import React, {useState, useEffect} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faSackDollar } from '@fortawesome/free-brands-svg-icons/faSackDollar'
import { faChevronRight } from '@fortawesome/free-brands-svg-icons/faChevronRight'
import { faMoneyCheckEditAlt } from '@fortawesome/free-brands-svg-icons/faMoneyCheckEditAlt'
import { faUsersClass } from '@fortawesome/free-brands-svg-icons/faUsersClass'
import { faFileSignature } from '@fortawesome/free-brands-svg-icons/faFileSignature'
import { faFileUpload } from '@fortawesome/free-brands-svg-icons/faFileUpload'
import { faFileDownload } from '@fortawesome/free-brands-svg-icons/faFileDownload'
import { faMoneyCheckEdit } from '@fortawesome/free-brands-svg-icons/faMoneyCheckEdit'
import Core from '../../Core'
import DangKyHoc from './DangKyHocController'
// import ModalLoading from '../ModalLoading'


    const renderChuongTrinh = ( item, index ) => {
        // console.log(item)
        return (
            <TouchableOpacity onPress={() => {DangKyHoc.strChuongTrinh_Id = item.DAOTAO_TOCHUCCHUONGTRINH_ID;  DangKyHoc.updateState("stateHome"); DangKyHoc.actionChuongTrinh() }} style={[styles.btn, (item.DAOTAO_TOCHUCCHUONGTRINH_ID === DangKyHoc.strChuongTrinh_Id)? styles.btnPrimary : styles.btnDefault, styles.mx15, styles.mb3, {borderWidth: 0}]} href="phenikaa-4-dangkyhoc-dangkyhoc.html">
                <Text style={[styles.fs16,(item.DAOTAO_TOCHUCCHUONGTRINH_ID === DangKyHoc.strChuongTrinh_Id)? styles.colorWhite : styles.color22]}>{item.DAOTAO_TOCHUCCHUONGTRINH_TEN}</Text>
            </TouchableOpacity>
      );
    }
    const renderKeHoach = ( item, index ) => {
        // console.log(item)
        return (
            <TouchableOpacity key={index} onPress={() => {DangKyHoc.strKeHoach_Id = item.ID;  DangKyHoc.updateState("stateHome");DangKyHoc.actionKeHoach(item.ID) }} style={[styles.btn, (item.ID === DangKyHoc.strKeHoach_Id)? styles.btnQuinary : styles.btnDefault, styles.mx15, styles.mb3, {borderWidth: 0}]} href="phenikaa-4-dangkyhoc-dangkyhoc.html">
                <Text style={[styles.fs16]}>{item.TENKEHOACH}</Text>
            </TouchableOpacity>
      );
    }
    
    // 

    const ChuongTrinh = ()=>{
        if(DangKyHoc.dtChuongTrinh && DangKyHoc.dtChuongTrinh.length == 0) return (<View><Text style={[styles.px15, styles.pt8, styles.fwBold, styles.lineHeight16, styles.fs18]}>Không có chương trình đào tạo</Text></View>)
        if(DangKyHoc.dtChuongTrinh && DangKyHoc.dtChuongTrinh.length < 2) return (<View></View>)
        
        return(
        <View>
            <Text style={[styles.px15, styles.pt8, styles.fwBold, styles.lineHeight16, styles.fs18]}>Chương trình đào tạo</Text>
            {DangKyHoc.dtChuongTrinh.map((item, index) =>  renderChuongTrinh(item, index))}
            {/* <FlatList
                data={DangKyHoc.dtChuongTrinh}
                renderItem={renderChuongTrinh}
                keyExtractor={item => item.DAOTAO_TOCHUCCHUONGTRINH_ID}
            /> */}
        </View>
        )
    }
    
    const KeHoach = () =>{
        if(DangKyHoc.dtKeHoach && DangKyHoc.dtKeHoach.length == 0) return (<View><Text style={[styles.px15, styles.pt8, styles.fwBold, styles.lineHeight16, styles.fs18]}>Không có kế hoạch đăng ký</Text></View>)
        if(DangKyHoc.dtKeHoach && DangKyHoc.dtKeHoach.length < 2) return (<View></View>)
        return(
         <View style={[styles.userInfoItemDK]}>
            <Text style={[styles.px15, styles.pt8, styles.fwBold, styles.lineHeight16, styles.fs18]}>Kế hoạch đăng ký</Text>
            {DangKyHoc.dtKeHoach.map((item, index) =>  renderKeHoach(item, index))}
        </View>
        )
    }

    

    

export default function Home({ navigation }){
    let [count, setCount] = useState(0);
    useEffect(()=>{
        
        DangKyHoc.strSinhVien_Id = Core.userId;
        // getList_ChuongTrinh();
        DangKyHoc.getList_ChuongTrinh();
        navigation.addListener('focus', () => {
            DangKyHoc.state = setCount;
        });
      
    }, [])
    
    const ThongTinDangKy = () => {
        if(!DangKyHoc.strKeHoach_Id) return (<View />)
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('DangKyHocSoDuHienTai')}  href="phenikaa-4-dangkyhoc-soduhientai.html" style={styles.userInfoItem}>
                    <FontAwesomeIcon icon={ faSackDollar }  size={20} style={[styles.colorSenary]}  />
                    <Text style= {[styles.fs16]}>Số dư tài khoản hiện tại:</Text>
                    <Text style={[styles.mlAuto, styles.colorSenary, styles.fs16, styles.bold]}>{DangKyHoc.dSoDu}</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={12} style={styles.ml14}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DangKyHocSoDuPhatSinh')}  href="phenikaa-4-dangkyhoc-soduphatsinhthemtrongdot.html" style={styles.userInfoItem}>
                    <FontAwesomeIcon icon={ faMoneyCheckEditAlt }  size={20} style={[styles.colorQuinary]}  />
                    <Text style= {[styles.fs16]}>Số phát sinh thêm trong đợt:</Text>
                    <Text style={[styles.mlAuto, styles.colorQuinary,styles.fs16, styles.bold]}>{DangKyHoc.dSoNo}</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={12} style={styles.ml14}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DangKyHocTongLopDaDangKy')}  href="phenikaa-4-dangkyhoc-tonglopdadangky.html" style={styles.userInfoItem}>
                    <FontAwesomeIcon icon={ faUsersClass }  size={20} style={[styles.colorPrimary]}  />
                    <Text style= {[styles.fs16]}>Tổng lớp đã đăng ký:</Text>
                    <Text style={[styles.mlAuto, styles.colorPrimary,styles.fs16, styles.bold]}>{DangKyHoc.dtKetQuaDangKy.length}</Text>
                    <FontAwesomeIcon icon={ faChevronRight }   size={12} style={styles.ml14}  />
                </TouchableOpacity>
                <View  style={styles.userInfoItem}>
                    <FontAwesomeIcon icon={ faFileSignature }  size={20} style={[styles.colorSenary]}  />
                    <Text style= {[styles.fs16]}>Số tín chỉ đã đăng ký:</Text>
                    <Text style={[styles.mlAuto, styles.colorRaw,styles.fs16, styles.bold]}>{DangKyHoc.objKeHoach.SOTINCHIDADANGKY}</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={12} style={styles.ml14} />
                </View>
                <View  style={styles.userInfoItem}>
                    <FontAwesomeIcon icon={ faFileUpload }  size={20} style={[styles.colorTertiary]}  />
                    <Text style= {[styles.fs16]}>Số tín chỉ tối đa:</Text>
                    <Text style={[styles.mlAuto, styles.colorTertiary,styles.fs16, styles.bold]}>{DangKyHoc.objKeHoach.SOTINCHITOIDACHUONGTRINH}</Text>
                    <FontAwesomeIcon icon={ faChevronRight }   size={12} style={styles.ml14}  />
                </View>
                <View  style={styles.userInfoItem}>
                    <FontAwesomeIcon icon={ faFileDownload }  size={20} style={[styles.colorSecondary]}  />
                    <Text style= {[styles.fs16]}>Số tín chỉ tối thiểu:</Text>
                    <Text style={[styles.mlAuto, styles.colorSecondary,styles.fs16, styles.bold]}>{DangKyHoc.objKeHoach.SOTINCHITOITHIEUCHUONGTRINH}</Text>
                    <FontAwesomeIcon icon={ faChevronRight }   size={12} style={styles.ml14}  />
                </View>
            </View>
        )
    }

    const ZoneDangKy = () =>{
        return DangKyHoc.strKeHoach_Id ? (
            <TouchableOpacity onPress={() => navigation.navigate('DangKyHocDangKy')}  style={[styles.btn, styles.btnPrimary, styles.mx15, styles.mt20, styles.flexR]} href="phenikaa-4-dangkyhoc-dangkyhoc.html">
                <FontAwesomeIcon icon={ faMoneyCheckEdit }  size={20} style={{color: 'white'}} />
                <Text style={[styles.fs18, styles.colorWhite]}>  Đăng ký học</Text>
            </TouchableOpacity>
        )
        :
        (
            <TouchableOpacity  style={[styles.btn, styles.btnDefault, styles.mx15, styles.mt20, styles.flexR]} href="phenikaa-4-dangkyhoc-dangkyhoc.html">
                <FontAwesomeIcon icon={ faMoneyCheckEdit }  size={20} />
                <Text style={[styles.fs18]}>  Đăng ký học</Text>
            </TouchableOpacity>
        )
    }
    // return (
    //     <View style={{flex: 1}}>
    //         <ScrollView scrollEnabled = {true}>
    //             <KeHoach></KeHoach>
    //         </ScrollView>
    //     </View>
    // )

    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>
        <View style={[styles.sgWrapper, styles.mainSwapper, styles.isHome]}>
            <ScrollView>
                <View style={[styles.pageHeader]}>
                    <Text style={styles.topOfMobi}> </Text>
                    <View style={[styles.pageTitle]}>
                        <TouchableOpacity style={styles.flexR} href="../home.html" onPress={() => navigation.navigate('TrangChu')} >
                            <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                            <Text style={styles.textTitle}>Đăng ký học</Text>
                        </TouchableOpacity>
                    </View>
        
                </View>
                <View style={[styles.contentRTop]}>
                    <View style={styles.userInfo}>
                        <Image source={Core.oUser.ANH ? {uri: Core.server + '/upload/' + Core.oUser.ANH}: require('../../../assets/images/no-avata.png')} style={styles.userInfoImg}></Image>
                        <View style={styles.userMeta}>
                            <Text style={[styles.mb12, styles.bold, styles.fs16]}>{Core.oUser.HODEM + " " + Core.oUser.TEN}</Text>
                            <Text style= {styles.fs16}>Mã sinh viên: {Core.oUser.MASO}</Text>
                        </View>
                    </View>
                    <View style={styles.userInfoList}>
                        
                        <ChuongTrinh />
                        <KeHoach />
                        <ThongTinDangKy />
                    </View>
                    <ZoneDangKy />
        
                </View>
                
            </ScrollView>
            </View>
            {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
        </ImageBackground>
        
    )
}
