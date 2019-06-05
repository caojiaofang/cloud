// Panel toolbox
$(document).ready(function() {
    $('.collapse-link').on('click', function() {
        var $BOX_PANEL = $(this).closest('#_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.card-body');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });
    
    //面板折叠/打开
    $('#fold').on('click', function() {
        var $BOX_PANEL = $(this).closest('#_panel1'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.card-body');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-down fa-chevron-up');
    });
    
    //面板折叠/打开
    $('#fold2').on('click', function() {
        var $BOX_PANEL = $(this).closest('#view_panel1'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.card-body');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-down fa-chevron-up');
    });
});

/**
 * 获取选中行的数据
 * @param tableId 表格的ID（bootstrap table）
 * @returns
 */
function getSelectRows(tableId){
	//得到选中行的数据
    var rows = $('#'+tableId).bootstrapTable('getSelections');
    if (rows.length <= 0) {
    	toastr.warning('请选择有效的数据！');
        return;
    }
    return JSON.stringify(rows);
}
/**
 * 删除选中的数据
 * @param url 
 * @param tableId 表格的ID（bootstrap table）
 * @returns
 */
function del(url,tableId){
	var rows = getSelectRows(tableId);
	if(rows != null){
	   //确认对话框
	   swal({ 
		  title: "确定删除吗？", 
		  //text: "你将无法恢复该虚拟文件！", 
		  type: "warning",
		  showCancelButton: true, 
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "确定删除", 
		  cancelButtonText: '取消删除',
		  closeOnConfirm: false
		},function(){
			$.ajax({
				url: url,
				cache: false, //是否启用缓存
				type: "POST", //提交方式
				data: JSON.stringify(rows),
				dataType:'text',    //返回的数据格式：json/xml/html/script/jsonp/text
				success: function(flag){
					//toastr.success('请选择有效的数据！');
					if(flag == 1){
						swal('删除成功','','success')
						$('#'+tableId).bootstrapTable('refresh', "");
					}
				}
			});
		});
		
	}
}
/**
 * 生产option
 * @param jsonObj
 * @param eleId
 * @param doObj
 * @returns
 */
function genOption(jsonObj,eleId,doAttr){
	var str = '<option value="">------请选择------</option>';
	for(var i=0;i<jsonObj.length;i++){
		if(doAttr != null && doAttr == jsonObj[i].enValue){
			str += '<option value="'+ jsonObj[i].enValue +'" selected="selected">'+ jsonObj[i].enName +'</option>';
		}else{
			str += '<option value="'+ jsonObj[i].enValue +'">'+ jsonObj[i].enName +'</option>';
		}
	}
	$("#"+eleId).html(str);
}
function genOptionWith(data ,eleId){
	var str = "";
	for(var i=0; i<data.length; i++){
		if(i == 0){
			str += '<option value="'+ data[i] +'" selected="selected">'+ data[i] +'</option>';
		}else{
			str += '<option value="'+ data[i] +'">'+ data[i]+'</option>';
		}
	}
	$("#"+eleId).html(str);
}
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [ o[this.name] ];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

/**
 * 
 */
function showSelectState(id,message,url){
	$("#"+id).select2({
		placeholder : message,
		style: 'btn-second',
		width : "200px",
		minimumResultsForSearch: -1
	});
	$.ajax({
		type : 'post',
		url :  url,
		dataType : 'json',
		success : function(datas) {// 返回list数据并循环获取
			
			var select = $("#"+id);
			select.empty();
			 for (var key in datas)
			 {
				select.append("<option value='"+key+"'>"+ datas[key] + "</option>");
			 }
		}
	});
	
	
}


//格式化金额
function formatMoney(s) {
    if (/[^0-9\.]/.test(s))
        return "0.00";
    if (s == null || s == "null" || s == "")
        return "0.00";
    s = s.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    var a = s.split(".");
    if (a[1] == "00") {
        s = a[0]+".00";
    }
    return s;
}

//格式化日期20180205
function myformatter(date){  
	var strDate = date.getFullYear()+"";
	if(date.getMonth()<10){
	     var s = date.getMonth()+1+"";
	     strDate += "0"+s;
	}else{
	   strDate += date.getMonth()+1+"";
	}
    
   if(date.getDate()<10){
         strDate += "0"+date.getDate();
   }else{
         strDate += date.getDate();
   }
   return strDate ;
}  