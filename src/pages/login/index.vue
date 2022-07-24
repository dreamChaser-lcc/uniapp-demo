<template>
	<view class="top">
		<span>欢迎登录</span>
		<img class="img" :src="logoUrl" alt="" />
	</view>
	<view class="form-field">
		<form @submit="formSubmit">
			<view class="form-item">
				<i class="fa fa-user" />
				<input
					name="user_name"
					v-model="initData.user_name"
					class="uni-input"
					type="text"
					placeholder="请输入用户名"
				/>
			</view>
			<view class="form-item">
				<i class="fa fa-lock" />
				<input
					class="uni-input"
					name="password"
					v-model="initData.password"
					:password="pwdProps.password"
					type="text"
					placeholder="请输入密码"
				/>
				<i :class="pwdProps.suffix" @click="changePwdVisble" />
			</view>
			<view class="form-btns">
				<button :loading="isLoading" form-type="submit">登录</button>
			</view>
		</form>
	</view>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import logoUrl from "@/static/login_logo.png";
import { user_login_api } from "@/api/user/inde";
import { setTokenToStorage } from "@/utils/base.utils";
// import VerifyCode from "@/component/verifyCode";
export default defineComponent({
	name: "login-page",
	components: {
		// VerifyCode,
	},
	setup() {
		const initData = ref({ user_name: "Admin", password: "123456" });
		const isLoading = ref<boolean>(false);

		const formSubmit = async (e: any) => {
			const { user_name, password } = e.detail.value;
			isLoading.value = true;
			const res = await user_login_api(user_name, password);
			isLoading.value = false;
			if (res) {
				setTokenToStorage(res?.result?.token ?? "none");
				uni.reLaunch({ url: "/pages/index/index" });
			}
		};
		const pwdProps = reactive<{ password: boolean; suffix: string }>({
			password: true,
			suffix: "fa fa-eye-slash",
		});
		/**改变密码可见 */
		const changePwdVisble = () => {
			pwdProps.password = !pwdProps.password;
			pwdProps.suffix = `fa ${pwdProps.password ? "fa-eye-slash" : "fa-eye"}`;
		};

		return {
			logoUrl,
			initData,
			pwdProps,
			isLoading,
			formSubmit,
			changePwdVisble,
		};
	},
});
</script>
<style lang="scss" scoped>
.top {
	height: 250px;
	background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-family: sans-serif;
	font-size: 18px;
	letter-spacing: 15px;
	border-radius: 100%/30%;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	.img {
		width: 65px;
		height: 55px;
		border-radius: 0.8rem;
		border: 1px solid #b2bec3;
		position: absolute;
		bottom: 0;
		transform: translate(0, 50%);
	}
}
$FORM_FONT_COLOR: #323b82;
.form-field {
	margin-top: 5rem;
	display: flex;
	justify-content: center;
	.form-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		color: $FORM_FONT_COLOR;
		border-bottom: 1px solid #dfe6e9;

		// 前缀图标 prefix
		& i:nth-child(1) {
			padding: 10px;
		}
		// 后缀图标 suffix
		& i:nth-last-child(1) {
			padding: 10px;
		}
		input {
			padding: 10px;
			width: 100%;
			color: $FORM_FONT_COLOR;
		}
	}
	.form-btns {
		display: flex;
		button {
			width: 150px;
			margin-top: 20px;
			color: #fff;
			border-radius: 5px;
			background: #32538e;
		}
	}
}
</style>
