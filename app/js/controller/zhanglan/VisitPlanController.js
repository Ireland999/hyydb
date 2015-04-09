(function(){
  angular.module('app').controller("VisitPlanController",VisitPlanController);
  VisitPlanController.$inject=['$scope'];
  function VisitPlanController($scope){
    //初始化函数
    var VisitPlanLoad=function(){
      Datepicker();
    };
    var Datepicker=function(){
      console.log(11);
      $scope.datepickerOptions = {
                format: 'yyyy-mm-dd',
                language: 'zh-TW',
                startDate: new Date(),
                endDate: "2050-10-31",
                autoclose: true,
                weekStart: 0
            }

    };
    var SaveFunction=function(){
      var inputId=$('#datepicker');
      console.log(inputId[0].value);
      var textareaId=$('#textarea');
      console.log(textareaId[0].value);
      if(inputId[0].value==''||textareaId[0].value==''){
        alert('请填写计划时间或者计划内容');
      }else{
        alert('保存成功！');
      }
    };
    $scope.VisitPlanLoad=VisitPlanLoad;
    $scope.SaveFunction=SaveFunction;
  }
})();