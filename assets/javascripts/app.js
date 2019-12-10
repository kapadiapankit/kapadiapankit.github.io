$(document).ready(function(){
	var winHeight = $(window).height();
	$("#home").height(winHeight);
	typeIt($(".typeIt"), 40);
	$(".scroll-down").on("click", function(){
		$("html, body").animate({
			scrollTop : winHeight
		}, 1000);
	});
	themeChanger(["#EF8354","#2D3142"]);
});

$(window).scroll(function(){
	if($(window).scrollTop() > 100){
		if(!$("header").hasClass("scrolled")){
			$("header").addClass("scrolled");
		}
	} else {
		$("header").removeClass("scrolled");
	}
});

function themeChanger(colors = []){
	var totalColors = colors.length;
	if(totalColors > 1){
		var index = 0;
		setInterval(function(){
			$("meta[name=theme-color]").attr("content", colors[index]);
			if(index+1 === totalColors){
				index = 0;
			} else {
				index++;
			}
		}, 5000);
	}
}

function typeIt(obj, tspeed){
	var typeBox = obj[0];
	var typeText = typeBox.innerHTML;
	var typeLength = typeText.length;
	var typed = "";
	var isTag = false;
	typeBox.innerHTML = "";
	function typing(isTag, typed){
		if(isTag){
			typeBox.innerHTML = typed;
		} else {
			setTimeout(function(){
				typeBox.innerHTML = typed + "<span class='blinkIt'>|</span>";
			}, tspeed*i)
		}
	}
	for(i = 0; i < typeLength; i++){
		if(typeText[i] === "<" || typeText[i] === "&")
			isTag = true
		if(typeText[i] === ">" || typeText[i] === ";")
			isTag = false
		typed += typeText[i];
		typing(isTag, typed);
	}
}

// Object.prototype didn't work with jquery animate

// Object.prototype.typeIt = function(tspeed){
// 	var typeBox = this[0];
// 	var typeText = typeBox.innerHTML;
// 	var typeLength = typeText.length;
// 	var typed = "";
// 	var isTag = false;
// 	typeBox.innerHTML = "";
// 	function typing(isTag, typed){
// 		if(isTag){
// 			typeBox.innerHTML = typed;
// 		} else {
// 			setTimeout(function(){
// 				typeBox.innerHTML = typed + "<span class='blinkIt'>|</span>";
// 			}, tspeed*i)
// 		}
// 	}
// 	for(i = 0; i < typeLength; i++){
// 		if(typeText[i] === "<" || typeText[i] === "&")
// 			isTag = true
// 		if(typeText[i] === ">" || typeText[i] === ";")
// 			isTag = false
// 		typed += typeText[i];
// 		typing(isTag, typed);
// 	}
// }