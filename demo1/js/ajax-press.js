jQuery(document).ready(function($)
{var AJP=AJP||{};AJP.AJAX_POSTS=function()
{this.postsContainer=jQuery('.js-press-items-container');this.postItem=jQuery('.press-item',this.postsContainer);this.postsLoadButton=jQuery('.js-load-more');this.loaderBox=jQuery('.load-progress');};AJP.AJAX_POSTS.prototype=(function()
{var init=function()
{var root=this,next_page=2;if(!this.postsContainer.length)return;this.postsLoadButton.on('click',function(eo)
{eo.preventDefault();showLoader.call(root);jQuery.ajax({url:'/press/page/'+ next_page,type:'GET',dataType:'json',cache:false,success:function(response)
{if(response.isLastPage){root.postsLoadButton.hide();root.loaderBox.hide();}
else{hideLoader.call(root);next_page++;}
root.postsContainer.append(response.html).imagesLoaded().then(function(){var
win$=$(window),newsText$=$('.de-text-frame'),newsImg$=$('.de-blog-img'),newsImg$EQ,newsText$EQ;if(win$.width()>768){$(newsText$).css('height','');newsText$EQ=new EqualBlocksHeight($(newsText$),{splitBy:3,isResizable:true,isFullLoaded:true,isBoxSized:true});$(newsImg$).css('height','');newsImg$EQ=new EqualBlocksHeight($(newsImg$),{splitBy:3,isResizable:true,isFullLoaded:true,isBoxSized:true});}else if(win$.width()>480&&win$.width()<=768){$(newsText$).css('height','');newsText$EQ=new EqualBlocksHeight($(newsText$),{splitBy:2,isResizable:true,isFullLoaded:true,isBoxSized:true});$(newsImg$).css('height','');newsImg$EQ=new EqualBlocksHeight($(newsImg$),{splitBy:2,isResizable:true,isFullLoaded:true,isBoxSized:true});}else{$(newsText$).css('height','');$(newsImg$).css('height','');}
$(window).on('orientationchange resize',function(){if(win$.width()>768){$(newsText$).css('height','');newsText$EQ=new EqualBlocksHeight($(newsText$),{splitBy:3,isResizable:true,isFullLoaded:true,isBoxSized:true});$(newsImg$).css('height','');newsImg$EQ=new EqualBlocksHeight($(newsImg$),{splitBy:3,isResizable:true,isFullLoaded:true,isBoxSized:true});}else if(win$.width()>480&&win$.width()<=768){$(newsText$).css('height','');newsText$EQ=new EqualBlocksHeight($(newsText$),{splitBy:2,isResizable:true,isFullLoaded:true,isBoxSized:true});$(newsImg$).css('height','');newsImg$EQ=new EqualBlocksHeight($(newsImg$),{splitBy:2,isResizable:true,isFullLoaded:true,isBoxSized:true});}else{$(newsText$).css('height','');$(newsImg$).css('height','');}});});}});});$.fn.imagesLoaded=function(){var $imgs=$('.js-press-items-container').find('img[src!=""]');if(!$imgs.length){return $.Deferred().resolve().promise();}
var dfds=[];$imgs.each(function(){var dfd=$.Deferred();dfds.push(dfd);var img=new Image();img.onload=function(){dfd.resolve();}
img.onerror=function(){dfd.resolve();}
img.src=this.src;});return $.when.apply($,dfds);}},showLoader=function()
{this.postsLoadButton.hide();this.loaderBox.show();},hideLoader=function()
{this.postsLoadButton.show();this.loaderBox.hide();};return{init:init};}());var ajax_posts=new AJP.AJAX_POSTS();ajax_posts.init();});