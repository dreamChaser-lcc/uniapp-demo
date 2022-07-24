<!--
 * @Author: lcc
 * @Date: 2022-07-17 14:33:01
 * @LastEditors: lcc
 * @LastEditTime: 2022-07-25 05:15:27
 * @Description: 工作台页面
-->
<template>
	<u-notice-bar mode="vertical" :list="['当前页面仅实现UI']" :autoplay="false"></u-notice-bar>
	<u-tabs-swiper
		ref="tabs"
		:current="current"
		:list="list"
		@change="tabsChange"
		:is-scroll="false"
	></u-tabs-swiper>
	<swiper :current="current">
		<swiper-item class="swiper-item" v-for="({ label }, index) in tabsPaneConfig" :key="index">
			<u-empty :text="`${label}_待开发设计中`" mode="list"></u-empty>
		</swiper-item>
	</swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref<number>(0);
const tabsChange = (index: number) => {
	current.value = index;
};
// 内容配置
const tabsPaneConfig = [{ label: "Tab1" }, { label: "Tab2" }, { label: "Tab3" }];
const list = [
	{
		name: "Tab1",
	},
	{
		name: "Tab2",
	},
	{
		name: "Tab3",
		count: 5,
	},
];
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
