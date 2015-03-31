(function(){
  angular.module('app').controller("VisitLogController",VisitLogController);
  VisitLogController.$inject=['$scope'];
  function VisitLogController($scope){
    //初始化函数
    var VisitLogLoad=function(){
      VisitInfo();
    };
    var VisitInfo=function(){
      $scope.visitItems=[
                          {
                            Terminal:'人民同泰药店',
                            Special:2,
                            NewPro:2,
                            ComActive:1,
                            Pending:4,
                            Plan:2
                          }
                        ];
    };
    var Save=function(){
      var Terminal=$('.visitTerminal span');
      var Special=$('.Special span');
      var NewPro=$('.NewPro span');
      var ComActive=$('.ComActive span');
      var Pending=$('.Pending span');
      var Plan=$('.Plan span');
      var textarea=$('#textarea');
      console.log(Terminal[0].innerHTML);
      if(textarea[0].value==''){
        DivFunction();
      }else{
        alert('保存成功！');
      }
    };
    $scope.VisitLogLoad=VisitLogLoad;
    $scope.Save=Save;
  }
})();