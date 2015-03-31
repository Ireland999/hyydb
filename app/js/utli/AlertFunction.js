function DivFunction(){
    var div1=$('<div class="modal fade" id="myModal" tabindex="-1" role="dialog"aria-labelledby="myModalLabel" aria-hidden="true"></div>');
    var div2=$('<div class="modal-dialog"></div>');
    var div3=$('<div class="modal-content"></div>');
    var div4=$('<div class="modal-header"></div>');
    var div5=$('<div class="modal-body"></div>');
    var h4=$('<h4 class="modal-title" id="myModalLabel">提示信息</h4>');
    h4.appendTo(div4);
    div4.appendTo(div3);
    div5.appendTo(div3);
    div3.appendTo(div2);
    div2.appendTo(div1);
    var div=$('.visitlog');
    div.data-toggle="modal";
    div.data-target="#myModal";
};