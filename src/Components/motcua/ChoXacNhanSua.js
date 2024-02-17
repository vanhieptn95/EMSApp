import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faUser } from '@fortawesome/free-brands-svg-icons/faUser'
import { faChevronRight } from '@fortawesome/free-brands-svg-icons/faChevronRight'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import { faMap } from '@fortawesome/free-brands-svg-icons/faMap'
import { faMapMarkerAlt } from '@fortawesome/free-brands-svg-icons/faMapMarkerAlt'
import { faMapPin } from '@fortawesome/free-brands-svg-icons/faMapPin'
import { faIdCard } from '@fortawesome/free-brands-svg-icons/faIdCard'
import { faUsersClass } from '@fortawesome/free-brands-svg-icons/faUsersClass'
import { faSitemap } from '@fortawesome/free-brands-svg-icons/faSitemap'
import { faEdit } from '@fortawesome/free-brands-svg-icons/faEdit'
export default function ChoXacNhanSua({ navigation }){
    
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
    <View style={[styles.sgWrapper, styles.mainSwapper]}>
        
    <ScrollView>
    <View style={styles.pageHeader} >
            <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                <TouchableOpacity style={styles.flexR}  onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                    <Text style={styles.textTitle}>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnOutline, styles.height33, styles.mlAuto, {borderWidth: 1, borderColor: 'white', marginRight: -35, marginTop: -5}]}><Text style={[styles.px18, styles.colorWhite, styles.fs18]}>Lưu</Text></TouchableOpacity>
        
            </View>


        </View>
            <View style={[styles.bgWhite, styles.radiusTop20]}>
                <Text style={[styles.textCenter, styles.fw600, styles.fs18, styles.lineHeight22, styles.pt15, styles.pb10, styles.px15]}>Mẫu ĐƠN XIN CẤP LẠI THẺ SINH VIÊN</Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={styles.formList}>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                               <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUser }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Họ và tên</Text></View>
                            </View>
                            {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone, styles.fwBold, styles.mlAuto]} value="Nguyễn Thị Bích" /> */}
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22, styles.fwBold]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]} for="name">
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faCalendarAlt }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngày sinh</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMap }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Tỉnh/Thành phố</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerAlt }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Quận/Huyện</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapPin }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Phường xã</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faIdCard }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Số CMND/CCCD</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUsersClass }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Lớp</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
    
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faSitemap }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Thuộc khóa học</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                            <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faSitemap }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngành học</Text></View>
                            </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                            
                        </View>
                    <View style={[styles.line1, styles.bgE9]}></View>
                    <View style={[styles.formControl, styles.flex, styles.py12]}>
                        <View style={[styles.flexShrink0, styles.px10, styles.flexR]}>
                            <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faEdit }  size={20} style={[styles.colorPrimary]} /></View> 
                            <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Nội dung</Text></View>
                        </View>
                        <Text style={[styles.w100, styles.borderNone, styles.pl50, styles.mt10, styles.pr15, styles.mb50, styles.outlineNone]} name="" id="" cols="30" rows="10">Đơn xin nghỉ học</Text>
    
    
                    </View>
    
                </View>
    
            </View>
    
    
    </ScrollView>
        </View></ImageBackground>
    )
}
