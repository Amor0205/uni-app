<template>
	<view class="box">
		<view class="top">
			<image src="../../static/zx.jpg" mode="" class="img"></image>
		</view>
		<view class="foot">
			<view class="middle">
				<view class="platform">
					欢迎使用，孝兴邦居家养老平台!
				</view>
				<view class="login">
					请输入账号密码进行登录
				</view>
			</view>
			<view class="">
				<view class="flex inputs">
					<uni-icons type="person" size="20" class="icons"></uni-icons>
					<input type="text" class="password" focus='false' placeholder='用户账号' />
				</view>
				<view class="flex inputss">
					<uni-icons type="locked" size="20" class="iconss"></uni-icons>
					<input type="number" password='true' focus='false' placeholder='密码' class="passwords" />
					<uni-icons type="eye" size="20" class="icons"></uni-icons>
				</view>
				<view class="flex j-content">
					<view class="">
					</view>
					<view class="f-size forget">
						忘记密码？
					</view>
				</view>
			</view>

			<button type="default" class="logins" @click="login">登录</button>
			<view class="two">
				<text>还没账号？</text>
				<text class="register" @click="register">去注册</text>
			</view>
			<view class="easy">
				进入简易模式
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import {
		uniBadge
	} from '@dcloudio/uni-ui'

	export default {
		name: "",
		components: {
			uniIcons,
			uniBadge,


		},
		props: {},
		data() {

			return {}
		},
		methods: {
			// 跳转注册页面
			register() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			// 跳转到家人页面
			login() {
				uni.navigateTo({
					url: '../family/family'
				})
			}

		},
		mounted() {

		},
		onLoad() {

		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0
	}

	.box {
		position: relative;
	}

	.top {
		width: 100%;
		height: 500rpx;
		background: skyblue;

	}

	.img {
		width: 100%;
		height: 500rpx;
	}

	.foot {
		width: 100%;
		position: absolute;
		top: 500rpx;
		background: white;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
	}

	.middle {
		margin: 80rpx 50rpx;

		.platform {
			font-size: 36rpx;
			font-weight: 700;
		}

		.login {
			font-size: 28rpx;
			margin-top: 20rpx;
			color: gray;
		}
	}

	.inputs {
		width: 100%;
		height: 100rpx;
		margin-left: 50rpx;

	}

	.icons {
		line-height: 100rpx;

	}

	.password {
		width: 70%;
		height: 100rpx;
		font-size: 26rpx;
		line-height: 100rpx;
		color: gray;
		margin-left: 30rpx;
	}

	.inputss {
		width: 100%;
		height: 100rpx;
		margin-left: 50rpx;
		margin-top: 108rpx;
	}

	.iconss {
		line-height: 100rpx;

	}

	.passwords {
		width: 70%;
		height: 100rpx;
		font-size: 26rpx;
		line-height: 100rpx;
		color: gray;
		margin-left: 30rpx;
	}

	.forget {
		margin-right: 30rpx;
		color: gray;
		margin-top: 80rpx;
	}

	.logins {
		width: 90%;
		height: 80rpx;
		background-color: skyblue;
		border-radius: 40rpx;
		margin: 40rpx 35rpx;
		line-height: 80rpx;
		font-size: 26rpx;
	}

	.two {
		text-align: center;
		font-size: 28rpx;
		margin-top: 50rpx;

		.register {
			color: skyblue;
		}
	}

	.easy {
		font-size: 32rpx;
		text-align: center;
		margin-top: 116rpx;
	}
</style>
