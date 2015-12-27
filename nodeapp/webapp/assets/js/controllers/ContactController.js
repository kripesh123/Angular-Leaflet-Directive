app.controller("ContactController",function($scope){
	angular.extend($scope,{
		kathmandu:{
			lat:27.707205951924035,
			lng:85.32736659049988,
			zoom: 14
			},
		markers: {},
		layers:{
			xyz:{
				name:'OpenStreetMap (XYZ)',
				url: 'http://{s}.tile.Openstreetmap.org/{z}/{x}/{y}.png',
				type: 'xyz'
			}
		},
		position: {
                    lat: 27.707205951924035,
                    lng: 85.32736659049988
               	},
		events: { // or just {} //all events
                    markers:{
                      enable: [ 'dragend' ]
                      //logic: 'emit'
                    }
                }
	});

	$scope.$on("leafletDirectiveMarker.dragend",function(event, args){
		$scope.position.lat = args.model.lat;
		$scope.position.lng = args.model.lng;
	});

	$scope.addMarkers = function(){
		angular.extend($scope,{
			markers:{
				m1:{
				lat:27.707205951924035,
				lng:85.32736659049988,
				message: "Leapfrog Academy",
				draggable:true
				},
				m2:{
				lat:27.709414357734445,
				lng:85.3293514251709,
				message: "Braindigit IT Solution"			
				},
				m3:{
				lat:27.710563660920453,
				lng:85.32188951969147,
				message: "Parakhi.com"				
				}
			}
		});
	};
	$scope.removeMarkers = function(){
		$scope.markers = {};
	}
	$scope.addMarkers();
});
