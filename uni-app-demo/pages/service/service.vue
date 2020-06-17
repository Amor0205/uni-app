<template>
	<view>
		<view class="header ">
			<view class="top flex a-align j-around">
				<view class="flex j-content-c a-align">
					<view class="beijing" >
						北京市
					</view>
					<view class="">
						<image src="../../static/icon(1)/icon/xx.png" mode="" class="image"></image>
					</view>
				</view>
				<view class="">
					<u-search placeholder="搜索" v-model="keyword" action-text='' height='80' class='search'></u-search>
				</view>
				<view class="left flex j-around  a-align">
					<view class="name">
						王秀宣
					</view>
					<view class="">
						<image src="../../static/icon(1)/icon/qiehuan.png" mode="" class="qiehuan"></image>
					</view>
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
			return {
				keyword: ''
			}
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
	.header {
		width: 100%;
		height: 484rpx;
		background: #FFE300;

		.top {
			width: 100%;
			height: 80rpx;
			padding-top: 52rpx;

			.beijing {
				font-size: 30rpx;
				line-height: 80rpx;
				font-weight: 700;
				
			}

			.image {
				width: 25rpx;
				height: 25rpx;
				margin-left: 10rpx;
			}

			.search {
				display: inline-block;

			}
		}

		.left {
			width: 172rpx;
			height: 66rpx;
			border: 1rpx solid white;
			border-radius: 30rpx;
			padding: 13rpx;

			.name {
				font-size: 28rpx;
				font-weight: 700;
			}

			.qiehuan {
				width: 46rpx;
				height: 46rpx;
				margin-top: 10rpx;
			}
		}
	}
</style>
