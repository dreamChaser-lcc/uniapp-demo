/**token字段 */
const Token_Field_Name = 'user_token'
/**
 * @description 存放token到uniStorage
 * @param data
 */
export const setTokenToStorage = (data: string) => {
	uni.setStorage({
		key: `${Token_Field_Name}`,
		data: data,
	});
};
/**
 * @description 获取token
 * @param data
 */
export const getTokenFormStorage = () => {
	return uni.getStorageSync(`${Token_Field_Name}`);
};
