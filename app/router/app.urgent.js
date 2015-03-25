(function () {
  function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('center',{
      url:'/',
      templateUrl:'views/visit/greet.html'
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
    }).state('center.code',{
      url:'code',
      templateUrl:'/views/code.html'
    });
  }
  config.$inject = ['$stateProvider','$urlRouterProvider'];
  angular.module('app',['ui.router']).config(config);
})();