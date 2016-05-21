
var GetLatlng = (function(){

  var self = {};

  if (navigator.geolocation) {
    console.log('geolocation is available');
  } else {
    console.log('geolocation IS NOT available');
  }

  self.start = function(){

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      var data = position.coords;
      var lat = data.latitude;
      var lng = data.longitude;
      var latlng = new google.maps.LatLng(lat, lng);
      console.log("latlng : " + lat + ' / ' + lng);
      $('input[name="lat"]').val(lat);
      $('input[name="lng"]').val(lng);

    };

    function error(error) {
      var errorMessage = {
        0: "原因不明のエラーが発生しました…。" ,
        1: "位置情報の取得が許可されませんでした…。" ,
        2: "電波状況などで位置情報が取得できませんでした…。" ,
        3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
      } ;
      console.log( errorMessage[error.code] ) ;
    //   alert( errorMessage[error.code] ) ;
    }

  }

  return self;

})();
