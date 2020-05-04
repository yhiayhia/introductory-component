$("#validation_form").submit(function (event) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([az]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x0\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	event.preventDefault();
	if ($(window).width()<376) {
	//to return to the height of form container if it was changed by error messages
		$("#form_container").css("height","300px");

	}else{
		$(".form_container_desktop_design").css("height","350px");


	}
	//return to the natural style of inputs
	var height=$("#form_container").height();
	$("#first_name").removeClass("error");
	$("#first_name").addClass("input");
	$("#first_name_err_msg").css("display","none");

	$("#last_name").removeClass("error");
	$("#last_name").addClass("input");
	$("#last_name_err_msg").css("display","none");

	$("#email").removeClass("error");
	$("#email").addClass("input");
	$("#email_err_msg").css("display","none");
	$("#invalid_email").css("display","none")

	$("#password").removeClass("error");
	$("#password").addClass("input");
	$("#password_err_msg").css("display","none");

	if($("#first_name").val()==''){
		$("#first_name").removeClass("input");
		$("#first_name").addClass("error");
		$("#first_name_err_msg").css("display","inline");
		$("#form_container").css("height",height+17);
	}

	if($("#last_name").val()==''){
		$("#last_name").removeClass("input");
		$("#last_name").addClass("error");
		$("#last_name_err_msg").css("display","inline");
		height=$("#form_container").height();
		$("#form_container").css("height",height+17);
	}

	if($("#email").val()==''){
		$("#email").removeClass("input");
		$("#email").addClass("error");
		$("#email_err_msg").css("display","inline");
		height=$("#form_container").height();
		$("#form_container").css("height",height+17);
	}

	if($("#password").val()==''){
		$("#password").removeClass("input");
		$("#password").addClass("error");
		$("#password_err_msg").css("display","inline");
		height=$("#form_container").height();
		$("#form_container").css("height",height+17);
	}

	if (!pattern.test($("#email").val()) & $("#email").val()!=='') {
		$("#email").removeClass("input");
		$("#email").addClass("error");
		$("#invalid_email").css("display","inline");
		height=$("#form_container").height();
		$("#form_container").css("height",height+17);

	}

	// body...
});












