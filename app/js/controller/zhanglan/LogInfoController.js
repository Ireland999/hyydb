(function(){
  angular.module('app').controller("LogInfoController",LogInfoController);
  LogInfoController.$inject=['$scope'];
  function LogInfoController($scope){
    //初始化函数
    var LogInfoLoad=function(){
      LogInfo();
    };
    var LogInfo=function(){
      $scope.logsinfo=[
                        {
                          ProName:'清热解毒口服',
                          StoreNum:10,
                          Price:10,
                          StringPro:'否'
                        },
                        [
                          {
                            time:'2015年3月26日 下午7:33:42',
                            address:'快件到达 北京市朝阳区高碑店',
                            classname:'op_express_delivery_timeline_circle_red'
                          },
                          {
                            time:'2015年3月25日 下午7:33:42',
                            address:'快件到达 北京转运中心公司',
                            classname:'op_express_delivery_timeline_circle_blue'
                          }
                        ]
                      ];
    };

    $scope.LogInfoLoad=LogInfoLoad;
  }
})();