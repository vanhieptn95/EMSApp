import React from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faCogs } from '@fortawesome/free-brands-svg-icons/faCogs'
import { faAlarmClock } from '@fortawesome/free-solid-svg-icons/faAlarmClock'
import { faFileImport } from '@fortawesome/free-brands-svg-icons/faFileImport'
import { faReceipt } from '@fortawesome/free-brands-svg-icons/faReceipt'
import { faSackDollar } from '@fortawesome/free-brands-svg-icons/faSackDollar'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import { faEdit } from '@fortawesome/free-brands-svg-icons/faEdit'
import { faStar } from '@fortawesome/free-brands-svg-icons/faStar'
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons/faStar'
// import { faStarHalfAlt } from '@fortawesome/free-brands-svg-icons/faStarHalfAlt'
import { faPen } from '@fortawesome/free-brands-svg-icons/faPen'
import { faTrash } from '@fortawesome/free-brands-svg-icons/faTrash'
export default function ChoXacNhan({ navigation }){
    
    return(

    
<View style={[styles.sgWrapper, styles.oneDoor]}>
        <ScrollView>
        <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View style={styles.pageTitle}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.colorPrimary, styles.flexR]}>
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20}  />
                    <Image source={require('../../../assets/images/dashboad-item-82.png')} style={styles.pageTitleImg}></Image>
                    <Text style={[styles.colorRaw, styles.pageTitle]}>Hệ thống 1 cửa sinh viên</Text>
                </TouchableOpacity>
            </View>


        </View>
        <View style={styles.oneDoorContent}>
            <View style={[styles.oneDoorContentHead, styles.mb12, styles.flex, styles.alignCenter, styles.px15, styles.flexR]}>
                <TouchableOpacity onPress={() => navigation.navigate('MotCuaDichVu')} style={[styles.textCenter, styles.block, styles.colorQuinary, styles.px4, styles.w25pt]} href="phenikaa-3-1cua-dichvu.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faCogs }  size={30}  style={[styles.colorPrimary]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5,styles.colorPrimary]}>Dịch vụ</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textCenter, styles.block, styles.colorPrimary, styles.px4]} href="phenikaa-3-1cua-choxacnhan.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faAlarmClock }  size={30} style={[styles.itemActive]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5, styles.itemActive]}>Chờ xác nhận</Text></View>
                    <View style={[styles.oneDoorContentHeadSpan]}><Text style={styles.oneDoorContentHeadSpanText}>3</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textCenter, styles.block, styles.colorPrimary, styles.px4]} href="phenikaa-3-1cua-datiepnhan.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faFileImport }  size={30} style={[styles.colorPrimary]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5, styles.colorPrimary]}>Đã tiếp nhận</Text></View>
                    <View style={[styles.oneDoorContentHeadSpan]}><Text style={styles.oneDoorContentHeadSpanText}>20</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textCenter, styles.block, styles.colorPrimary, styles.px4]} href="phenikaa-3-1cua-dangxuly.html">
                    <View style={[styles.alignCenter, styles.justifyCenter]}><FontAwesomeIcon icon={ faReceipt }  size={30} style={[styles.colorPrimary]} /></View>
                    <View style={[styles.alignCenter,styles.justifyCenter]}><Text style={[styles.fs14, styles.fw500, styles.mt5, styles.colorPrimary]}>Đang xử lý</Text></View>
                </TouchableOpacity>

            </View>
            <View style={styles.oneDoorContentBody}>
            <View style={[styles.waitComfirmList, styles.fs15, styles.px15, styles.py20]}>
                    <View style={[styles.waitComfirmItem, styles.mb20, styles.bgTertiary]}>
                        <Text style={[styles.px15, styles.py15, styles.fs18, styles.fwBold, styles.colorWhite, styles.lineHeight20]}>Đơn vay vốn sinh viên Đơn vay vốn sinh viên</Text>
                        <View style={styles.waitComfirmMeta}>
                            <View style={[styles.color66, styles.px15, styles.pt15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faSackDollar }  size={20}  />
                                <Text style={styles.fs15}>  Số tiền:   </Text>
                                <Text style={[styles.colorQuinary, styles.fwBold, styles.ml10, styles.fs15]}>5,828,400 đ</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faCalendarAlt }  size={20}  />
                                <Text style={styles.fs15}>  Thời gian xin:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>20/01/2022</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR, styles.flexWrap]}>
                                <FontAwesomeIcon icon={ faEdit }  size={20} />
                                <Text style={styles.fs15}>  Mô tả:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>Đơn xin vay vốn sinh viên · Vay vốn tín dụng đào tạo là hình thức cho vay của Ngân hàng chính sách xã hội. </Text>
                            </View>
                            
                            <View style={[styles.line1, styles.bgE9, styles.mt14]}></View>
                            <View style={[styles.flex, styles.alignCenter, styles.px15, styles.pt12, styles.pb14, styles.flexR]}>
                                <View style={[styles.colorQuinary, styles.flex, styles.alignCenter, styles.flexR]}>
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStar }  size={20}  style={styles.colorQuinary} />


                                </View>
                                <Text style={[styles.color66, styles.ml5, styles.mt5, styles.lineHeight16, styles.fs15]}>
                                    4 trên 5
                                </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MotCuaChoXacNhanSua')} style={styles.mlAuto} href="phenikaa-3-1cua-choxacnhan-sua.html"><FontAwesomeIcon icon={ faPen }  size={20}  /></TouchableOpacity>
                                <TouchableOpacity href="phenikaa-3-1cua-choxacnhan-xoa.html" style={styles.ml20}><FontAwesomeIcon icon={ faTrash }  size={20}  /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.waitComfirmItem, styles.mb20, styles.bgSenary]}>
                        <Text style={[styles.px15, styles.py15, styles.fs18, styles.fwBold, styles.colorWhite, styles.lineHeight20]}> Đơn xin thôi học</Text>
                        <View style={styles.waitComfirmMeta}>
                            <View style={[styles.color66, styles.px15, styles.pt15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faSackDollar }  size={20}  />
                                <Text style={styles.fs15}>  Số tiền:   </Text>
                                <Text style={[styles.colorQuinary, styles.fwBold, styles.ml10, styles.fs15]}>5,828,400 đ</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faCalendarAlt }  size={20}  />
                                <Text style={styles.fs15}>  Thời gian xin:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>20/01/2022</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR, styles.flexWrap]}>
                                <FontAwesomeIcon icon={ faEdit }  size={20} />
                                <Text style={styles.fs15}>  Mô tả:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>Đơn xin vay vốn sinh viên · Vay vốn tín dụng đào tạo là hình thức cho vay của Ngân hàng chính sách xã hội. </Text>
                            </View>
                            
                            <View style={[styles.line1, styles.bgE9, styles.mt14]}></View>
                            <View style={[styles.flex, styles.alignCenter, styles.px15, styles.pt12, styles.pb14, styles.flexR]}>
                                <View style={[styles.colorQuinary, styles.flex, styles.alignCenter, styles.flexR]}>
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStar }  size={20}  style={styles.colorQuinary} />


                                </View>
                                <Text style={[styles.color66, styles.ml5, styles.mt5, styles.lineHeight16, styles.fs15]}>
                                    4 trên 5
                                </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MotCuaChoXacNhanSua')} style={styles.mlAuto} href="phenikaa-3-1cua-choxacnhan-sua.html"><FontAwesomeIcon icon={ faPen }  size={20}  /></TouchableOpacity>
                                <TouchableOpacity href="phenikaa-3-1cua-choxacnhan-xoa.html" style={styles.ml20}><FontAwesomeIcon icon={ faTrash }  size={20}  /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.waitComfirmItem, styles.mb20, styles.bgOctonary]}>
                        <Text style={[styles.px15, styles.py15, styles.fs18, styles.fwBold, styles.colorWhite, styles.lineHeight20]}>phiếu thanh toán ra trường</Text>
                        <View style={styles.waitComfirmMeta}>
                            <View style={[styles.color66, styles.px15, styles.pt15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faSackDollar }  size={20}  />
                                <Text style={styles.fs15}>  Số tiền:   </Text>
                                <Text style={[styles.colorQuinary, styles.fwBold, styles.ml10, styles.fs15]}>5,828,400 đ</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faCalendarAlt }  size={20}  />
                                <Text style={styles.fs15}>  Thời gian xin:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>20/01/2022</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR, styles.flexWrap]}>
                                <FontAwesomeIcon icon={ faEdit }  size={20} />
                                <Text style={styles.fs15}>  Mô tả:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>Đơn xin vay vốn sinh viên · Vay vốn tín dụng đào tạo là hình thức cho vay của Ngân hàng chính sách xã hội. </Text>
                            </View>
                            
                            <View style={[styles.line1, styles.bgE9, styles.mt14]}></View>
                            <View style={[styles.flex, styles.alignCenter, styles.px15, styles.pt12, styles.pb14, styles.flexR]}>
                                <View style={[styles.colorQuinary, styles.flex, styles.alignCenter, styles.flexR]}>
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStar }  size={20}  style={styles.colorQuinary} />


                                </View>
                                <Text style={[styles.color66, styles.ml5, styles.mt5, styles.lineHeight16, styles.fs15]}>
                                    4 trên 5
                                </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MotCuaChoXacNhanSua')} style={styles.mlAuto} href="phenikaa-3-1cua-choxacnhan-sua.html"><FontAwesomeIcon icon={ faPen }  size={20}  /></TouchableOpacity>
                                <TouchableOpacity href="phenikaa-3-1cua-choxacnhan-xoa.html" style={styles.ml20}><FontAwesomeIcon icon={ faTrash }  size={20}  /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.waitComfirmItem, styles.mb20, styles.bgTertiary]}>
                        <Text style={[styles.px15, styles.py15, styles.fs18, styles.fwBold, styles.colorWhite, styles.lineHeight20]}>Đơn vay vốn sinh viên Đơn vay vốn sinh viên</Text>
                        <View style={styles.waitComfirmMeta}>
                            <View style={[styles.color66, styles.px15, styles.pt15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faSackDollar }  size={20}  />
                                <Text style={styles.fs15}>  Số tiền:   </Text>
                                <Text style={[styles.colorQuinary, styles.fwBold, styles.ml10, styles.fs15]}>5,828,400 đ</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faCalendarAlt }  size={20}  />
                                <Text style={styles.fs15}>  Thời gian xin:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>20/01/2022</Text>
                            </View>
                            <View style={[styles.color66, styles.mt10, styles.px15, styles.flexR, styles.flexWrap]}>
                                <FontAwesomeIcon icon={ faEdit }  size={20} />
                                <Text style={styles.fs15}>  Mô tả:   </Text>
                                <Text style={[styles.colorRaw, styles.ml10, styles.fs15]}>Đơn xin vay vốn sinh viên · Vay vốn tín dụng đào tạo là hình thức cho vay của Ngân hàng chính sách xã hội. </Text>
                            </View>
                            
                            <View style={[styles.line1, styles.bgE9, styles.mt14]}></View>
                            <View style={[styles.flex, styles.alignCenter, styles.px15, styles.pt12, styles.pb14, styles.flexR]}>
                                <View style={[styles.colorQuinary, styles.flex, styles.alignCenter, styles.flexR]}>
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStarFull }  size={20}  style={styles.colorQuinary} />
                                    <FontAwesomeIcon icon={ faStar }  size={20}  style={styles.colorQuinary} />


                                </View>
                                <Text style={[styles.color66, styles.ml5, styles.mt5, styles.lineHeight16, styles.fs15]}>
                                    4 trên 5
                                </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MotCuaChoXacNhanSua')} style={styles.mlAuto} href="phenikaa-3-1cua-choxacnhan-sua.html"><FontAwesomeIcon icon={ faPen }  size={20}  /></TouchableOpacity>
                                <TouchableOpacity href="phenikaa-3-1cua-choxacnhan-xoa.html" style={styles.ml20}><FontAwesomeIcon icon={ faTrash }  size={20}  /></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
        </ScrollView>
    </View>
    )
}
