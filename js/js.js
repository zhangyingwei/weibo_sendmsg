$(document).ready(function(){
	creatFaces();
	addAction();
	buClick();
	changes();
})

function creatFaces(){
	var ElObj = $('.m_faces');

	var ul_ = '<ul>'
	for (var i = 1; i <= 88; i++) {
		var li_ = "<li><img src='images/faces/wb ("+i+").gif'></li>";
		ul_+=li_;
	}
	ul_+='</ul>';

	ElObj.append(ul_);
}

function showFace(){
	$('.m_faces').toggle("fast");
}

function addAction(){
	$(".msg .m_faces ul li img").click(function(){
		//$(".msg .m_face").append(showIme());
		$(".msg .m_msg").append(showIme(this).clone(true));

	});
}

function showIme(obj){
	var $v = $(obj);
	return $v;
}

function buClick(){
	$(".m_bu").click(function(){
		fabiao();
	});
}

function fabiao(){
	var showBox = $(".showF");
	var textBox = $(".showF .s_msg");
	var s_text = $(".m_msg").html();

	if(s_text==''||s_text==null){
		$(".msg .m_msg").focus();
		return;
	}
	textBox.html(s_text);

	$('.showBox').prepend(showBox.clone(true).removeClass().addClass("show"));
	$('.show').slideDown("1000");

	$(".msg .m_msg").text('');
}

function changes(){
	var sum = 39*3-6;
	setInterval(function(){	
		var len = $(".msg .m_msg").html().replace(/[<img*>]/g,'').length;
		var z = sum-len;
		if(z<=0){
			return;
		}
		$(".msg .m_sum span").text(z);
	},300);
}