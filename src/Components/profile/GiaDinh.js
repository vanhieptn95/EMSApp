import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faFileSignature } from '@fortawesome/free-regular-svg-icons/faFileSignature'
import { faUsersMedical } from '@fortawesome/free-solid-svg-icons/faUsersMedical'
import { faChevronRight } from '@fortawesome/free-regular-svg-icons/faChevronRight'
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt'
import { faFileUpload } from '@fortawesome/free-regular-svg-icons/faFileUpload'
import { faPlus } from '@fortawesome/free-regular-svg-icons/faPlus'

export default function GiaDinh({ navigation }){
    
    return(
        <ImageBackground source={require('../../../assets/images/profile-bg.png')} style={{flex: 1, height: 200}}>
        <View style={styles.profileWrapper}>
                <ScrollView>
                <View style={styles.pageHeader}>
                    <Text style={styles.topOfMobi}> </Text>
                    <View style={[styles.pageTitle, styles.hasButton,  {paddingBottom: 30, paddingTop: 15}, styles.flexR]}>
                        <TouchableOpacity style={styles.flexR}  href="../home.html"  onPress={() => navigation.goBack()} >
                            <FontAwesomeIcon icon={ faChevronLeft }  size={20}  style={{color: 'white', marginRight: 15, marginLeft: 8}}   />
                            <Image source={require('../../../assets/images/dashboad-item-1.png')} style={{height: 30, width: 50, marginTop: -5}}></Image>
                            <Text style={[styles.truncase1, {color: 'white', fontSize: 18, marginTop: -3}]}>Hồ sơ hay SYLL Online</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={[styles.btn, styles.btnOutline, styles.height33, styles.mlAuto, {borderWidth: 1, borderColor: 'white', marginRight: -35, marginTop: -5}]}>
                            <Text style={[styles.px18, styles.colorWhite, styles.fs18]}>Lưu</Text>
                        </TouchableOpacity> */}
        
                    </View>
        
                </View>
                    
                <View style={[styles.flex, styles.justifyCenter, {backgroundColor: 'transparent', alignItems: 'center', marginBottom: -76, zIndex: 10}]} >
                    <View style={[styles.userAvartar, {backgroundColor: 'transparent'}]}>
                        <Image style={[styles.radiusFull, styles.cover, styles.userAvartar, styles.radiusFullCover]} width="100%" source={require('../../../assets/images/no-avata.png')} alt=""></Image>
                        <View style={styles.avataEdit} ><Text style={[styles.colorWhite]}>Sửa</Text></View>
                    </View>
                </View>
                <View style={[styles.radiusTop20, styles.bgWhite, styles.navIsIcon]}>
                    
                    <View style={[styles.navIsIcon, styles.flex, styles.justifyBetween, styles.py15, styles.fs15, styles.fw500, styles.flexR]}>
                        <TouchableOpacity  onPress={() => navigation.navigate('HoSo')} href="profile-canhan.html" style={[styles.navIsIconItem, styles.active, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faUser }  size={32}  style={[styles.color66]} /></View>
        
                            <Text style={[styles.color66, styles.fw500, styles.color66]}>Cá nhân</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('HoSoKetQua')} href="profile-diem-ketqua.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faFileSignature }  size={32} style={[styles.color66]} /></View>
                            <Text style={[styles.color66, styles.fw500]}>...</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity href="profile-giadinh.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faUsersMedical }  size={32}  style={[styles.itemActive]} /></View>
                            <Text style={[styles.itemActive, styles.fw500]}>Gia đình</Text>
                        </TouchableOpacity>
        
                    </View>
            <View style={[styles.formList, styles.fs15]}>
                <View style={[styles.line1, styles.bgD1]}></View>
                <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Cha</Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Họ và tên</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Ngày sinh</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>_ /_ /___</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Dân tộc</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Kinh</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Tôn giáo</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Không</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>

                <View style={styles.formControl}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.px15, styles.block, styles.lineHeight20, styles.Mt2]}>Hoạt động kinh tế, chính trị, xã hội(làm gì, ở đâu?) 
                            (Trước 30/04/1975)
                                                                                    
                        </Text>
                        
                    </Text>
                    <Text style={[styles.w100, styles.borderNone, styles.mt10, styles.px15, styles.mb50, styles.outlineNone]} name="" id="" rows="2">Nhập thông tin
                    </Text>


                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={styles.formControl}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.px15, styles.block, styles.lineHeight20, styles.Mt2]}>Hoạt động kinh tế, chính trị, xã hội(làm gì, ở đâu?) (Từ 30/04/1975 đến nay) </Text>
                        
                    </Text>
                    <Text style={[styles.w100, styles.borderNone, styles.mt10, styles.px15, styles.mb50, styles.outlineNone]} name="" id="" rows="2">Nhập thông tin
                    </Text>


                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>


                {/* <TouchableOpacity style={[styles.btn, styles.btnDots, styles.bgWhite, styles.colorPrimary, styles.px16, styles.mx15, styles.my15]}>
                    <FontAwesomeIcon icon={ faFileUpload }  size={20}  />
                    <Text>Upload</Text>
                </TouchableOpacity> */}
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.line10, styles.bgF6]}></View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Mẹ</Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Họ và tên</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Ngày sinh</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>_ /_ /___</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Dân tộc</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Kinh</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Tôn giáo</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Không</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>

                <View style={styles.formControl}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.px15, styles.block, styles.lineHeight20, styles.Mt2]}>Hoạt động kinh tế, chính trị, xã hội(làm gì, ở đâu?)
                            (Trước 30/04/1975)
                                                                                    
                        </Text>
                        
                    </Text>
                    <Text style={[styles.w100, styles.borderNone, styles.mt10, styles.px15, styles.mb50, styles.outlineNone]} name="" id="" rows="2">Nhập thông tin
                    </Text>


                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={styles.formControl}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.px15, styles.block, styles.lineHeight20, styles.Mt2]}>Hoạt động kinh tế, chính trị, xã hội(làm gì, ở đâu?) (Từ 30/04/1975 đến nay) </Text>
                        
                    </Text>
                    <Text style={[styles.w100, styles.borderNone, styles.mt10, styles.px15, styles.mb50, styles.outlineNone]} name="" id="" rows="2">Nhập thông tin
                    </Text>


                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>


                {/* <TouchableOpacity style={[styles.btn, styles.btnDots, styles.bgWhite, styles.colorPrimary, styles.px16, styles.mx15, styles.my15]}>
                    <FontAwesomeIcon icon={ faFileUpload }  size={20}  />
                    <Text>Upload</Text>
                </TouchableOpacity> */}
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.line10, styles.bgF6]}></View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Vợ hoặc chồng(nếu có)</Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Họ và tên</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Ngày sinh</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>_ /_ /___</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Dân tộc</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Kinh</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Tôn giáo</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Không</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Nghề nghiệp hiện nay</Text>
                        
                    </Text>
                    {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone]} value="Nhập nghề nghiệp" /> */}
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Cơ quan công tác</Text>
                        
                    </Text>
                    {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone]} value="Nhập cơ quan công tác" /> */}
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.line10, styles.bgF6]}></Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Anh chị em ruột</Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Họ và tên</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Ngày sinh</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>_ /_ /___</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Dân tộc</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Kinh</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Tôn giáo</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Không</Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Nghề nghiệp hiện nay</Text>
                        
                    </Text>
                    {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone]} value="Nhập nghề nghiệp" /> */}
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Cơ quan công tác</Text>
                        
                    </Text>
                    {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone]} value="Nhập cơ quan công tác" /> */}
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}></Text>
                    
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                {/* <View style={[styles.px15, styles.py15]}>
                    <TouchableOpacity style={[styles.btn, styles.btnQuinary, styles.w100, styles.flexR]}>
                        <FontAwesomeIcon icon={ faPlus }  size={20}  />
                        <Text>Thêm Anh/chị em ruột</Text>
                    </TouchableOpacity>
                </View> */}


            </View>
        </View>
        </ScrollView>
    </View>
    </ImageBackground>
    )
}
