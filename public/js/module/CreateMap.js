
var CreateMap = (function(){

  var self = {};
  var locations;
  var destinations = [];
  var currentPos;

  // var locations

  // 現在地取得
  self.getPos = function() {
    navigator.geolocation.getCurrentPosition(success, error);
    function success(position) {
      var data = position.coords;
      var currentLat = data.latitude;
      var currentLng = data.longitude;
    //   currentPos = new google.maps.LatLng(35.664909, 139.762148);
      currentPos = new google.maps.LatLng(currentLat, currentLng);
      console.log(currentLat, currentLng);
      console.log(currentPos);

      self.getDistance();
    };
    function error(error) {
      var errorMessage = {
        0: "原因不明のエラーが発生しました…。" ,
        1: "位置情報の取得が許可されませんでした…。" ,
        2: "電波状況などで位置情報が取得できませんでした…。" ,
        3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
      } ;
      alert( errorMessage[error.code] ) ;
    }

  }

  self.start = function() {

    var $scene = $('.td-scene');
    var $action = $('.td-action');
    var $lat = $('.td-lat');
    var $lng = $('.td-lng');

    locations = new Array($scene.length);
    for (var i = 0; i < locations.length; i++){
      locations[i] = new Array(4);
    }

    for (var i = 0; i < $scene.length; i++) {
      locations[i][0] = $scene[i].innerHTML;
      locations[i][1] = $action[i].innerHTML;
      locations[i][2] = $lat[i].innerHTML;
      locations[i][3] = $lng[i].innerHTML;
      destinations[i] = new google.maps.LatLng($lat[i].innerHTML, $lng[i].innerHTML);
    }

    this.getPos();


    // console.log(locations);
    // console.log(destinations);
    // var distance = google.maps.geometry.spherical.computeDistanceBetween(TOKYO, OSAKA);

    // console.log($scene[0].innerHTML);
    var customMapTypeId = 'custom_style';
    var mapOptions = {
      center: null,
      scaleControl: true,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
      },
      mapTypeId: customMapTypeId
    };
    // オリジナルデザイン
    var featureOpts = [
      {
        stylers: [
          { hue: '#FFF700' },
          { visibility: 'simplified' },
          { gamma: 0.5 },
          { weight: 0.5 }
        ]
      },
      {
        elementType: 'labels',
        stylers: [
          { visibility: 'simplified' }
        ]
      },
      {
        featureType: 'road.local',
        stylers: [
          { color: '#FFF700' }
        ]
      }
    ];
    // オリジナルデザインの名前
    var styledMapOptions = {
        name: "Mental Energy"
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var bounds = new google.maps.LatLngBounds();
    var infoWindow = new google.maps.InfoWindow();
    var marker;

    // オリジナルデザインをセット
    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);

    // var destinations = [];

    for (var i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][2], locations[i][3]),
        map: map
      });
      // 地図表示領域をマーカー位置に合わせて拡大
      bounds.extend (marker.position);

    //   destinations[i] = marker.position;

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infoWindow.setContent('シーン ： ' + locations[i][0] + '<br>' + 'アクション ： ' + locations[i][1]);
          infoWindow.open(map, marker);
        }
      })(marker, i));
    }

    // console.log(destinations);

    // 引数に指定した矩形領域を地図に収める
    map.fitBounds (bounds);

  }



  self.getDistance = function() {

      var distances = [];

      for (var j = 0; j < destinations.length; j++) {
          distances[j] = google.maps.geometry.spherical.computeDistanceBetween(currentPos, destinations[j]);
          console.log(distances[j]);

          if (distances[j] < 5000) {
              var nearScene = locations[j][0]
              var nearAction = locations[j][1]
              Notif.show(nearScene, nearAction);
            //   self.notificationShow();
              console.log('近い！');
          } else {
              console.log('遠い！');
          }

      }

  }




  return self;

})();
