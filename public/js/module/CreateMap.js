
var CreateMap = (function(){

  var self = {};

  self.start = function() {

    var $scene = $('.td-scene');
    var $action = $('.td-action');
    var $lat = $('.td-lat');
    var $lng = $('.td-lng');
    var ruleAry = [];
    locations = new Array($scene.length);
    for (var i = 0; i < locations.length; i++){
      locations[i] = new Array(4);
    }

    for (var i = 0; i < $scene.length; i++) {
      locations[i][0] = $scene[i].innerHTML;
      locations[i][1] = $action[i].innerHTML;
      locations[i][2] = $lat[i].innerHTML;
      locations[i][3] = $lng[i].innerHTML;
    }
    // locations.push(ruleAry);

    console.log(locations);

    // console.log($scene[0].innerHTML);

    // var locations = [
    //    ['東京タワー', 35.658581, 139.745433],
    //    ['スカイツリー', 35.789966, 139.821961],
    //    ['東京ドーム', 35.705471, 139.751801],
    //    ['ランドマークタワー', 35.454948, 139.631429]
    // ];

    var map = new google.maps.Map(document.getElementById('map'));
    var bounds = new google.maps.LatLngBounds();
    var infoWindow = new google.maps.InfoWindow();
    var marker;

    for (var i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][2], locations[i][3]),
        map: map
      });
      // 地図表示領域をマーカー位置に合わせて拡大
      bounds.extend (marker.position);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infoWindow.setContent('シーン ： ' + locations[i][0] + '<br>' + 'アクション ： ' + locations[i][1]);
          infoWindow.open(map, marker);
        }
      })(marker, i));
    }

    // 引数に指定した矩形領域を地図に収める
    map.fitBounds (bounds);

  }


  return self;

})();
