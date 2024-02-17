import React, {useEffect, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../../../assets/css/all'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons/faChevronLeft'
import { faCalendarAlt } from '@fortawesome/free-brands-svg-icons/faCalendarAlt'
import { faChevronRight } from '@fortawesome/free-brands-svg-icons/faChevronRight'
import Core from '../../Core'
// import ModalLoading from '../ModalLoading'
let nMonth = 0;
let nYear = 0;
let iDay = 0;
let dtPreMonth = [];
let dtMonth = [];
let dtAfMonth = [];
let strNgay = "";
let strNgayHienTai = "";
let dtGio= [];
let dtLichCaNhan = [];

let genHtml_Month = (cal) => {
    nMonth += cal;
    if (nMonth == 0) {
        nMonth = 12;
        nYear--;
    }
    if (nMonth == 13) {
        nMonth = 1;
        nYear++;
    }
    dtPreMonth = [];
    dtMonth = [];
    dtAfMonth = [];
    let iDayOfMonth = getDay(nMonth);
    let iNgayDauThang = new Date(nYear, nMonth - 1, 1, 0, 0, 0, 0);
    let iThu = iNgayDauThang.getDay();
    if (iThu == 0) iThu = 7;
    let iDayOfPreMonth = getDay(nMonth - 1);
    for (var i = iThu - 2; i >= 0; i--) {
        dtPreMonth.push((iDayOfPreMonth - i))
    }
    let date = new Date();
    iDay = date.getDate();
    if (date.getMonth() + 1 != nMonth || date.getFullYear() != nYear) iDay = 1;
    for (var i = 1; i <= iDayOfMonth; i++) {
        dtMonth.push(i)
    }
    let iMax = 35 - iDayOfMonth - iThu;
    if (iMax < 0) iMax += 7;
    for (var i = 1; i < iMax + 2; i++) {
        dtAfMonth.push(i);
    }
    

    iThu = date.getDay();
    strNgay = iThu ?"Thứ " + (iThu+ 1): "Chủ nhật"
    strNgayHienTai = getSMonth(iDay, nMonth, nYear)
    strNgay += ", " + strNgayHienTai;
    Core.state(++Core.countState)
    // activeDay(iDay)
}

let activeDay = (day) => {
    iDay = day;
    let date = new Date(nYear, nMonth -1, day, 0, 0, 0, 0);
    let iThu = date.getDay();
    
    strNgay = iThu ? "Thứ " + (iThu+ 1): "Chủ nhật"
    strNgayHienTai = getSMonth(iDay, nMonth, nYear)
    strNgay += ", " + strNgayHienTai;
    Core.state(++Core.countState)
    getList_LichCaNhan()
}

function getDay(nMonth, nYear) {
    var iDayOfMonth = 31;
    switch (nMonth) {
        case 2: iDayOfMonth = 28; break;
        case 4:
        case 6:
        case 9:
        case 11: iDayOfMonth = 30; break;
    }
    return iDayOfMonth;
}

function getSMonth(iDay, nMonth, Year) {
    if (nMonth == 0) {
        nMonth = 12;
        Year--;
    }
    if (nMonth == 13) {
        nMonth = 1;
        Year++;
    }
    return returnTwo(iDay) + '/' + returnTwo(nMonth) + '/' + Year;
}

function returnTwo(iDay) {
    iDay = "" + iDay;
    if (iDay.length == 1) return "0" + iDay;
    else return iDay;
}

let getList_LichCaNhan = () => {
    Core.makeRequest({
        action: 'SV_ThongTin/LayDSLichCaNhan',
        type: 'GET',
        data: {
            strQLSV_NguoiHoc_Id: Core.userId,
            strNgayBatDau: strNgayHienTai,
            strNgayKetThuc: strNgayHienTai,
            strNguoiThucHien_Id: Core.userId
        },
        success: function(data){
            if(data.Success){
                // dtKhoan = data.Data;
                genList_LichCaNhan(data.Data)
                // setCount(++count)
            }else{
                Core.alert(data.Message)
            }
        },
        error: function(err){
            console.log(err)

        }
    })
} 

let genList_LichCaNhan = (data) => {
    let iGioMin = 24;
    let iGioMax = 0;
    dtGio = [];
    data= data.filter(e => e.NGAYHOC == strNgayHienTai)
    dtLichCaNhan = data;
    data.forEach(e => {
        if (e.GIOBATDAU < iGioMin) iGioMin = e.GIOBATDAU;
        if (e.GIOKETTHUC > iGioMax) iGioMax = e.GIOKETTHUC;
    });
    for(let i = iGioMin ; i< iGioMax + 2; i++){
        dtGio.push(i)
    }
    // console.log(dtGio)
    Core.state(++Core.countState)
} 

export default function LichBieuCaNhan({ navigation }){
    let [count, setCount] = useState(0);
    useEffect(()=>{
        Core.state = setCount;
        navigation.addListener('focus', () => {
            Core.state= setCount;
        });
        let date = new Date();
        nMonth = date.getMonth() + 1;
        nYear = date.getFullYear();
        iDay = date.getDate();
        genHtml_Month(0)
        getList_LichCaNhan();
    }, [])
    return(
        <ImageBackground source={require('../../../assets/images/Banner-dangky-hoc-2.png')}  style={[styles.sgWrapper, styles.mainSwapper, {flex: 1, height: 125}]}>
<View  style={[styles.sgWrapper, styles.mainSwapper]}>
    
<ScrollView>
        <View  style={styles.pageHeader}>
            <Text style={styles.topOfMobi}> </Text>
            <View  style={[styles.pageTitle, styles.hasButton]}>
            <TouchableOpacity style={styles.flexR} href="phenikaa-3-1cua-choxacnhan.html" onPress={() => navigation.goBack()} >
                <FontAwesomeIcon icon={ faChevronLeft }  size={20} style={{color: 'white'}}   />
                <Text style={styles.textTitle}>Lịch tháng</Text>
            </TouchableOpacity>

                <Text style={[styles.mlAuto, styles.fwBold, styles.fs18, styles.colorWhite]}>{strNgay}</Text>
                <View  href="lichbieucanhan-01-chonthang.html" style={[{marginRight: -35}, styles.ml14]}>
                    <FontAwesomeIcon icon={ faCalendarAlt }  size={24} style={[styles.colorWhite]} />
                </View>

            </View>

        </View>
        <View  style={[styles.radiusTop20, styles.bgWhite, styles.mb20]}>
            <View  style={[styles.radiusTop20, styles.bgF4, styles.flex, styles.alignCenter, styles.px15, styles.pt14, styles.pb10, styles.flexR]}>
                <Text style={[styles.fs18, styles.fw600]}>Tháng {nMonth} - {nYear}</Text>
                <TouchableOpacity onPress={() => {genHtml_Month(-1)}} style={[styles.mlAuto, styles.fs12, styles.colorSeptenary, styles.border1, styles.borderE1, styles.py12, styles.px15, styles.radius6, styles.mr8]}><FontAwesomeIcon icon={ faChevronLeft }  size={12}  /></TouchableOpacity>
                <TouchableOpacity onPress={() => {genHtml_Month(+1)}} style={[styles.fs12, styles.colorSeptenary, styles.border1, styles.borderE1, styles.py12, styles.px15, styles.radius6]}><FontAwesomeIcon icon={ faChevronRight }  size={12}  /></TouchableOpacity>

            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View  style={[styles.blockCalendar, styles.px15]}>

                <View  style={styles.calendarBlockCover}>
                    <View  style={[styles.weekdays, styles.flexR]}>
                        <View style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>T2</Text></View>
                        <View style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>T3</Text></View>
                        <View style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>T4</Text></View>
                        <View style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>T5</Text></View>
                        <View style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>T6</Text></View>
                        <View style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>T7</Text></View>
                        <View style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>Cn</Text></View>
                    </View>

                    <View  style={[styles.days, styles.flexR]}>
                    {dtPreMonth.map((item, index) =>  (
                        <TouchableOpacity key={index} style={[styles.blockCalendarUlLi, styles.dayOfOtherMonth]}><Text style={[styles.fs18]}>{item}</Text></TouchableOpacity>
                    ))}
                    {dtMonth.map((item, index) => {
                        if (iDay === item) return (<TouchableOpacity key={index} style={[styles.blockCalendarUlLi, styles.blockCalendarActive]}><Text style={[styles.fs18, styles.colorWhite]}>{item}</Text></TouchableOpacity>)
                       return (<TouchableOpacity onPress={() => activeDay(item)} key={index} style={[styles.blockCalendarUlLi]}><Text style={[styles.fs18]}>{item}</Text></TouchableOpacity>) 
                    })}
                    {dtAfMonth.map((item, index) =>  (
                        <TouchableOpacity key={index} style={[styles.blockCalendarUlLi, styles.dayOfOtherMonth]}><Text style={[styles.fs18]}>{item}</Text></TouchableOpacity>
                    ))}
                    </View>
                </View>
            </View>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <Text style={[styles.fs18, styles.fwBold, styles.colorPrimary, styles.px15, styles.py17]}>{strNgay}</Text>
            <Text style={[styles.line1, styles.bgE9]}></Text>
            <View  style={styles.calendarWeekTable}>

                <View  style={[styles.dateBody, styles.flexR]}>
                    <View  style={styles.calendarWeekTableDate}>
                        {
                            dtGio.map((item, index) => (
                                <View  key={index} style={styles.hourRow}>
                                    <Text>{returnTwo(item)}:00</Text>
                                </View>
                            ))
                        }
                        
                    </View>
                    
                    
                    <View  style={[styles.dayOfWeek, styles.calendarDay]}>
                    {
                        dtGio.map((item, index) => {
                            let check = dtLichCaNhan.find(e => e.GIOBATDAU === item);
                            if (check){
                            var iTop = check.GIOKETTHUC * 60 + check.PHUTKETTHUC - check.GIOBATDAU*60 - check.PHUTBATDAU;
                            return (
                                <View  key={index} style={[styles.hourRow]}>
                                    <TouchableOpacity  style={[styles.task, styles.task1, styles.flex, styles.justifyCenter, { top: (30 + check.PHUTBATDAU), height: iTop, borderColor: '#5BEEDC', backgroundColor: '#E8FFFD'}]}>
                                        <View  style={[styles.taskHeader, styles.flexR]}>
                                            <Text style={[styles.taskHeaderTitle]}>{check.PHANLOAI == "LICHTHI" ? "Lịch thi: "+ check.TENHOCPHAN : check.TENHOCPHAN} ({check.PHANLOAI == "LICHTHI" ? check.CATHI : 'Tiết ' + check.TIETBATDAU + '-' + check.TIETKETTHUC + ' ' + returnTwo(check.GIOBATDAU) + ':' + returnTwo(check.PHUTBATDAU) + ' - ' + returnTwo(check.GIOKETTHUC) + ':' + returnTwo(check.PHUTKETTHUC)})</Text>
                                            
                                        </View>
                                        <Text style={[styles.taskDescription]}>
                                            {check.TENLOPHOCPHAN ? check.TENLOPHOCPHAN + " - " : ""}
                                            {check.TENPHONGHOC ? check.TENPHONGHOC + " - " : ""}
                                            {check.GIANGVIEN}
                                        </Text>
        
                                    </TouchableOpacity>
                                </View>
                            )
                            } 
                            return (<Text  key={index} style={styles.hourRow}></Text>) 
                        })
                    }
                        
                    </View>


                </View>

            </View>
        </View>
        </ScrollView>
    </View>
    {/* <ModalLoading modalVisible={Core.modalVisible}></ModalLoading> */}
    </ImageBackground>
    )
}
