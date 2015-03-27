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
    var ConfigFun=function(){
      wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wxd0620525651c57cd', // 必填，公众号的唯一标识
          timestamp:new Date() , // 必填，生成签名的时间戳
          nonceStr: 'aaaaa', // 必填，生成签名的随机串
          signature: 'aaaaaa',// 必填，签名，见附录1
          jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function(){
        console.log(111);
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          Scan();
      });
    };
    var Scan=function(){
      console.log('调用微信扫一扫接口');
      wx.scanQRCode({
          needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          console.log(result);
          console.log('调用成功');
      }
      });
    };
    $scope.ComproductsLoad=ComproductsLoad;
    $scope.ComproList=ComproList;
    $scope.ConfigFun=ConfigFun;
  }
})();