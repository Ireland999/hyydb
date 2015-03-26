(function(){
  angular.module('app').controller("ComproductsController",ComproductsController);
  ComproductsController.$inject=['$scope','$stateParams'];
  function ComproductsController($scope,$stateParams){
    //初始化函数
    var ComproductsLoad=function(){
      document.title="竞品调研";
      ComproList();
      console.log($stateParams);
    };
    //竞品列表
    var ComproList=function(){
      $scope.DrugstoreName=$stateParams.DrugstoreName;
      $scope.items=[
                      {FactoryName:'三金药业',DrugsName:'消渴降糖胶囊'},
                      {FactoryName:'振林药业',DrugsName:'消渴降糖胶囊'},
                      {FactoryName:'三金药业',DrugsName:'止咳糖浆'}
                   ];
    };
    $scope.ComproductsLoad=ComproductsLoad;
    $scope.ComproList=ComproList;
  }
})();