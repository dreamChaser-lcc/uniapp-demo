<!--
 * @Author: lcc
 * @Date: 2022-07-25 01:35:43
 * @LastEditors: lcc
 * @LastEditTime: 2022-07-25 02:08:51
 * @Description: 头部第一行子菜单
-->
<template>
	<view class="wrap">
		<view class="icon-wrap" v-for="{ label, ...rest } in menusConfig">
			<view class="icon">
				<u-icon v-bind="rest"></u-icon>
			</view>
			<span class="icon-label">{{ label }}</span>
		</view>
	</view>
</template>

<script setup lang="ts">
const menusConfig = [
	{
		label: "菜单1",
		name: "order",
		color: "#EF2726",
		size: "50",
	},
	{
		label: "菜单2",
		name: "chat-fill",
		color: "#336EFC",
		size: "50",
	},
	{
		label: "菜单3",
		name: "hourglass",
		color: "#FEC944",
		size: "50",
	},
	{
		label: "菜单4",
		name: "chrome-circle-fill",
		color: "#A3B0D1",
		size: "50",
	},
];
</script>
<style lang="scss" scoped>
$SHARE_WIDTH:320px;
.wrap {
	margin-top: 20px;
	width: $SHARE_WIDTH;
	display: flex;
	justify-content: space-between;
	.icon-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 45px;
		height: 45px;
		background: #dde5ff;
		border-radius: 18px;
		padding: 5px;
	}
	.icon-label {
		color: #f0e7e7;
		font-size: 12px;
		padding: 5px;
	}
}
</style>
