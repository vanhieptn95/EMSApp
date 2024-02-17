
import {StyleSheet} from 'react-native'

import objMau from './config'

const styles = StyleSheet.create({
    text:{
        fontSize: 16
    },
    textTitle: {
        color: 'white', fontSize: 18, paddingLeft: 10, marginTop: -2
    },
    sgWrapper: {
        // backgroundColor: '#f5f5f5',
    },
    bgBox: {
        backgroundColor: '#f5f5f5'
    },
    bg15: {
        backgroundColor: objMau.color15
    },
    flex1: {
        flex: 1
    },
    flexShrink0:{
        flexShrink: 0
    },
    mw100: {
        maxWidth: '100%'
    },
    w100:{
        width: '100%'
    },
    w15:{
        width: 15
    },
    w20:{
        width: 20
    },
    w25:{
        width: 25
    },
    w40:{
        width: 40
    },
    w48:{
        width: 48
    },
    
    w50:{
        width: 50
    },
    flex: {
        display: 'flex'
    },
    flexWrap:{
        flexWrap: 'wrap'
    },
    flexShrink: {
        flexShrink: 0
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyBetween:{
        justifyContent: 'space-between'
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    lowercase: {
        textTransform: 'lowercase'
    },
    fw300: {
        fontWeight: '300'
    },
    fw400: {
        fontWeight: '400'
    },
    fw500: {
        fontWeight: '500'
    },
    fw600: {
        fontWeight: '600'
    },
    fw800: {
        fontWeight: '800'
    },
    fw900: {
        fontWeight: '900'
    },
    w40p: {
        width: '40%'
    },
    // textInHerit: {
    //     textTransform: ''
    // }
    fwBold: {
        fontWeight: 'bold'
    },
    fwNormal: {
        fontWeight: 'normal'
    },
    italic: {
        fontStyle: 'italic'
    },
    fs10: {
        fontSize: 10
    },
    fs11: {
        fontSize: 10
    },
    fs12: {
        fontSize: 12
    },
    fs13: {
        fontSize: 13
    },
    fs14: {
        fontSize: 14
    },
    fs15: {
        fontSize: 15
    },
    fs16: {
        fontSize: 16
    },
    fs18: {
        fontSize: 18
    },
    fs20: {
        fontSize: 20
    },
    fs22: {
        fontSize: 22
    },
    fs24: {
        fontSize: 26
    },
    fs26: {
        fontSize: 26
    },
    fs28: {
        fontSize: 28
    },
    fs30: {
        fontSize: 30
    },
    fs32:{
        fontSize: 32
    },
    fs34: {
        fontSize: 34
    },
    fs44: {
        fontSize: 44
    },
    fs50: {
        fontSize: 50
    },
    lineThrough: {
        textDecorationLine: 'underline'
    },
    textCenter: {
        textAlign: 'center'
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    fineHeight16: {
        lineHeight: 16
    },
    fineHeight19: {
        lineHeight: 19
    },
    fineHeight20: {
        lineHeight: 20
    },
    fineHeight22: {
        lineHeight: 22
    },
    fineHeight24: {
        lineHeight: 24
    },
    fineHeight28: {
        lineHeight: 28
    },
    fineHeight40: {
        lineHeight: 40
    },
    colorWhite: {
        color: 'white'
    },
    colorRaw: {
        color: '#222222'
    },
    color66: {
        color: '#666666'
    },
    color88: {
        color: '#888888'
    },
    colorRed: {
        color: objMau.colorRed
    },
    colorPrimary: {
        color: objMau.colorPrimary
    },
    colorSecondary: {
        color: objMau.colorSecondary
    },
    colorTertiary: {
        color: objMau.colorTertiary
    },
    colorSenary: {
        color: objMau.colorSenary
    },
    colorSeptenary: {
        color: objMau.colorSeptenary
    },
    colorQuinary: {
        color: objMau.colorQuinary
    },
    color11: {
        color: objMau.color11
    },
    color12: {
        color: objMau.color12
    },
    color13: {
        color: objMau.color13
    },
    color14: {
        color: objMau.color14
    },
    color15: {
        color: objMau.color15
    },
    dashboadList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        lineHeight: 20,
        textAlign: 'center'
    },
    boxShadow: {
        backgroundColor: '#fafafa',
        borderRadius: 15,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        overflow: "hidden",
        shadowOpacity: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
        elevation: 0
        // Component in react
    },
    btn: {
        display: 'flex',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 16,
        borderStyle: 'solid'
    },
    navScollXItem: {
        marginRight: 30,
        paddingBottom: 13,
        position: 'relative',
        zIndex: 1,
        color: objMau.colorPrimary,
        fontSize: 15,
        fontWeight: '500'
    },
    navScollX: {
        display: 'flex',
        paddingLeft: 15,
        paddingRight: 15
    },
    btnI: {
        fontSize: 24,
        marginRight: 15
    },
    btnDefault: {
        backgroundColor: "#e5e5e5",
        color: 'black'
    },
    btnPrimary: {
        backgroundColor: objMau.colorPrimary,
        color: 'white'
    },
    btnSecondary: {
        backgroundColor: objMau.colorSecondary,
        color: 'white'
    },
    btnTertiary: {
        backgroundColor: objMau.colorTertiary,
        color: 'white'
    },
    btnQuaternary: {
        backgroundColor: objMau.colorQuaternary,
        color: 'white'
    },
    btnQuinary: {
        backgroundColor: objMau.colorQuinary,
        color: 'white'
    },
    btnSenary: {
        backgroundColor: objMau.btnSenary,
        color: 'white'
    },
    btnRed: {
        backgroundColor: 'red',
        color: 'white'
    },
    btnWhite: {
        backgroundColor: 'white'
    },
    borderNone: {
        borderWidth: 0
    },
    radiusTop20: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    radius4: {
        borderRadius: 4
    },
    radius10: {
        borderRadius: 10
    },
    financeContent: {
        backgroundColor: '#eef3ff'
    },
    bgWhite: {
        backgroundColor: 'white'
    },
    bgRed: {
        backgroundColor: objMau.colorRed
    },
    bgPrimary: {
        backgroundColor: objMau.colorPrimary
    },
    bgSecondary: {
        backgroundColor: objMau.colorSecondary
    },
    bgTertiary:{
        backgroundColor: objMau.colorTertiary
    },
    bgQuaternary: {
        backgroundColor: objMau.colorQuaternary
    },
    bgQuinary: {
        backgroundColor: objMau.colorQuinary
    },
    bgSenary: {
        backgroundColor: objMau.colorSenary
    },
    bgOctonary: {
        backgroundColor: objMau.colorOctonary
    },
    bgEf: {
        backgroundColor: '#EFEFEF'
    },
    bg14: {
        backgroundColor: objMau.color14
    },
    bg14: {
        backgroundColor: objMau.color15
    },
    line1: {
        height: 1,
        width: '100%'
    },
    line2: {
        height: 2,
        width: '100%'
    },
    line3: {
        height: 3,
        width: '100%'
    },
    line4: {
        height: 4,
        width: '100%'
    },
    line5: {
        height: 20,
        width: '100%'
    },
    line20: {
        height: 20,
        width: '100%'
    },
    grid3: {
        // width: '33.33%'
    },
    bgD1: {
        backgroundColor: '#d1d1d1'
    },
    line10: {
        height: 10,
        width: '100%'
    },
    bgE9: {
        backgroundColor: '#e9e9e9'
    },
    bgF6: {
        backgroundColor: '#F6F6F6'
    },
    bgF1: {
        backgroundColor: '#F1F1F1'
    },
    fixedBottom: {
        width: '100%',
        bottom: 0,
        position: 'absolute'
    },
    shadowTop: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    sgModal: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: 0,
        zIndex: 9999
    },
    sgModalDialog: {
        position: 'absolute',
        width: '100%',
        transform: [{translateY: -50}],
        top: '50%',
        padding: 15
    },
    sgModalContent: {
        borderRadius: 8,
        width: '100%',
        backgroundColor: 'white',
        maxHeight: '100%',
        
    },
    sgModalBtn: {
        width: 150,
        height: 38,
        fontSize: 10,
        lineHeight: 20
    },
    sgModalBtnI: {
        fontSize: 16,
        marginRight: 5,
        marginLeft: 5
    },
    sgModalBtnSuccess: {
        color: 'white',
        backgroundColor: '#4E8D42'
    },
    sgModalBtnClose: {
        borderColor: 'white'
    },
    sgModalSgModalDialogBottom:{
        padding: 0,
        top: 'auto',
        bottom: 0,
        transform: [{translateY: 0}]
    },
    sgModalSgModalDialogBottomsgModalContent: {
        borderRadius: 0,
        backgroundColor: '#FFFFFF'
    },
    pageTitleRight: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: -35,
        display: 'flex',
        flexDirection: 'row'
    },
    border1: {
        borderWidth: 1,
    },
    borderE1: {
        borderColor: '#e1e1e1'
    },
    radius6: {
        borderRadius: 6
    },
    pageTitleRightI: {
        fontSize: 20
    },
    pageTitleRightSpan: {
        height: 'auto',
        width: 'auto',
        color: 'white',
        fontSize: 11,
        bottom: -5,
        left: 25
    },
    pageTitleImg: {
        height: 40,
        maxWidth: 40,
        marginRight: 15,
        marginTop: -8,
        marginLeft: 15
    },
    formSelect: {
        width: '100%',
        borderRadius: 6,
        height: 40,
        paddingRight: 30,
        paddingLeft: 10,
        position: 'relative'
    },
    titleLineCenterRightSpan: {
        position: 'relative',
        paddingRight: 12,
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 22,
        color: '#666666',
        textTransform: 'uppercase'
    },
    formControl: {
        position: 'relative',
        width: '100%',
        backgroundColor:'#FFFFFF',
        borderRadius: 90,
        fontSize: 17
    },
    iconRight: {
        position: 'absolute',
        top: 14,
        right: 10
    },
    formInput: {
        width: '100%',
        borderRadius: 4,
        paddingRight: 40,
        paddingLeft: 10
    },
    btnSm: {
        width: 'auto',
        paddingTop: 6,
        paddingRight: 15,
        paddingBottom: 6,
        paddingLeft: 15,
        height: 'auto',
        fontSize: 15,
        fontWeight: '500'
    },
    height18: {
        height: 33
    },
    height33: {
        height: 33
    },
    height34: {
        height: 34
    },
    height40: {
        height: 40
    },
    height50: {
        height: 50
    },
    height74: {
        height: 74
    },
    checkbox: {
        position: 'absolute',
        opacity: 0,
        height: 0,
        width: 0
    },

    checkmark: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 20,
        width: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 2
    },
    w50px: {
        width: 50
    },
    w55px: {
        width: 55
    },
    w30px: {
        width: 30
    },
    mr1: {
        marginRight: 1
    },
    mr2: {
        marginRight: 2
    },
    mr3: {
        marginRight: 3
    },
    mr4: {
        marginRight: 4
    },
    mr5: {
        marginRight: 5
    },
    mr6: {
        marginRight: 6
    },
    mr7: {
        marginRight: 7
    },
    mr8: {
        marginRight: 8
    },
    mr9: {
        marginRight: 9
    },
    mr10: {
        marginRight: 10
    },
    mr11: {
        marginRight: 11
    },
    mr12: {
        marginRight: 12
    },
    mr13: {
        marginRight: 13
    },
    mr14: {
        marginRight: 14
    },
    mr15: {
        marginRight: 15
    },
    mr16: {
        marginRight: 16
    },
    mr17: {
        marginRight: 17
    },
    mr18: {
        marginRight: 18
    },
    mr19: {
        marginRight: 19
    },
    mr20: {
        marginRight: 20
    },
    mr21: {
        marginRight: 21
    },
    mr22: {
        marginRight: 22
    },
    mr23: {
        marginRight: 23
    },
    mr24: {
        marginRight: 24
    },
    mr25: {
        marginRight: 25
    },
    mr50: {
        marginRight: 50
    },
    ml1: {
        marginLeft: 1
    },
    ml2: {
        marginLeft: 2
    },
    ml3: {
        marginLeft: 3
    },
    ml4: {
        marginLeft: 4
    },
    ml5: {
        marginLeft: 5
    },
    ml6: {
        marginLeft: 6
    },
    ml7: {
        marginLeft: 7
    },
    ml8: {
        marginLeft: 8
    },
    ml9: {
        marginLeft: 9
    },
    ml10: {
        marginLeft: 10
    },
    ml11: {
        marginLeft: 11
    },
    ml12: {
        marginLeft: 12
    },
    ml13: {
        marginLeft: 13
    },
    ml14: {
        marginLeft: 14
    },
    ml15: {
        marginLeft: 15
    },
    ml16: {
        marginLeft: 16
    },
    ml17: {
        marginLeft: 17
    },
    ml18: {
        marginLeft: 18
    },
    ml19: {
        marginLeft: 19
    },
    ml20: {
        marginLeft: 20
    },
    ml21: {
        marginLeft: 21
    },
    ml22: {
        marginLeft: 22
    },
    ml23: {
        marginLeft: 23
    },
    ml24: {
        marginLeft: 24
    },
    ml25: {
        marginLeft: 25
    },
    ml35: {
        marginLeft: 35
    },
    mt1: {
        marginTop: 1
    },
    mt2: {
        marginTop: 2
    },
    mt3: {
        marginTop: 3
    },
    mt4: {
        marginTop: 4
    },
    mt5: {
        marginTop: 5
    },
    mt6: {
        marginTop: 6
    },
    mt7: {
        marginTop: 7
    },
    mt8: {
        marginTop: 8
    },
    mt9: {
        marginTop: 9
    },
    mt10: {
        marginTop: 10
    },
    mt11: {
        marginTop: 11
    },
    mt12: {
        marginTop: 12
    },
    mt13: {
        marginTop: 13
    },
    mt14: {
        marginTop: 14
    },
    mt15: {
        marginTop: 15
    },
    mt16: {
        marginTop: 16
    },
    mt17: {
        marginTop: 17
    },
    mt18: {
        marginTop: 18
    },
    mt19: {
        marginTop: 19
    },
    mt20: {
        marginTop: 20
    },
    mt21: {
        marginTop: 21
    },
    mt22: {
        marginTop: 22
    },
    mt23: {
        marginTop: 23
    },
    mt24: {
        marginTop: 24
    },
    mt25: {
        marginTop: 25
    },
    mt40: {
        marginTop: 40
    },
    mb1: {
        marginBottom: 1
    },
    mb2: {
        marginBottom: 2
    },
    mb3: {
        marginBottom: 3
    },
    mb4: {
        marginBottom: 4
    },
    mb5: {
        marginBottom: 5
    },
    mb6: {
        marginBottom: 6
    },
    mb7: {
        marginBottom: 7
    },
    mb8: {
        marginBottom: 8
    },
    mb9: {
        marginBottom: 9
    },
    mb10: {
        marginBottom: 10
    },
    mb11: {
        marginBottom: 11
    },
    mb12: {
        marginBottom: 12
    },
    mb13: {
        marginBottom: 13
    },
    mb14: {
        marginBottom: 14
    },
    mb15: {
        marginBottom: 15
    },
    mb16: {
        marginBottom: 16
    },
    mb17: {
        marginBottom: 17
    },
    mb18: {
        marginBottom: 18
    },
    mb19: {
        marginBottom: 19
    },
    mb20: {
        marginBottom: 20
    },
    mb21: {
        marginBottom: 21
    },
    mb22: {
        marginBottom: 22
    },
    mb23: {
        marginBottom: 23
    },
    mb24: {
        marginBottom: 24
    },
    mb25: {
        marginBottom: 25
    },
    mb: {
        marginBottom: 50
    },
    mx1: {
        marginLeft: 1,
        marginRight: 1
    },
    mx2: {
        marginLeft: 2,
        marginRight: 2
    },
    mx3: {
        marginLeft: 3,
        marginRight: 3
    },
    mx4: {
        marginLeft: 4,
        marginRight: 4
    },
    mx5: {
        marginLeft: 5,
        marginRight: 5
    },
    mx6: {
        marginLeft: 6,
        marginRight: 6
    },
    mx7: {
        marginLeft: 7,
        marginRight: 7
    },
    mx8: {
        marginLeft: 8,
        marginRight: 8
    },
    mx9: {
        marginLeft: 9,
        marginRight: 9
    },
    mx10: {
        marginLeft: 10,
        marginRight: 10
    },
    mx11: {
        marginLeft: 11,
        marginRight: 11
    },
    mx12: {
        marginLeft: 12,
        marginRight: 12
    },
    mx13: {
        marginLeft: 13,
        marginRight: 13
    },
    mx14: {
        marginLeft: 14,
        marginRight: 14
    },
    mx15: {
        marginLeft: 15,
        marginRight: 15
    },
    mx16: {
        marginLeft: 16,
        marginRight: 16
    },
    mx17: {
        marginLeft: 17,
        marginRight: 17
    },
    mx18: {
        marginLeft: 18,
        marginRight: 18
    },
    mx19: {
        marginLeft: 19,
        marginRight: 19
    },
    mx20: {
        marginLeft: 20,
        marginRight: 20
    },
    mx21: {
        marginLeft: 21,
        marginRight: 21
    },
    mx22: {
        marginLeft: 22,
        marginRight: 22
    },
    mx23: {
        marginLeft: 23,
        marginRight: 23
    },
    mx24: {
        marginLeft: 24,
        marginRight: 24
    },
    mx25: {
        marginLeft: 25,
        marginRight: 25
    },
    mx35: {
        marginLeft: 25,
        marginRight: 25
    },
    my1: {
        marginTop: 1,
        marginBottom: 1
    },
    my2: {
        marginTop: 2,
        marginBottom: 2
    },
    my3: {
        marginTop: 3,
        marginBottom: 3
    },
    my4: {
        marginTop: 4,
        marginBottom: 4
    },
    my5: {
        marginTop: 5,
        marginBottom: 5
    },
    my6: {
        marginTop: 6,
        marginBottom: 6
    },
    my7: {
        marginTop: 7,
        marginBottom: 7
    },
    my8: {
        marginTop: 8,
        marginBottom: 8
    },
    my9: {
        marginTop: 9,
        marginBottom: 9
    },
    my10: {
        marginTop: 10,
        marginBottom: 10
    },
    my11: {
        marginTop: 11,
        marginBottom: 11
    },
    my12: {
        marginTop: 12,
        marginBottom: 12
    },
    my13: {
        marginTop: 13,
        marginBottom: 13
    },
    my14: {
        marginTop: 14,
        marginBottom: 14
    },
    my15: {
        marginTop: 15,
        marginBottom: 15
    },
    my16: {
        marginTop: 16,
        marginBottom: 16
    },
    my17: {
        marginTop: 17,
        marginBottom: 17
    },
    my18: {
        marginTop: 18,
        marginBottom: 18
    },
    my19: {
        marginTop: 19,
        marginBottom: 19
    },
    my20: {
        marginTop: 20,
        marginBottom: 20
    },
    my21: {
        marginTop: 21,
        marginBottom: 21
    },
    my22: {
        marginTop: 22,
        marginBottom: 22
    },
    my23: {
        marginTop: 23,
        marginBottom: 23
    },
    my24: {
        marginTop: 24,
        marginBottom: 24
    },
    my25: {
        marginTop: 25,
        marginBottom: 25
    },
    px1: {
        paddingLeft: 1,
        paddingRight: 1
    },
    px2: {
        paddingLeft: 2,
        paddingRight: 2
    },
    px3: {
        paddingLeft: 3,
        paddingRight: 3
    },
    px4: {
        paddingLeft: 4,
        paddingRight: 4
    },
    px5: {
        paddingLeft: 5,
        paddingRight: 5
    },
    px6: {
        paddingLeft: 6,
        paddingRight: 6
    },
    px7: {
        paddingLeft: 7,
        paddingRight: 7
    },
    px8: {
        paddingLeft: 8,
        paddingRight: 8
    },
    px9: {
        paddingLeft: 9,
        paddingRight: 9
    },
    px10: {
        paddingLeft: 10,
        paddingRight: 10
    },
    px11: {
        paddingLeft: 11,
        paddingRight: 11
    },
    px12: {
        paddingLeft: 12,
        paddingRight: 12
    },
    px13: {
        paddingLeft: 13,
        paddingRight: 13
    },
    px14: {
        paddingLeft: 14,
        paddingRight: 14
    },
    px15: {
        paddingLeft: 15,
        paddingRight: 15
    },
    px16: {
        paddingLeft: 16,
        paddingRight: 16
    },
    px17: {
        paddingLeft: 17,
        paddingRight: 17
    },
    px18: {
        paddingLeft: 18,
        paddingRight: 18
    },
    px19: {
        paddingLeft: 19,
        paddingRight: 19
    },
    px20: {
        paddingLeft: 20,
        paddingRight: 20
    },
    px21: {
        paddingLeft: 21,
        paddingRight: 21
    },
    px22: {
        paddingLeft: 22,
        paddingRight: 22
    },
    px23: {
        paddingLeft: 23,
        paddingRight: 23
    },
    px24: {
        paddingLeft: 24,
        paddingRight: 24
    },
    px25: {
        paddingLeft: 25,
        paddingRight: 25
    },
    py1: {
        paddingTop: 1,
        paddingBottom: 1
    },
    py2: {
        paddingTop: 2,
        paddingBottom: 2
    },
    py3: {
        paddingTop: 3,
        paddingBottom: 3
    },
    py4: {
        paddingTop: 4,
        paddingBottom: 4
    },
    py5: {
        paddingTop: 5,
        paddingBottom: 5
    },
    py6: {
        paddingTop: 6,
        paddingBottom: 6
    },
    py7: {
        paddingTop: 7,
        paddingBottom: 7
    },
    py8: {
        paddingTop: 8,
        paddingBottom: 8
    },
    py9: {
        paddingTop: 9,
        paddingBottom: 9
    },
    py10: {
        paddingTop: 10,
        paddingBottom: 10
    },
    py11: {
        paddingTop: 11,
        paddingBottom: 11
    },
    py12: {
        paddingTop: 12,
        paddingBottom: 12
    },
    py13: {
        paddingTop: 13,
        paddingBottom: 13
    },
    py14: {
        paddingTop: 14,
        paddingBottom: 14
    },
    py15: {
        paddingTop: 15,
        paddingBottom: 15
    },
    py16: {
        paddingTop: 16,
        paddingBottom: 16
    },
    py17: {
        paddingTop: 17,
        paddingBottom: 17
    },
    py18: {
        paddingTop: 18,
        paddingBottom: 18
    },
    py19: {
        paddingTop: 19,
        paddingBottom: 19
    },
    py20: {
        paddingTop: 20,
        paddingBottom: 20
    },
    py21: {
        paddingTop: 21,
        paddingBottom: 21
    },
    py22: {
        paddingTop: 22,
        paddingBottom: 22
    },
    py23: {
        paddingTop: 23,
        paddingBottom: 23
    },
    py24: {
        paddingTop: 24,
        paddingBottom: 24
    },
    py25: {
        paddingTop: 25,
        paddingBottom: 25
    },
    pl1: {
        paddingLeft: 1
    },
    pl2: {
        paddingLeft: 2
    },
    pl3: {
        paddingLeft: 3
    },
    pl4: {
        paddingLeft: 4
    },
    pl5: {
        paddingLeft: 5
    },
    pl6: {
        paddingLeft: 6
    },
    pl7: {
        paddingLeft: 7
    },
    pl8: {
        paddingLeft: 8
    },
    pl9: {
        paddingLeft: 9
    },
    pl10: {
        paddingLeft: 10
    },
    pl11: {
        paddingLeft: 11
    },
    pl12: {
        paddingLeft: 12
    },
    pl13: {
        paddingLeft: 13
    },
    pl14: {
        paddingLeft: 14
    },
    pl15: {
        paddingLeft: 15
    },
    pl16: {
        paddingLeft: 16
    },
    pl17: {
        paddingLeft: 17
    },
    pl18: {
        paddingLeft: 18
    },
    pl19: {
        paddingLeft: 19
    },
    pl20: {
        paddingLeft: 20
    },
    pl21: {
        paddingLeft: 21
    },
    pl22: {
        paddingLeft: 22
    },
    pl23: {
        paddingLeft: 23
    },
    pl24: {
        paddingLeft: 24
    },
    pl25: {
        paddingLeft: 25
    },
    pl50: {
        paddingLeft: 50
    },
    pr1: {
        paddingRight: 1
    },
    pr2: {
        paddingRight: 2
    },
    pr3: {
        paddingRight: 3
    },
    pr4: {
        paddingRight: 4
    },
    pr5: {
        paddingRight: 5
    },
    pr6: {
        paddingRight: 6
    },
    pr7: {
        paddingRight: 7
    },
    pr8: {
        paddingRight: 8
    },
    pr9: {
        paddingRight: 9
    },
    pr10: {
        paddingRight: 10
    },
    pr11: {
        paddingRight: 11
    },
    pr12: {
        paddingRight: 12
    },
    pr13: {
        paddingRight: 13
    },
    pr14: {
        paddingRight: 14
    },
    pr15: {
        paddingRight: 15
    },
    pr16: {
        paddingRight: 16
    },
    pr17: {
        paddingRight: 17
    },
    pr18: {
        paddingRight: 18
    },
    pr19: {
        paddingRight: 19
    },
    pr20: {
        paddingRight: 20
    },
    pr21: {
        paddingRight: 21
    },
    pr22: {
        paddingRight: 22
    },
    pr23: {
        paddingRight: 23
    },
    pr24: {
        paddingRight: 24
    },
    pr25: {
        paddingRight: 25
    },
    pr30: {
        paddingRight: 30
    },
    pt1: {
        paddingTop: 1
    },
    pt2: {
        paddingTop: 2
    },
    pt3: {
        paddingTop: 3
    },
    pt4: {
        paddingTop: 4
    },
    pt5: {
        paddingTop: 5
    },
    pt6: {
        paddingTop: 6
    },
    pt7: {
        paddingTop: 7
    },
    pt8: {
        paddingTop: 8
    },
    pt9: {
        paddingTop: 9
    },
    pt10: {
        paddingTop: 10
    },
    pt11: {
        paddingTop: 11
    },
    pt12: {
        paddingTop: 12
    },
    pt13: {
        paddingTop: 13
    },
    pt14: {
        paddingTop: 14
    },
    pt15: {
        paddingTop: 15
    },
    pt16: {
        paddingTop: 16
    },
    pt17: {
        paddingTop: 17
    },
    pt18: {
        paddingTop: 18
    },
    pt19: {
        paddingTop: 19
    },
    pt20: {
        paddingTop: 20
    },
    pt21: {
        paddingTop: 21
    },
    pt22: {
        paddingTop: 22
    },
    pt23: {
        paddingTop: 23
    },
    pt24: {
        paddingTop: 24
    },
    pt25: {
        paddingTop: 25
    },
    pb1: {
        paddingBottom: 1
    },
    pb2: {
        paddingBottom: 2
    },
    pb3: {
        paddingBottom: 3
    },
    pb4: {
        paddingBottom: 4
    },
    pb5: {
        paddingBottom: 5
    },
    pb6: {
        paddingBottom: 6
    },
    pb7: {
        paddingBottom: 7
    },
    pb8: {
        paddingBottom: 8
    },
    pb9: {
        paddingBottom: 9
    },
    pb10: {
        paddingBottom: 10
    },
    pb11: {
        paddingBottom: 11
    },
    pb12: {
        paddingBottom: 12
    },
    pb13: {
        paddingBottom: 13
    },
    pb14: {
        paddingBottom: 14
    },
    pb15: {
        paddingBottom: 15
    },
    pb16: {
        paddingBottom: 16
    },
    pb17: {
        paddingBottom: 17
    },
    pb18: {
        paddingBottom: 18
    },
    pb19: {
        paddingBottom: 19
    },
    pb20: {
        paddingBottom: 20
    },
    pb21: {
        paddingBottom: 21
    },
    pb22: {
        paddingBottom: 22
    },
    pb23: {
        paddingBottom: 23
    },
    pb24: {
        paddingBottom: 24
    },
    pb25: {
        paddingBottom: 25
    },
    pb50: {
        paddingBottom: 50
    },
    height28: {
        height: 28
    },
    height33: {
        height: 33
    },
    height34: {
        height: 34
    },
    height38: {
        height: 38
    },
    height40: {
        height: 40
    },
    height45: {
        height: 45
    },
    height48: {
        height: 48
    },
    top17: {
        top: 17
    },
    right15: {
        height: 15
    },
    radiusFull: {
        borderRadius: 100
    },
    radiusFullCover: {
        borderWidth: 8,
        borderColor: '#097ff5'
    },
    truncase1:{
        display: 'flex',
        overflow: 'hidden',
    },
    avataEdit: {
        bottom: 12,
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        zIndex: 20
    },
    // Dang ky hoc
    mainSwapper: {
        width: '100%',
        height: 267,
        flex: 1
    },
    secondView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    firstView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    //Home
    sgDashBoard: {
        borderRadius: 15,
        paddingTop: 15
    },
    dashBoardList: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    dashBoardItem: {
        width: '33.33%',
    },
    with33: {
        width: '33.33%',
    },
    dashBoardItemCover: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width: '100%'
    },
    dashBoardImage: {
        position: 'relative',
        width: '100%',
        height: 74,
        textAlign: 'center',
        marginTop: 5
    },
    dashBoardImageImg: {
        maxWidth: '100%',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: [{translateX: -50}]
    },
    dashboardTitle: {
        marginTop: 'auto',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 5,
        fontSize: 14,
        lineHeight: 16,
        color: objMau.colorPrimary,
        paddingRight: 4
    },
    sliderDot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 5
    },
    dotItem: {
        width: 6,
        height: 6,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        marginRight: 5
    },
    sgAbout: {
        paddingRight: 15,
        paddingLeft: 15
    },
    sgAboutImg: {
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    aboutTitle: {
        marginTop: 22,
        marginRight: 13,
        marginBottom: 8,
        marginLeft: 13,
        fontSize: 18,
        lineHeight: 20,
        color: objMau.colorPrimary,
        fontWeight: '700'
    },
    aboutDesc: {
        paddingRight: 13,
        paddingBottom: 13,
        paddingLeft: 13,
        lineHeight: 24
    },
    newsList: {
        display: 'flex',
        overflow: 'hidden',
    },
    newsItem: {
        width: '100%',
        marginBottom: 25
    },
    newsItemImg: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        aspectRatio: 280/190,
        width: '100%'
    },
    newsTitle: {
        lineHeight: 22,
        marginTop: 12,
        paddingRight: 12,
        marginLeft: 12
    },
    newsDate: {
        fontSize: 14,
        lineHeight: 22,
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 6,
        paddingLeft: 15,
        color: '#888888'
    },
    newsDesc: {
        fontSize: 14,
        lineHeight: 20,
        paddingRight: 12,
        marginBottom: 12,
        paddingLeft: 12,
        color: '#666666',
    },
    newsItemBoxShadow: {
        height: '100%'
    },
    friendList: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: -5
    },
    friendItem: {
        width: '25%',
        textAlign: 'center',
        paddingRight: 4,
        paddingLeft: 4,
        marginTop: 20,
        fontSize: 14,
        lineHeight: 20,
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    friendItemImg: {
        borderRadius: '100%',
        width: 55,
        height: 55,
        
    },
    sgFriendsSliderDot: {
        marginTop: 15
    },
    serviceList: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 15,
        paddingRight: 11,
        paddingBottom: 15,
        paddingLeft: 11,
        flexWrap: 'wrap',
    },
    serviceItem: {
        width: '25%',
        textAlign: 'center',
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    serviceItemImg: {
        width: 68,
        height: 68,
        borderRadius: 4
    },
    devInfo: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: '#666666',
        marginTop: 25,
        marginBottom: 75,
        marginLeft: 15,
        marginRight: 15
    },
    menuFooter: {
        width: '100%',
        bottom: 0,
        backgroundColor: objMau.colorPrimary,
        borderRadius: 15,
        right: 0,
        alignItems: 'center',
        height: 58
    },
    menuFItem: {
        padding: 4,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 15,
        color: objMau.colorPrimary,
        width: '25%',
        position: 'relative'
    },
    menuFItemI: {
        fontSize: 24
    },
    menuFItemSpan: {
        position: 'absolute',
        top: 0,
        width: 18,
        height: 18,borderRadius: 100, 
        backgroundColor: objMau.colorQuinary,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: '50%'
    },
    menuTop: {
        height: 60,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        top: 0
    },
    menuTopA: {
        position: 'absolute',
        left: 15,
        top: '40%',
        fontSize: 18,
        color: objMau.colorPrimary,
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
        elevation: 5
    },
    menuList: {
        marginTop: 10
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        borderBottomColor: '#e9e9e9',
        borderBottomWidth:1,
    },
    menuItemP: {
        borderBottomColor: objMau.colorPrimary,
        borderBottomWidth:4,
        flex: 1,
        paddingBottom: 20,
        paddingTop: 20,
        color: objMau.colorPrimary,
        fontSize: 18,
        lineHeight: 16
    },
    menuItemI: {
        position: 'absolute',
        right: 15,
        color: '#7086c1'
    },
    menuItemImg: {
        width: 40,
        height: 40,
        flexShrink: 0,
        marginLeft: 15,
        marginRight: 20
    },
    menuLevelP: {
        marginBottom: 5,
        fontSize: 18,
        lineHeight: 20,
        color: objMau.colorPrimary
    },
    menuSubP: {
        paddingLeft: 20
    },
    topOfMobi: {
        height: 30
    },
    //Dang ky hoc
    topOfMobile:{
        color: 'white',
        fontSize: 18,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 23,
        paddingRight: 50,
        position: 'relative'
    },
    pageHeader: {
    },
    pageTitle: {
        flexDirection: 'row',
        fontSize: 18,
        lineHeight: 16,
        alignItems: 'center',
        paddingTop: 23,
        paddingRight: 50,
        paddingBottom: 13,
        paddingLeft: 15
    },
    iHomePageTitle: {
        paddingBottom: 50
    },
    pageTitleI:{
        marginRight: 18
    },
    pageTitleSpan: {
        height: 32,
        width: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 32,
        color: objMau.colorQuinary,
        fontWeight: 'bold',
        position: 'absolute',
        right: 15
    },

    bold: {
        fontWeight: 'bold'
    },
    spanReverse: {
        backgroundColor: objMau.colorQuinary,
        color: 'white'
    },
    contentRTop: {
        backgroundColor: 'transparent'
    },
    userInfoList: {
        backgroundColor: '#f2f2f2'
    },
    userInfo: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    userInfoImg: {
        width: 78,
        height: 78,
        borderRadius: 78,
        borderWidth: 3,
        borderColor: '#E9E9E9',
        flexShrink: 0,
        marginRight: 20
    },
    mlAuto: {
        marginLeft: 'auto'
    },
    mrAuto: {
        marginLeft: 'auto'
    },
    mtAuto: {
        marginTop: 'auto'
    },
    mbAuto: {
        marginBottom: 'auto'
    },
    flexR: {
        flexDirection: 'row'
    },
    flexC: {
        flexDirection: 'column'
    },
    userInfoItem: {
        height: 55,
        display: 'flex',
        alignItems: 'center',
        borderBottomColor: '#E9E9E9',
        borderBottomWidth: 1,
        paddingRight: 15,
        paddingLeft: 15,
        lineHeight: 20,
        color: '#666666',
        flexDirection: 'row'
    },
    userInfoItemDK: {
        paddingBottom: 5,
        borderBottomColor: '#E9E9E9',
        borderBottomWidth: 1,
    },
    userInfoItemIcon: {
        width: 20,
        marginRight: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    registerClassItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginRight: 15,
        marginBottom: 20,
        fontSize: 15,
        marginLeft: 15
    },
    registerClassItemBtn: {
        paddingTop: 6,
        paddingRight: 8,
        fontSize: 15
    },
    selectedClassItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderTopWidth: 3,
        padding: 3
    },
    numberLabelL: {
        height: 23,
        width: 25,
        backgroundColor: objMau.colorPrimary,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        color: 'white',
        lineHeight: 15,
        marginRight: 15,
        marginLeft: -15,
        paddingRight: 2,
        paddingTop : 5,
        paddingLeft: 4,
        // borderRadius:15
    },
    navIsIcon: {
        paddingTop: 74
    },
    navIsIconItem: {
        position: 'relative'
    },
    navIsIconItemSpan: {
        position: 'absolute',
        top: 15,
        height: 22,
        width: 22,
        backgroundColor: '#888888',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        borderWidth: 2,
        borderRadius: '100%',
        color: 'white',
        fontWeight: 'normal'
    },
    //Tai chinh
    finaceContentUserInfoImg: {
        width: 95,
        height: 95
    },
    financeItem: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        borderRightWidth: 4,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    numberLabel11: {
        backgroundColor: objMau.color11
    },
    numberLabel12: {
        backgroundColor: objMau.color12
    },
    //Calendar
    calendarWeekTable: {
        textAlign: 'center'
    },
    dateHeader: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        display: 'flex',
        width: '100%',
        marginTop: 18,
        marginBottom: -25
    },
    day: {
        fontSize: 20,
        lineHeight: 16
    },
    days: {
         flexWrap: 'wrap',
    },
    dateHeaderText: {
        fontSize: 12,
        color: '#888888',
        paddingBottom: 10,
        paddingTop: 6
    },
    dayOfOtherMonth: {
        color: '#666666',
        opacity: 0.5
    },
    dateBody: {
        display: 'flex'
    },
    dayOfWeek:{
        width: '12.5%'
    },
    dayOfWeekTask:{
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    calendarDay:{
        width: '87.5%'
    },
    calendarWeekTableDate: {
        width: '12.5%'
    },
    hourRow: {
        height: 60,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    task: {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        borderLeftWidth: 2
    },
    blockCalendarActive: {
        backgroundColor: objMau.colorQuinary,
        borderRadius: 100,
    },
    dateHourRow: {
        borderWidth: 0,
        display: 'flex',
        alignItems: 'center',
        fontSize: 13,
        color: '#888888'
    },
    newsSearchForm: {
        borderBottomColor: '#e1e1e1',
        paddingTop: 15,
        paddingRight: 15,
        paddingLeft: 15
    },
    taskHeaderTitle: {
        fontSize: 14,
        fontWeight: '600'
    },
    taskDate: {
        fontSize: 13,
        color: '#666666'
    },
    dateHeader: {
        paddingRight: 4
    },
    blockLabel: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 15,
    },
    nextPrevMonth: {
        marginLeft: 'auto',
        fontSize: 12
    },
    blockCalendarUl: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
        fontSize: 14
    },
    blockCalendarUlLi: {
        width: '14.285%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 9,
        paddingBottom: 9,
        fontSize: 18,
        justifyContent: 'center'
    },
    calendarBlockCover: {
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 15,
        paddingLeft: 10
    },
    formGroupCover: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: '#666666'
    },
    chooseDay: {
        marginBottom: 0,
        backgroundColor: '#f4f4f4',
        paddingTop: 15,
        marginTop: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    w25pt: {
        width: '25%'
    },
    oneDoorContentHeadSpan: {
        width: 16,
        height: 16,
        backgroundColor: objMau.colorQuinary,
        fontSize: 11,
        lineHeight: 20,
        display: 'flex',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'absolute',
        top: -5,
        left: '60%'
    },
    oneDoorContentHeadSpanText: {
        fontSize: 11,
        color: 'white',
    },
    oneDoorContentBody: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 194,
        backgroundColor: '#5c71a8'
    },
    waitComfirmItem: {
        borderRadius: 10
    },
    oneDoorList: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 15
    },
    waitComfirmMeta:{
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },
    oneDoorItem: {
        width: '50%',
        color: objMau.colorPrimary
    },
    w50pt: {
        width: '50%'
    },
    onedoorItemCover: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderBottomWidth: 4,
        textAlign: 'center',
        height: '100%'
    },
    oneDoorItemImg: {
        height: 84,
        marginTop: 15,
        marginBottom: 8,
        maxWidth: '100%'
    },
    oneDoorItemP: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        color: objMau.colorPrimary,
        marginBottom: 10,
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15
    },
    waitConfirmItem: {
        borderRadius: 10
    },
    waitConfirmMeta: {
        borderRadius: 10
    },
    boxAddMail: {
        paddingTop: 12,
        paddingRight: 15,
        paddingBottom: 12,
        paddingLeft: 70,
        fontSize: 16,
        lineHeight: 22
    },
    //CaNhan
    userAvartar: {
        width: 152,
        height: 152,
        overflow: 'hidden',
        borderRadius: 152
    },
    itemActive: {
        color: objMau.colorQuinary,
    },
    color22: {
        color: '#222222'
    },
    w36p: {
        width: '36%'
    },
    imgBrand: {
        width: 73,
        height: 73
    },
    imgAvartar: {

        width: 55,
        height: 55,
        borderRadius: 55
    },
    //Login
    loginWrapper: {
        maxWidth: 900,
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        minHeight: '100%'
    },
    loginFooter: {
        fontSize: 12,
        lineHeight: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 2
    },
    pageLabelLg: {
        fontSize: 32,
        lineHeight: 40,
        color: '#FFFFFF',
        marginBottom: 32
    },
    loginForm: {
        paddingLeft: '10%',
        paddingRight: '10%',
        width: '100%',
        zIndex: 3
    },
    loginFormBtn: {
        width: '100%',
        backgroundColor: objMau.colorPrimary,
        borderRadius: 90,
        height: 48,
        marginBottom: 16,
        lineHeight: 50,
        alignItems: 'center'
    },
    iconR: {
        position: 'absolute',
        right: 20,
        top: 14,
        color: '#888888',
        zIndex: 56
    },
    iconL: {
        position: 'absolute',
        left: 20,
        top: 14,
        color: objMau.colorPrimary,
        zIndex: 56
    },
    forgetPassHefp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18,
        lineHeight: 19,
        color: '#FFFFFF'
    },
    btnMain: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 21,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        backgroundColor: objMau.colorPrimary,
        alignItems: 'center',
        textAlign: 'center',
    },
    orRow: {
        lineHeight: 19,
        textAlign: 'center',
        marginBottom: 16,
        color: '#ACBEEC'
    },
    btnOrange:{
        backgroundColor: objMau.colorSecondary,
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFFFF'
    },
    //Chat
    dropIcon: {
        fontSize: 20
    },
    chatItem: {
        height: 74
    },
    chatItemLeft: {
        marginLeft: 0
    },
    chatItemRight: {
        width: 150,
        height: '100%',
        backgroundColor: objMau.color15,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        display: 'flex',
        flexShrink: 0,
        marginRight: -150
    },
    chatItemRightA: {
        display: 'flex',
        width: '40%',
        alignCenter: 'center',
        justifyContent: 'center',
        fontSize: 22,
        color: 'white'
    },
    chatItemRightALast: {
        backgroundColor: objMau.colorPrimary,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        width: '60%'
    },
    chatItemSwipperLeft: {
        marginLeft: 150
    },
    chatItemSwipperRight: {
        marginLeft: 0
    },
    chatItemSwipperContent: {
        opacity: 0.5
    },
    chatGroupImage: {
        width: 50,
        height: 50,
        display: 'flex',
        flexShrink: 0,
        flexWrap: 'wrap'
    },
    chatGroupImageImg: {
        width: '50%',
        height: '50%',
        borderRadius: 100
    },
    pageTitleImg: {
        marginRight: 0
    },
    pageTitleChatGroupImage: {
        width: 45,
        height: 45
    },
    chatContent: {
        padding: 15
    },
    chatRow: {
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        marginBottom: 20
    },
    chatRowAvatar: {
        width: 30,
        height: 30,
        flexShrink: 0,
        borderRadius: 100,
    },
    ourChatAvatar: {
        marginRight: 10
    },
    myChatAvatar: {
        marginLeft: 10
    },
    chatRowNameDate: {
        position: 'absolute',
        bottom: -14,
        fontSize: 11,
        lineHeight: 16,
        textAlign: 'left',
        color: '#AAAAAA',
        minWidth: 40,
    },
    ourChat: {
        marginRight: 50
    },
    chatRowContentP: {
        fontSize: 16,
        lineHeight: 22,
        color: '#222222',
        paddingTop: 5,
        paddingRight: 18,
        paddingBottom: 5,
        paddingLeft: 18,
        minHeight: 40
    },
    chatRowContent: {
        overflow: 'hidden',
        marginBottom: 2
    },
    ourChatNameDate: {
        left: 40
    },
    firstChat: {
        borderTopLeftRadius: 20,
    },
    ourChatContent: {
        backgroundColor: '#ECF4FF',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    ourChatContentFirst: {
        borderTopLeftRadius: 20
    },
    myChat: {
        marginLeft: 50,
        justifyContent: 'flex-end'
    },
    myChatContent: {
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    dayChatSpan: {
        backgroundColor: 'white',
        position: 'relative',
        paddingRight: 5,
        paddingLeft: 5
    },
    chatTyping: {
        width: '100%',
        height: 58,
        backgroundColor: objMau.colorPrimary,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        bottom: 0
    },
    chatTypingInput: {
        backgroundColor: '#5D71A5',
        borderRadius: 90,
        height: 36,
        paddingRight: 14,
        paddingLeft: 14,
        color: 'white'
    },
    chatTypingImg: {
        marginLeft: 7
    },
    typing: {
        borderWidth: 3,
        borderColor: '#223771',
        height: 8,
        marginRight: 5,
        width: 8,
        borderRadius: 100
    },
    contentGroup: {
        display: 'flex',
        flexDirection: 'column'
    },
    myChatContentGroup: {
        alignItems: 'flex-end'
    },
    bgE1: {
        backgroundColor: "#e1e1e1"
    },
    bgF9: {
        backgroundColor: "#f9f9f9"
    }
})

export default styles;