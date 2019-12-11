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
				$(".day_text1").css("border","dashed 0.1px red");
			},
			distance: 10
		});
		$(".day_container1").droppable({
			accept: ".puzzle_travel",
			classes : {
				"ui-droppable-active": "ui-state-active",
				"ui-droppable-hover": "ui-state-hover"
			  },
			drop: function(event,ui){
				$(".day_text1").css("border","0px");
				$('.day_trip img',this).attr('src','img/여행지 아이콘.png');
				$('.day_text1',this).text($(".select_travel option:selected").val());
			}
		});
	});
	// 초기 값 지정
	$('.puzzle_food').text("추천 코스를 편집해주세요!");
	// select 선택이 변경 됐을 때 호출 되는 함수
		$('.select_food').change(function() {
		$('.puzzle_food').text($(".select_food option:selected").val());
		$( ".puzzle_food" ).draggable({
			helper:"clone",
			cursor:"move",
			start: function(event,ui){
				$(".day_text1").css("border","dashed 0.1px red");
			},
			distance: 10
		});
		$(".day_container1").droppable({
			accept: ".puzzle_food",
			classes : {
				"ui-droppable-active": "ui-state-active",
				"ui-droppable-hover": "ui-state-hover"
			  },
			drop: function(event,ui){
				$(".day_text1").css("border","0px");
				$('.day_trip img',this).attr('src','img/음식 아이콘.png');
				$('.day_text1',this).text($(".select_food option:selected").val());
			}
		});
	});
	$('.puzzle_map').text("추천 코스를 편집해주세요!");
	// select 선택이 변경 됐을 때 호출 되는 함수
		$('.select_map').change(function() {
		$('.puzzle_map').text($(".select_map option:selected").val());
		$( ".puzzle_map" ).draggable({
			helper:"clone",
			cursor:"move",
			start: function(event,ui){
				$(".day_text1").css("border","dashed 0.1px red");
			},
			distance: 10
		});
		$(".day_container1").droppable({
			accept: ".puzzle_map",
			classes : {
				"ui-droppable-active": "ui-state-active",
				"ui-droppable-hover": "ui-state-hover"
			  },
			drop: function(event,ui){
				$(".day_text1").css("border","0px");
				$('.day_trip img',this).attr('src','img/집주소 아이콘.png');
				$('.day_text1',this).text($(".select_map option:selected").val());
			}
		});
	});
});
// 화면 전환
function j_test(n){
	$('.day_change').scrollLeft( $('.day_change').scrollLeft() + n );
}
//드래그앤 드롭
$( function() {
	$( ".select_trans_w img" ).draggable({
		helper:"clone",
		cursor:"move",
		start: function(event,ui){
			$(".day_text").css("border","dashed 0.1px red");
		},
		distance: 10
	});
	$(".day_container").droppable({
		accept: ".select_trans_w img",
		classes : {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		  },
		drop: function(event,ui){
			$(".day_text").css("border","0px");
			$('.day_trans img',this).attr('src','img/걷는 아이콘.png');
			$(".day_trans img",this).css("width","auto");
			$(".day_trans img",this).css("height","50px");
			// $(".day_trans img",this).css("padding-top","25px");
		}
	});
});
$( function() {
	$( ".select_trans_b img" ).draggable({
		helper:"clone",
		cursor:"move",
		start: function(event,ui){
			$(".day_text").css("border","dashed 0.1px red");
		},
		distance: 10
	});
	$(".day_container").droppable({
		accept: ".select_trans_b img",
		classes : {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		  },
		drop: function(event,ui){
			$(".day_text").css("border","0px");
			$('.day_trans img',this).attr('src','img/버스 아이콘.png');
		}
	});
});
$( function() {
	$( ".select_trans_c img" ).draggable({
		helper:"clone",
		cursor:"move",
		start: function(event,ui){
			$(".day_text").css("border","dashed 0.1px red");
		},
		distance: 10
	});
	$(".day_container").droppable({
		accept: ".select_trans_c img",
		classes : {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		  },
		drop: function(event,ui){
			$(".day_text").css("border","0px");
			$('.day_trans img',this).attr('src','img/차 아이콘.png');
			$(".day_trans img",this).css("width","64px");
			$(".day_trans img",this).css("height","25px");
			$(".day_trans img",this).css("padding-top","25px");
		}
	});
});
$( function() {
	$( ".select_trans_t img" ).draggable({
		helper:"clone",
		cursor:"move",
		start: function(event,ui){
			$(".day_text").css("border","dashed 0.1px red");
		},
		distance: 10
	});
	$(".day_container").droppable({
		accept: ".select_trans_t img",
		classes : {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		  },
		drop: function(event,ui){
			$(".day_text").css("border","0px");
			$('.day_trans img',this).attr('src','img/기차 아이콘.png');
			$(".day_trans img",this).css("width","64px");
			$(".day_trans img",this).css("height","25px");
			$(".day_trans img",this).css("padding-top","25px");
		}
	});

} );



