<template>
	<u-notice-bar mode="vertical" :list="['当前页面仅实现UI']" :autoplay="false"></u-notice-bar>
	<view class="header">
		<view class="search">
			<u-search
				v-model="searchValue"
				:clearabled="true"
				style="background: #f2f2f2"
				shape="square"
			></u-search>
		</view>
		<Menus></Menus>
		<SubMenus></SubMenus>
	</view>
	<view class="content">
		<Affair></Affair>
	</view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menus from "./subPage/menus/index.vue";
import SubMenus from "./subPage/subMenus/index.vue";
import Affair from "./subPage/affair/index.vue";

const searchValue = ref("");
</script>

<style lang="scss" scoped>
$SHARE_WIDTH: 320px;
.header {
	background-color: #4562ff;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	.search {
		width: $SHARE_WIDTH;
		height: 50px;
		padding-top: 20px;
	}
}
.content {
	margin-top: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
