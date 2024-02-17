import {Alert } from 'react-native'
import Core from '../../Core'
var DangKyHoc = {
    strSinhVien_Id: '',
    strChuongTrinh_Id: '',
    strKeHoach_Id: '',
    dtKeHoach: [],
    objKeHoach: [],
    dtChuongTrinh: [],
    objChuongTrinh: [],
    dtHocPhan: [],
    objHocPhan: [],
    strHocPhan_Id: '',
    dtLopHocPhan: {rs: []},
    objLopHocPhan: [],
    strLopHocPhan_Id: '',
    dtTinhTrangTaiChinh: [],
    dtKetQuaDangKy: [],
    dtChiTietLopHocPhan: [],
    dtLopHocPhanTheoNhom: [],
    dSoDu: null,
    dSoNo: null,
    state: null,

    getList_ChuongTrinh: function (){
        var me=this;
        Core.makeRequest({
            action: 'DKH_Chung/LayDSChuongTrinh',
            type: 'GET',
            data: {
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    me.genList_ChuongTrinh(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)

            }
        })
    },
    genList_ChuongTrinh: function (data){
        var me=this;
        me.dtChuongTrinh = data;
        if(data && data.length > 0){
            me.strChuongTrinh_Id = data[0].DAOTAO_TOCHUCCHUONGTRINH_ID;
        }
        me.actionChuongTrinh();
    },
    actionChuongTrinh: function (){
        var me=this;
        if(me.strChuongTrinh_Id) me.getList_KeHoach();
    },
    getList_KeHoach: function (){
        var me=this;
        Core.makeRequest({
            action: 'DKH_Chung/LayDSKeHoachDangKyHoc',
            type: 'GET',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    // console.log(data)
                    me.genList_KeHoach(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)

            }
        })
    },
    genList_KeHoach: function (data){
        var me=this;
        me.dtKeHoach = data;
        if(data && data.length == 1){
            me.strKeHoach_Id = data[0].ID;
            me.actionKeHoach()
        }
        me.updateState("stateHome");
    },
    actionKeHoach: function (data){
        var me=this;
        me.objKeHoach = me.dtKeHoach.find(e => e.ID === me.strKeHoach_Id);
        me.getList_TinhTrangTaiChinh();
        me.getList_KetQuaDangKy();
        // me.getList_HocPhan();
    },
    getList_TinhTrangTaiChinh: function (){
        var me=this;
        Core.makeRequest({
            action: 'DKH_TinhTrangTaiChinh/LayDanhSach',
            type: 'GET',
            data: {
                strDangKy_KeHoachDangKy_Id: me.strKeHoach_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    me.dSoDu = Core.formatCurrency(data.Id);
                    me.genList_TinhTrangTaiChinh(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    genList_TinhTrangTaiChinh: function (data){
        var me=this;
        me.dtTinhTrangTaiChinh = data;
        let sum = 0;
        data.rsConPhaiNopTrongDotDK.forEach(e => {
            sum += Core.returnZero(e.SOTIEN);
        });
        me.dSoNo = sum;
        me.updateState("stateHome")
    },
    getList_KetQuaDangKy: function (){
        var me=this;
        Core.makeRequest({
            action: 'DKH_Chung/LayKetQuaDangKyLopHocPhan',
            type: 'GET',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strDangKy_KeHoachDangKy_Id: me.strKeHoach_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    me.genList_KetQuaDangKy(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    genList_KetQuaDangKy: function (data){
        var me=this;
        me.dtKetQuaDangKy = data;
        me.updateState("stateHome")
    },
    delete_DangKyHoc: function (item){
        var me=this;
        let arrDangKy_LopHocPhan_Ids = [];
        item.forEach(e => arrDangKy_LopHocPhan_Ids.push(e.DANGKY_LOPHOCPHAN_ID))
        Core.makeRequest({
            action: 'DKH_DangKy/ThucHienHuyDangKyHoc',
            type: 'POST',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strDangKy_KeHoachDangKy_Id: me.strKeHoach_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strDaoTao_HocPhan_Id: item[0].DAOTAO_HOCPHAN_ID,
                strDangKy_LopHocPhan_Ids: arrDangKy_LopHocPhan_Ids.toString(),
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    me.getList_KetQuaDangKy()
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    HuyDangKy: function (item){
        var me=this;
        Alert.alert(
            "Hủy đăng ký",
            item[0].DANGKY_LOPHOCPHAN_TEN,
            [
                {
                    text: 'Có',
                    onPress: () => {
                        me.delete_DangKyHoc(item)
                    }
                },
                {
                    text: 'Không',
                    onPress: () => {
                    }
                }
            ]
            )
    },
    
    DangKyLopHocPhan: function (item){
        var me=this;
        Alert.alert(
            "Đăng ký lớp học",
            item.TENLOP,
            [
                {
                    text: 'Có',
                    onPress: () => {
                        me.save_DangKyHoc(item)
                    }
                },
                {
                    text: 'Không',
                    onPress: () => {
                    }
                }
            ]
            )
    },
    
    save_DangKyHoc: function (item){
        var me=this;
        Core.makeRequest({
            action: 'DKH_DangKy/DangKyHocTrucTiep',
            type: 'POST',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strDangKy_KeHoachDangKy_Id: me.strKeHoach_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strDaoTao_HocPhan_Id: me.strHocPhan_Id,
                strDangKy_LopHocPhan_Ids: item.ID,
                dLaLopHocPhanChinh: 1,
                strMaNhomLop: "",
                strThuocTinhLop_Id: "",
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    me.getList_KetQuaDangKy()
                    me.getList_HocPhan();
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    updateState: function (data){
        // console.log(typeof(this[data]))
        // console.log(typeof(this[data]))
        // if(typeof(this[data]) === "function") this[data](++Core.countState)
        if(typeof(this.state) === "function")this.state(++Core.countState);
    },
    getList_HocPhan: function (){
        var me=this;
        Core.makeRequest({
            action: 'DKH_Chung/LayDSHocPhanDangToChuc',
            type: 'GET',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strDangKy_KeHoachDangKy_Id: me.strKeHoach_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                // console.log(data)
                if(data.Success){
                    me.genList_HocPhan(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    genList_HocPhan: function (data){
        var me=this;
        me.dtHocPhan = data
        me.actionHocPhan()
        me.updateState("stateDangKyH2")
    },
    actionHocPhan: function (data){
        var me=this;
        me.objHocPhan = me.dtHocPhan.find(e => e.ID === me.strHocPhan_Id);
        // me.getList_TinhTrangTaiChinh();
        // me.getList_KetQuaDangKy();
        // me.getList_LopHocPhan();
    },
    getList_LopHocPhan: function (){
        var me=this;
        Core.makeRequest({
            action: 'DKH_Chung/LayDSLopHocPhanDangToChuc',
            type: 'GET',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strDangKy_KeHoachDangKy_Id: me.strKeHoach_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strThuHoc: "",
                strNhanSu_HoSoNhanSu_v2_Id: "",
                dChiLayCacLopKhongTrung: 0,
                strThuocTinhLop_Id: "",
                strMaNhomLop: "",
                dLaLopHocPhanChinh: 1,
                strDaoTao_HocPhan_Id: me.strHocPhan_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    me.genList_LopHocPhan(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    genList_LopHocPhan: function (data){
        var me=this;
        me.dtLopHocPhan = data
        me.updateState("stateChonMon")
    },
    
    getList_ChiTietLopHocPhan: function (callback){
        var me=this;
        Core.makeRequest({
            action: 'DKH_LichTuanTheoLopHocPhan/LayLichTuanTheoLopHocPhan',
            type: 'GET',
            data: {
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strDangKy_LopHocPhan_Id: me.strLopHocPhan_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    callback(data.Data);
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    
    getList_LopHocPhanTheoNhom: function (callback, strMaNhomLop){
        var me=this;
        Core.makeRequest({
            action: 'DKH_Chung/LayDSLopHocPhanDangToChuc',
            type: 'GET',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strDangKy_KeHoachDangKy_Id: me.strKeHoach_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strThuHoc: "",
                strNhanSu_HoSoNhanSu_v2_Id: "",
                dChiLayCacLopKhongTrung: 0,
                strThuocTinhLop_Id: "",
                strMaNhomLop: strMaNhomLop,
                dLaLopHocPhanChinh: 1,
                strDaoTao_HocPhan_Id: me.strHocPhan_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    callback(data.Data);
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    },
    
    genList_xxxxx: function (data){
        var me=this;
        
    },
    genList_xxxxx: function (data){
        var me=this;
        
    },
    genList_xxxxx: function (data){
        var me=this;
        
    },
    genList_xxxxx: function (data){
        var me=this;
        
    },
}
module.exports = DangKyHoc;