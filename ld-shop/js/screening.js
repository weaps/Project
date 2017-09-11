$(document).ready(function(){
							
	$("#select1 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("filter-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".filter-result dl").append(copyThisA.attr("id", "selectA"));
			}
		}
	});
	
	$("#select2 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("filter-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".filter-result dl").append(copyThisB.attr("id", "selectB"));
			}
		}
	});
	
	$("#select3 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("filter-all")) {
			$("#selectC").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".filter-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}
	});
	
	$("#selectA").live("click", function () {
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectB").live("click", function () {
		$(this).remove();
		$("#select2 .filter-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function () {
		$(this).remove();
		$("#select3 .filter-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$(".filter dd").live("click", function () {
		if ($(".filter-result dd").length > 1) {
			$(".filter-no").hide();
			$(".filter-result").css("display","block");
		} else {
			$(".filter-no").show();
			$(".filter-result").css("display","none");
		}
	});


	//排序

	$("#px-zh").click(function(){
  		$(this).addClass("curr");
  		$("#px-volume,#px-price").removeClass("curr");
  	});
  	$("#px-volume").click(function(){
  		$(this).addClass("curr");
  		$("#px-zh,#px-price").removeClass("curr");
  	});

  	$("#px-price").click(function(){
  		$(this).addClass("curr");
  		$("#px-zh,#px-volume").removeClass("curr");
  	});

	
});