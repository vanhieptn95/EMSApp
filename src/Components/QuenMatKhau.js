import React from 'react'
import {View, StyleSheet, TextInput, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
export default function QuenMatMhau(){
    
    return(
        <View style={styles.loginWrapper}>
        <Image style={styles.mb10} source={require('../../assets/images/forgot-pass.png')} alt=""></Image>
        <Text style={[styles.pageLabelLg, styles.fw500, styles.mb22]}>Khôi phục mật khẩu</Text>
        <View style={styles.loginForm}>
            <View style={styles.formGroup}>
                <View for="acc"><FontAwesomeIcon icon={ faEnvelopeOpenText }  size={20}  /></View>

                <TextInput id="acc" style={styles.formControl} type="text" placeholder="Vui lòng nhập email của bạn" />
            </View>

            <View style={styles.forgetPassHefp}>
                <Text>Thử cách khác</Text>
                <View ><FontAwesomeIcon icon={ faQuestionCircle }  size={20}  /><Text>Trợ giúp</Text></View>
            </View>
            <TouchableOpacity onclick="location.href = '../cong-sinh-vien-app/quen-mat-khau-mat-ma.html'" style={[styles.btn, styles.btnMain]} type="submit">
                <Text>Gửi</Text> 
                 <FontAwesomeIcon icon={ faArrowRight }  size={20}  />
            </TouchableOpacity>


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
