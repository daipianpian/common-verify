// 验证结果
function npmReturnMsg(regParam, value, msgSuccess, msgFail) {
	let reg = regParam.rule;
	let result = {};
	if(!value){
		result = {
			data: false,
			message: !msgFail?'输入的值不能为空！':msgFail
		};
	}else{
		if (reg.test(value)) {
			result = {
				data: true,
				message: !msgSuccess?'验证成功！':msgSuccess
			};
		}else{
			result = {
				data: false,
				message: !msgFail?regParam.msg:msgFail
			};
		}
	}
	return result;
}

// 各种验证
exports.verify = function(data){
	if(data instanceof Array){
		let result = {
			data: false,
			message: '请传入正确的值类型！'
		};
        return result;
    }else if(data instanceof Object){
		let eventName = data.eventName;  // 检验时，传入的检验名称
		let value = data.value;  // 检验时，传入的检验值
		let msgSuccess = !data.msgSuccess?null:data.msgSuccess;  // 检验成功时，返回的信息
		let msgFail = !data.msgFail?null:data.msgFail;  // 检验失败时，返回的信息
		if(!eventName){
			let result = {
				data: false,
				message: '请传入正确的检验名称'
			};
	        return result;
		}else if(eventName == 'checkName'){
			// 验证名字，只能输入字母或数字
			const regParam = {
				rule: /^[0-9a-zA-Z]*$/g,
				msg: '名称需为字母或数字'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'checkMobile'){
			// 验证11位手机号
			const regParam = {
				rule: /^[\d]{11}$/,
				msg: '请输入11位正确的手机号'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'securityCodeFour'){
			// 验证4位数字的验证码
			const regParam = {
				rule: /^[\d]{4}$/,
				msg: '请输入4位数字的验证码'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'securityCodeSix'){
			// 验证6位数字的验证码
			const regParam = {
				rule: /^[\d]{6}$/,
				msg: '请输入6位数字的验证码'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'checkPassword'){
			// 密码长度为6~15位，须包含数字、字母至少2种以上元素
			const regParam = {
				rule: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,15}$/,
				msg: '请输入密码长度为6~15位，须包含数字、字母至少2种以上元素'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'checkEmail'){
			// 验证邮箱
			const regParam = {
				rule: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
				msg: '请输入正确的邮箱地址'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'oneTohundredNum'){
			// 0~100的整数或小数，包括0和100,小数点后最多只能保留两位
			const regParam = {
				rule: /^(\d|[1-9]\d|100)(\.\d{1,2})?$/,
				msg: '请输入0~100的整数或小数，包括0和100,小数点后最多只能保留两位'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'positiveNum'){
			// 只能输入大于0的数字，小数点后最多只能保留两位
			const regParam = {
				rule: /^[1-9]{1}\d*(.\d{1,2})?$|^0.\d{1,2}$/,
				msg: '只能输入大于0的数字，小数点后最多只能保留两位'
			}
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'integerZeroInt'){
			// 大于等于0的整数
			const regParam = {
				rule: /^(0|[1-9][0-9]*)$/,
				msg: '请输入大于等于0的整数'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else if(eventName == 'integerZeroFloat'){
			// 大于等于0的数字，小数点后最多只能保留两位
			const regParam = {
				rule: /^\d+(\.\d{1,2})?$/,
				msg: '请输入大于等于0的数字，小数点后最多只能保留两位'
			};
			return npmReturnMsg(regParam, value, msgSuccess, msgFail);
		}else{
			let result = {
				data: false,
				message: '暂无匹配的校验函数'
			};
	        return result;
		}
    }else{
        let result = {
			data: false,
			message: '请传入正确的值类型！'
		};
        return result;
    }
}



