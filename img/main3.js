$(document).ready(function(){

    $("#date1").datepicker({ // 달력에 옵션 설정하기

        dayNamesMin:["일","월","화","수","목","금","토"], // 요일에 표시되는 형식 설정

        dateFormat:"yy-mm-dd", //날짜 형식 설정

        monthNames:["1월","2월","3월","4월","5월","6월","7월",

         "8월","9월","10월","11월","12월"], //월표시 형식 설정

        showOn:"button", //버튼 보이기

        buttonText:"달력", //버튼에 보이는 텍스트설정

        showAnim:"fold" //애니메이션효과

    });

});