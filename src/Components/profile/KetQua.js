import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import styles from '../../../assets/css/all'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature'
import { faUsersMedical } from '@fortawesome/free-regular-svg-icons/faUsersMedical'
// import { faChevronRight } from '@fortawesome/free-regular-svg-icons/faChevronRight'
// import { faLevelUp } from '@fortawesome/free-regular-svg-icons/faLevelUp'
// import { faFileUpload } from '@fortawesome/free-regular-svg-icons/faFileUpload'
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt'
export default function KetQua({ navigation }){
    
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
                <View style={[styles.radiusTop20, styles.bgWhite, styles.mb25, styles.navIsIcon]}>
                    <View style={[styles.navIsIcon, styles.flex, styles.justifyBetween, styles.py15, styles.fs15, styles.fw500, styles.flexR]}>
                        <TouchableOpacity onPress={() => navigation.navigate('HoSo')} href="profile-canhan.html" style={[styles.navIsIconItem, styles.active, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faUser }  size={32}  style={[styles.color66]} /></View>
        
                            <Text style={[styles.color66, styles.fw500]}>Cá nhân</Text>
                        </TouchableOpacity>
                        <TouchableOpacity href="profile-diem-ketqua.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faFileSignature }  size={32} style={[styles.itemActive]} /></View>
                            <Text style={[styles.itemActive, styles.fw500]}>...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('HoSoGiaDinh')} href="profile-giadinh.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faUsersMedical }  size={32}  style={[styles.color66]} /></View>
                            <Text style={[styles.color66, styles.fw500]}>Gia đình</Text>
                        </TouchableOpacity>
        
                    </View>
            {/* <View style={[styles.formList, styles.fs15]}>
                <View style={[styles.line1, styles.bgD1]}></View>
                <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Điểm thi tuyển sinh</Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <View style={[styles.flexShrink0, styles.pl15]} for="name">
                        <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Tổng điểm</Text></View>
                    </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>22.5</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <View style={[styles.flexShrink0, styles.pl15]} for="name">
                        <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Môn 1</Text></View>
                    </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Toán</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <View style={[styles.flexShrink0, styles.pl15, styles.flexR]} for="name">
                        <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faLevelUp }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Điểm môn 1</Text></View>
                    </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>5</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       <Text style={[styles.color66, styles.fs15]}>Môn 2</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Toán</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <View style={[styles.flexShrink0, styles.pl15, styles.flexR]} for="name">
                        <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faLevelUp }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Điểm môn 2</Text></View>
                    </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>5</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                        <Text style={[styles.color66, styles.fs15]}>Môn 3</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Toán</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <View style={[styles.flexShrink0, styles.pl15, styles.flexR]} for="name">
                        <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faLevelUp }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Điểm môn 3</Text></View>
                    </View>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>5</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                        <Text style={[styles.color66, styles.fs15]}>Điểm ưu tiên nếu có</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>0</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>

                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.pt12]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Lý do để được tuyển thẳng và được thưởng điểm
                        </Text>
                        
                    </Text>
                    <Text style={[styles.w100, styles.borderNone, styles.mt10, styles.px15, styles.mb50, styles.outlineNone]} name="" id="" rows="2">Nhập lý do để được tuyển thẳng và được thưởng điểm
                    </Text>


                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>


                <TouchableOpacity style={[styles.btn, styles.btnDots, styles.bgWhite, styles.colorPrimary, styles.px16, styles.mx15, styles.my15]}>
                    <FontAwesomeIcon icon={ faFileUpload }  size={20}  />
                    <Text>Upload</Text>
                </TouchableOpacity>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.line10, styles.bgF6]}></Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Kết quả học lớp cuối cấp ở THPT hoặc THBT</Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>

                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Xếp loại về học tập</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Khá</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Xếp loại về hạnh kiểm</Text>
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Khá</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Xếp loại về tốt nghiệp</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>Khá</Text>
                    <FontAwesomeIcon icon={ faChevronRight }  size={14} style={[styles.mr10, styles.colorSeptenary]}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>



                <TouchableOpacity style={[styles.btn, styles.btnDots, styles.bgWhite, styles.colorPrimary, styles.px16, styles.mx15, styles.my15]}>
                    <FontAwesomeIcon icon={ faFileUpload }  size={20}  />
                    <Text>Upload</Text>
                </TouchableOpacity>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.line10, styles.bgF6]}></View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Ngày vào Đoàn TNCSHCM</Text>
                        
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>_ /_ /___</Text>
                    <FontAwesomeIcon icon={ faCalendarAlt }  size={20}  />
                </View>

                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Ngày vào Đảng CSVN</Text>
                                                                                                                     
                    </Text>
                            <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>_ /_ /___</Text>
                    <FontAwesomeIcon icon={ faCalendarAlt }  size={20}  />
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.pt12]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Khen thưởng kỷ luật
                        </Text>
                        
                    </Text>
                    <Text style={[styles.w100, styles.borderNone, styles.mt10, styles.px15, styles.mb50, styles.outlineNone]} name="" id="" rows="1">Nhập khen thưởng kỷ luật</Text>


                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.formControl, styles.pt12]}>
                    <Text style={[styles.flexShrink0, styles.pl15]} for="name">
                       
                        <Text style={[styles.color66, styles.fs15]}>Tóm tắt quá trình học tập</Text>
                        
                    </Text>
                    <Text style={[styles.w100, styles.borderNone, styles.mt10, styles.px15, styles.mb50, styles.outlineNone]} name="" id="" rows="2">Tóm tắt quá trình học tập</Text>


                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.px15, styles.py15, styles.fs13, styles.lineHeight18]}>
                    (ghi rõ thời gian, nơi học tập, công tác, lao động hoặc đơn vị phục vụ, chức vụ, danh hiệu nghề nghiệp, bậc lương)

                </Text>





            </View> */}
        </View>
        </ScrollView>
    </View>
    </ImageBackground>
    )
}
