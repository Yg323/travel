// 리스트 정렬!
$(document).ready(function () {
	// 초기 값 지정
	$('.puzzle_travel').text("추천 코스를 편집해주세요!");
	// select 선택이 변경 됐을 때 호출 되는 함수
		$('.select_travel').change(function() {
		$('.puzzle_travel').text($(".select_travel option:selected").val());
		$( ".puzzle_travel" ).draggable({
			helper:"clone",
			cursor:"move",
			start: function(event,ui){
				$(".day_trip").css("backgroud-color","red");
			},
			distance: 10
		});
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    	mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    	};  

		// 지도를 생성합니다    
		var map = new kakao.maps.Map(mapContainer, mapOption); 

		// 주소-좌표 변환 객체를 생성합니다
		var geocoder = new kakao.maps.services.Geocoder();

		// 주소로 좌표를 검색합니다
		geocoder.addressSearch($(".select_travel option:selected"), function(result, status) {

			// 정상적으로 검색이 완료됐으면 
			if (status === kakao.maps.services.Status.OK) {

				var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

				// 결과값으로 받은 위치를 마커로 표시합니다
				var marker = new kakao.maps.Marker({
					map: map,
					position: coords
				});

				// 인포윈도우로 장소에 대한 설명을 표시합니다
				var infowindow = new kakao.maps.InfoWindow({
					content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
				});
				infowindow.open(map, marker);

				// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
				map.setCenter(coords);
			} 
		});    
	});
	// 초기 값 지정
	$('.puzzle_food').text("추천 코스를 편집해주세요!");
	// select 선택이 변경 됐을 때 호출 되는 함수
		$('.select_food').change(function() {
		$('.puzzle_food').text($(".select_food option:selected").val());
	});
	$('.puzzle_map').text("추천 코스를 편집해주세요!");
	// select 선택이 변경 됐을 때 호출 되는 함수
		$('.select_map').change(function() {
		$('.puzzle_map').text($(".select_map option:selected").val());
	});
});
// 화면 전환
function j_test(n){
	$('.day_change').scrollLeft( $('.day_change').scrollLeft() + n );
}
//드래그앤 드롭
$( function() {
	$( ".select_trans" ).draggable({
		helper:"clone"
		
	});
	$(".day_trip").droppable({
		accept: ".select_trans"
	});

	/* $("").droppable({
		drop: function(event, ui){
			$(this)
			.addclass("")
		}
	}); */

} );



