$(function(){
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd' //Input Display Format 변경
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
        ,changeYear: true //콤보박스에서 년 선택 가능
        ,changeMonth: true //콤보박스에서 월 선택 가능                  
        ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
        ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        ,beforeShow: function(input) {
		    var i_offset= $(input).offset(); //클릭된 input의 위치값 체크
		    setTimeout(function(){
		       $('#ui-datepicker-div').css({'top':i_offset.top, 'bottom':'', 'left':'10px'});
		    })
		} 
    });
    
    $("#today").text(new Date().toLocaleDateString()); //오늘 날짜 출력
    
    $('#from').datepicker({
        onSelect: function(dateText) {
         $('#from_date').datepicker("setDate", $(this).datepicker("getDate"));//출발일출력
       }
    });
    $("#from_date").datepicker();

    $('#to').datepicker({
        onSelect: function(dateText) {
         $('#to_date').datepicker("setDate", $(this).datepicker("getDate"));//도착일출력
       }
     });
    $("#to_date").datepicker();

    $('#stime') //시간선택
        .timepicker({timeFormat:'H:i','minTime':'06:00','maxTime':'23:00','scrollDefaultNow': true }) //stime 시작 기본 설정
        .on('changeTime',function() { //stime 을 선택한 후 동작
            var from_time = $("input[name='stime']").val(); //stime 값을 변수에 저장
            $('#etime').timepicker('option','minTime', from_time);//etime의 mintime 지정
            if ($('#etime').val() && $('#etime').val() < from_time) {
                $('#etime').timepicker('setTime', from_time);
    //etime을 먼저 선택한 경우 그리고 etime시간이 stime시간보다 작은경우 etime시간 변경
            }  
        });
    $('#etime').timepicker({timeFormat:'H:i','minTime':'06:00','maxTime':'23:00'});//etime 시간 기본 설정
 
});
$(function(){
    $('.date_choice').text($(".traveldate option:selected").val());
})

