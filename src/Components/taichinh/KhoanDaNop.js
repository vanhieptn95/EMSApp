import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
export default function KhoanDaNop({ navigation }){
    
    return(
    <ImageBackground source={require('../../../assets/images/finance-background.png')} style={{flex: 1, height: 125}}>
        <View style={[styles.sgWrapper, styles.mainSwapper, {flex: 1}]}>
            <View style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
                <View style={[styles.pageTitle]}>
                    <TouchableOpacity style={styles.flexR}  onPress={() => navigation.goBack()} href="../home.html">
                        <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                        <Text style={styles.textTitle}> Danh sách khoản đã nộp</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView>
            <View style={styles.contentRTop}>
                <View style={[styles.radiusTop20, styles.bgWhite, styles.fs15, styles.pt20, styles.mb50]}>
                    <View >
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.itemCenter, styles.flexR]}>
                            <Text style={[styles.numberLabelL, styles.numberLabel12]}>01</Text>
                            <Text style={[styles.color66, styles.flexShrink0, styles.w1/4, styles.mr20, styles.block, styles.lineHeight20, styles.fs15, styles.fwBold]}> Học kỳ</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fwBold, styles.fs15]}>2020_2021_1</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Đợt</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>1</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Loại khoản</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>Lệ phí tuyển sinh, hồ sơ</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Nội dung</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>Lệ phí tuyển sinh, hồ sơ</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số tiền </Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>647,600 đ</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Ngày tạo </Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>10/06/2022</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Người tạo</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>Nguyễn Thị Bích</Text>
                        </View>
                        

                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.line10, styles.bgF6]}></View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                    </View>
                    <View >
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.itemCenter, styles.flexR]}>
                            <Text style={[styles.numberLabelL, styles.numberLabel12]}>02</Text>
                            <Text style={[styles.color66, styles.flexShrink0, styles.w1/4, styles.mr20, styles.block, styles.lineHeight20, styles.fs15, styles.fwBold]}> Học kỳ</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fwBold, styles.fs15]}>2020_2021_1</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Đợt</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>1</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Loại khoản</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>Lệ phí tuyển sinh, hồ sơ</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Nội dung</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>Lệ phí tuyển sinh, hồ sơ</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Số tiền </Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>647,600 đ</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Ngày tạo </Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>10/06/2022</Text>
                        </View>
                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.flex, styles.fs15, styles.px15, styles.py7, styles.mt7, styles.flexR]}>
                            <Text style={[styles.color66, styles.mr20, styles.block, styles.lineHeight20, styles.fs15]}>Người tạo</Text>
                            <Text style={[styles.colorRaw, styles.mlAuto, styles.textRight, styles.lineHeight20, styles.fs15]}>Nguyễn Thị Bích</Text>
                        </View>
                        

                        <View style={[styles.line1, styles.bgE9, styles.mt7]}></View>
                        <View style={[styles.line10, styles.bgF6]}></View>
                        <View style={[styles.line1, styles.bgE9]}></View>
                    </View>
                </View>



            </View>
            </ScrollView>
            <View style={[styles.fixedBottom, styles.shadowTop, styles.bgWhite]}>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <View style={[styles.flex, styles.itemCenter, styles.py17, styles.px15, styles.flexR]}>
                    <Text style={[styles.fs16]}>Tổng:</Text>
                    <Text style={[styles.fwBold, styles.colorQuinary, styles.mlAuto, styles.fs16]}>1.568.000 đ</Text>
                </View>
            </View>
        </View>
    </ImageBackground>
    )
}
