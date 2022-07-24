<!--
 * @Author: lcc
 * @Date: 2022-07-17 13:36:00
 * @LastEditors: lcc
 * @LastEditTime: 2022-07-24 23:59:09
 * @Description: 入口文件
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
	console.log("App Launch");
});
onShow(() => {
	console.log("App Show");
});
onHide(() => {
	console.log("App Hide");
});
</script>
<style>
@import "./static/iconfont/index.css";
</style>
