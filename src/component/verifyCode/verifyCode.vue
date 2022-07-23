<!--
 * @Author: lcc
 * @Date: 2022-07-17 16:49:11
 * @LastEditors: lcc
 * @LastEditTime: 2022-07-23 21:31:31
 * @Description: 验证码组件（uni-canvas中存在长宽bug未修复）
-->
<template>
	<canvas
		id="myCanvas"
		canvas-id="myCanvas"
		type="2d"
		@click="updateCode"
		v-bind="attrs"
		:style="`border: 1px solid #000;width:${props.width}px;height:${props.height}px;`"
	></canvas>
</template>
qweasdas

<script setup lang="ts">
import {
	reactive,
	onMounted,
	withDefaults,
	defineProps,
	watchEffect,
	useAttrs,
	nextTick,
} from "vue";
import { CodeInfo, getCodeInfo, getRandom } from "./utils";
interface IProps {
	/**code字体大小 */
	size?: "small" | "middle" | "large";
	/**验证码个数 */
	codeNum?: number;
	width?: number;
	height?: number;
}
const attrs = useAttrs();
const props = withDefaults(defineProps<IProps>(), {
	size: "middle",
	codeNum: 4,
	width: 100,
	height: 100,
});

let codeInfo = reactive<CodeInfo>({ codeArr: [], codeStr: "" });
const drawVerify = () => {
	const ctx = uni.createCanvasContext("myCanvas");
	if (codeInfo.codeArr.length) {
		codeInfo.codeArr.forEach((item, index) => {
			// 验证码
			const sizeObj = { small: 20, middle: 40, large: 50 };
			const fontSize = sizeObj[props.size];
			ctx.font = `${fontSize}px sans-serif`;
			const y = (props.height - fontSize) / 2;
			const startX = props.width / props.codeNum + fontSize;
			const x = startX + index * fontSize;
			ctx.fillText(item, x, y, fontSize);

			// 画线
			const beginX = getRandom(0, props.width);
			const beginY = getRandom(0, props.height);
			const lineX = getRandom(0, props.width);
			const lineY = getRandom(0, props.height);
			ctx.moveTo(beginX, 0);
			ctx.lineTo(lineX, props.width);
			ctx.stroke();
		});
	}
	ctx.draw();
};
/**更新验证码 */
const updateCode = () => {
	const { codeArr, codeStr } = getCodeInfo(props.codeNum);
	codeInfo.codeArr = codeArr;
	codeInfo.codeStr = codeStr;
};
watchEffect(() => {
	drawVerify();
});
onMounted(() => {
	updateCode();
});
</script>
