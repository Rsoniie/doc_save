(function($,_2,_3){
setTimeout(function(){
$.fn.simplyScroll=function(_4){
return this.each(function(){
new $.simplyScroll(this,_4);
});
};
var _5={customClass:"simply-scroll",frameRate:10,speed:2,orientation:"horizontal",auto:true,autoMode:"loop",manualMode:"end",direction:"backwards",pauseOnHover:true,pauseOnTouch:true,pauseButton:false,startOnLoad:false};
$.simplyScroll=function(el,_7){
var _8=this;
this.o=$.extend({},_5,_7||{});
this.isAuto=this.o.auto!==false&&this.o.autoMode.match(/^loop|bounce$/)!==null;
this.isHorizontal=this.o.orientation.match(/^horizontal|vertical$/)!==null&&this.o.orientation==_5.orientation;
this.isRTL=this.isHorizontal&&$("html").attr("dir")=="rtl";
this.isForwards=!this.isAuto||(this.isAuto&&this.o.direction.match(/^forwards|backwards$/)!==null&&this.o.direction==_5.direction)&&!this.isRTL;
this.isLoop=this.isAuto&&this.o.autoMode=="loop"||!this.isAuto&&this.o.manualMode=="loop";
this.supportsTouch=("createTouch" in document);
this.events=this.supportsTouch?{start:"touchstart MozTouchDown",move:"touchmove MozTouchMove",end:"touchend touchcancel MozTouchRelease"}:{start:"mouseenter",end:"mouseleave"};
this.$list=$(el);
var _9=this.$list.children();
this.$list.addClass("simply-scroll-list").wrap("<div class=\"simply-scroll-clip\"></div>").parent().wrap("<div class=\""+this.o.customClass+" simply-scroll-container\"></div>");
if(_9.length>1){
var _a=false,_b=0;
if(this.isHorizontal){
_9.each(function(){
_b+=$(this).outerWidth(true);
});
_a=_9.eq(0).outerWidth(true)*_9.length!==_b;
}else{
_9.each(function(){
_b+=$(this).outerHeight(true);
});
_a=_9.eq(0).outerHeight(true)*_9.length!==_b;
}
if(_a){
this.$list=this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list");
if(this.isHorizontal){
this.$list.children().css({"float":"left",width:_b+"px"});
}else{
this.$list.children().css({height:_b+"px"});
}
}
}
if(!this.o.startOnLoad){
this.init();
}else{
$(_2).load(function(){
_8.init();
});
}
};
$.simplyScroll.fn=$.simplyScroll.prototype={};
$.simplyScroll.fn.extend=$.simplyScroll.extend=$.extend;
$.simplyScroll.fn.extend({init:function(){
this.$items=this.$list.children();
this.$clip=this.$list.parent();
this.$container=this.$clip.parent();
this.$btnBack=$(".simply-scroll-back",this.$container);
this.$btnForward=$(".simply-scroll-forward",this.$container);
if(!this.isHorizontal){
this.itemMax=this.$items.eq(0).outerHeight(true);
this.clipMax=this.$clip.height();
this.dimension="height";
this.moveBackClass="simply-scroll-btn-up";
this.moveForwardClass="simply-scroll-btn-down";
this.scrollPos="Top";
}else{
this.itemMax=this.$items.eq(0).outerWidth(true);
this.clipMax=this.$clip.width();
this.dimension="width";
this.moveBackClass="simply-scroll-btn-left";
this.moveForwardClass="simply-scroll-btn-right";
this.scrollPos="Left";
}
this.posMin=0;
this.posMax=this.$items.length*this.itemMax;
var _c=Math.ceil(this.clipMax/this.itemMax);
if(this.isAuto&&this.o.autoMode=="loop"){
this.$list.css(this.dimension,this.posMax+(this.itemMax*_c)+"px");
this.posMax+=(this.clipMax-this.o.speed);
if(this.isForwards){
this.$items.slice(0,_c).clone(true).appendTo(this.$list);
this.resetPosition=0;
}else{
this.$items.slice(-_c).clone(true).prependTo(this.$list);
this.resetPosition=this.$items.length*this.itemMax;
if(this.isRTL){
this.$clip[0].dir="ltr";
this.$items.css("float","right");
}
}
}else{
if(!this.isAuto&&this.o.manualMode=="loop"){
this.posMax+=this.itemMax*_c;
this.$list.css(this.dimension,this.posMax+(this.itemMax*_c)+"px");
this.posMax+=(this.clipMax-this.o.speed);
var _d=this.$items.slice(0,_c).clone(true).appendTo(this.$list);
var _e=this.$items.slice(-_c).clone(true).prependTo(this.$list);
this.resetPositionForwards=this.resetPosition=_c*this.itemMax;
this.resetPositionBackwards=this.$items.length*this.itemMax;
var _f=this;
this.$btnBack.bind(this.events.start,function(){
_f.isForwards=false;
_f.resetPosition=_f.resetPositionBackwards;
});
this.$btnForward.bind(this.events.start,function(){
_f.isForwards=true;
_f.resetPosition=_f.resetPositionForwards;
});
}else{
this.$list.css(this.dimension,this.posMax+"px");
if(this.isForwards){
this.resetPosition=0;
}else{
this.resetPosition=this.$items.length*this.itemMax;
if(this.isRTL){
this.$clip[0].dir="ltr";
this.$items.css("float","right");
}
}
}
}
this.resetPos();
this.interval=null;
this.intervalDelay=Math.floor(2000/this.o.frameRate);
if(!(!this.isAuto&&this.o.manualMode=="end")){
while(this.itemMax%this.o.speed!==0){
this.o.speed--;
if(this.o.speed===0){
this.o.speed=1;
break;
}
}
}
var _f=this;
this.trigger=null;
this.funcMoveBack=function(e){
if(e!==_3){
e.preventDefault();
}
_f.trigger=!_f.isAuto&&_f.o.manualMode=="end"?this:null;
if(_f.isAuto){
_f.isForwards?_f.moveBack():_f.moveForward();
}else{
_f.moveBack();
}
};
this.funcMoveForward=function(e){
if(e!==_3){
e.preventDefault();
}
_f.trigger=!_f.isAuto&&_f.o.manualMode=="end"?this:null;
if(_f.isAuto){
_f.isForwards?_f.moveForward():_f.moveBack();
}else{
_f.moveForward();
}
};
this.funcMovePause=function(){
_f.movePause();
};
this.funcMoveStop=function(){
_f.moveStop();
};
this.funcMoveResume=function(){
_f.moveResume();
};
if(this.isAuto){
this.paused=false;
function togglePause(){
if(_f.paused===false){
_f.paused=true;
_f.funcMovePause();
}else{
_f.paused=false;
_f.funcMoveResume();
}
return _f.paused;
}
if(this.isAuto&&this.o.pauseOnHover&&!this.supportsTouch){
this.$clip.bind(this.events.start,this.funcMovePause).bind(this.events.end,this.funcMoveResume);
}else{
if(this.isAuto&&this.o.pauseOnTouch&&!this.o.pauseButton&&this.supportsTouch){
var _12,_13;
this.$clip.bind(this.events.start,function(e){
togglePause();
var _15=e.originalEvent.touches[0];
_12=_f.isHorizontal?_15.pageX:_15.pageY;
_13=_f.$clip[0]["scroll"+_f.scrollPos];
e.stopPropagation();
e.preventDefault();
}).bind(this.events.move,function(e){
e.stopPropagation();
e.preventDefault();
var _17=e.originalEvent.touches[0],_18=_f.isHorizontal?_17.pageX:_17.pageY,pos=(_12-_18)+_13;
if(pos<0){
pos=0;
}else{
if(pos>_f.posMax){
pos=_f.posMax;
}
}
_f.$clip[0]["scroll"+_f.scrollPos]=pos;
_f.funcMovePause();
_f.paused=true;
});
}else{
if(this.o.pauseButton){
this.$btnPause=$(".simply-scroll-btn-pause",this.$container).bind("click",function(e){
e.preventDefault();
togglePause()?$(this).addClass("active"):$(this).removeClass("active");
});
}
}
}
this.funcMoveForward();
}else{
this.$btnBack.addClass("simply-scroll-btn"+" "+this.moveBackClass).bind(this.events.start,this.funcMoveBack).bind(this.events.end,this.funcMoveStop);
this.$btnForward.addClass("simply-scroll-btn"+" "+this.moveForwardClass).bind(this.events.start,this.funcMoveForward).bind(this.events.end,this.funcMoveStop);
if(this.o.manualMode=="end"){
!this.isRTL?this.$btnBack.addClass("disabled"):this.$btnForward.addClass("disabled");
}
}
},moveForward:function(){
var _1b=this;
this.movement="forward";
if(this.trigger!==null){
this.$btnBack.removeClass("disabled");
}
_1b.interval=setInterval(function(){
if(_1b.$clip[0]["scroll"+_1b.scrollPos]<(_1b.posMax-_1b.clipMax)){
_1b.$clip[0]["scroll"+_1b.scrollPos]+=_1b.o.speed;
}else{
if(_1b.isLoop){
_1b.resetPos();
}else{
_1b.moveStop(_1b.movement);
}
}
},_1b.intervalDelay);
},moveBack:function(){
var _1c=this;
this.movement="back";
if(this.trigger!==null){
this.$btnForward.removeClass("disabled");
}
_1c.interval=setInterval(function(){
if(_1c.$clip[0]["scroll"+_1c.scrollPos]>_1c.posMin){
_1c.$clip[0]["scroll"+_1c.scrollPos]-=_1c.o.speed;
}else{
if(_1c.isLoop){
_1c.resetPos();
}else{
_1c.moveStop(_1c.movement);
}
}
},_1c.intervalDelay);
},movePause:function(){
clearInterval(this.interval);
},moveStop:function(_1d){
this.movePause();
if(this.trigger!==null){
if(typeof _1d!=="undefined"){
$(this.trigger).addClass("disabled");
}
this.trigger=null;
}
if(this.isAuto){
if(this.o.autoMode=="bounce"){
_1d=="forward"?this.moveBack():this.moveForward();
}
}
},moveResume:function(){
this.movement=="forward"?this.moveForward():this.moveBack();
},resetPos:function(){
this.$clip[0]["scroll"+this.scrollPos]=this.resetPosition;
}});

  $(function() {
    $("#scroller").simplyScroll({
      orientation: 'vertical',
      customClass: 'vert'
    });
  });
}, 300);
})(jQuery,window);
