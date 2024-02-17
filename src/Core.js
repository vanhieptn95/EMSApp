import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert } from 'react-native'
import config from './config';
var Core ={
    userId: '',
    user: '',
    userPass: '',
    userName: '',
    userAvatar: '',
    oUser: {},
    server: '',
    api_noti: '',
    strChucNang_Id: '',
    tokenJWT: '',
    countState: 0,
    state: null,
    modalVisible: false,

    startApp: function (aDataUser){
        var me=this;
        me.userId = aDataUser.ID;
        me.user = aDataUser.TAIKHOANNGUOIDUNG;
        me.userName = aDataUser.TENDAYDU;
        me.userAvatar = aDataUser.HINHDAIDIEN;
        me.tokenJWT = aDataUser.tokenJWT;
        me.server = aDataUser.server;
        me.api_noti = aDataUser.api_noti;
        console.log("me.api_noti" + me.api_noti)
        //Test
        // me.userId = '19C50D036FD84796BB72F933948D80E8',
        // me.user = '21010389';
        // me.userPass = 'c3375e0178cfe14cc9f480ae725165fe'
        //End Test
        // me.getTokenlUser();
        me.getDetailUser();
    },
    updateState : function(){
        if(this.state && typeof(this.state) == "function") this.state(++this.countState)
    },
    getVersion: function(){
        var me= this;
        fetch(config.server + '/Version?version=' + config.version + '&api=' + me.server)
        .then((response) => response.json())
        .then((json) => {
            if(json.Success){
                me.alert("Bạn hãy cập nhật phiên bản mới");
            }
            else{
                ShowLog(json.Message);
            }

        })
        .catch((error) => {
            ShowLog(error);
        });
    },
    updateFCMToken: function(data){
        var me= this;
        var url_api = me.api_noti ?me.api_noti: config.server;
        fetch(url_api + '/notifyuser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success update token:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    },
    getNotify: function(callback){
        var me= this;
        var url_api = me.api_noti ?me.api_noti: config.server;
        fetch(url_api + '/NotifyUser?user_id=' + me.userId + '&skip=0&limit=50000')
        .then((response) => response.json())
        .then((json) => {
            if(json.Success){
                callback(json.Data)
            }
            else{
                ShowLog(json.Message);
            }

        })
        .catch((error) => {
            ShowLog(error);
        });
    },
    get_StatusNotifyUser: function(callback){
        var me= this;
        if(!me.api_noti) return ;
        var url_api = me.api_noti;
        fetch(url_api + '/Get_StatusNotifyUser?strUserId=' + me.userId + '&dISTATUS=1')
        .then((response) => response.json())
        .then((json) => {
            if(json.Success){
                callback(json.Data)
            }
            else{
                ShowLog(json.Message);
            }

        })
        .catch((error) => {
            ShowLog(error);
        });
    },
    getCacheUser: async (callback) =>{
        try {
            const value = await AsyncStorage.getItem('allUser');
            if (value !== null) {
              // We have data!!
              var aUser = JSON.parse(value);
              callback(aUser)
            }
          } catch (error) {
            // Error retrieving data
          }
    },
    logOut: async (callback) =>{
        try {
            const value = await AsyncStorage.removeItem('allUser');
            if (value !== null) {
              // We have data!!
              callback()
            }
          } catch (error) {
            // Error retrieving data
          }
    },
    getDetailUser: function() {
        var me=this;
        console.log("getDetailUser")
        me.makeRequest({
            action: 'SV_HoSo/LayChiTiet',
            type: 'GET',
            data: {
                strId: me.userId
            },
            success: function(data){
                if(data.Success){
                    if(data.Data.length>0){
                        // console.log(data.Data[0])
                        me.oUser= data.Data[0];
                    }
                }
                else{
                    console.log(data.Message)
                }
            },
            error: function(err){
                console.log(err)

            }
        })
    },
    getTokenlUser: function(callback) {
        var me=this;
        callback("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQwMzhFNkZEMEZGQTREMzM5RkE5OTFFNzQwMzQ4RjAxOzIyNTQ0YjNmNGFjMDQzOGU4YTYwZTM2MWQyMjgxM2VmOzIwMjIwODA0MjExODU2IiwibmJmIjoxNjU5NjIyNzM2LCJleHAiOjE2NjIzMDExMzYsImlhdCI6MTY1OTYyMjczNiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3QifQ.zxyFJbDWv9syAsz_FZCBaipOErgOuKfaowcUN797BXU");
        // me.makeRequest({
        //     action: 'CMS_Token/LayChiTiet',
        //     type: 'GET',
        //     data: {
        //         strUser: me.user,
        //         strPass: me.userPass
        //     },
        //     success: function(data){
        //         // Core.tokenJWT = data.Data;
        //         callback(data.Data)
        //     },
        //     error: function(err){
        //         console.log(err)

        //     }
        // })
    },
    makeRequest: function(params){
        let me= this;
        let strGetParam = "";
        let strUrl = "";
        var objPost = {
            method: params.type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': me.tokenJWT
            }
        }
        if(params.type === 'GET'){
            strGetParam += "?"
            for(let x in params.data){
                strGetParam += x + '=' + params.data[x] + '&'
            }
        }else{
            objPost.body = JSON.stringify(params.data);
        }
        let strKeySwitch = params.action.substring(0, params.action.indexOf("_"));
        strUrl = me.server + '/' + config.objApi[strKeySwitch] + '/' + params.action;
        if (config.objApi[strKeySwitch].indexOf("http") === 0) {
            strUrl = config.objApi[strKeySwitch] + '/' + params.action;
            //strtokenJWT = undefined;
        }
        // console.log(strUrl + strGetParam)
        // console.log(objPost)
        // me.modalVisible= true;
        // me.updateState();
        fetch(strUrl + strGetParam, objPost)
            .then(response => response.json())
            .then(data => {
                // me.modalVisible= false;
                // me.updateState();
            // console.log('Success:', data);
                params.success(data);
                if(!data.Success) me.makeLog(strUrl + strGetParam, objPost.body, data.Message);
            })
            .catch((error) => {
                // me.modalVisible= false;
                // me.updateState();
                console.error(params.action + ' : '+   error);
                params.error(error)
            });
    },
    makeLog: function(api, data, error){
        let me= this;
        console.log("Log" +api)
        let date = new Date();
        let logd = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

        fetch(config.server + '/LogUser',
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                'user_id': me.userId,
                'user_name': me.user,
                'api': api,
                'data': data,
                'error': error,
                'date': logd
            }
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.Success){
                me.alert("Bạn hãy cập nhật phiên bản mới");
            }
            else{
                ShowLog(json.Message);
            }

        })
        .catch((error) => {
            ShowLog(error);
        });
    },
    returnZero: function(value){
        if(value) return value
        return 0
    },
    returnTwo: function(iDay) {
        iDay = "" + iDay;
        if (iDay.length == 1) return "0" + iDay;
        else return iDay;
    },
    alert: function(strMessage, strTitle){
        if(!strTitle) strTitle = "Thông báo";
        Alert.alert(strTitle, strMessage)
    },
    formatCurrency: function (value) {
        // return value;
        if(value == 0) return 0; 
        if( !value) return "";
        return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    getImage: function(value){
        var me=this;
        console.log(Core.server + '/upload/' + value);
        return Core.server + '/upload/' + value
    },
    convertTimeChat: function(date) {
        if (date === null || date === undefined || date === "") return "";
        let x = Date.now() - date;
        x = x / 1000;
        if (x < 60) return "Bây giờ";
        x = x / 60;
        if (x < 60) return Math.floor(x) + " phút";
        x = x / 60;
        if (x < 60) return Math.floor(x) + " giờ";
        x = x / 24;
        return Math.floor(x) + " ngày";
    },
    uuid: function () {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
module.exports = Core;