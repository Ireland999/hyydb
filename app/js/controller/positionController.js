(function(){
  angular.module('app').controller("positionController",positionController);
  positionController.$inject=['$scope'];
  function positionController($scope){
    var loder=function(){
      var rad1=$('#rad');
      $(rad1[0]).hide();
      console.log(rad1);
    };
    var search=function(){
      var rad1=$('#rad');
      $(rad1[0]).show();
    };
    var choose=function(){
      var radio2=document.getElementsByName("radiobutton");
          var se_value=null;   //  selectvalue为radio中选中的值
          for(var i=0;i<radio.length;i++){
            if(radio2[i].checked==true) {
              se_value=radio2[i].value;
              console.log(se_value);
              $scope.mm=se_value;
              console.log($scope.aa);
              // var rad1=$('#rad1');
              // $(rad1[0]).show();
             }
          }
    }
    $scope.loder=loder;
    $scope.search=search;
    $scope.choose=choose;
   }
})()

// <input type="text" id="box" /><input type="button" value="查询" onclick="search()" />
// <script>
// function search() {
//     var search_value = document.getElementById('box').value;
//     var url = 'other.html';
//     switch(search_value) {
//         case 'aaa':
//             url = '0001.html';
//             break;
//         case 'bbb':
//             url = '0002.html';
//             break;
//         case 'ccc':
//             url = '0003.html';
//             break;
//     }
//     location = url;
// }
// </script>