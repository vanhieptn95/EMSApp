import React, {useEffect} from 'react'
import {View, StyleSheet, TextInput, Button, Touchable, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLockAlt } from '@fortawesome/free-solid-svg-icons/faLockAlt'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
export default function QuenMatMhauMatMa(){
    
    return(
        <View style={styles.loginWrapper}>
            <Image style={styles.mb10} source={require('../../assets/images/forgot-pass.png')} alt=""></Image>
            <Text style={[styles.pageLabelLg, styles.fw500, styles.mb22]}>Nhập mã xác nhận</Text>
            <View style={styles.loginForm}>
                <View style={styles.formGroup}>
                    <View for="acc"><FontAwesomeIcon icon={ faLockAlt }  size={20}  /></View>

                    <TextInput id="acc" style={styles.formControl} type="text" placeholder="Mã xác nhận" />
                </View>

                <View style={styles.forgetPassHefp}>
                    <Text >Tôi chưa nhận được mã</Text>
                    <View >
                        <FontAwesomeIcon icon={ faQuestionCircle }  size={20}  />
                        <Text>Trợ giúp</Text>
                    </View>
                </View>
                <TouchableOpacity onclick="location.href = '../cong-sinh-vien-app/tao-mat-khau.html'" style={[styles.btn, styles.btnMain]} type="submit">
                    <Text> Gửi</Text> 
                    <FontAwesomeIcon icon={ faArrowRight }  size={20}  />
                </TouchableOpacity>
                <Text style={[styles.textCenter, styles.colorWhite, styles.lineHeight19]}>
                    <Text> Hệ thống đã gửi mã xác nhận đến Email:</Text>

                    <Text style={styles.underline}>vanhieptn95@gmail.com</Text>

                </Text>


            </View>
            <Text style={styles.loginFooter}>
                Đơn vị phát triển: Công ty Cổ Phần dịch vụ Công nghệ APIS Địa chỉ: Tầng 6 Tháp Tây, Tòa nhà Hancorp, Số, 72 Trần Đăng Ninh, P, Cầu Giấy, Hà Nội - Điện thoại: 024 3204 5867
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    loginWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageLabel: {
        fontSize: 32,
        lineHeight: 40,
        color: '#FFFFFF',
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    loginForm: {
        width: '80%',
        marginLeft: '10%'
    },
    formGroup: {
        position: 'relative'
    },
    formControl: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 90,
        height: 48,
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 16,
        fontSize: 17
    },
    iconFormGroup: {
        left: 15,
        marginTop: 14,
        position: 'absolute',
        zIndex: 1,
        fontSize: 30
    },
    forgetPassHelp: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 18,
        lineHeight: 19,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 'bold'
    },
    btnMain: {
        width: '100%',
        borderRadius: 90,
        height: 48,
        marginBottom: 16,
        lineHeight: 50,
        fontSize: 18,
        backgroundColor: '#223771',
        flexDirection: 'row',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    textMain: {
        marginBottom: 16,
        lineHeight: 50,
        fontSize: 18,
        marginLeft: '28%',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    iconMain: {
        marginTop: 16,
        lineHeight: 50,
        fontSize: 18,
        marginLeft: 10,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})
