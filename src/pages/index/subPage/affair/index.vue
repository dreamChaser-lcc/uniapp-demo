<!--
 * @Author: lcc
 * @Date: 2022-07-25 02:34:16
 * @LastEditors: lcc
 * @LastEditTime: 2022-07-28 00:53:15
 * @Description: 待办事项
-->
<template>
	<view class="wrap">
		<u-card title="我的代办" style="margin: 0" box-shadow="0 0 1px 1px #f0e7e7">
			<template #body>
				<u-grid :col="3">
					<u-grid-item
						v-for="({ label, num }, i) in girdItemConfig"
						:key="label"
						bg-color="#E7F1FF"
						:custom-style="itemStyle"
					>
						<view>{{ label + (i + 1) }}</view>
						<view>{{ num }}</view>
					</u-grid-item>
				</u-grid>
			</template>
		</u-card>
	</view>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const itemStyle: CSSProperties = {
	display: "flex",
	height: "100%",
	padding: "6px",
	lineHeight: "30px",
	fontWeight: "bold",
	fontSize: "15px",
	alignItems: "flex-start",
	flexDirection: "column",
	justifyContent: "space-between",
};
const girdItemConfig = [
	{ label: "代办事项", num: 24 },
	{ label: "代办事项", num: 0 },
	{ label: "代办事项", num: 112 },
	{ label: "代办事项", num: 24 },
	{ label: "代办事项", num: 0 },
	{ label: "代办事项", num: 112 },
];
</script>

<style lang="scss" scoped>
$SHARE_WIDTH: 320px;
.wrap {
	width: $SHARE_WIDTH;
	height: 150px;
	// box-shadow: 0 0 1px 1px #f0e7e7;
}
</style>
