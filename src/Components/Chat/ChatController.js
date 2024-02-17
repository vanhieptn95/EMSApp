import Core from '../../Core'
import config from '../../config'
import io from "socket.io-client/dist/socket.io";
var TinNhan = {
    objUser: '',
    roomId: '',
    allUserChat: '',
    pageCurrent: 0,
    dtChat: [],
    strMessage: '',
    iCount: '',
    arrChat: [],
    socket: null,
    state: null,

    initMain: function(){
        let me= this;
        if(!me.socket) {
            console.log("socket: " +config.serverChat)
            me.socket = io(config.serverChat, {json:false});
        }
        me.objUser = {
            UserName: Core.userName,
            UserID: Core.userId,
            UserMa: Core.user,
            UserServer: "App",
            UserModule: "App Chat",
            UserAvatar: Core.userAvatar?  Core.server + '/upload/'+ Core.userAvatar: null
        };
        let socket = me.socket;
        // socket.on('connect', () =>{
        //     console.log("Connect")
        //     socket.emit("client-send-User", me.objUser);
        // });
        socket.on('connect', () =>{
            console.log("Connected")
            console.log(me.objUser)
            socket.emit("client-send-User", me.objUser);
        });
        socket.on("invite-room", function (obj) {
            socket.emit("join-room", { roomId: obj.roomId, pairId: obj.UserID });
        });
    
        socket.on("user-send-message", function (data) {
            console.log("user-send-message");
            me.dtChat.push({
                ...data,
                data: data.dulieu,
                userId:  data.UserID
            });
            console.log(me.dtChat[me.dtChat.length -1])
            me.onMessage();
        });
        socket.on("app-reload", function (data) {
            console.log("onreload");
            Core.alert("Bạn cần khởi động lại ứng dụng")
        });
        me.allUserChat = [{
            _id: Core.userId,
            name: Core.userName,
            avatar: Core.userAvatar?  Core.server + '/upload/'+ Core.userAvatar: null
        }];
    },

    getList_NguoiNhan: function (callback){
        var me=this;
        fetch(config.serverChat + '/userchat?userId=' + Core.userId)
        .then((response) => response.json())
        .then((json) => {
            callback(json);
        })
        .catch((error) => {
            
        });
    },
    actionNhanTin: function (params){
        var me=this;
        me.dtChat= [];
        console.log(params.room.roomId)
        me.roomId = params.room.roomId;
        me.socket.emit("get-invite-room", { roomId: me.roomId, UserID: params.user.userID });
        me.socket.emit("join-room", { roomId: me.roomId, pairId: params.user.userID });

        if(!me.allUserChat.find(e => e._id === params.user.userID)){
            me.allUserChat.push({
                _id: params.user.userID,
                name: params.user.userName,
                avatar: params.user.userAvatar
            });
        }
    },
    updateState: function (data){
        // console.log(typeof(this[data]))
        // console.log(typeof(this[data]))
        // if(typeof(this[data]) === "function") this[data](++Core.countState)
        console.log(typeof(this.state) === "function")
        console.log(Core.countState);
        console.log()
        if(typeof(this.state) === "function")this.state(++Core.countState);
    },
    getList_TinNhan: function (callback, roomId){
        var me=this;
        fetch(config.serverChat + '/RoomChat?roomId='+ roomId + '&limit=400&skip='+ me.pageCurrent*400)
        .then((response) => response.json())
        .then((json) => {
            me.dtChat = json.Data
            me.onMessage();
        })
        .catch((error) => {
            console.log(error)
        });
    },
    onMessage: function(){
        let me= this;
        console.log(this.dtChat[0])
        if(me.dtChat.length){
            me.arrChat = [];
            let objChat = {
                "I": 0,
                "date": 0,
                "arrData": []
            }
            me.dtChat.forEach(item => {
                if((item.date - objChat.date) > 1800000) {
                    if(objChat.arrData.length > 0) me.arrChat.push({...objChat})
                    me.arrChat.push({
                        "I": 3,
                        "date": item.date,
                        "arrData": []
                    })
                    objChat.date = item.date;
                    objChat.arrData = [];
                }
                if(!objChat.arrData.length){
                    objChat.I = item.userId === Core.userId ? 1 : 0;
                    objChat.arrData = [item]
                }else{
                    if((objChat.I && item.userId === Core.userId) || (!objChat.I && item.userId !== Core.userId)){
                        objChat.arrData.push(item);
                    }else{
                        if(objChat.arrData.length) me.arrChat.push({...objChat})
                        objChat.I = item.userId === Core.userId ? 1 : 0;
                        objChat.date = item.date
                        objChat.arrData = [item];
                    }
                }
            })
            if(objChat.arrData.length > 0) me.arrChat.push({...objChat})
        }
        me.updateState();
    },
    sendMessage: function(strMessage){
        var me= this;
        console.log(strMessage);
        if(strMessage){
            me.socket.emit("user-send-message", { data: strMessage, roomId: me.roomId });
        }
    }

}
module.exports = TinNhan;