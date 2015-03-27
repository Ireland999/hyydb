(function(){
  function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('SearchList',{
      url:'/ScanInfo',
      templateUrl:'views/admin/SearchList.html'
    }).state('SearchList.SearchResolved',{
      url:'SearchResolved',
      templateUrl:'views/admin/SearchResolved.html'
    }).state('SearchList.SearchPending',{
      url:'SearchPending',
      templateUrl:'views/admin/SearchPending.html'
    }).state('Comproducts',{
      url:'Comproducts/{DrugstoreName}',
      templateUrl:'views/admin/Comproducts.html'
    }).state('ScanInfo',{
      url:'/',
      templateUrl:'views/admin/ScanInfo.html'
    });
  }
  config.$inject = ['$stateProvider','$urlRouterProvider'];
  angular.module('app',['ui.router','toggle-switch']).config(config);
})();
