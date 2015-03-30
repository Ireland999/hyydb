define("searchresult:widget/ui/fragment/CacheDetails/CacheDetails.js",function(e,t,i){{var n=(e("common:widget/ui/jquery/jquery.js"),e("common:widget/ui/EventEmitter/EventEmitter.js").eventCenter);i.exports=function(){var e=!1,t=function(){n.on("view.displayed",function(){e||(e=!0)})};return{ini:t}}()}});
;define("searchresult:widget/ui/fragment/PullPopDigest/PullPopDigest.js",function(t,e,i){var a=t("common:widget/ui/jquery/jquery.js"),o=(t("searchresult:widget/ui/base/Fx/Fx.js"),t("searchresult:widget/ui/base/utils/utils.js")),n=t("searchresult:widget/ui/base/Timeline/Timeline.js"),s=t("searchresult:widget/ui/base/statistic/statistic.js"),r=t("common:widget/ui/EventEmitter/EventEmitter.js").eventCenter;BD=window.BD||{},BD.IMG=BD.IMG||{};{var l=function(t,e){var i=a(t),s=parseInt(o.getOffsetTop(t))||0,r=parseInt(o.getOffsetLeft(t))||0,l=parseInt(i.width())||t.offsetWidth||0,d=parseInt(i.height())||t.offsetHeight||0;if(!(isNaN(parseInt(e.top))||isNaN(parseInt(e.left))||isNaN(parseInt(e.width))||isNaN(parseInt(e.height)))){var g=e.top-s,f=e.left-r,h=e.width-l,m=e.height-d,p=n({rander:function(e){t.style.width=h*e+l+"px",t.style.height=m*e+d+"px",t.style.top=g*e+s+"px",t.style.left=f*e+r+"px"},end:e.end});p.init(),p.launch()}};i.exports=function(){function t(t,e){c&&c.setAttribute(t,e)}function e(t){return c?c.getAttribute(t):""}function i(t){for(var e,i=0,a=v.length;a>i;){try{e=v[i],e.call(null,t)}catch(o){}i++}}function n(t){for(var e,i=0,a=w.length;a>i;){try{e=w[i],e.call(null,t)}catch(o){}i++}}function d(t){v.push(t)}function g(t){w.push(t)}function f(t){u.appendChild(t)}function h(){return c}function m(t){var e=a(window),i=e.height(),n=e.scrollTop(),s=o.getParentNode(t,"li"),r=s.offsetHeight,l=o.getOffsetTop(s),d=a("#pullSearch").height(),g=5,f=3,h=l+r-i-n+f,m=n+d-l+g;h>0&&(BD.IMG.autoScroll=!0,window.scrollBy(0,h)),m>0&&(BD.IMG.autoScroll=!0,window.scrollBy(0,-m))}var p,u,c,v=[],w=[],x=0,y=110,b=0,T=9,N=0,M=!0,k={},I={},L=-1,H="",W="",A=-1,D=-1,B=null,E=400,j=function(){"none"!=u.style.display&&(u.style.overflow="hidden",l(u,{top:k.originTop,left:k.originLeft,width:k.originWidth,height:k.originHeight,end:function(){u.style.display="none",u.style.overflow=""}}),z())},z=function(){if(!M){var t=(new Date).getTime()-N;s(null,29,{vtime:t,pn:c.pn,cs:c.contentSign,u:H,f:W}),M=!0,c=null}},S=['<a name="{{=it.linkName}}" target="_blank" href="{{=it.detailURL}}" onmousedown="{{=it.clickFun}}" class="imgLink" style="width:{{=it.imgWidth}}">','<img id="hoverImg" style="width:{{=it.imgWidth}};" src="{{=it.imgURL}}">',"</a>",'<p class="detailDigest">{{=it.digest}}</p>'].join(""),O=doT.template(S),P=['<a name="{{=it.linkName}}" target="_blank" href="{{=it.detailURL}}" onclick="{{=it.clickFun}}" class="imgLink" style="width:{{=it.imgWidth}}">','<img id="hoverImg" style="position:relative;width:{{=it.imgWidth}};z-index:100;top:-1px;left:-1px;border:1px solid #dfdfdf;" src="{{=it.imgURL}}">','<span class="albumBorder" style="border:1px solid #dfdfdf;position:absolute;top:0px;left:0px;display:block;width:{{=it.imgWidth}};height:{{=it.imgHeight}}px;border:1px solid #dfdfdf;z-index:99;background:#fff;"></span>','<span class="albumBorder" style="position:absolute;top:2px;left:2px;display:block;width:{{=it.imgWidth}};height:{{=it.imgHeight}}px;border:1px solid #cacaca;z-index:98;background:#fff;"></span>','<span class="imgSetNum" style="position:absolute;bottom:4px;right:0px;z-index:200;">','<span class="imgSetBg"></span>','<span style="position:relative;z-index:10;">共{{=it.imgsetNum}}张</span>',"</span>","</a>",'<p class="detailDigest">{{=it.digest}}</p>'].join(""),C=doT.template(P),F=['<a name="{{=it.linkName}}" target="_blank" href="{{=it.detailURL}}" onclick="{{=it.clickFun}}" class="imgLink" style="width:{{=it.imgWidth}}">','<img id="hoverImg" style="position:relative;width:{{=it.imgWidth}};z-index:100;top:-1px;left:-1px;border:1px solid #dfdfdf;" src="{{=it.imgURL}}">','<span class="albumBorder" style="border:1px solid #dfdfdf;position:absolute;top:0px;left:0px;display:block;width:{{=it.imgWidth}};height:{{=it.imgHeight}}px;border:1px solid #dfdfdf;z-index:99;background:#fff;"></span>','<span class="albumBorder" style="position:absolute;top:2px;left:2px;display:block;width:{{=it.imgWidth}};height:{{=it.imgHeight}}px;border:1px solid #cacaca;z-index:98;background:#fff;"></span>',"</a>",'<div class="imgSetNum smallImgset" style="position:relative;z-index:200;">','<span class="smallimgset-inner">共{{=it.imgsetNum}}张</span>',"</div>",'<p class="detailDigest">{{=it.digest}}</p>'].join(""),R=doT.template(F),U=function(t){var e=a(t);if(t!=c&&e.hasClass("img-hover")){var i=o.getParentNode(t,"a"),s=o.getParentNode(t,"li");if(i&&s){z(),c=t;var d=t.name.replace("pn","");c.pn=d;var g=0,f=0,h=0,m=s.getElementsByTagName("p")[0],p=O,v=0;if(-1!==s.className.indexOf("imgset")){s=o.getParentNode(t,"div"),g=6,f=2+b,h=b,p=C,v=t.getAttribute("data-imgsetnum");var w=t.getAttribute("data-issmall");"1"===w&&(p=R)}var x=o.getOffsetLeft(s)+b,L=o.getOffsetTop(s),A=Math.min(s.offsetHeight-2*b+2*h,i.offsetHeight),D=Math.min(s.offsetWidth-2*b+2*h,i.offsetWidth),E=parseInt(t.getAttribute("data-width")),j=parseInt(t.getAttribute("data-height")),S=t.offsetWidth,P=t.offsetHeight,F=c.src;c.contentSign=t.getAttribute("data-cs")||0;var U=t.getAttribute("data-hover"),_=t.getAttribute("data-large"),X=t.getAttribute("data-mid");H=o.uncompile(t.getAttribute("data-origin")),W=o.uncompile(t.getAttribute("data-furl"));var Y,J=I[t.name]||F;Y=E>j?o.zoom(E,j,1.3*Math.max(S,P)):o.zoom(E,j,1.3*Math.max(S,P));var K=(Y.width,Y.height),Q=o.getOffsetLeft(i)+b,V=o.getOffsetTop(i),Z=i.href,$=i.name,te=t.getAttribute("data-clickStr"),ee=Math.max(x,Q),ie=Math.min(L,V),ae=Y.width;y>=ae&&(ae=y,ae=Math.max(ae,D));var oe=Y.height+55;u.innerHTML=p({aHeight:Y.height,imgURL:J,imgsetNum:v,digest:m.innerHTML,imgHeight:Y.height,imgWidth:ae>Y.width?Y.width+"px":"100%",detailURL:Z,clickFun:te,linkName:$});var ne=q(Math.max(ee+Math.min(D-ae,0)/2+f,20)-T,ie+(A-K)/2+g-T,ae,oe),se=i.offsetWidth,re=i.offsetHeight,le=q(ee-(Math.max(D,se)-D)/2-T,ie-T,Math.max(D,se),Math.max(A,re));k={top:ne.top,left:ne.left,width:ae,height:oe,originTop:le.top+i.offsetTop,originLeft:le.left,originWidth:Math.max(D,se),originHeight:Math.max(A,re)+T},u.style.width=k.originWidth+"px",u.style.height=k.originHeight+"px",u.style.left=k.originLeft+"px",u.style.top=k.originTop+"px",u.style.overflow="hidden",u.style.display="block";{var de=t.id.replace("img_","");parseInt(t.getAttribute("data-aspdianjing"))}l(u,{top:ne.top+i.offsetTop,left:ne.left,width:ae,height:oe,end:function(){u.style.overflow="",u.style.height="auto";var t=u.getElementsByTagName("img")[0],e=a(".hover-extra-info",u),i=e[0];if(t){var o=t.offsetHeight,s=t.offsetWidth;o&&(t.style.height=o+"px"),s&&(t.style.width=s+"px"),i&&s&&(i.style.width=s-40+"px"),n(t),clearTimeout(B),B=setTimeout(function(){r.trigger("SHOW_IMAGE_MIDDLE",{dom:u,imaId:de,zoom:s/E})},50)}i&&i.offsetHeight>28&&(e.addClass("host-info-wrap"),i.style.width="auto")}}),G([U,_,X,F],t.name),M=!1,N=(new Date).getTime()}}},_=new Image,G=function(t,e){if(!I[e]){var i,o,n=t.length,s=!1;for(o=0;n>o&&!(i=t[o]);o++);_.onerror=function(){for(i="";++o<n&&!(i=t[o]););i&&setTimeout(function(){_.src=i},0)},_.onload=function(){if(!s){s=!0;var t=a("#hoverImg")[0],i=I[e]=_.src;t&&(t.src=i)}},_.src=i}},q=function(t,e,i,n){{var s=a(window),r=s.scrollTop(),l=s.width(),d=s.height(),g=a("#imgid")[0];o.getOffsetTop(g),g.offsetHeight}return t=Math.min(Math.max(t,25),l-i-20),e=Math.max(Math.min(e,r+d-n-40),Math.max(94,r)),{left:t,top:e}},X=function(){p=document.getElementById("imgid"),u=document.createElement("div"),u.id="imgDetail",document.body.appendChild(u),u&&(r.on("strategy.displayData",function(){clearTimeout(x),j()}),r.on("strategy",function(t){var e=(t.state?t.state.type:"",t.state.querySign);L!==e&&(L=e,I={})}),u.onmouseover=function(){clearTimeout(x)},u.onmouseout=function(t){t=t||window.event,clearTimeout(x);for(var e=t.relatedTarget||t.toElement;e&&e!==this;)e=e.parentNode;e!==this&&j()},a(p).on("mousemove",function(t){t=t||window.event;var e=t.srcElement||t.target,n=t.clientX,s=t.clientY;if(Math.abs(n-A)<=1&&Math.abs(s-D)<=1)return void t.stopPropagation(t);A=n,D=s;var r=o.getParentNode(e,"li"),l=a(e);if("img"!=e.tagName.toLowerCase()&&l.hasClass("img-hover")&&r){var d=r.getElementsByTagName("img");d.length>0&&(e=d[0])}return"img"!=e.tagName.toLowerCase()?(clearTimeout(x),void(x=setTimeout(j,100))):(clearTimeout(x),void(x=setTimeout(function(){i(e),U(e)},E)))}),a(document.body).on("mousemove",function(t){t=t||window.event;var e=t.clientX,i=t.clientY;A=e,D=i}),p.onmousedown=p.onmouseout=function(t){t=t||window.event;for(var e=t.relatedTarget||t.toElement;e&&e!==this;)e=e.parentNode;if(e!==this)return clearTimeout(x),void(x=setTimeout(j,100));var e=t.srcElement||t.target;"img"==e.tagName.toLowerCase()&&clearTimeout(x)})};d(m);var Y=function(t){E=t};return{ini:X,setStatistic:z,setAttribute:t,getAttribute:e,addPreFn:d,addAfterFn:g,appendChild:f,setHoverTime:Y,getImgDOM:h}}()}});
;define("searchresult:widget/ui/fragment/DownLoad/DownLoad.js",function(t,e,n){var i=t("common:widget/ui/jquery/jquery.js"),o=t("searchresult:widget/ui/fragment/PullPopDigest/PullPopDigest.js"),a=t("searchresult:widget/ui/base/utils/utils.js"),d=t("searchresult:widget/ui/base/ParamsBus/ParamsBus.js"),r=(t("searchresult:widget/ui/base/statistic/statistic.js"),d.getTplConfItem("ie")||"utf-8"),s=d.getTplConfItem("queryWordEnc"),l=n.exports=function(){var t={containerID:"imgDetail",tpl:'<a title="下载原图" target="_self" href="{{=it.downUrl}}" onclick="return BD.IMG.PictureSave.save(this);" class="download-btn {{=it.downloaded}}"></a>',downloadUrl:"/i?tn=download&ipn=dwnl&word="+s+"&ie="+r+"&fr=result&url={{=it.url}}"};this.options=i.extend(t,this.opts||{})};i.extend(l.prototype,{ini:function(){this.container=document.getElementById(this.options.containerID),this.downloadUrlTplFun=doT.template(this.options.downloadUrl),this.tplFun=doT.template(this.options.tpl);var t=this;o.addAfterFn(function(e){t.render(e)})},render:function(t){var e,n=this,d=o.getImgDOM(),r=d.getAttribute("data-downLoaded")||"0";e=d.getAttribute("data-origin")||t.src,e=a.uncompile(e);var s=this.downloadUrlTplFun({url:encodeURIComponent(e)}),l=this.tplFun({downUrl:s,downloaded:"1"==r?"downloaded":""}),u=i(l);u.on("click",function(){n.update(t)}),this.container.appendChild(u[0])},update:function(){var t=o.getImgDOM();try{t.setAttribute("data-downLoaded","1")}catch(e){}}})});
;define("searchresult:widget/ui/fragment/FestivalLogo/FestivalLogo.js",function(e,i,t){t.exports.init=function(){var e,i,t,n=new Date;if(!("undefined"==typeof window.festivalStartTime||"undefined"==typeof window.festivalEndTime||"undefined"==typeof window.festivalBodyStyle||n<window.festivalStartTime||n>window.festivalEndTime)){e=window.festivalBodyStyle,t=document.body.style;for(i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}}});
;define("searchresult:widget/ui/fragment/HotQueryRecommend/HotQueryRecommend.js",function(e,t,i){function n(e){if(e=e||{},C=e.topConID||C,j=e.pullConID||j,I=e.listWrapID||I,b=e.listID||b,f=e.data,u=w("#"+C)[0],m=w("#"+j)[0],c=w("#"+I)[0],h=w("#"+b)[0],d=w("#hot-view-area")[0],u&&m){if(!c||!h||!f||(parseInt(f.length)||0)<2)return u.style.display="none",void(m.style.display="none");o(),p||(u.style.display="none",m.style.display="none"),l();var t=f.length;E=Math.floor(Math.random()*t),p.innerHTML=s(E)+s(E+1),y.innerHTML=s(E+2)+s(E+3),v.innerHTML=s(E+4)+s(E+5),c.style.visibility="visible",T=setTimeout(r,M)}}function o(){for(var e=[],t=2;t>=0;t--)e.push('<div class="hotq-item-wrap" style="height: '+x+'px;"></div>');h.innerHTML=e.join("");var i=h.getElementsByTagName("div");p=i[0],y=i[1],v=i[2]}function s(e){e%=f.length;var t=f[e];return t=t.substr(0,10),'<a href="/i?ct=201326592&cl=2&nc=1&lm=-1&st=-1&tn=baiduimage&ipn=r&istype=2&fm=hq&pv=&z=0&ie=utf-8&word='+encodeURIComponent(t)+'" onclick="p(event, 54, {hotq:\''+encodeURIComponent(t)+'\'})" class="hot-query-item">'+t+"</a>"}function r(){clearTimeout(T),p&&(g=setTimeout(a,40))}function a(){var e=parseInt(p.style.height,10),t=2;e-=t,t>=e?(clearTimeout(g),h.removeChild(p),E=(E+2)%f.length,p.innerHTML=s(E)+s(E+1),p.style.height=x+"px",h.appendChild(p),p=h.getElementsByTagName("div")[0],H=!1,T=setTimeout(r,M)):(p.style.height=e+"px",H=!0,g=setTimeout(a,40))}function l(){var e=w(d);e.on("mouseover",function(){clearTimeout(T),clearTimeout(g)}),e.on("mouseout",function(e){e=e||window.event;var t=e.toElement||e.relatedTarget;w.contains(d,t)||d===t||(H?a():(clearTimeout(T),T=setTimeout(r,M)))}),q.on("search-box-switch",function(e){e&&("top"===e.state&&u?u.appendChild(c):"fixed"===e.state&&m&&m.appendChild(c))})}var u,m,c,h,d,p,y,v,f,g,T,w=e("common:widget/ui/jquery/jquery.js"),q=e("common:widget/ui/EventEmitter/EventEmitter.js").eventCenter,C=(e("searchresult:widget/ui/base/statistic/statistic.js"),e("searchresult:widget/ui/base/Timeline/Timeline.js"),"top-hot-query-con"),j="pull-hot-query-con",I="hot-query-wrap",b="hot-list",E=0,H=!1,M=5e3,x=20;i.exports={init:n}});
;define("searchresult:widget/ui/fragment/ImageCache/ImageCache.js",function(e,n,t){BD=window.BD||{},BD.IMG=BD.IMG||{};var r=e("common:widget/ui/EventEmitter/EventEmitter.js").eventCenter;BD.IMG.ImageCache=t.exports=function(){function e(){var e="cacheData";r.on("strategy",function(t){e&&e!=t.strategyType||n(t.data)})}function n(e){for(var n=0,r=e.length;r>n;n++){var a=e[n],i=a.pageNum,c=a.matchURL;if(c){if(t[i])return;t[i]=t[i]||{};var o=new Image;t[i]=o,o.onload=o.onerror=function(e,n){return function(){t[e]=1,n=null}}(i,o),o.src=c}}}var t=[];return{getCacheImgArr:function(){return t},ini:e}}()});
;define("searchresult:widget/ui/fragment/fav-num-remind/fav-num-remind.js",function(i,n,t){var e,a=(i("common:widget/ui/jDialog/jDialog.js"),i("common:widget/ui/jquery/jquery.js")),o=0,s=0,l=['<div class="fav-num-remind-arrow" style="display: block">',"</div>"].join(""),d=['<div class="fav-num-remind-tip">','<div class="fav-num-remind-tip-outer">','<div class="fav-num-remind-tip-left">&nbsp;</div>','<div class="fav-num-remind-tip-content">','<div class="fav-num-remind-tip-inner">','<span class="fav-num-remind-tip-text">已临时收藏</span>','<span class="fav-num-remind-tip-text fav-num-remind-tip-num x-count">1</span>','<span class="fav-num-remind-tip-text">张图片，</span>','<div class="fav-num-remind-tip-login"><a>登录</a></div>','<span class="fav-num-remind-tip-text">后可永久保存</span>','<span class="fav-num-remind-tip-text fav-num-remind-tip-close">关闭</span>',"</div>","</div>","</div>","</div>"].join(""),r=(['<div class="fav-num-remind-dialog clearfix">',"<div>",'<div class="fav-num-remind-dialog-close"><a>关闭</a></div>','<div class="fav-num-remind-dialog-h1">图片已收藏在“我的图片”中</div>','<div class="fav-num-remind-dialog-text">登陆后，临时收藏的图片才能被永久保存哦！</div>','<div class="fav-num-remind-dialog-login"><a>登录</a></div>',"</div>","</div>"].join(""),a(".fav-tip")),c=a(".box-normal"),f={left:0,tip:function(){return a(d).appendTo(r)},showArrow:function(){return a(l).appendTo(c)},dialog:function(){},closeDialog:function(){s=0,this.closeArrow()},closeArrow:function(){a(".fav-num-remind-arrow").css("display","none")},closeTip:function(){a(".fav-num-remind-tip").css("display","none"),o=0},islogin:function(){""!=BD.IMG.tplConf.userNumID?(location.reload(),this.closeTip()):(void 0!=e&&(e.close(),f.closeDialog(),s=0),i.async("common:widget/ui/loginBox/loginBox.js",function(i){i.login({success:function(){location.reload()},hide:function(){}})}))},showLocalPicFavCount:function(){setTimeout(function(){i.async("common:widget/ui/browser-storage/browser-storage.js",function(i){var n=i.api.get({key:"_favpic_local_key"});if(n=a.parseJSON(n.value)||[],n.length){var t=a(".fav-num-remind-tip");a(".x-count",t).html(n.length)}})},50)},fixedTheElementOnScroll:function(i,n){if(i=i[0]){n=parseInt(n,10)||0;var t=function(){var t=a(i).offset();"1"!=a(i).attr("data-fixed")&&a(i).attr({"data-original-top":t.top});var e=a(window).scrollTop()+n,o=parseInt(a(i).attr("data-original-top"),10)||0;e>=o?a.browser.msie&&6==parseInt(a.browser.version,10)?a(i).attr({"data-fixed":1}).css({position:"absolute",top:e-o+i.offsetHeight+14,left:0}):"1"!=a(i).attr("data-fixed")&&a(i).attr({"data-fixed":1}).css({position:"fixed",top:n,left:t.left}):(a(i).attr("data-fixed",0),a(i).css({position:"relative",top:"auto",left:"auto"}))};t(),a(window).scroll(t)}},initPos:function(){this.left=a.cookie.get("the_nav_width")-178,a(".fav-num-remind-arrow").css("left",this.left),a.cookie.set("the_tip_arrow_left",this.left,{expires:2592e3})},bindEvent:function(){a(".fav-num-remind-tip-login"),a(".fav-num-remind-dialog-close");a(document).delegate(".fav-num-remind-tip-login, .fav-num-remind-dialog-login","click",this.islogin),a(document).delegate(".fav-num-remind-dialog-close","click",function(){e.close(),f.closeDialog()}),a(document).delegate(".fav-num-remind-tip-close","click",function(){f.closeTip()})},init:function(){var i=window.location.pathname,n=/picturefav/i.test(i);0!=o||n||""!=BD.IMG.tplConf.userNumID||(this.tip(),o=1),n||""!=BD.IMG.tplConf.userNumID||1!=o||(this.showLocalPicFavCount(),this.bindEvent())}};t.exports=f});
;define("searchresult:widget/ui/fragment/fav-picture/fav-picture.js",function(t,e,a){var n=function(){var e=null,a=null,n=null,o=t("common:widget/ui/dropdownlist/dropdownlist.js"),s=t("common:widget/ui/browser-storage/browser-storage.js"),l=t("common:widget/ui/jDialog/jDialog.js"),d=t("searchresult:widget/ui/fragment/fav-num-remind/fav-num-remind.js"),c=t("common:widget/ui/jquery/jquery.js"),u=BD.IMG.tplConf,r=function(t){var e=!(""==u.userNumID);if(!t||"object"!=typeof t||!t.data||"object"!=typeof t.data)throw new Error("提交的收藏参数错误！请参阅文档：http://fe.baidu.com/ss/doc/product/wantu/common.text#6公共的图片收藏组件StaticCommonUiFavPicture");t.data instanceof Array||(t.data=[t.data]),e?t.submitImmediately?m(t,!1):p(t):(d.init(),f(t))},m=function(t,e){var a=t.data,i={bdstoken:u.bdstoken,app_id:"1002","picture_src_list[]":[],album_id:a[0].albumId||"","surl[]":[],"picture_name[]":[]};i["picture_src_list[]"].push(a[0].picUrl||""),i["surl[]"].push(a[0].surl||""),i["picture_name[]"].push(a[0].desc||""),c.post("/picturefav/submit/url",i,function(a){"0"==a.errno?(e!==!1&&x(t,0),t.success&&"function"==typeof t.success&&t.success.call(null,a)):t.success&&"function"==typeof t.success&&t.success.call(null,a)})},f=function(t){var e=s.api.get({key:"_favpic_local_key"});e=c.parseJSON(e.value)||[];var a=!1;c.each(e,function(e,i){var n=i.tag instanceof Array?i.tag.join(";"):i.tag,o=t.tag instanceof Array?t.tag.join(";"):t.tag;return i.picUrl==t.data[0].picUrl&&n==o&&i.desc==t.data[0].desc?(a=!0,!1):void 0}),a||(e.push({picUrl:t.data[0].picUrl,userId:BD.IMG.tplConf.userNumID,surl:t.data[0].surl,desc:t.data[0].desc,originalUrl:t.data[0].originalUrl,detailUrl:t.data[0].detailUrl}),s.api.set({key:"_favpic_local_key",value:BD.IMG.utils.JSONStringify(e),expires:2592e3})),x(t,1)},p=function(t){e?g(t):c.get("/picturefav/data/albumlist",{uid:BD.IMG.tplConf.userNumID},function(a){e=a,g(t)})},v=function(t){return String(t).replace(/[^\x00-\xff]/g,"ci").length},g=function(t){var a,o=0,s=!1,d=function(){for(t.data[0]=c.extend(t.data[0],{albumId:c("#"+n+" select option:selected").val()||c("#"+n+" select option").eq(0).val(),desc:c("#"+_txtDescId).val()}),i=0;i<e.length;i++)e[i].id==t.data[0].albumId&&(o=e[i].picture_num);if(o+1>=5e3&&(c(".mod-sub-waring").css("visibility","visible"),setTimeout(function(){c(".mod-sub-waring").css("visibility","hidden")},2e3),s=!0),0==s){m(t,!0);try{a.close()}catch(l){}}},u=280,r="right-top",f=c(t.elemImg),p=f.offset();p.left+f.width()+u>=c(window).width()&&(r="left-top");var g=(window.location.pathname,f.height()-40),h=20;a=l.tip(w(t.data[0]),{target:t.elemImg,position:r,offset:{top:-11,right:10,left:10,bottom:-g},trianglePosFromStart:h},{width:u,padding:5,dialogClassName:"jDialogBody",showShado:!0,buttons:[{type:"highlight",handler:function(t,e){d(),0==s&&e.close(),s=!1}}],closeOnBodyClick:!0,autoShow:!1,zIndex:900}),a.show(200,function(){a.dom.element.css("overflow","visible")}),a.bind("close",function(){t&&"function"==typeof t.closeFunc&&t.closeFunc.call()}),c("#"+_txtDescId).keydown(function(t){return 10==t.keyCode||13==t.keyCode?(d(),!0):v(c(this).val())>50&&8!==t.keyCode?(t.preventDefault(),t.stopPropagation(),!1):void 0}),b(t.category)},b=function(t){var e=o.create({select:c("#"+a),attrs:{column:5,width:170},box:c(['<div class="x-createalbum">','<div class="box-ipt clearfix">','<input type="text" id="txtNewAlbumName" title="创建新相册">','<button id="btnCreateNewAlbum">创建</button>',"</div>","<div>"].join(""))});e.change(function(){var t=c(this).val();s.api.set({key:"_local_album_key_",value:t,expires:2592e3})});var i=s.api.get({key:"_local_album_key_"});e.val(i.value),h(e,t)},h=function(a,i){var n=function(){var n=t("common:widget/ui/message/message.js");c.post("/albumlist/createalbum",{album_name:c("#txtNewAlbumName").val(),album_scope:1,album_category:i||"",bdstoken:u.bdstoken},function(t){"0"==t.status.code?(a.add({text:t.data.album_name,value:t.data.album_id}).val(t.data.album_id),e.push({id:t.data.album_id,name:t.data.album_name}),c("#txtNewAlbumName").val(""),a.hide(),new n(t.status.msg,{type:"info"})):new n(t.status.msg,{type:"error"})})};c("#txtNewAlbumName").keydown(function(t){return 10==t.keyCode||13==t.keyCode?(n(),!0):v(c(this).val())>50&&8!==t.keyCode?(t.preventDefault(),t.stopPropagation(),!1):void 0}),c("#btnCreateNewAlbum").click(function(){n()})},w=function(t){n="_ddlAlbumBox_"+(new Date).getTime(),_txtDescId="_txtDesc_"+(new Date).getTime(),a="_ddlAlbumId_"+(new Date).getTime();var i=['<select id="',a,'">'];c.each(e,function(t,e){i.push(e.picture_num>=5e3?'<option value="'+e.id+'">'+e.name.substring(0,15)+"(已满5000张）</option>":'<option value="'+e.id+'">'+e.name.substring(0,15)+"</option>")}),i.push("</select>");var o=['<div class="mod-dlg-fav clearfix">','<div class="x-info">','<table class="x-tbl-fav-info">','<tr><td class="x-label">专辑：</td><td class="x-cnt"><div id="',n,'">',i.join(""),"</div></td></tr>",'<tr><td class="x-label">描述：</td><td class="x-cnt"><textarea id="',_txtDescId,'">',t.desc,"</textarea></td></tr>","</table>",'<div class="mod-sub-waring" style="visibility: hidden;">该专辑已满5000张，请收藏到其他专辑</div>',"</div>","</div>"];return o.join("")},x=function(t,e){elemImg=c(t.elemImg);var a=c("#imgDetail"),i=c("#channelNav .x-fav"),n=c(".x-count",i),o=c("<img />").attr({src:elemImg.attr("src")}),s=function(){o.css({position:"absolute",top:parseInt(a.css("top")),left:parseInt(a.css("left")),width:elemImg.width(),height:elemImg.height(),"z-index":1020}).animate({top:i.offset().top+10,left:i.offset().left+50,width:0,height:0},500,"linear",function(){o.remove();var a=c("#fav-add-one");a[0]||(a=c('<span id="fav-add-one">+1</span>').appendTo("body")),a.css({position:"absolute",top:i.offset().top+3,left:i.offset().left-22,"z-index":1020,display:"block",width:"30px",height:"30px","font-size":"30px","font-family":"TAHOMA",color:"#fff",opacity:1}).delay(100).animate({top:"-=30",opacity:0},500,function(){n.html(n.html().replace(/\((\d+)\)/,function(t,e){return parseInt(e,10)+1>=5&&!window.__IS_SEARCH_SHIYAN&&d.dialog(),"("+(parseInt(e,10)+1)+")"})),i.find(".x-last").addClass("x-show"),i.find(".x-wpr").removeClass("x-wpr").addClass("x-wpr-longer"),a.hide(),e&&t.success&&"function"==typeof t.success&&t.success.call(null)})})};o.ready(s),o.appendTo("body")},y=function(){var t=c(".x-fav .x-wpr .x-count"),e=c(".x-wpr");t.is(":hidden")||e.removeClass("x-wpr").addClass("x-wpr-longer"),d.init()};return{submit:r,init:y}}();a.exports=n});
;define("searchresult:widget/ui/fragment/PictureSave/PictureSave.js",function(t,e,a){var i=t("common:widget/ui/jquery/jquery.js"),r=t("searchresult:widget/ui/base/statistic/statistic.js"),s=t("searchresult:widget/ui/base/Fx/Fx.js"),n=t("searchresult:widget/ui/base/utils/utils.js"),o=t("searchresult:widget/ui/fragment/PullPopDigest/PullPopDigest.js"),u=t("searchresult:widget/ui/fragment/fav-picture/fav-picture.js"),d=t("searchresult:widget/ui/base/statistic/statistic.js");BD=window.BD||{},BD.IMG=BD.IMG||{},BD.IMG.ext=BD.IMG.ext||{},BD.IMG.statistic=d;var c=function(){function t(){i=n.str2dom('<div class="save-notify"></div> ')}function e(){i.style.display="none",i.style.bottom="7px"}function a(){var t={elem:i,loops:10,onstart:function(){clearTimeout(r),i.style.bottom="7px",i.style.display="block"},onfinish:function(){clearTimeout(r),r=setTimeout(e,800)},props:[{name:"bottom",from:7,to:24,get:function(){return parseFloat(i.style.bottom)},set:function(t){i.style.bottom=t+"px"}}]};o?o.reset(t):o=new s(t),o.start()}var i,r,o;return{init:t,fadeIn:a,getDOM:function(){return i}}}();BD.IMG.XiangceFav=function(){var t,e,a,r,s,n,o,u,d,c=function(){};return n={add:c},o=function(i){i=i||{appid:"328285",charset:"gb2312"},t=i.appid,e=i.charset,a=i.sourceURL||location.href,r=i.tags||"",s=i.descript||""},d=function(e){var n="http://up.xiangce.baidu.com/opencom/picture/fav/upload?app_id="+t+"&url="+encodeURIComponent(e.url)+"&uid="+encodeURIComponent(e.uid)+"&callback=BD.IMG.XiangceFav.jsonpCallback&descript="+s+"&tags="+r+"&source_url="+encodeURIComponent(e.sourceURL||a)+"&"+Math.random();i.getScript(n)},u=function(t){n.add({result:t.errno,album_sign:t.data.album_sign,user_id:t.data.user_id})},{init:o,submit:d,callback:n,jsonpCallback:u}}(),a.exports=BD.IMG.PictureSave=function(){function t(t){if(e("share-box-normal"),s.title="收藏到“我的图片”",t){var a=t.getAttribute("data-saved"),i=t.getAttribute("data-origin"),r=t.getAttribute("data-desc"),n=t.getAttribute("data-originalUrl"),o=t.getAttribute("data-surl"),u=t.getAttribute("data-picid"),d=t.getAttribute("data-cs"),c=t.getAttribute("data-pn");s.setAttribute("data-pn",c),s.setAttribute("data-origin",i),s.setAttribute("data-desc",r),s.setAttribute("data-originalUrl",n),s.setAttribute("data-surl",o),s.setAttribute("data-picid",u),s.setAttribute("data-cs",d),s.setAttribute("data-pn",c),a===v?(s.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">已保存</div>',s.title="点击查看已收藏图片",w(s,"share-box-saved")):a===m?(w(s,"share-box-saving"),s.title="图片正在收藏中，请稍等",elem.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">保存中</div>'):(s.setAttribute("href","javascript:void(0);"),s.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">保存</div>')}}function e(t){s.className=t}var a,s,d,l,b=null,v="1",g="3",m="2",p=0,f=20026,h=(!(""==BD.IMG.tplConf.userNumID),BD.IMG.tplConf.userNumID),x=i.browser.ie&&6==parseInt(i.browser.version),A=function(){l=[],d=BD.IMG.XiangceFav,a=document.getElementById("imgid"),s=n.str2dom('<a hidefocus="true" href="javascript:void(0);" title="收藏到“我的图片”" class="share-box-normal" onclick=" return BD.IMG.PictureSave.save(this);" >'),c.init(),o.addPreFn(t),o.addAfterFn(function(){o.appendChild(s)}),d.callback.add=function(t){var e,a,i,r,n,u,d,m=l.shift(),h=c.getDOM();if(b=null,m){if(i=m.targetElem,n=m.imgDOM,d=o.getImgDOM(),u=parseInt(t.result),n&&n.parentNode&&n.parentNode.parentNode)switch(u){case p:e=t.album_sign,a=t.user_id,r=e?"http://xiangce.baidu.com/picture/album/list/"+e:"http://xiangce.baidu.com/u/"+a,n.setAttribute("data-saved",v),n.setAttribute("data-yxcURL",r);break;case f:default:n.setAttribute("data-saved",g)}n===d&&(0===u?(s.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">已收藏</div>',s.setAttribute("href",r),s.title="点击查看已收藏图片",w(s,"share-box-saved"),B(s,"share-box-saving"),h&&(h.innerHTML="已收藏")):(s.setAttribute("href","javascript:void(0);"),B(s,"share-box-saving"),s.title="收藏到“我的图片”",s.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">收藏</div>',h&&(h.innerHTML="请重试")),s.parentNode.insertBefore(h,s),h&&c.fadeIn()),l.length>0&&!b&&(b=setTimeout(I,20)),delete m.targetElem,delete m.imgDOM}},x&&(s.onmouseenter=function(t){t=window.event,M(t),w(s,".share-box-hover")},s.onmouseleave=function(t){t=window.event,M(t),B(s,".share-box-hover")})},I=function(){var t=l[0];d.submit({url:t.objURL,uid:h,sourceURL:location.href})},D=function(t){var e=99;i(t).hasClass("share-box-normal")||(t=document.getElementById("imgDetail").getElementsByTagName("a")[2],e=495);var a=t.getAttribute("data-origin"),s=(t.parentNode,i("#hoverImg")),d=t.getAttribute("data-desc"),c=t.getAttribute("data-surl"),l=t.getAttribute("data-originalUrl"),b=(t.getAttribute("data-picid"),t.getAttribute("data-thumburl"),o.getImgDOM());savedTag=o.getAttribute("data-saved"),a=n.uncompile(a),u.submit({data:{picUrl:a,userId:BD.IMG.tplConf.userNumID,surl:c,desc:d,originalUrl:a,detailUrl:l},elemImg:s,success:function(){b.setAttribute("data-saved",v)}}),r(null,e,{cs:t.getAttribute("data-cs"),pn:t.getAttribute("data-pn"),u:encodeURIComponent(a),f:c,saved:m})},M=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},w=function(t,e){-1===t.className.indexOf(e)&&(t.className+=" "+e)},B=function(t,e){var a=new RegExp("\\s*("+e+")\\s*","g");t.className=t.className.replace(a," ")},j=function(t,e){x&&(t=t||window.event,e&&w(e,"share-box-hover"))},y=function(t,e){x&&(t=t||window.event,e&&B(e,"share-box-hover"))},U=function(t,e){x&&w(e,"wrap-hover")},N=function(t,e){x&&B(e,"wrap-hover")};return{init:A,save:D,enterWrapper:U,leaveWrapper:N,mouseEnter:j,mouseLeave:y}}()});
;define("searchresult:widget/ui/fragment/SugRecommend/SugRecommend.js",function(e,o,s){var i=e("common:widget/ui/jquery/jquery.js"),t=e("searchresult:widget/ui/base/statistic/statistic.js"),n={container:'<div id="SugRecommend" ><div id="SugRecBox"><a class="sugTitle" id="hotwordlistinA" ></a><div id="SugContent"></div><a id="SugRecClose"></a></div></div>',display:!0},c=s.exports=function(){this.options=i.extend(n,this.opts||{}),this.kw=i("#kw")[0],1==i.cookie("HideSugRecommend")&&(this.options.display=!1);window.sugrecno=-1};i.extend(c.prototype,{ini:function(){var e=window.hotWordResult||hotWordResult,o=[];if(e){var s=window.hotWordResult||hotWordResult;for(var n in s)""==s[n].url&&(s[n].url="i?ct=201326592&cl=2&nc=1&lm=-1&st=-1&tn=baiduimage&istype=2&fm=index&pv=&z=0&ie=utf-8&word="+encodeURIComponent(s[n].query||s[n].flag)),o.push({href:s[n].url.replace(/fr=[^&]+&/g,"")+"&fr=sugrec",text:s[n].flag||s[n].query})}if(0!=o.length){i(document.body).append(this.options.container),i("#sttb").after('<a class="sttb SugRecDisplay" title="点击查看热搜词" id="SugRecDisplay"><div id="SugRecShow"><div class="tips">想再次查看，请点击这里</div><div class="arrow" ></div></div></a>');var c=this,u=i("#SugRecommend");this.sug=u[0];var d=[];for(var n in o)d.push('<a class="sugline" target="_blank" href="'+o[n].href+'" ><span class="no '+(3>n?"hot":"")+'" >'+(1*n+1)+'</span><span class="sugs" >'+o[n].text+"</span></a>");i("#SugContent").append(d.join("")),i("#SugRecClose").on("click",function(e){t(e,63,{type:"hide"}),c.close(e),c.cookieHide(!0)}),i("#SugRecDisplay").on("click",function(e){t(e,63,{type:"show"}),c.cookieShow(e)}),u.on("click",function(e){e.stopPropagation()}),i("#kw").on("mousedown",function(e){c.enter(e)}).on("keyup",function(e){c.enter(e)}).on("keydown",function(e){c.keydown(e)}).parent().on("click",function(e){e.stopPropagation()});var l=i("#kw3");l.length>0&&l.on("mousedown",function(e){c.enter(e)}).on("keyup",function(e){c.enter(e)}).on("keydown",function(e){c.keydown(e)}).parent().on("click",function(e){e.stopPropagation(e)}),i("#sttb").on("click",function(e){c.close(e)}),i(document.body).on("click",function(e){c.close(e)}),i(window).on("scroll",function(e){c.close(e)});{i(".sugline",this.sug).on("mouseout",function(){i(this).removeClass("sughover"),window.sugrecno=-1}).on("mouseover",function(){i(this).addClass("sughover"),window.sugrecno=0})}0==this.options.display&&c.cookieHide(),this.sug.style.display="none"}},overItem:function(e){i(e).addClass("sughover")},selectItem:function(){},keydown:function(e){if("none"!=this.sug.style.display){var o=e.keyCode||e.which;if(13==o||38==o||40==o){var s=i(".sughover",this.sug);if(13==o)return e.stopPropagation(e),e.preventDefault(e),void(s.length>0&&(window.location=s[0].href));if(38==o)window.sugrecno--;else{if(40!=o)return;window.sugrecno++}this.kw.value="",window.sugrecno<0&&(window.sugrecno=0),window.sugrecno>9&&(window.sugrecno=9),s.length>0&&s.eq(0).removeClass("sughover"),this.overItem(i(".sugline",this.sug)[window.sugrecno])}}},enter:function(e){this.kw=e.target||e.srcElement,this.kw.value.length>0?this.sug&&this.close():this.render.call(this)},render:function(){var e=i(this.kw).offset();this.sug.style.left=e.left-8+"px",this.sug.style.top=e.top+this.kw.clientHeight+4+(i.browser.ie?-2:0)+"px",this.sug.style.width="453px",this.options.display&&(this.sug.style.display="block")},close:function(){this.sug.style.display="none",window.sugrecno=-1},blur:function(){},cookieHide:function(e){this.options.display=!1,i.cookie.set("HideSugRecommend",1,{expires:7776e3}),i("#SugRecDisplay").css("display","block"),window.sugrecno=-1,e&&(i("#SugRecShow").css("display","block"),setTimeout(function(){i("#SugRecShow").css("display","none")},2300)),i("#sttb").addClass("sttbleft")},cookieShow:function(e){this.options.display=!0,i.cookie.set("HideSugRecommend",0,{expires:7776e3}),e&&e.stopPropagation(),this.kw.focus(),this.sug&&(this.render(),i("#SugRecommend").css("display","block")),i("#SugRecDisplay").css("display","none"),i("#sttb").removeClass("sttbleft")}})});
;define("searchresult:widget/ui/fragment/XiangceSave/XiangceSave.js",function(e,t,a){var i=e("common:widget/ui/jquery/jquery.js"),n=e("searchresult:widget/ui/base/statistic/statistic.js"),r=e("searchresult:widget/ui/base/Fx/Fx.js"),s=e("searchresult:widget/ui/base/utils/utils.js"),o=e("searchresult:widget/ui/fragment/PullPopDigest/PullPopDigest.js");BD=window.BD||{},BD.IMG=BD.IMG||{},BD.IMG.ext=BD.IMG.ext||{};var u=function(){function e(){i=s.str2dom('<div class="save-notify"></div> ')}function t(){i.style.display="none",i.style.bottom="7px"}function a(){var e={elem:i,loops:10,onstart:function(){clearTimeout(n),i.style.bottom="7px",i.style.display="block"},onfinish:function(){clearTimeout(n),n=setTimeout(t,800)},props:[{name:"bottom",from:7,to:24,get:function(){return parseFloat(i.style.bottom)},set:function(e){i.style.bottom=e+"px"}}]};o?o.reset(e):o=new r(e),o.start()}var i,n,o;return{init:e,fadeIn:a,getDOM:function(){return i}}}();BD.IMG.XiangceFav=function(){var e,t,a,n,r,s,o,u,c,d=function(){};return s={add:d},o=function(i){i=i||{appid:"328285",charset:"gb2312"},e=i.appid,t=i.charset,a=i.sourceURL||location.href,n=i.tags||"",r=i.descript||""},c=function(t){var s="http://up.xiangce.baidu.com/opencom/picture/fav/upload?app_id="+e+"&url="+encodeURIComponent(t.url)+"&uid="+encodeURIComponent(t.uid)+"&callback=BD.IMG.XiangceFav.jsonpCallback&descript="+r+"&tags="+n+"&source_url="+encodeURIComponent(t.sourceURL||a)+"&"+Math.random();i.getScript(s)},u=function(e){s.add({result:e.errno,album_sign:e.data.album_sign,user_id:e.data.user_id})},{init:o,submit:c,callback:s,jsonpCallback:u}}(),a.exports=BD.IMG.Xiangce=function(){function e(e){if(t("share-box-normal"),r.title="收藏到百度相册",e){var a=e.getAttribute("data-saved"),i=e.getAttribute("data-yxcurl"),n=e.getAttribute("data-origin"),s=e.getAttribute("data-cs"),o=e.getAttribute("data-pn");r.setAttribute("data-pn",o),r.setAttribute("data-origin",n),r.setAttribute("data-cs",s),r.setAttribute("data-pn",o),a===v&&i&&""!==i?(r.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">已保存</div>',r.setAttribute("href",i),r.title="点击查看已收藏图片",B(r,"share-box-saved")):a===b?(B(r,"share-box-saving"),r.title="图片正在收藏中，请稍等",elem.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">保存中</div>'):(r.setAttribute("href","javascript:void(0);"),r.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">保存</div>')}}function t(e){r.className=e}var a,r,c,d,l=null,v="1",p="3",b="2",m=0,g=20026,f=!(""==BD.IMG.tplConf.userid),h=BD.IMG.tplConf.userNumID,x=i.browser.ie&&6==parseInt(i.browser.version),M=function(t){d=[],c=BD.IMG.XiangceFav,a=document.getElementById("imgid"),r=s.str2dom('<a hidefocus="true" href="javascript:void(0);" target="_blank" title="收藏到百度相册" class="share-box-normal" onclick=" return BD.IMG.Xiangce.save(this);" >'),c.init({appid:"328285",charset:"gb2312",sourceURL:location.href,callbackURL:location.protocol+"//"+location.host+"/static/html/favjump.html",tags:encodeURIComponent("百度图片,"+t.query),descript:encodeURIComponent(t.query)}),u.init(),o.addPreFn(e),o.addAfterFn(function(){o.appendChild(r)}),c.callback.add=function(e){var t,a,i,n,s,c,b,f=d.shift(),h=u.getDOM();if(l=null,f){if(i=f.targetElem,s=f.imgDOM,b=o.getImgDOM(),c=parseInt(e.result),s&&s.parentNode&&s.parentNode.parentNode)switch(c){case m:t=e.album_sign,a=e.user_id,n=t?"http://xiangce.baidu.com/picture/album/list/"+t:"http://xiangce.baidu.com/u/"+a,s.setAttribute("data-saved",v),s.setAttribute("data-yxcURL",n);break;case g:default:s.setAttribute("data-saved",p)}s===b&&(0===c?(r.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">已收藏</div>',r.setAttribute("href",n),r.title="点击查看已收藏图片",B(r,"share-box-saved"),L(r,"share-box-saving"),h&&(h.innerHTML="已收藏")):(r.setAttribute("href","javascript:void(0);"),L(r,"share-box-saving"),r.title="收藏到百度相册",r.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">收藏</div>',h&&(h.innerHTML="请重试")),r.parentNode.insertBefore(h,r),h&&u.fadeIn()),d.length>0&&!l&&(l=setTimeout(I,20)),delete f.targetElem,delete f.imgDOM}},x&&(r.onmouseenter=function(e){e=window.event,A(e),B(r,".share-box-hover")},r.onmouseleave=function(e){e=window.event,A(e),L(r,".share-box-hover")})},I=function(){var e=d[0];c.submit({url:e.objURL,uid:h,sourceURL:location.href})},D=function(e){d.push(e),l||(l=setTimeout(I,20))},w=function(e){if(!f)return BD.IMG.ext._loginFromXiangce=1,BD.IMG.ext.loginPop&&BD.IMG.ext.loginPop.show(),!1;var t=e.getAttribute("data-origin"),a=(e.parentNode,o.getAttribute("data-saved"));return t=s.uncompile(t),a===v?(n(null,99,{pn:e.getAttribute("data-pn"),url:encodeURIComponent(t),saved:v}),!0):a===b?!1:(o.setAttribute("data-saved",b),B(e,"share-box-saving"),r.title="图片正在收藏中，请稍等",e.innerHTML='<div class="share-box-mask"></div><div class="share-box-inner">收藏中</div>',D({objURL:t,targetElem:e,imgDOM:o.getImgDOM()}),n(null,99,{pn:e.getAttribute("data-pn"),url:encodeURIComponent(t),saved:b}),!1)},A=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},B=function(e,t){-1===e.className.indexOf(t)&&(e.className+=" "+t)},L=function(e,t){var a=new RegExp("\\s*("+t+")\\s*","g");e.className=e.className.replace(a," ")},j=function(e,t){x&&(e=e||window.event,t&&B(t,"share-box-hover"))},k=function(e,t){x&&(e=e||window.event,t&&L(t,"share-box-hover"))},y=function(e,t){x&&B(t,"wrap-hover")},R=function(e,t){x&&L(t,"wrap-hover")};return{init:M,save:w,enterWrapper:y,leaveWrapper:R,mouseEnter:j,mouseLeave:k}}()});