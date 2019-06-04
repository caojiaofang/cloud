/*
 * 文件名：TestHandler.java
 * 版权：Copyright 2012-2016 YLINK Tech. Co. Ltd. All Rights Reserved. 
 * 描述： TestHandler.java
 * 修改人：lizhi 1708029
 * 修改时间：2019年4月6日
 * 修改内容：新增
 */
package com.cloud.provider.handler;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cloud.db.dao.PropertiesDao;
import com.cloud.db.pojo.PropertiesPOJO;
import com.cloud.utils.httprequest.SamRestfulTemplate;
import com.cloud.utils.json.SamJsonUtil;

/**
 * @Title:  TestHandler.java
 * @Package: com.dm.provider.handler.TestHandler.java
 * @Description: 
 * @Company: ylink
 * @author  lizhi 
 * @date  2019年4月6日 上午11:59:50
 */
@Service
public class TestHandler {

	@Resource
	private PropertiesDao propertiesDao;
	
	@Resource
	private SamRestfulTemplate samRestfulTemplate;
	
	public String getString() {
		PropertiesPOJO propertiesPOJO = propertiesDao.selectById(1l);
		String jsonString = SamJsonUtil.toJson(propertiesPOJO);
		String string = samRestfulTemplate.postString("cloud-web", "", jsonString);
		System.err.println("我是测试，获取到的值是:"+string);
		return propertiesPOJO.toString();
	}
}
