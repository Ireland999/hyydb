(function(){
  function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('SearchList',{
      url:'/VisitLog',
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
      url:'/ScanInfo',
      templateUrl:'views/admin/ScanInfo.html'
    }).state('WorkOrder',{
      url:'/WorkOrder',
      templateUrl:'views/admin/WorkOrder.html'
    }).state('WorkOrder.WorkPending',{
      url:'WorkPending',
      templateUrl:'views/admin/WorkPending.html'
    }).state('WorkOrder.WorkResolve',{
      url:'WorkResolved',
      templateUrl:'views/admin/WorkResolve.html'
    }).state('VisitPlan',{
      url:'/VisitPlan',
      templateUrl:'views/admin/VisitPlan.html'
    }).state('VisitLog',{
      url:'/',
      templateUrl:'views/admin/VisitLog.html'
    });
  }
  config.$inject = ['$stateProvider','$urlRouterProvider'];
  angular.module('app',['ui.router','toggle-switch','ng-bootstrap-datepicker']).config(config);
})();
