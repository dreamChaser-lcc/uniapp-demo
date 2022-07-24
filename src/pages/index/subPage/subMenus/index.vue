<!--
 * @Author: lcc
 * @Date: 2022-07-25 01:35:43
 * @LastEditors: lcc
 * @LastEditTime: 2022-07-25 02:11:16
 * @Description: 头部第二行菜单
-->
<template>
	<view class="wrap">
		<view class="menus-items">
			<view class="icon-wrap" v-for="({ ...rest }, index) in menusConfig">
				<view class="icon">
					<u-icon v-bind="rest"></u-icon>
				</view>
				<span class="icon-label">{{ `菜单${index+1}` }}</span>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { menusConfig } from "./menuConfig";
</script>
<style lang="scss" scoped>
$SHARE_WIDTH:320px;
.wrap {
	width: $SHARE_WIDTH;
	height: 150px;
	position: absolute;
	bottom: 0;
	transform: translate(0, 70%);
	background-color: #fff;
	border-radius: 8px;
	// border: solid #000;
	box-shadow: 0 0 1px 1px #f0e7e7;
	.menus-items {
		display: flex;
		flex-wrap: wrap;
	}
	.icon-wrap {
		width: 62px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 45px;
		height: 45px;
		border-radius: 18px;
		padding: 5px;
	}
	.icon-label {
		color: #000;
		font-size: 12px;
		padding: 5px;
	}
}
</style>
