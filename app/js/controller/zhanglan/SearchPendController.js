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
    var ConfigFun=function(){
      wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wx7e982df0ff12914e', // 必填，公众号的唯一标识
          timestamp:1427440956 , // 必填，生成签名的时间戳
          nonceStr: '53ab4296-f6f2-4907-b822-00095296488f', // 必填，生成签名的随机串
          signature: '0a7c31712b7bbb3de92beceeae2589c9ab218e88',// 必填，签名，见附录1
          jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function(){
        console.log(111);
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          Scan();
      });
      wx.error(function(res){
        alert(res.errMsg);

      });
    };
    var Scan=function(){
      console.log('调用微信扫一扫接口');
      alert('nihao');
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
    $scope.SearchPendLoad=SearchPendLoad;
    $scope.ShowAll=ShowAll;
    $scope.ConfigFun=ConfigFun;
  }
})();