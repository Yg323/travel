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
	});
	// 초기 값 지정
	$('.puzzle_food').text("추천 코스를 편집해주세요!");
	// select 선택이 변경 됐을 때 호출 되는 함수
		$('.select_food').change(function() {
		$('.puzzle_food').text($(".select_food option:selected").val());
	});
});
// 화면 전환
function j_test(n){
	$('.day_change').scrollLeft( $('.day_change').scrollLeft() + n );
}
// 드래그앤 드롭
// $( function() {
// 	$( ".puzzle_travel" ).draggable({
// 		helper:"clone"
// 	});
// 	$( '.puzzle_food' ).draggable();

	/* $("").droppable({
		drop: function(event, ui){
			$(this)
			.addclass("")
		}
	}); */

//   } );



