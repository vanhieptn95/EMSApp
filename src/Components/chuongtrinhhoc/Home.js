import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-brands-svg-icons/faChevronRight'
export default function Home({ navigation }){
    
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
<View  style={[styles.sgWrapper, styles.mainSwapper]}>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View  style={styles.pageTitle}>
                <TouchableOpacity style={styles.flexR} href="phenikaa-3-1cua-choxacnhan.html" onPress={() => navigation.goBack()} ><FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                <Text style={styles.textTitle}>Chương trình học</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View  style={[styles.radiusTop20, styles.bgWhite, styles.pt10, styles.w100]}>
            <View  style={[styles.px15, styles.py15]}>
                <Text style={[styles.fs22, styles.fw600, styles.colorPrimary]}>Công nghệ sinh học</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChuongTrinhHocHocPhan')} href="chuongtrinhhoc-01.html" style={[styles.boxShadow, styles.flex, styles.alignCenter, styles.py9, styles.px13, styles.mt20, styles.flexR]}>
                    <Image style={styles.flexShrink0} source={require('../../../assets/images/9-chuong-trinh-hoc/item-1.png')} alt=""></Image>
                    <Text style={[styles.fs18, styles.ml11]}>
                        Học phần theo chương trình
                    </Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={15} style={[styles.mlAuto, styles.colorPrimary, styles.fw300]} />
                </TouchableOpacity>
                {/* <TouchableOpacity  href="chuongtrinhhoc-04-hocphantheodinhhuong.html" style={[styles.boxShadow, styles.flex, styles.alignCenter, styles.py9, styles.px13, styles.mt20, styles.flexR]}>
                    <Image style={styles.flexShrink0} source={require('../../../assets/images/9-chuong-trinh-hoc/item-2.png')} alt=""></Image>
                    <Text style={[styles.fs18, styles.ml11]}>
                        Học phần theo định hướng
                    </Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={15} style={[styles.mlAuto, styles.colorPrimary, styles.fw300]} />
                </TouchableOpacity> */}
                <TouchableOpacity  onPress={() => navigation.navigate('ChuongTrinhHocKhoiLuaChonBatBuoc')} href="chuongtrinhhoc-02-cackhoiluachonbatbuoc.html" style={[styles.boxShadow, styles.flex, styles.alignCenter, styles.py9, styles.px13, styles.mt20, styles.flexR]}>
                    <Image style={styles.flexShrink0} source={require('../../../assets/images/9-chuong-trinh-hoc/item-3.png')} alt=""></Image>
                    <Text style={[styles.fs18, styles.ml11]}>
                        Các khối lựa chọn bắt buộc
                    </Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={15} style={[styles.mlAuto, styles.colorPrimary, styles.fw300]} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('ChuongTrinhHocKhoiLuaChonDon')} href="chuongtrinhhoc-03-cackhoiluachondon.html" style={[styles.boxShadow, styles.flex, styles.alignCenter, styles.py9, styles.px13, styles.mt20, styles.flexR]}>
                    <Image style={styles.flexShrink0} source={require('../../../assets/images/9-chuong-trinh-hoc/item-4.png')} alt=""></Image>
                    <Text style={[styles.fs18, styles.ml11]}>
                        Các khối lựa chọn đơn
                    </Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={15} style={[styles.mlAuto, styles.colorPrimary, styles.fw300]} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </ImageBackground>
    )
}
