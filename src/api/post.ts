import { SUCCESS_STATUS_CODE } from "@/constant/base.constant";
import { getTokenFormStorage } from "@/utils/base.utils";

const BASE_SEVER_URL = "http://150.158.189.25:8006";
interface IResponseData {
	code: string;
	message: string;
	result: any;
}
type IResponseDataType = IResponseData | false;
/**
 * @description post请求
 * @param url 请求路径
 * @param params 请求参数
 * @param params 是否携带token
 */
export const POST = (url: string, params?: any, hasToken = true) => {
	// 微信小程序执行
	// #ifdef MP-WEIXIN
	// return {} as IResponseDataType;
	// #endif

	// 非微信小程序执行
	// #ifndef MP-WEIXIN
	const token = getTokenFormStorage() ?? "";
	const header = hasToken ? { Authorization: `Bearer ${token}` } : {};
	const result = new Promise<IResponseDataType>((resolve, reject) => {
		uni.request({
			url: url,
			data: params,
			method: "POST",
      header,
			success: (res) => {
				const data = res?.data as IResponseData;
				if (data?.code === SUCCESS_STATUS_CODE) return resolve(data);
				else {
					uni.showToast({ title: data?.message ?? "服务器访问异常" });
					return reject(false);
				}
			},
			fail: (err) => {
				uni.showToast({ title: "服务器访问异常" });
				return reject(false);
			},
		});
	});
	return result;
	// #endif
};
