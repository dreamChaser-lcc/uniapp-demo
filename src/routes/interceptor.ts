import { user_auth_token_api } from "@/api/user/inde";
import { SUCCESS_STATUS_CODE } from "@/constant/base.constant";

/**
 * 路由跳转拦截
 * author:lcc
 * date:2022-07-20
 */
const apiString: string[] = ["navigateTo", "redirectTo", "switchTab"];
apiString.forEach((item) => {
	uni.addInterceptor(item, {
		invoke: (e) => {
			/**token过期或不存在 */
			user_auth_token_api().catch(() => {
				uni.reLaunch({ url: "/pages/login/index" });
			});
		},
	});
});
