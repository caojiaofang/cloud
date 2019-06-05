//通过枚举值获取到枚举说明
function prHvbpEnum(value){
	var str = "";
	if(value != "" && value != null){
		var selectData = {};
		selectData.enValue = value;
		$.ajax({
			url: "/common/getPrhvbpEnName",
			async: false,  //同步回应
			cache: false, //是否启用缓存
			type: "POST", //提交方式
			data: selectData,
			success: function(data){
				str = data;
			},
			error : function() {
				str = value;
			}
		});
	}
	return str;
}

//通过记账状态枚举值获取到枚举说明
function chargeSatusEnum(value){
	var str = "";
	if(value != "" && value != null){
		var selectData = {};
		selectData.enValue = value;
		$.ajax({
			url: "/common/getChargeSatusEnName",
			async: false,  //同步回应
			cache: false, //是否启用缓存
			type: "POST", //提交方式
			data: selectData,
			success: function(data){
				str = data;
			},
			error : function() {
				str = value;
			}
		});
	}
	return str;
}
//通过记账状态枚举值获取到枚举说明
function remitStatusEnum(value){
	var str = "";
	if(value != "" && value != null){
		var selectData = {};
		selectData.enValue = value;
		$.ajax({
			url: "/common/getRemitStatusEnName",
			async: false,  //同步回应
			cache: false, //是否启用缓存
			type: "POST", //提交方式
			data: selectData,
			success: function(data){
				str = data;
			},
			error : function() {
				str = value;
			}
		});
	}
	return str;
}