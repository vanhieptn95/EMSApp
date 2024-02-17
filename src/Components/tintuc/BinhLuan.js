import React from 'react'
import {View, TextInput, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import { faShare } from '@fortawesome/free-brands-svg-icons/faShare'
export default function BinhLuan({ navigation }){
    
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
           
                
            <View  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
                <View  style={styles.pageHeader}>
                    <Text style={styles.topOfMobi}> </Text>
                    <View style={[styles.pageTitle, styles.hasButton, styles.flexR]}>
                        <View  style={styles.flexR}  href="phenikaa-3-1cua-choxacnhan.html"><FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   /></View>

                        <Text style={styles.textTitle}>Danh sách bình luận tin</Text>
                        <TouchableOpacity style={[styles.mlAuto, styles.pageTitleSpan,styles.spanReverse]}><Text style={[styles.colorWhite, styles.fs18]}>5</Text></TouchableOpacity>
                    </View>

                </View>
                <ScrollView>
                <View  style={[styles.radiusTop20, styles.bgWhite, styles.pt10, styles.mb50]}>
                    <View  style={[styles.flex, styles.pl15, styles.py15, styles.flexR]}>
                        <Image style={[styles.w48, styles.height48, styles.radiusFull, styles.flexShrink0]} source={require('../../../assets/images-demo/user-avata.jpg')} alt=""></Image>
                        <View  style={[styles.ml12, styles.lineHeight24, styles.mr50]}>
                            <Text style={[styles.fw500, styles.pr15, styles.fs16]}>Nguyễn Thị Bích</Text>
                            <Text style={[styles.mr15, styles.fs14]}>
                                Nguyễn Thị Bích Trường Đại học Phenikaa đã tổ chức lễ tuyên dương sinh viên có thành tích xuất sắc trong các cuộc thi olympic, công nghệ, thể thao
                            </Text>
                            <View style={[styles.color66, styles.fs14, styles.mt5, styles.alignCenter, styles.pr15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faCalendarAlt }  size={14}  />
                                <Text style={[styles.fs14]}>23 tháng 6 2022</Text>
                                
                                
                                <View  style={[styles.flex, styles.mlAuto, styles.alignCenter, styles.colorPrimary, styles.flexR]} >
                                    <FontAwesomeIcon icon={ faShare }  size={16}  />
                                    <Text>Trả lời</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.pl15, styles.py15, styles.flexR]}>
                        <Image style={[styles.w48, styles.height48, styles.radiusFull, styles.flexShrink0]} source={require('../../../assets/images/no-avata.png')} alt=""></Image>
                        <View  style={[styles.ml12, styles.lineHeight24, styles.mr50]}>
                            <Text style={[styles.fw500, styles.pr15, styles.fs16]}>Nguyễn Thị Bích</Text>
                            <Text style={[styles.mr15, styles.fs14]}>
                                Nguyễn Thị Bích Trường Đại học Phenikaa đã tổ chức lễ tuyên dương sinh viên có thành tích xuất sắc trong các cuộc thi olympic, công nghệ, thể thao
                            </Text>
                            <View style={[styles.color66, styles.fs14, styles.mt5, styles.alignCenter, styles.pr15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faCalendarAlt }  size={14}  />
                                <Text style={[styles.fs14]}>23 tháng 6 2022</Text>
                                
                                
                                <View  style={[styles.flex, styles.mlAuto, styles.alignCenter, styles.colorPrimary, styles.flexR]} >
                                    <FontAwesomeIcon icon={ faShare }  size={16}  />
                                    <Text>Trả lời</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                    <View  style={[styles.flex, styles.pl15, styles.py15, styles.flexR]}>
                        <Image style={[styles.w48, styles.height48, styles.radiusFull, styles.flexShrink0]} source={require('../../../assets/images-demo/user-avata.jpg')} alt=""></Image>
                        <View  style={[styles.ml12, styles.lineHeight24, styles.mr50]}>
                            <Text style={[styles.fw500, styles.pr15, styles.fs16]}>Nguyễn Thị Bích</Text>
                            <Text style={[styles.mr15, styles.fs14]}>
                                Nguyễn Thị Bích Trường Đại học Phenikaa đã tổ chức lễ tuyên dương sinh viên có thành tích xuất sắc trong các cuộc thi olympic, công nghệ, thể thao
                            </Text>
                            <View style={[styles.color66, styles.fs14, styles.mt5, styles.alignCenter, styles.pr15, styles.flexR]}>
                                <FontAwesomeIcon icon={ faCalendarAlt }  size={14}  />
                                <Text style={[styles.fs14]}>23 tháng 6 2022</Text>
                                
                                
                                <View  style={[styles.flex, styles.mlAuto, styles.alignCenter, styles.colorPrimary, styles.flexR]} >
                                    <FontAwesomeIcon icon={ faShare }  size={16}  />
                                    <Text>Trả lời</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
                <View  style={[styles.fixedBottom, styles.shadowTop, styles.bgWhite]}>
                    <View  style={[styles.flex, styles.itemCenter, styles.py11, styles.px15, styles.fs16, styles.flexR]}>
                        <TextInput style={[styles.color88, styles.fs16]}>Bình luận của bạn</TextInput>
                        <TouchableOpacity style={[styles.colorPrimary, styles.btn, styles.height28, styles.px10, styles.mlAuto]}>
                        <Text style={[styles.fw600, styles.fs18]}>Gửi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </ImageBackground>
    )
}
