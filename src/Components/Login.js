import React, {useState, useEffect} from 'react'
import {View, TextInput, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faKeySkeleton } from '@fortawesome/free-regular-svg-icons/faKeySkeleton'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye'
// import { faEye } from '@fortawesome/free-regular-svg-icons/faEye'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons/faQuestionCircle'
import { faSignOut } from '@fortawesome/free-regular-svg-icons/faSignOut'
import styles from '../../assets/css/all'
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';
import config from './../config'
import Core from '../Core'
import ModalLoading from './ModalLoading'

var strUserName= "";
var strPass = "";
let dtServer =[];
let iThuTu = 0;
let strLocalServer = "";
let configServer;
let strThongBao = "";
let setCoun ;
let setModalView;
let iCount = 0;

checkServer = async (navigation) => {
    try {
        console.log("start check server")
      const value = await AsyncStorage.getItem('serverDangNhap');
      //console.log(value);
      if (value !== null) {
        // We have data!!
        console.log(value);
        var value1 = JSON.parse(value);
        strLocalServer = value1.api;
        console.log("strLocalServer:" + strLocalServer)
        configServer = value1;
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  checkServer();


  ShowLog = (strMessage, strChange) => {
    console.log(strMessage);
    if(!strChange) setModalView(false);
    if(strMessage.indexOf("http") == -1){
        strThongBao = strMessage;
        setCoun(++iCount)
    }
  }

onLogin = (navigation) => {
    setModalView(true);
    iThuTu = 0
    console.log("oneLgin")
    function DangNhapThangCong(json){
        console.log("DangNhapThangCong")
        var iStatusPassChange = json.Data[0].DADOIMATKHAU;
        var iVeryfyAccount = json.Data[0].XACNHANTAIKHOAN;
        if(iVeryfyAccount == 0){
            ShowLog("Chưa xác nhận tài khoản");
        }else{
            
            Core.getTokenlUser((tokenJWT) => {
                var aUser = json.Data[0];
                var check = dtServer.length ? dtServer.find(e=> e.api === strLocalServer): configServer;
                console.log(check)
                aUser["tokenJWT"] = tokenJWT;
                aUser["server"] = strLocalServer;
                aUser["api_noti"] = check.api_noti;
                console.log(aUser)
                AsyncStorage.setItem(
                    'allUser',
                    JSON.stringify(aUser)
                );
                AsyncStorage.setItem(
                    'serverDangNhap',
                    JSON.stringify(check)
                );
                navigation.navigate('Tab', aUser)
            }
            );
        
            // GoHome(navigation, json.Data[0])
        }
    }


    DangNhap = (strServer) => {
        setModalView(true);
        strLocalServer = strServer;
        console.log(strServer)
        fetch(strServer + '/cmsapi/api/CMS_Token/XacThucNguoiDungLayMuoi?strTaiKhoanNguoiDung='+ strUserName +'&strDuLieuTruyCap')
        .then((response) => response.json())
        .then((json) => {
            if(json.Success){
                var strMuoiMaHoa = json.Data[0].DATA;
                console.log(strMuoiMaHoa)
                var arrMuoiMaHoa = strMuoiMaHoa.split('#');
                fetch(strServer + '/cmsapi/api/CMS_Token/Decrypt_Key?strEncryptedText='+ arrMuoiMaHoa[1] +'&strEncKey=' + arrMuoiMaHoa[0])
                .then((response) => response.json())
                .then((json) => {
                    if(json.Success){
                        var strTemp = json.Data[0].DATA;
                        var arrMuoi = strTemp.split('#');
                        var password = md5(strPass);
                        fetch(strServer + '/cmsapi/api/CMS_Token/Encrypt_Key?strEncryptedText='+ arrMuoi[0] + '%23' + password + '%23' + arrMuoi[2] + '%23' + arrMuoi[3] + '%23' + arrMuoi[4] +'&strEncKey=' + arrMuoi[4])
                        .then((response) => response.json())
                        .then((json) => {
                            if(json.Success){
                                var strNewMuoi = json.Data[0].DATA;
                                fetch(strServer + '/cmsapi/api/CMS_Token/XacThucNguoiDungMuoi?strThongTin='+ strNewMuoi + '%23' + arrMuoi[4] +'&strDuLieuTruyCap')
                                .then((response) => response.json())
                                .then((json) => {
                                    if(json.Success){
                                        if(json.Data[0].PASSED == 1){
                                            DangNhapThangCong(json);
                                        }else{
                                            ShowLog("Không pass");
                                        }
                                    }
                                    else{
                                        ShowLog(json.Message);
                                    }
                                })
                                .catch((error) => {
                                    ShowLog(error);
                                });
                            }
                            else{
                                ShowLog(json.Message);
                                //getServerAPI();
                            }
                        })
                        .catch((error) => {
                            ShowLog(error);
                        });
                    }
                    else{
                        ShowLog(json.Message);
                    }
                })
                .catch((error) => {
                    ShowLog(error);
                });
            }
            else{
                ShowLog(json.Message, true);
                getServerAPI();
            }

        })
        .catch((error) => {
            
            ShowLog(error);
        });
    }
    
    
    function getServerAPI(){
        console.log("dtServer:" + dtServer.length);
        if(dtServer.length == 0){
            getAllServer(() => {
                console.log(iThuTu);
                if(dtServer.length > 0) DangNhap(dtServer[iThuTu++].api);
            });
        }else{
            console.log(iThuTu);
            if(iThuTu < dtServer.length) DangNhap(dtServer[iThuTu++].api);
            else setModalView(false)
        }
    }
    console.log("onlogin LocalS: " + strLocalServer)
    if(strLocalServer) DangNhap(strLocalServer);
    else getAllServer(() => {
        getServerAPI();
    });
}

getAllServer = (callback) =>{
    console.log("getAllServer")
    if(dtServer && dtServer.length) callback(); else{
        console.log(config.server + '/ServerAPI?name=' + strUserName)
        fetch(config.server + '/ServerAPI?name=' + strUserName)
        .then((response) => response.json())
        .then((json) => {
            if(json.Success){
                console.log(json.Data)
                dtServer = json.Data
                callback()
            }
            else{
                ShowLog(json.Message);
            }
    
        })
        .catch((error) => {
            // ShowLog(error);
        });
    }
    
}

export default function Login({ navigation }){
    const [count, setCount] = useState(0);
    const [modalVisible, setModal] = useState(false);
    const [hidePass, setHidePass] = useState(true);
    useEffect(()=>{
        setCoun= setCount;
        setModalView = setModal;
        navigation.addListener('focus', () => {
            strThongBao = "";
            setCoun(++iCount)
        });
    }, [])
    return(
    <ImageBackground source={require('../../assets/images/login-bg.png')} resizeMode="cover" style={{flex: 1, width: '100%'}}>
        <View style={styles.loginWrapper}>
            <Text style={[styles.pageLabelLg, styles.uppercase, styles.fwBold]}>Đăng nhập</Text>
            <View style={styles.loginForm}>
                <View style={[styles.formGroup, styles.flexR]}>
                    <FontAwesomeIcon icon={ faUser }  size={20} style={[styles.iconL]} />

                    <TextInput onChangeText={pa => {strUserName = pa;}} style={[styles.formControl, {paddingLeft: 50, marginBottom: 16, minHeight: 44}]}  type="text" placeholder="Nhập tài khoản hoặc email" placeholderTextColor="gray"  />
                </View>
                <View style={[styles.formGroup, styles.flexR]}>
                    <FontAwesomeIcon icon={ faKeySkeleton }  size={20} style={[styles.iconL]}   />
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)} style={[styles.iconR]}  >
                        <FontAwesomeIcon icon={ hidePass?faEyeSlash: faEye }  size={20} />
                    </TouchableOpacity>
                    <TextInput onChangeText={pa => {strPass = pa;}} style={[styles.formControl, {paddingLeft: 50, marginBottom: 16, minHeight: 44}]} type="password" placeholder="Nhập mật khẩu" placeholderTextColor="gray" secureTextEntry={hidePass} />
                </View>
                <View style={[styles.forgetPassHefp, styles.flexR]}>
                    <TouchableOpacity href="quen-mat-khau.html"><Text style={[styles.colorWhite, styles.fs16]}>Quên mật khẩu</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.flexR]}>
                        <FontAwesomeIcon icon={ faQuestionCircle }  size={20}  style={[styles.colorWhite, styles.fs16]} />
                        <Text style={[styles.colorWhite, styles.fs16]}> Trợ giúp</Text>
                    </TouchableOpacity>
                </View>
                <View style={{textAlign: 'center',alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => onLogin(navigation)} style={[styles.loginFormBtn, styles.flexR, {justifyContent: 'center'}]} type="submit">
                        <Text style={[styles.colorWhite, styles.fs18, styles.uppercase]}>Đăng nhập </Text>
                        <FontAwesomeIcon icon={ faSignOut }  size={20}  style={[styles.colorWhite, styles.fs16]} />
                </TouchableOpacity>
                </View>

            </View>
            <Text style={{marginTop: 40, fontSize: 16, color: "red"}}>
                {strThongBao}
            </Text>
            <Text style={styles.loginFooter}>
                Đơn vị phát triển: Công ty Cổ Phần dịch vụ Công nghệ APIS Địa chỉ: Tầng 6 Tháp Tây, Tòa nhà Hancorp, Số, 72 Trần Đăng Ninh, P, Cầu Giấy, Hà Nội - Điện thoại: 024 3204 5867
            </Text>
        </View>
        <ModalLoading modalVisible={modalVisible} task={'Đang xử lý ...'}></ModalLoading>
    </ImageBackground>
    )
}

