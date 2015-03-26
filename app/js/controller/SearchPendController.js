(function(){
  angular.module('app').controller("SearchPendController",SearchPendController);
  SearchPendController.$inject=['$scope'];
  function SearchPendController($scope){
    //初始化函数
    var SearchPendLoad=function(){
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
    var ShowAll=function(IssuedId){
      console.log(IssuedId);
      for(var i=0;i<$scope.items[2].length;i++){
        if(IssuedId==$scope.items[2][i].IssuedId){
          console.log('true');
          console.log($scope.items[2][i].IssuedId);
          var row2=document.getElementsByClassName('row2');
          console.log(row2[i]);
          row2[i].css("height","auto");
        }else if(IssuedId!=$scope.items[2][i].IssuedId || IssuedId==undefined){
          var row2=document.getElementsByClassName('row2');
          console.log(row2[i]);
          row2[i].css("height","60px");
          row2[i].css("overflow","hidden");
        }
      }
      
    };
    $scope.SearchPendLoad=SearchPendLoad;
    $scope.ShowAll=ShowAll;
  }
})();