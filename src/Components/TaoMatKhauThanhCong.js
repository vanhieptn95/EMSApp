import React, {useEffect} from 'react'
import {View, StyleSheet, TextInput, Button, Touchable, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
export default function TaoMatKhauThanhCong(){
    
    return(
        <View style={styles.loginWrapper}>
        <Image style={styles.mb10} source={require('../../assets/images/forgot-pass-successful.png')} alt=""></Image>
        <View style={[styles.pageLabelLg, styles.fw500, styles.textCenter, styles.mb22]}>
            <Text> Cập nhật mật khẩu</Text>
            <Text style={[styles.fwBold, styles.uppercase, styles.mt10, styles.block]}>Thành công</Text>
        </View>
        <View style={styles.loginForm}>

            <TouchableOpacity onclick="location.href = '../cong-sinh-vien-app/login.html'" style={[styles.btn, styles.btnMain, styles.textInherit]} type="submit">
                <Text>Quay lại đăng nhập</Text>   
                <Text style={[styles.ml5, styles.colorTertiary]}>10s</Text>
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
