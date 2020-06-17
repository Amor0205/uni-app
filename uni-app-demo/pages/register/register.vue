<template>
	<view class="box">
		<view class="top">
			<image src="../../static/zx.jpg" mode="" class="img"></image>
		</view>
		<view class="next">
			<view class="middle">
				<view class="establish">
					创建平台账号
				</view>
				<view class="set">
					开始创建孝兴邦居养老账号
				</view>


				<view class="flex phone">
					<uni-icons type="locked" size="20" class="icon"></uni-icons>
					<input type="number" focus='false' placeholder='手机号' class="input" />
				</view>
				<view class="flex phone">
					<uni-icons type="locked" size="20" class="icon"></uni-icons>
					<input type="text" focus='false' placeholder='设置登录密码' password='true' class="input" />
					<uni-icons type="eye" size="20" class="icons"></uni-icons>
				</view>
				<view class="flex phone">
					<uni-icons type="locked" size="20" class="icon"></uni-icons>
					<input type="text" focus='false' placeholder='确认登录密码' password='true' class="input" />
					<uni-icons type="eye" size="20" class="icons"></uni-icons>
				</view>
				<view class="flex phone">
					<uni-icons type="locked" size="20" class="icon"></uni-icons>
					<input type="number" focus='false' placeholder='验证码' password='true' class="input" />
					<button type="default" class="btn">获取验证码</button>
				</view>
				<view class="">
					<button type="default" class="register">注册</button>
				</view>
				<view class="two">
					<text class="first">手机号已被注册？</text>
					<text class="second">使用身份证号注册</text>
				</view>
				<view class="have">
					<text class="first">已经有账户？</text>
					<text class="second">返回登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {}
		},
		methods: {

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
	.box {
		position: relative;

		.top {
			width: 100%;
			height: 590rpx;
		}

		.img {
			width: 100%;
			height: 590rpx;
		}

		.next {
			width: 100%;
			background: white;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			position: absolute;
			top: 300rpx
		}

		.middle {
			margin: 108rpx 38rpx;

			.establish {
				font-weight: 700;
				color: #282828;
			}

			.set {
				font-size: 28rpx;
				color: #555969;
				margin-top: 20rpx;
			}
		}

		.phone {
			width: 100%;
			height: 40rpx;
			margin-top: 92rpx;

		}

		.icon {
			line-height: 40rpx;
		}

		.input {
			width: 90%;
			height: 40rpx;
			margin-left: 40rpx;
			line-height: 40rpx;
		}

		.icons {
			margin-left: 200rpx;
			line-height: 40rpx;
		}

		.btn {
			width: 320rpx;
			height: 60rpx;
			line-height: 52rpx;
			font-size: 24rpx;
			border: 2rpx solid #878BA1;
			border-radius: 30rpx;
			margin-left: 50rpx;
			color: #878BA1;
		}

		.register {
			width: 700rpx;
			height: 100rpx;
			background: rgba(255, 227, 0, 1);
			border-radius: 60rpx;
			font-size: 28rpx;
			color: #282828;
			font-weight: 700;
			line-height: 100rpx;
			margin: 92rpx -15rpx;
		}

		.two {
			font-size: 28rpx;
			text-align: center;

		}

		.first {
			color: #878BA1;
		}

		.second {
			color: #0072FF;
		}

		.have {
			font-size: 28rpx;
			text-align: center;
			margin-top: 80rpx;
		}
	}
</style>
