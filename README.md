# common-verify
npm插件包-常用的表单验证


#### 安装教程
1.  cnpm install --save common-verify
2.  在main.js里引入：import commonVerify from 'common-verify'
	而后 Vue.prototype.commonVerify = commonVerify
3.  项目中使用，例如  
	// 验证手机号   
	let data = {  
		eventName: 'checkMobile', // 检验时，传入的检验名称（必传）  
		value: 13278123456,  // 检验时，传入的检验值（需传）  
		msgSuccess: '验证手机号正确',  // 检验成功时，返回的信息（不必传）  
		msgFail: '验证手机号失败'  // 检验失败时，返回的信息（不必传）  
	}  
	let result = this.commonVerify.verify(data)  
	console.log('result==='+JSON.stringify(result))  


#### 可验证的有
1. 名称，需为字母或数字；  
   方法名：checkName  
2. 11位数字的手机号；  
   方法名：checkMobile  
3. 0~100的整数或小数，包括0和100,小数点后最多只能保留两位；  
   方法名：oneTohundredNum  
4. 大于0的数字，小数点后最多只能保留两位；  
   方法名：positiveNum  
5. 大于等于0的整数；  
   方法名：integerZeroInt  
6. 大于等于0的数字，小数点后最多只能保留两位；  
   方法名：integerZeroFloat  
7. 验证4位数字的验证码；  
   方法名：securityCodeFour  
8. 验证6位数字的验证码；  
   方法名：securityCodeSix  
9. 密码长度为6~15位，须包含数字、字母至少2种以上元素；  
   方法名：checkPassword  
9. 验证正确的邮箱地址
   方法名：checkEmail



