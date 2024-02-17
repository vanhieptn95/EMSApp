import Core from '../../Core'
var Diem = {
    strSinhVien_Id: '',
    strChuongTrinh_Id: '',
    dtChuongTrinh: [],
    dtKetQua: {},
    modalVisible: true,
    state: null,

    getList_ChuongTrinh: function (){
        var me=this;
        Core.makeRequest({
            action: 'SV_ThongTin/LayThongTinChuongTrinhHoc',
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
        // console.log(data);
        me.actionChuongTrinh();
    },
    actionChuongTrinh: function (){
        var me=this;
        if(me.strChuongTrinh_Id) me.getList_KetQuaHocTap();
    },
    getList_KetQuaHocTap: function (){
        var me=this;
        Core.makeRequest({
            action: 'SV_ThongTin/KetQuaHocTapCaNhan',
            type: 'GET',
            data: {
                // strChucNang_Id: '458922CCB7064213A3D94F7511852261',
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    me.genList_KetQuaHocTap(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)

            }
        })
    },
    genList_KetQuaHocTap: function (data){
        var me=this;
        me.dtKetQua = data;
        console.log(1111111)
        if(typeof(this.state) === "function") this.state(++Core.countState);
        me.modalVisible = false;
        me.state(++Core.countState);
        // let arrThanhPhan = [];
        // me.dtKetQua.rsDiemThanhPhan.forEach(element => {
        //     if (arrThanhPhan.indexOf(element.DIEM_THANHPHANDIEM_TEN) === -1) arrThanhPhan.push(element.DIEM_THANHPHANDIEM_TEN);
        // });
        
        // me.dtKetQua["arrThanhPhan"] = arrThanhPhan;
    },
    actionKeHoach: function (data){
        var me=this;
        me.objKeHoach = me.dtKeHoach.find(e => e.ID === me.strKeHoach_Id);
        me.getList_TinhTrangTaiChinh();
        me.getList_KetQuaDangKy();
        // me.getList_HocPhan();
    },
    getList_TichLuyTheoKhoi: function (callback){
        var me=this;
        Core.makeRequest({
            action: 'SV_ThongTin/LayKetQuaTichLuyTheoKhoi',
            type: 'GET',
            data: {
                strDaoTao_ChuongTrinh_Id: me.strChuongTrinh_Id,
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                if(data.Success){
                    callback(data.Data)
                }else{
                    Core.alert(data.Message)
                }
            },
            error: function(err){
                console.log(err)
            }
        })
    }
}
module.exports = Diem;