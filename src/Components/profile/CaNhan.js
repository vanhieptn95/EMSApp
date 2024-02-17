import React, {useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faUser as faUser2 } from '@fortawesome/free-brands-svg-icons/faUser'
import { faFileSignature } from '@fortawesome/free-brands-svg-icons/faFileSignature'
import { faUsersMedical } from '@fortawesome/free-brands-svg-icons/faUsersMedical'
import { faChevronRight } from '@fortawesome/free-brands-svg-icons/faChevronRight'
import { faIdBadge } from '@fortawesome/free-brands-svg-icons/faIdBadge'
import { faUsersClass } from '@fortawesome/free-brands-svg-icons/faUsersClass'
import { faSitemap } from '@fortawesome/free-brands-svg-icons/faSitemap'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import { faRestroom } from '@fortawesome/free-brands-svg-icons/faRestroom'
import { faMap } from '@fortawesome/free-brands-svg-icons/faMap'
import { faMapMarkerAlt } from '@fortawesome/free-brands-svg-icons/faMapMarkerAlt'
import { faMapPin } from '@fortawesome/free-brands-svg-icons/faMapPin'
import { faIdCard } from '@fortawesome/free-brands-svg-icons/faIdCard'
// import { faFileUpload } from '@fortawesome/free-brands-svg-icons/faFileUpload'
import { faUsersCrown } from '@fortawesome/free-brands-svg-icons/faUsersCrown'
import { faMapMarkerCheck } from '@fortawesome/free-brands-svg-icons/faMapMarkerCheck'
import { faAddressCard } from '@fortawesome/free-brands-svg-icons/faAddressCard'
import { faSchool } from '@fortawesome/free-brands-svg-icons/faSchool'
import { faUserTag } from '@fortawesome/free-brands-svg-icons/faUserTag'
import { faPhone } from '@fortawesome/free-brands-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-brands-svg-icons/faEnvelope'
import { faSignOut } from '@fortawesome/free-brands-svg-icons/faSignOut'
import Core from '../../Core'

let aDataUser = {};

export default function CaNhan({ navigation, route }){
    const [count, setCount] = useState(0);
    // Core.getCacheUser(aData => {
    //     aDataUser = aData;
    //     setCount(++count)
    // });
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
                            <Text style={[styles.truncase1, styles.textTitle]}>Hồ sơ hay SYLL Online</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={[styles.btn, styles.btnOutline, styles.height33, styles.mlAuto, {borderWidth: 1, borderColor: 'white', marginRight: -35, marginTop: -5}]}>
                            <Text style={[styles.px18, styles.colorWhite, styles.fs18]}>Lưu</Text>
                        </TouchableOpacity> */}
        
                    </View>
                </View>
                    
                <View style={[styles.flex, styles.justifyCenter, {backgroundColor: 'transparent', alignItems: 'center', marginBottom: -76, zIndex: 10}]} >
                    <View style={[styles.userAvartar, {backgroundColor: 'transparent'}]}>
                    <Image style={[styles.radiusFull, styles.cover, styles.userAvartar, styles.radiusFullCover]} width="100%" 
                    source={Core.oUser.ANH ? {uri: Core.server + '/upload/' + Core.oUser.ANH}: require('../../../assets/images/no-avata.png')}
                    ></Image>
                        <View style={styles.avataEdit} ><Text style={[styles.colorWhite]}>Sửa</Text></View>
                    </View>
                </View>
                <View style={[styles.radiusTop20, styles.bgWhite, styles.mb25, styles.navIsIcon]}>
                    <View style={[styles.navIsIcon, styles.flex, styles.justifyBetween, styles.py15, styles.fs15, styles.fw500, styles.flexR]}>
                        <TouchableOpacity onPress={() => navigation.navigate('HoSo')} href="profile-canhan.html" style={[styles.navIsIconItem, styles.active, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faUser }  size={32}  style={[styles.itemActive]} /></View>
        
                            <Text style={[styles.color66, styles.fw500, styles.itemActive]}>Cá nhân</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('HoSoKetQua')}  href="profile-diem-ketqua.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faFileSignature }  size={32} style={[styles.color66]} /></View>
                            <Text style={[styles.color66, styles.fw500]}>...</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigation.navigate('HoSoGiaDinh')} href="profile-giadinh.html" style={[styles.navIsIconItem, styles.wContent, styles.textCenter, styles.px25]}>
                            <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faUsersMedical }  size={32}  style={[styles.color66]} /></View>
                            <Text style={[styles.color66, styles.fw500]}>Gia đình</Text>
                        </TouchableOpacity>
        
                    </View>
                    <View style={[styles.formList, styles.fs15]}>
                        <View style={[styles.line1, styles.bgD1]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                               <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUser2 }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Họ và tên  </Text></View>
                            </View>
                            {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone, styles.fwBold, styles.mlAuto]} value="Nguyễn Thị Bích" /> */}
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22, styles.fwBold]}>{Core.oUser.HODEM + " " + Core.oUser.TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22, styles.fwBold]}>{Core.oUser.HODEM + " " + Core.oUser.TEN}</Text>
                            </View>
                        </View>
                        {/* <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[{borderColor: 'black', borderWidth: 1, borderRadius: 10, flexDirection: 'row', flex: 1}]}>
                            <View style={[{borderColor: 'red', borderWidth: 1}]}>
                                <Text>ashjdasjjk asdjjaskl</Text>
                            </View>
                            <View style={[{borderColor: 'red', borderWidth: 1, borderRadius: 10, width: '100%', flex: 1}]}>
                                <Text>{Core.oUser.TTLL_EMAILCANHAN} asdas ajshdja </Text>
                            </View>
                        </View> */}

                        {/* <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, {borderColor: 'black', borderWidth: 1}, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR, {borderColor: 'red', borderWidth: 1}]}>
                                <View style={[styles.justifyCenter, styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faEnvelope }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Email  </Text></View>
                            </View>
                            <View style={[styles.flexR, styles.flexWrap, {borderColor: 'red', borderWidth: 1, borderRadius: 10, width: '100%'}]}>
                                <Text style={[styles.fs15, styles.color22]}>{Core.oUser.TTLL_EMAILCANHAN} asdas ajshdja </Text>
                            </View>
                        </View> */}
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faIdBadge }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Mã sinh viên  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUsersClass }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Lớp  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.LOP}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.LOP}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faSitemap }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngành học  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANH}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANH}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUserTag }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Trạng thái  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QLSV_NGUOIHOC_TRANGTHAI}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QLSV_NGUOIHOC_TRANGTHAI}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
        
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faCalendarAlt }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngày sinh  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QLSV_NGUOIHOC_NGAYSINH}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QLSV_NGUOIHOC_NGAYSINH}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faRestroom }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Giới tính  </Text></View>
                            </View>
                            {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone, styles.mlAuto]} value="Nữ" /> */}
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.GIOITINH_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.GIOITINH_TEN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.justifyCenter, styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faEnvelope }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Email  </Text></View>
                            </View>
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.TTLL_EMAILCANHAN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faPhone }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Điện thoại  </Text></View>
                            </View>
                            {/* <TextInput type="text" style={[styles.formInput, styles.textRight, styles.borderNone, styles.mlAuto]} value="Nữ" /> */}
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.TTLL_DIENTHOAICANHAN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.TTLL_DIENTHOAICANHAN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.line10, styles.bgF6]}></View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Thông tin bổ sung</Text>
                        <View style={[styles.line1, styles.bgE9]}></View>
        
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMap }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngày vào trường  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGAYVAOTRUONG}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGAYVAOTRUONG}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerAlt }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngày ra trường  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGAYRATRUONG}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGAYRATRUONG}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapPin }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Hệ đào tạo  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.HEDAOTAO}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.HEDAOTAO}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerCheck }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Khóa đào tạo  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.KHOADAOTAO}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.KHOADAOTAO}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerCheck }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Khoa quản lý </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.KHOAQUANLY}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.KHOAQUANLY}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerCheck }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Số tài khoản  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANHANG_SOTAIKHOAN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANHANG_SOTAIKHOAN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerCheck }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngân hàng  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANHANG_THUOCNGANHANG_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANHANG_THUOCNGANHANG_TEN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerCheck }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Chi nhánh  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANHANG_THONGTINCHINHANH}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NGANHANG_THONGTINCHINHANH}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.line10, styles.bgF6]}></View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>Hộ khẩu thường trú</Text>
                        <View style={[styles.line1, styles.bgE9]}></View>
        
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMap }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Tỉnh/Thành phố  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUEQUAN_TINHTHANH_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUEQUAN_TINHTHANH_TEN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerAlt }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Quận/Huyện  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUEQUAN_QUANHUYEN_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUEQUAN_QUANHUYEN_TEN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapPin }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Phường xã  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUEQUAN_XA_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUEQUAN_XA_TEN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerCheck }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Nơi ở hiện nay  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NOIOHIENNAY}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.NOIOHIENNAY}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.line10, styles.bgF6]}></View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <Text style={[styles.px15, styles.py15, styles.fwBold, styles.fs18]}>CMND/CCCD</Text>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faIdCard }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Số CMND/CCCD  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.CMTND_SO}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.CMTND_SO}</Text>
                            </View>
                        </View>
        
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faCalendarAlt }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ngày Cấp  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.CMTND_NGAYCAP}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.CMTND_NGAYCAP}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerAlt }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Nơi cấp  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.CMTND_NOICAP}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.CMTND_NOICAP}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        {/* <View style={[styles.btn, styles.btnDots, styles.bgWhite, styles.colorPrimary, styles.px16, styles.mx15, styles.my15]}>
                            <FontAwesomeIcon icon={ faFileUpload }  size={20}  />
                            <Text>Upload</Text>
                        </View> */}
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.line10, styles.bgF6]}></View>
                        <View style={[styles.line1, styles.bgE9]}></View>
        
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUsersCrown }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Dân tộc  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.DANTOC_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.DANTOC_TEN}</Text>
                            </View>
                        </View>

                        
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUsersCrown }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Tôn giáo  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.TONGIAO_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.TONGIAO_TEN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUsersCrown }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Quốc tịch  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUOCTICH_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.QUOCTICH_TEN}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUsersCrown }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Đối tượng ưu tiên  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.LAHOCVIEN_DOITUONG_TEN}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.LAHOCVIEN_DOITUONG_TEN}</Text>
                            </View>
                        </View>

                        <View style={[styles.line1, styles.bgE9]}></View>
                        
        
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>  
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faMapMarkerCheck }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Khu vực  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO1}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO1}</Text>
                            </View>
                        </View>
        
                        <View style={[styles.line1, styles.bgE9]}></View>
        
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faAddressCard }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Đối tượng dự thi  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO11}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO11}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faSchool }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Ký hiệu trường  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO1}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO1}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <View style={[styles.formControl, styles.flex, styles.alignCenter, styles.py12, styles.flexR, styles.justifyBetween]}>
                            <View style={[styles.flexShrink0, styles.pl15, styles.flexR]}>
                                <View style={[styles.textCenter, {width: 33}]}><FontAwesomeIcon icon={ faUserTag }  size={20} style={[styles.colorPrimary]} /></View> 
                                <View style={[styles.justifyCenter]}><Text style={[styles.color66, styles.fs15]}>Số báo danh tốt nghiệp THPT  </Text></View>
                            </View>
                            {/* <Text style={[styles.mlAuto, styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.MASO1}</Text> */}
                            <View style={[styles.secondView]}>
                                <Text style={[styles.mr15, styles.fs15, styles.color22]}>{Core.oUser.TTLL_EMAILCANHAN1}</Text>
                            </View>
                        </View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                        <TouchableOpacity onPress={() => {navigation.navigate('Home'); Core.logOut(() => navigation.navigate('Login'))}} style={[styles.btn, styles.btnDefault, styles.mx15, styles.mt20, styles.flexR]} href="phenikaa-4-dangkyhoc-dangkyhoc.html">
                            <FontAwesomeIcon icon={ faSignOut }  size={20} />
                            <Text style={[styles.fs18]}> Đăng xuất</Text>
                        </TouchableOpacity>
                        {/* <View style={{height: 150}}></View> */}
        
        
        
                    </View>
                </View>
                </ScrollView>
            </View></ImageBackground>
    )
}


