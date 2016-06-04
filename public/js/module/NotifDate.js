
var NotifDate = (function(){

    var self = {};

    self.show = function(scene, action) {
        // Notificationを取得
        var Notification = window.Notification || window.mozNotification || window.webkitNotification;

        // Notificationの権限チェック
        Notification.requestPermission(function (permission) {
            console.log(permission);
        });

        // 通知インスタンス生成
        var instance = new Notification(
            "一週間前に登録した以下のルールを\nチェックできるようになりました！", // 通知タイトル
            {
                body: "SCENE  : " + scene + "\n" + "ACTION : " + action, // 通知内容
                icon: "./img/logo.png", // アイコン
            }
        );

        // instance.config({autoClose: 1000}); // 1000[ミリ秒後]に通知を閉じる // これがエラーになる
        instance.onclick = function () {
            console.log("onclick");
        };
        instance.onerror = function () {
            console.log("onerror");
        };
        instance.onshow = function () {
            console.log("onshow");
        };
        instance.onclose = function () {
            console.log("onclose");
            // window.open().close()
            // window.focus()
        };
    }


    return self;

})();
