$(document).ready(function() {
	$('#example').DataTable({
		ajax : {
			url : '/datatableload',
			dataSrc : 'aaData'
		},
		columns : [ {
			data : 'nameid'
		},{
			data : 'name'
		}, {
			data : 'position'
		}, {
			data : 'salary'
		}, {
			data : 'start_date'
		}, {
			data : 'office'
		}, {
			data : 'extn'
		} ],
		"lengthMenu" : [ [  25, 50, -1 ], [ 25, 50, "All" ] ],
		"filter": false,//搜索框
		"info": false,           //底部文字
		"paging": true,                     //分页
        //"lengthChange": false,   //选择每页显示多少条数据，下拉选项
		//buttons: [
        //'copy',{ extend: 'excel', enabled: false }
       // 		],
        //dom: 'Bfrtip'		
	});

});

