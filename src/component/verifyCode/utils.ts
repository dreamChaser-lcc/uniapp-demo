/**
 * 获取随机数
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export const getRandom = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min);
};
/**
 * 获取 0-9|a-z|A-z 验证码数组
 * @param length
 * @returns string[]
 */
const getVerifyCodeArr = (length: number): string[] => {
	const unicodeArr = Array.from({ length }, () => {
		const actionType = getRandom(1, 3);
		let code = "0";
		if (actionType === 1) {
			const num = getRandom(48, 57);
			code = String.fromCharCode.call(null, num);
		}
		if (actionType === 2) {
			const uppercase = getRandom(65, 90);
			code = String.fromCharCode.call(null, uppercase);
		}
		if (actionType === 2) {
			const lowercase = getRandom(97, 122);
			code = String.fromCharCode.call(null, lowercase);
		}
		return code;
	});
	return unicodeArr;
};
export interface CodeInfo {
	/**验证码数组 */
	codeArr: string[];
	/**验证码字符串 */
	codeStr: string;
}

/**
 * 获取 验证码数组&字符串
 * @param lenght 验证码个数
 * @returns CodeInfo
 */
export const getCodeInfo = (lenght: number): CodeInfo => {
	const codeArr = getVerifyCodeArr(lenght);
	const codeStr = codeArr.join("");
	return {
		codeArr,
		codeStr,
	};
};
