<!--
 * @Author: lcc
 * @Date: 2022-07-17 14:26:25
 * @LastEditors: lcc
 * @LastEditTime: 2022-07-25 05:23:56
 * @Description: 
-->
<template>
	<u-notice-bar mode="vertical" :list="['当前页面仅实现UI']" :autoplay="false"></u-notice-bar>
	<view class="header">
		<view class="userInfo">
			<u-avatar bg-color="#6C95FE" mode="square" size="80" :src="src"></u-avatar>
			<view class="info">
				<view class="name">
					用户名
					<u-tag style="margin-right: 5px" text="初级勋章" shape="circleRight" size="mini" />
				</view>
				<view class="role"> 管理员</view>
			</view>
		</view>
	</view>
	<view class="swiper">
		<u-swiper :list="list"></u-swiper>
	</view>
	<view class="menus-gird">
		<u-grid :col="3">
			<u-grid-item v-for="(v, i) in [1, 2, 3]" class="grid-item">
				<u-badge count="9" :offset="[20, 20]"></u-badge>
				<u-icon name="eye" :size="46"></u-icon>
				<view class="grid-text">{{ "功能" + (i + 1) }}</view>
			</u-grid-item>
		</u-grid>
	</view>
	<u-cell-group>
		<u-cell-item icon="grid" title="我的码"></u-cell-item>
		<u-cell-item icon="email" title="我的邮件"></u-cell-item>
		<u-cell-item icon="integral-fill" title="会员等级"></u-cell-item>
		<u-cell-item icon="question-circle" title="帮助中心"></u-cell-item>
		<u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
		<u-cell-item
			@click="clickCell('exit')"
			icon="arrow-leftward"
			title="退出登录"
			:arrow="false"
		></u-cell-item>
	</u-cell-group>
</template>

<script lang="ts">
import { removeTokenFormStorage } from "@/utils/base.utils";
import { defineComponent } from "vue";
// import VerifyCode from "@/component/verifyCode";
export default defineComponent({
	// components: { VerifyCode },
	setup() {
		const list = [
			{
				image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
				title: "昨夜星辰昨夜风，画楼西畔桂堂东",
			},
			{
				image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
				title: "身无彩凤双飞翼，心有灵犀一点通",
			},
			{
				image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
				title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
			},
		];
		const clickCell = (key: string) => {
			if (key === "exit") {
				removeTokenFormStorage();
				uni.reLaunch({ url: "/pages/login/index" });
			}
		};

		return {
			src: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
			list,
			clickCell,
		};
	},
});
</script>
<style lang="scss" scoped>
.header {
	background-color: #e7f1fe;
	padding: 10px;
	height: 100px;
	.userInfo {
		margin: 20px 0 20px 20px;
		display: flex;
		.info {
			margin-left: 10px;
		}
		.info .name {
			font-weight: bold;
			font-size: 15px;
			line-height: 22px;
		}
		.info .role {
			color: #b2bec3;
			font-size: 10px;
		}
	}
}
.swiper {
	box-shadow: 0 0 1px 1px #f0e7e7;
	margin: 10px 5px;
}
.menus-gird {
	margin: 10px 5px;
	background-color: #ffffff;
	box-shadow: 0 0 1px 1px #f0e7e7;
}
</style>
