(function(){
  angular.module('app').controller("ModelController",ModelController);
  ModelController.$inject=['$scope'];
  function ModelController($scope){
    var ModelLoad=function(){
      var box1Div,box2Div,msgDiv,imgs;
      InputMove();
    };
    var InputMove=function(){ 
      box1Div=document.getElementById('box1');
      box2Div=document.getElementById('box2');
      msgDiv=document.getElementById('msg');
      imgs=document.getElementsByClassName('imgs');
      console.log(imgs);
      //阻止系统默认操作
      box1Div.ondragover=function(e){
        e.preventDefault();
      }
      box2Div.ondragover=function(e){
        e.preventDefault();
      }
      //dataTransfer可以获得拖拽后的信息
      img1.ondragstart=function(e){
        e.dataTransfer.setData("imgId","img1");
      }
      //调用  拖拽ondrap
      box1Div.ondrop=dropImghandler;
      box2Div.ondrop=dropImghandler;
    };
    //显示拖拽信息  封装位公共方法
    var showObj=function(obj){
      var s="";
        for(var k in obj){
          s+=k+":"+obj[k]+"<br/>";
        }
        msgDiv.innerHTML=s;
    };
    //图片拖拽到任意位置 封装位公共方法
    var dropImghandler=function(e){
        showObj(e.dataTransfer);
        //阻止系统默认操作
        e.preventDefault();
        var img=document.getElementById(e.dataTransfer.getData("imgId"));
        // var img2=document.getElementById(e.dataTransfer.getData("imgId2"));
        //获取到位置并把图片放到此位置
        console.log(e.target);
        e.target.appendChild(img);
        // e.target.appendChild(img2);
    };
    $scope.ModelLoad=ModelLoad;
    $scope.InputMove=InputMove;
  }
})();