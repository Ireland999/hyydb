(function () {
  function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('center',{                //竞品界面
      url:'/',
      templateUrl:'views/Competitor.html'
    // }).state('center.Competitor',{              //竞品界面
    //   url:'Competitor',
    //    templateUrl:'views/Competitor.html'
    // }).state('center.addnewCom',{               //添加新竞品
    //   url:'addnewCom',
    //   templateUrl:'views/addnewCom.html'
    // }).state('center.seeActive',{               //显示竞品异动
    //   url:'seeActive',
    //   templateUrl:'/views/seeActive.html'
    }).state('center.addactive',{               //操作竞品异动
      url:'addactive',
      templateUrl:'/views/addactive.html'
    // }).state('center.code',{
    //   url:'code',
    //   templateUrl:'/views/code.html'

    // }).state('center.visit-workorder',{       //
    //   url:'visit-workorder',
    //   templateUrl:'views/visit/visit-workorder.html'
    }).state('center.compedetail',{               //竞品调研2页面
        url:'compedetail',
        templateUrl:'/views/compedetail.html'
    }).state('center.weijia',{               //维价页面
        url:'weijia',
        templateUrl:'/views/weijia.html' 
    }).state('center.wei_list',{               //维价列表页面
    url:'wei_list',
    templateUrl:'/views/wei_list.html'
    }).state('center.greet',{                 //打招呼定位附近终端
      url:'greet',
      templateUrl:'views/visit/greet.html'
    }).state('center.position',{                 //定位确定终端
      url:'position',
      templateUrl:'views/visit/position.html'
    });
  }
  config.$inject = ['$stateProvider','$urlRouterProvider'];
  angular.module('app',['ui.router']).config(config);
})();