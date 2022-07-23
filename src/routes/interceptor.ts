/**
 * 路由跳转拦截
 * author:lcc
 * date:2022-07-20
 */
const apiString: string[] = ["navigateTo", "redirectTo", "switchTab"];
apiString.forEach((item) => {
  uni.addInterceptor(item, {
    invoke: (e) => {
      
      uni.reLaunch({ url: "/pages/login/index" });
      return false;
    },
  });
});
