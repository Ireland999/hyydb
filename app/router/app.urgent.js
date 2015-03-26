(function(){
  function config($stateProvider,$urlRouterProvider){
    // $urlRouterProvider.otherwise("/");
    $stateProvider.state('SearchList',{
      url:'/',
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
    });
  }
  config.$inject = ['$stateProvider','$urlRouterProvider'];
  angular.module('app',['ui.router']).config(config);
})();
