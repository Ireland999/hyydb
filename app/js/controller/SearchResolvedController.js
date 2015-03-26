(function(){
  angular.module('app').controller("SearchResolvedController",SearchResolvedController);
  SearchResolvedController.$inject=['$scope'];
  function SearchResolvedController($scope){
    //初始化函数
    var SearchResolvedLoad=function(){
      document.title="调研工单";
      SearchOneList();
    };
     var SearchOneList=function(){
      $scope.items=[
        {DrugstoreName:'大众宝泰医药（现代店）'},
        {ListCount:'10'},
        [
        {IssuedId:1,
          IssuedName:'001单品委员会下达',
          timestamp:'2015-03-01',
          IssuedContent:'调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.',
          IssuedContent1:'调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.'},
        {IssuedId:2,
          IssuedName:'001单品委员会下达',
          timestamp:'2015-03-01',
          IssuedContent:'调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.',
          IssuedContent1:'1'}
          ]
      ];
    };
    $scope.SearchResolvedLoad=SearchResolvedLoad;
  }
})();