!function(){function a(a){a.state("SearchList",{url:"/",templateUrl:"views/admin/SearchList.html"}).state("SearchList.SearchResolved",{url:"SearchResolved",templateUrl:"views/admin/SearchResolved.html"}).state("SearchList.SearchPending",{url:"SearchPending",templateUrl:"views/admin/SearchPending.html"}).state("Comproducts",{url:"Comproducts/{DrugstoreName}",templateUrl:"views/admin/Comproducts.html"})}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app",["ui.router"]).config(a)}(),function(){function a(a,b){var c=function(){document.title="竞品调研",d(),console.log(b)},d=function(){a.DrugstoreName=b.DrugstoreName,a.items=[{FactoryName:"三金药业",DrugsName:"消渴降糖胶囊"},{FactoryName:"振林药业",DrugsName:"消渴降糖胶囊"},{FactoryName:"三金药业",DrugsName:"止咳糖浆"}]};a.ComproductsLoad=c,a.ComproList=d}angular.module("app").controller("ComproductsController",a),a.$inject=["$scope","$stateParams"]}(),function(){function a(a){var b=function(){document.title="调研工单",c()},c=function(){a.items=[{DrugstoreName:"大众宝泰医药（现代店）"},{ListCount:"10"},[{IssuedId:1,IssuedName:"001单品委员会下达",timestamp:"2015-03-01",IssuedContent:"调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.",IssuedContent1:"调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动."},{IssuedId:2,IssuedName:"001单品委员会下达",timestamp:"2015-03-01",IssuedContent:"调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.",IssuedContent1:"1"}]]},d=function(b){console.log(b);for(var c=0;c<a.items[2].length;c++)if(b==a.items[2][c].IssuedId){console.log("true"),console.log(a.items[2][c].IssuedId);var d=document.getElementsByClassName("row2");console.log(d[c]),d[c].css("height","auto")}else if(b!=a.items[2][c].IssuedId||void 0==b){var d=document.getElementsByClassName("row2");console.log(d[c]),d[c].css("height","60px"),d[c].css("overflow","hidden")}};a.SearchPendLoad=b,a.ShowAll=d}angular.module("app").controller("SearchPendController",a),a.$inject=["$scope"]}(),function(){function a(a){var b=function(){document.title="调研工单",c()},c=function(){a.items=[{DrugstoreName:"大众宝泰医药（现代店）"},{ListCount:"10"},[{IssuedId:1,IssuedName:"001单品委员会下达",timestamp:"2015-03-01",IssuedContent:"调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.",IssuedContent1:"调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动."},{IssuedId:2,IssuedName:"001单品委员会下达",timestamp:"2015-03-01",IssuedContent:"调研三金药业 消渴降糖胶囊、通化长城药业 消渴降糖胶囊的销售价格和销售活动.",IssuedContent1:"1"}]]};a.SearchResolvedLoad=b}angular.module("app").controller("SearchResolvedController",a),a.$inject=["$scope"]}();