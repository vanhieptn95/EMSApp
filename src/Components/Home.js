import React, {useEffect, useState}  from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faSearch } from '@fortawesome/free-brands-svg-icons/faSearch'
// import { faBars } from '@fortawesome/free-brands-svg-icons/faBars'
import { faInfoCircle } from '@fortawesome/free-brands-svg-icons/faInfoCircle'
import { faNewspaper } from '@fortawesome/free-brands-svg-icons/faNewspaper'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import { faUsers } from '@fortawesome/free-brands-svg-icons/faUsers'
import { faToolbox } from '@fortawesome/free-brands-svg-icons/faToolbox'
// import { faHome } from '@fortawesome/free-brands-svg-icons/faHome'
import { faBell } from '@fortawesome/free-brands-svg-icons/faBell'
// import { faCog } from '@fortawesome/free-brands-svg-icons/faCog'
// import { faUser } from '@fortawesome/free-brands-svg-icons/faUser'
import styles from '../../assets/css/all'
import Core from '../Core'

let objCauHinhTuKhoa ={};
let strLogo = "";
let logo_width= 0;
let logo_height= 0;
let dtTinTuc =[];
let dtChucNang = [];
let strServerHienTai = "";
let dSLThongBao =0;
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width - 30;
const imageHeight = Math.round(imageWidth * 9 / 16) ;

function getImageChucNang(str){
    return '.../../assets/images/dashboad-item-1.png';
}

export default function Home({ navigation, route}){
    let [count, setCount] = useState(0);
    // console.log("1. " + Core.server)
    // console.log("2. " + strServerHienTai)
    
    
    useEffect(() => {
        navigation.addListener('focus', () => {
            if(Core.server != strServerHienTai){
                checkUser();
            }
            Core.get_StatusNotifyUser(data => {dSLThongBao = data;console.log("notify: " + data); setCount(++count)})
        });
        checkUser();
        function checkUser(){
            if(!Core.server){
                setTimeout(function(){checkUser(), 1000});
            }else{
                console.log("vao day roi")
                strServerHienTai = Core.server;
                Core.makeRequest({
                    action: 'CMS_CauHinh_TuKhoa/LayDanhSach',
                    type: 'GET',
                    data: {
                        strLoaiCauHinh: "APP_HOME",
                        strDinhDanh: ""
                    },
                    success: function(data){
                        if(data.Success){
                            if(data.Data.length > 0){
                                data.Data.forEach(e => {
                                    objCauHinhTuKhoa[e.DINHDANH] = e.DULIEU;
                                })
                                strLogo = objCauHinhTuKhoa.APP_LOGO;
                                if(strLogo) Image.getSize(Core.server + strLogo, (Width, Height) => {
                                    
                                    logo_height = Height;
                                    logo_width = Width*30/logo_height;
                                    setCount(++count)
                               
                                  }, (errorMsg) => {
                                    console.log(errorMsg);
                               
                                  });
                                  
                            }
                        }
                        else{
                            console.log(data.Message)
                        }
                    },
                    error: function(err){
                        console.log(err)
        
                    }
                })
        
                Core.makeRequest({
                    action: 'TT_BangTin_NguoiDung/LayDanhSach',
                    type: 'GET',
                    data: {
                        strTuKhoa: "",
                        strTuNgay: "",
                        strDenNgay: "",
                        strChuyenMuc_Id: "",
                        strChung_UngDung_Id: "",
                        strDaoTao_CoCauToChuc_Id: "",
                        dTinQuanTrong: -1,
                        dHieuLuc: 1,
                        pageIndex: 1,
                        pageSize: 3,
                        strNguoiThucHien_Id: Core.userId,
                    },
                    success: function(data){
                        if(data.Success){
                            dtTinTuc = data.Data;
                            setCount(++count)
                        }else{
                            Core.alert(data.Message)
                        }
                    },
                    error: function(err){
                        console.log(err)
            
                    }
                })
                
                Core.makeRequest({
                    action: 'CMS_Quyen/LayDSChucNangTheoNguoiDung_Id',
                    type: 'GET',
                    data: {
                        'strNguoiDung_Id' : Core.userId,
                        'strUngDung_Id' : "FAF3569AC87845DEA2B5A04EABF5A304"
                    },
                    success: function(data){
                        if(data.Success){
                            console.log(data.Data.length);
                            dtChucNang = data.Data;
                            setCount(++count)
                        }else{
                            Core.alert(data.Message)
                        }
                    },
                    error: function(err){
                        console.log(err)
            
                    }
                })

                Core.get_StatusNotifyUser(data => {dSLThongBao = data;console.log("notify: " + data); setCount(++count)})
            }
            
        }
        
        
    }, [])
    return(
        <SafeAreaView>
        <View style={styles.sgWrapper}>
            <ScrollView style={styles.bgBox}>

            <View style={[styles.sgHeader, styles.flex, styles.alignCenter, styles.mt10, styles.mb20, styles.px15, styles.flexR]}>
                <View style={styles.logo}>
                        {strLogo ? (<View><Image style={[{ width: logo_width,  height: 30}]} source={{uri: Core.server + strLogo}} ></Image></View>): null}
                </View>
                <View style={ [styles.mlAuto, styles.flexR]}>
                    {/* <View href="search.html" style={[styles.searchIcon, styles.fs18, styles.colorPrimary]}>
                        <FontAwesomeIcon icon={ faSearch }  size={20}  />
                    </View> */}
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}  href="menu-level-1.html" style={[styles.menuBarIcon, styles.ml35, styles.fs18, styles.colorPrimary]}>
                        <FontAwesomeIcon icon={ faBell }  size={23}  />
                        {/* <TouchableOpacity style={[styles.menuFItemSpan]}><Text style={[styles.fs12, styles.colorWhite]}>2</Text></TouchableOpacity> */}
                        {
                            dSLThongBao?  (<TouchableOpacity style={[styles.menuFItemSpan]}><Text style={[styles.fs12, styles.colorWhite]}>{dSLThongBao}</Text></TouchableOpacity>): null
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.sgDashBoard, styles.boxShadow, styles.mx15]}>
                <Text style={[styles.sectionTitle, styles.fwBold, styles.fs18, styles.justifyCenter, styles.uppercase, styles.mb15]}>Các chức năng</Text>
                <View style={styles.dashBoardList}>
                    {
                        // dtChucNang.map((item, index) =>(
                        //     <TouchableOpacity key={index} style={styles.dashBoardItem} onPress={() => navigation.navigate(item.MACHUCNANG)} >
                        //         <View style={styles.dashBoardItemCover}>
                        //             <View style={styles.dashboadImage} >
                        //                 {/* <Image style={styles.mw100} source={require(item.TENANH)} alt=""></Image> */}
                        //             </View>
                        //             <Text style={styles.dashboadTitle} >{item.TENCHUCNANG}</Text>
                        //         </View>
                        //     </TouchableOpacity>
                        // })
                        dtChucNang.map((item, index) =>{
                            var pointRequire ;
                            switch(item.MACHUCNANG){
                                case "DangKyHoc" : pointRequire = require('../../assets/images/dashboad-item-4.png'); break;
                                case "TaiChinh" : pointRequire = require('../../assets/images/dashboad-item-3.png'); break;
                                case "ChuongTrinhHoc" : pointRequire = require('../../assets/images/dashboad-item-7.png'); break;
                                case "ThoiKhoaBieu" : pointRequire = require('../../assets/images/dashboad-item-5.png'); break;
                                case "MotCua" : pointRequire = require('../../assets/images/dashboad-item-82.png'); break;
                                case "TraCuuDiem" : pointRequire = require('../../assets/images/dashboad-item-2.png'); break;
                                case "LichThi" : pointRequire = require('../../assets/images/xacnhandangky.png'); break;
                                default: pointRequire = require('../../assets/images/dashboad-item-1.png');
                            }
                            return (
                                <TouchableOpacity key={index} style={styles.dashBoardItem} onPress={() => navigation.navigate(item.MACHUCNANG)} >
                                     <View style={styles.dashBoardItemCover}>
                                         <View style={styles.dashboadImage} >
                                             <Image style={[styles.mw100,item.MACHUCNANG !="HoSo" ? {width: 67, height: 67}: null]} source={pointRequire} alt=""></Image>
                                         </View>
                                         <Text style={styles.dashboadTitle} >{item.TENCHUCNANG}</Text>
                                     </View>
                                 </TouchableOpacity>
                            )
                        } )
                    }
                    {/* <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('HoSo',{ name: 'Jane' })} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={styles.mw100} source={require('../../assets/images/dashboad-item-1.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} >Hồ sơ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('DangKyHoc')} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={[styles.mw100, {width: 67, height: 67}]} source={require('../../assets/images/dashboad-item-4.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} > Đăng ký học</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('TaiChinh')} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={styles.mw100} source={require('../../assets/images/dashboad-item-3.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} > Tài chính </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('ChuongTrinhHoc')} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={styles.mw100} source={require('../../assets/images/dashboad-item-7.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} > Chương trình học </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('ThoiKhoaBieu')} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={styles.mw100} source={require('../../assets/images/dashboad-item-5.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} >Thời khóa biểu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('MotCua')} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={styles.mw100} source={require('../../assets/images/dashboad-item-82.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} >Hệ thống 1 cửa
                                </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('TraCuuDiem')} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={styles.mw100} source={require('../../assets/images/dashboad-item-2.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} >Điểm
                                </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashBoardItem} onPress={() => navigation.navigate('LichThi')} >
                        <View style={styles.dashBoardItemCover}>
                            <View style={styles.dashboadImage} >
                                <Image style={[styles.mw100, {width: 67, height: 67}]} source={require('../../assets/images/xacnhandangky.png')} alt=""></Image>
                            </View>
                            <Text style={styles.dashboadTitle} > Lịch thi</Text>
                        </View>
                    </TouchableOpacity> */}

                </View>
            </View>
            {objCauHinhTuKhoa.APP_TENTRUONG? (
                <View style={[styles.sgAbout, {paddingTop: 10}]}>
                    <View style={[styles.sectionTitle, styles.mb13, {flexDirection: 'row'}]}>
                        <FontAwesomeIcon icon={ faInfoCircle }  size={20}  />
                        <Text style={[styles.fw500, styles.uppercase, styles.ml5]}>Giới thiệu</Text>
                    </View>
                    <TouchableOpacity style={styles.boxShadow}>
                        <View><Image  style={[{ width: 384,  height: 250}]} source={{uri: Core.server + objCauHinhTuKhoa.APP_ANHGT}}  alt=""></Image></View>
                        
                        <Text style={[styles.aboutTitle, styles.block]}>{objCauHinhTuKhoa.APP_TENTRUONG}</Text>
                        <Text style={styles.aboutDesc}>{objCauHinhTuKhoa.APP_NDGT}</Text>
                    </TouchableOpacity>
                </View>

            ) : null}
            <View style={styles.sgNews}>
                <View style={[styles.sectionTitle, styles.mb13, styles.mt25, styles.px15, styles.flexR]}>
                    <FontAwesomeIcon icon={ faNewspaper }  size={20}  />
                    <Text style={[styles.fw500, styles.uppercase, styles.ml5]}>Tin tức</Text>
                    <TouchableOpacity style={[ styles.mlAuto]}  onPress={() => navigation.navigate('TinTuc')} ><Text style={[styles.colorPrimary, styles.fs14]} >Xem thêm</Text></TouchableOpacity>
                </View>
                <View style={[styles.newsList, styles.px15]}>
                {
                    dtTinTuc.map((item, index) => (
                        <TouchableOpacity style={styles.newsItem}key={index} onPress={() => navigation.navigate('TinTucChiTiet', item)}>
                        <View style={styles.boxShadow} >
                            <View  >
                                <Image resizeMode={'cover'} style={[styles.cover, { width: imageWidth,  height: imageHeight}]} source={{uri: Core.getImage(item.DUONGDANANHHIENTHI)}} alt=""></Image>
                            </View>
                            <Text style={styles.newsTitle} >{item.TIEUDE}</Text>
                            <View style={[styles.newsDate, styles.flexR]}>
                                <View style={[styles.w20]}><FontAwesomeIcon icon={ faCalendarAlt }  size={14} style={[styles.color66, styles.mt2]} /></View>
                                    <Text>{item.NGAYBATDAU} - {item.DAOTAO_COCAUTOCHUC_TEN}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    ))
                }
                </View>
            </View>
            <View style={[styles.sgFriends, styles.mt10]}>
                <View style={[styles.sectionTitle, styles.mb13, styles.px15, styles.flexR]}>
                    <FontAwesomeIcon icon={ faUsers }  size={20}  />
                    <Text style={[styles.fw500, styles.uppercase, styles.ml5]}>Bạn bè</Text>
                    <Text style={[styles.colorPrimary, styles.mlAuto, styles.fs14]} >Xem thêm</Text>
                </View>
                <View style={[styles.boxShadow, styles.mx15]}>
                    <View style={[styles.friendList, styles.flexR]}>
                        {/* <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_00cee2d831ea4991adb98c612912bd82_20220630220720892.jpg')} style={[styles.imgAvartar]}></Image>
                            <Text>Thiên An</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_06cf3646755447df8ebe10afd2fe4ef8_20220727205245310.jpeg')} style={[styles.imgAvartar]}></Image>
                            <Text> Thuý Anh </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_0c7e906eb7c64c8884cd7fe2553f13e6_20220620085946259.jpg')} style={[styles.imgAvartar]}></Image>
                            <Text>Phương Anh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_0da122c2102d482a8a1f4e3ef932770f_20220424202402440.jpg')} style={[styles.imgAvartar]}></Image>
                            <Text> Huy Bôn </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_0eed4f1616604bd59dcd6116e4da2220_20220426101421606.jpg')} style={[styles.imgAvartar]}></Image>
                            <Text> Kim Chung </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_18afbad25f044f4a953514af1779e76a_20220425161111495.jpg')} style={[styles.imgAvartar]}></Image>
                            <Text> Văn Đạt </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_1d1f3373f0f547e8afbe06f1915036a2_20220708134626948.jpeg')} style={[styles.imgAvartar]}></Image>
                            <Text> Hồng Đức </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.friendItem}>
                            <Image source={require('../../assets/images/avartar/unsave_3df26d7d88454ce6af894f78b8a185e1_20220627182226142.jpg')} style={[styles.imgAvartar]}></Image>
                            <Text> Hải Đường </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
            <View style={[styles.sgServices, styles.mt10, styles.mt25]}>
                <View style={[styles.sectionTitle, styles.mb13, styles.px15, styles.flexR]}>
                    <FontAwesomeIcon icon={ faToolbox }  size={20}  />
                    <Text style={[styles.fw500, styles.uppercase, styles.ml5]}>Dịch vụ</Text>
                    <Text style={[styles.colorPrimary, styles.mlAuto, styles.fs14]} >Xem thêm</Text>
                </View>
                <View style={[styles.boxShadow, styles.mx15]}>
                    <View style={[styles.serviceList, styles.flexR]}>
                        <TouchableOpacity  style={styles.serviceItem}>
                            <Image source={require('../../assets/images/viettelpay.jpeg')} style={[styles.imgBrand]}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.serviceItem}>
                            <Image source={require('../../assets/images/vnpay.png')} style={[styles.imgBrand]}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.serviceItem}>
                            <Image source={require('../../assets/images/viettin.jpg')} style={[styles.imgBrand]}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.serviceItem}>
                            <Image source={require('../../assets/images/brand-logo.png')} style={[styles.imgBrand]}></Image>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
            <View style={styles.sgFooter}>
                <Text style={styles.devInfo}>
                    Đơn vị phát triển: Công ty Cổ Phần dịch vụ Công nghệ APIS - Địa chỉ: Tầng 6 Tháp Tây, Tòa nhà Hancorp, Số, 72 Trần Đăng Ninh, P, Cầu Giấy, Hà Nội - Điện thoại: 024 3204 5867
                </Text>
            </View>
            </ScrollView>
        </View>

        </SafeAreaView>
    )
}
