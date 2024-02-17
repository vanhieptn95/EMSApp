
import Core from '../../Core'
var TaiChinhC = {
    strSinhVien_Id: '',
    dtTinhTrangTaiChinh: [],
    getList_TinhTrangTaiChinh: function (callback){
        var me=this;
        Core.makeRequest({
            action: 'TC_ThongTinChung/LayDanhSach',
            type: 'GET',
            data: {
                strQLSV_NguoiHoc_Id: me.strSinhVien_Id,
                strNguonDuLieu_Id: '',
                strNguoiThucHien_Id: Core.userId
            },
            success: function(data){
                // console.log(data);
                if(data.Success){
                    me.dtTinhTrangTaiChinh = data.Data;
                    me.genList_TinhTrangTaiChinh(data.Data)
                    callback(data.Data)
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
        
    }
}
module.exports = TaiChinhC;