'use strict';

// 验证结果
function npmReturnMsg(regParam, value, msgSuccess, msgFail) {
	var reg = regParam.rule;
	var result = {};
	if (!value) {
		result = {
			data: false,
			message: !msgFail ? '输入的值不能为空！' : msgFail
		};
	} else {
		if (reg.test(value)) {
			result = {
				data: true,
				message: !msgSuccess ? '验证成功！' : msgSuccess
			};
		} else {
			result = {
				data: false,
				message: !msgFail ? regParam.msg : msgFail
			};
		}
	}
	return result;
}

// 各种验证
exports.verify = function (data) {
	if (data instanceof Array) {
		var result = {
			data: false,
			message: '请传入正确的值类型！'
		};
		return result;
	} else if (data instanceof Object) {
		var eventName = data.eventName; // 检验时，传入的检验名称
		var value = data.value; // 检验时，传入的检验值
		var msgSuccess = !data.msgSuccess ? null : data.msgSuccess; // 检验成功时，返回的信息
		var msgFail = !data.msgFail ? null : data.msgFail; // 检验失败时，返回的信息
		if (!eventName) {
			var _result = {
				data: false,
				message: '请传入正确的检验名称'
			};
			return _result;
		} else if (eventName == 'checkName') {
			// 验证名字，只能输入字母或数字
			var regParam = {
				rule: /^[0-9a-zA-Z]*$/g,
				msg: '名称需为字母或数字'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		} else if (eventName == 'checkMobile') {
			// 验证11位手机号
			var _regParam = {
				rule: /^[\d]{11}$/,
				msg: '请输入11位正确的手机号'
			};
			return npmReturnMsg(_regParam, value, msgSuccess, msgFail);
		} else if (eventName == 'oneTohundredNum') {
			// 0~100的整数或小数，包括0和100,小数点后最多只能保留两位
			var _regParam2 = {
				rule: /^(\d|[1-9]\d|100)(\.\d{1,2})?$/,
				msg: '请输入0~100的整数或小数，包括0和100,小数点后最多只能保留两位'
			};
			return npmReturnMsg(_regParam2, value, msgSuccess, msgFail);
		} else if (eventName == 'positiveNum') {
			// 只能输入大于0的数字，小数点后最多只能保留两位
			var _regParam3 = {
				rule: /^[1-9]{1}\d*(.\d{1,2})?$|^0.\d{1,2}$/,
				msg: '只能输入大于0的数字，小数点后最多只能保留两位'
			};
			return npmReturnMsg(_regParam3, value, msgSuccess, msgFail);
		} else if (eventName == 'integerZeroInt') {
			// 大于等于0的整数
			var _regParam4 = {
				rule: /^(0|[1-9][0-9]*)$/,
				msg: '请输入大于等于0的整数'
			};
			return npmReturnMsg(_regParam4, value, msgSuccess, msgFail);
		} else if (eventName == 'integerZeroFloat') {
			// 大于等于0的数字，小数点后最多只能保留两位
			var _regParam5 = {
				rule: /^\d+(\.\d{1,2})?$/,
				msg: '请输入大于等于0的数字，小数点后最多只能保留两位'
			};
			return npmReturnMsg(_regParam5, value, msgSuccess, msgFail);
		} else {
			var _result2 = {
				data: false,
				message: '暂无匹配的校验函数'
			};
			return _result2;
		}
	} else {
		var _result3 = {
			data: false,
			message: '请传入正确的值类型！'
		};
		return _result3;
	}
};