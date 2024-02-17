import React, {useEffect} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faCheck } from '@fortawesome/free-brands-svg-icons/faCheck'
//import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
export default function Loc({ navigation }){
    
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')} style={{flex: 1, height: 125}}>
<View style={[styles.sgWrapper, styles.mainSwapper]}>
        <ScrollView>
        <View style={styles.pageHeader}>
        <Text style={styles.topOfMobi}> </Text>
            <View style={[styles.pageTitle]}>
                <TouchableOpacity  style={styles.flexR}  onPress={() => navigation.goBack()} href="../home.html">
                    <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}  />
                    <Text style={styles.textTitle}> Bộ lọc tìm kiếm</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View style={[styles.bgWhite, styles.radiusTop20]}>
            <Text style={[styles.fs18, styles.fwBold, styles.px15, styles.py18]}>Giảng viên</Text>
            <Text style={[styles.line1, styles.bgD1]}></Text>
            <View style={[styles.teachList]}>
                <View style={[styles.ml15]}>
                    <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.pr15, styles.flexR]}>
                        <Text style={[styles.fs15, styles.py15]}>Nguyễn Thị Thúy - PU12345</Text>
                        <FontAwesomeIcon icon={ faCheck }  size={18}  style={[styles.mlAuto, styles.colorSenary]}  />
                    </TouchableOpacity>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                </View>
                <View style={[styles.ml15]}>
                    <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.pr15, styles.flexR]}>
                        <Text style={[styles.fs15, styles.py15]}>Đồng Xuân Đảm - PU0310</Text>
                        <FontAwesomeIcon icon={ faCheck }  size={18}  style={[styles.mlAuto, styles.colorSenary]}  />
                    </TouchableOpacity>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                </View>
                <View style={[styles.ml15]}>
                    <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.pr15, styles.flexR]}>
                        <Text style={[styles.fs15, styles.py15]}>Nguyễn Ngọc Hà - PU00351</Text>
                        <FontAwesomeIcon icon={ faCheck }  size={18}  style={[styles.mlAuto, styles.colorSenary]}  />
                    </TouchableOpacity>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                </View>
                <View style={[styles.ml15]}>
                    <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.pr15, styles.flexR]}>
                        <Text style={[styles.fs15, styles.py15]}>Nguyễn Thị Thục Hiền - PU00121</Text>
                        <FontAwesomeIcon icon={ faCheck }  size={18}  style={[styles.mlAuto, styles.colorSenary]}  />
                    </TouchableOpacity>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                </View>
                <View style={[styles.ml15]}>
                    <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.pr15, styles.flexR]}>
                        <Text style={[styles.fs15, styles.py15]}>Phan Diễm Hằng Nga - PU00031</Text>
                        <FontAwesomeIcon icon={ faCheck }  size={18}  style={[styles.mlAuto, styles.colorSenary]}  />
                    </TouchableOpacity>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                </View>
                <View style={[styles.ml15]}>
                    <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.pr15, styles.flexR]}>
                        <Text style={[styles.fs15, styles.py15]}>Khúc Văn Quý - PU02111</Text>
                        <FontAwesomeIcon icon={ faCheck }  size={18}  style={[styles.mlAuto, styles.colorSenary]}  />
                    </TouchableOpacity>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                </View>
                <View style={[styles.ml15]}>
                    <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.pr15, styles.flexR]}>
                        <Text style={[styles.fs15, styles.py15]}>Lương Văn Thiện - PU0987</Text>
                        <FontAwesomeIcon icon={ faCheck }  size={18}  style={[styles.mlAuto, styles.colorSenary]}  />
                    </TouchableOpacity>
                    <Text style={[styles.line1, styles.bgE9]}></Text>
                </View>
                <Text style={[styles.line1, styles.bgE9]}></Text>
                <Text style={[styles.line10, styles.bgF6]}></Text>
                <Text style={[styles.line1, styles.bgE9]}></Text>
            </View>
            
            <Text style={[styles.px15, styles.pt10, styles.pb5, styles.fwBold, styles.fs18]}>Thứ học</Text>
            <View style={[styles.grid, styles.grid3, styles.gap12, styles.px15, styles.mb12, styles.flexR, styles.flexWrap]}>
                <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.py7, styles.border1, styles.colorPrimary, styles.with33, styles.flexR, styles.borderNone]}>
                    <FontAwesomeIcon icon={ faCheck }  size={14}  /><Text > Thứ 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.py7, styles.border1, styles.colorPrimary, styles.with33, styles.flexR, styles.borderNone]}>
                <FontAwesomeIcon icon={ faCheck }  size={14}  /><Text >  Thứ 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.py7, styles.border1, styles.colorPrimary, styles.with33, styles.flexR, styles.borderNone]}>
                <FontAwesomeIcon icon={ faCheck }  size={14}  /><Text >  Thứ 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.py7, styles.border1, styles.colorPrimary, styles.with33, styles.flexR, styles.borderNone]}>
                <FontAwesomeIcon icon={ faCheck }  size={14}  /><Text >  Thứ 5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.py7, styles.border1, styles.colorPrimary, styles.with33, styles.flexR, styles.borderNone]}>
                <FontAwesomeIcon icon={ faCheck }  size={14}  /><Text >  Thứ 6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.py7, styles.border1, styles.colorPrimary, styles.with33, styles.flexR, styles.borderNone]}>
                <FontAwesomeIcon icon={ faCheck }  size={14}  /><Text >  Thứ 7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.py7, styles.border1, styles.colorPrimary, styles.with33, styles.flexR, styles.borderNone]}>
                <Text >  Chủ nhật</Text>
                </TouchableOpacity>


            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.line10, styles.bgF6]}></Text>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            
            <TouchableOpacity style={[styles.fs18, styles.fwBold, styles.px15, styles.py18, styles.flex, styles.alignCenter, styles.flexR]}>
                <Text style={[styles.fs18, styles.fwBold, styles.flex, styles.alignCenter]}>Lọc trùng</Text>
                <FontAwesomeIcon icon={ faCheck }  size={20}  style={styles.mlAuto} />
            </TouchableOpacity>
            <Text style={[styles.line1, styles.bgE9]}></Text>

        </View>
        </ScrollView>
    </View>
    </ImageBackground>
    )
}
