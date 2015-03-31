(function () {
  function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('center',{
      url:'/',
      templateUrl:'views/visit/position.html'
    }).state('center.Competitor',{
      url:'Competitor',
       templateUrl:'views/Competitor.html'
    }).state('center.addnewCom',{
      url:'addnewCom',
      templateUrl:'views/addnewCom.html'
    }).state('center.seeActive',{
      url:'seeActive',
      templateUrl:'/views/seeActive.html'
    }).state('center.addactive',{
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
    }).state('center.greet',{                 //打招呼定位附近终端
      url:'greet',
      templateUrl:'views/visit/greet.html'
    }).state('center.position',{                 //打招呼定位确定终端
      url:'position',
      templateUrl:'views/visit/position.html'
    });
  }
  config.$inject = ['$stateProvider','$urlRouterProvider'];
  angular.module('app',['ui.router']).config(config);
})();