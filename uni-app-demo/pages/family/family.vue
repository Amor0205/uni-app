<template>
	<view class="boxs">
		<!-- 头部开始 -->
		<view class="box">
			<view class="flex m-top4">
				<view class="right">
					<image src="../../static/family/椭圆形.png" mode="" class="image"></image>
				</view>
				<view class="middle">
					<view class="name">
						张倩倩
					</view>
					<view class="warning">
						账户余额(元)99.99
					</view>
				</view>
				<view class="family flex j-around a-align ">
					<view class="switch">切换家人</view>
					<view class="enter flex a-align">
						<image src="../../static/family/enter@2x.png" mode="" class="images"></image>
					</view>
				</view>
			</view>
			<view class="early">
				预警：无/手环求助/求助按钮
			</view>
			<view class="conversation flex j-around a-align">
				<view class="rights">
					<view class="flex a-align">
						<image src="../../static/family/形状.png" mode="" class="voice"></image>
					</view>
					<view class="f-size28">
						语音通话
					</view>
				</view>
				<view class="">
					<image src="../../static/family/sx.png" mode="" class="line"></image>
				</view>
				<view class="">
					<view class="rights">
						<view class="flex a-align">
							<image src="../../static/family/形状.png" mode="" class="voice"></image>
						</view>
						<view class="f-size28">
							视频通话
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 头部结束 -->
		<view class="health">
			<view class="horm">
				<view class="">
					<image src="../../static/family/systemprompt@2x.png" mode="" class="tips"></image>
				</view>
				<view class="pension">
					【养老】到2022年,渝北实现居家养老服务全覆盖
				</view>
			</view>
			<view class="relevant flex j-content">
				<view class="right1">
					相关信息
				</view>
				<view class="flex j-content a-align">
					<image src="../../static/family/shuaxin@2x.png" mode="" class="shuaxin"></image>
					<view class="update">
						更新数据
					</view>
				</view>
			</view>

			<view class="address">
				四川省眉山市彭山区凤鸣镇伯华路一段12号
			</view>
			<view class="bracelet">
				手环定位
			</view>
			<view class="balance flex j-content">
				<view class="" v-for="(item,index) in cost" :key='index'>
					<view class="costs">
						{{item.costs}}
					</view>
					<view class="name">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class='open'>
				展开
			</view>
			<view class="six">
				<view class="daily" v-for="(item,index) in daily" :key='index'>
					<view class="yuan">
						<view class="icons" :style="{background:item.backgroundcolor}">
							<image :src="item.imgs" mode="" class="imgs"></image>
						</view>
					</view>
					<view class="line">
						{{item.title}}
					</view>
				</view>
			</view>
			<button type="default" @click="live">跳转生活服务</button>
		</view>

	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		name: "",
		components: {
			uniSearchBar,
		},
		props: {},
		data() {
			return {
				cost: [{
						costs: '无预警',
						name: '生活数据',

					},
					{
						costs: '100元',
						name: '燃气余额',

					},
					{
						costs: '100元',
						name: '电费余额',

					}
				],
				daily: [{
					imgs: '../../static/family/zu3696.png',
					title: '体检档案',
					backgroundcolor: '#F1FAFE'
				}, {
					imgs: '../../static/family/tixing.png',
					title: '推送提醒',
					backgroundcolor: '#E7F8F2'
				}, {
					imgs: '../../static/family/jingbao.png',
					title: 'SOS记录',
					backgroundcolor: '#FCEFF0'
				}, {
					imgs: '../../static/family/fuwujilu.png',
					title: '服务记录',
					backgroundcolor: '#F6F2FE'
				}, {
					imgs: '../../static/family/appointment.png',
					title: '当前预约',
					backgroundcolor: '#FEF6E8'
				}, {
					imgs: '../../static/family/shouhuan.png',
					title: '设备管家',
					backgroundcolor: '#F8F8F8'
				}]
			}
		},
		methods: {
			live() {
				uni.navigateTo({
					url: '../service/service'
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
	.boxs {
		position: relative;
	}

	.box {
		width: 100%;
		height: 484rpx;
		background: #FFE300;
		padding-top: 84rpx;


		.image {
			width: 106rpx;
			height: 106rpx;
			border-radius: 50%;
			margin-left: 22rpx;
		}

		.middle {
			margin-left: 32rpx;
		}

		.name {
			font-size: 44rpx;

		}

		.warning {
			width: 220rpx;
			height: 32rpx;
			background: #EC7171;
			border-radius: 30rpx;
			font-size: 24rpx;
			text-align: center;
			margin-top: 10rpx;
			color: #FFFFFF;
		}

		.family {
			width: 140rpx;
			height: 56rpx;
			background: white;
			border-top-left-radius: 40rpx;
			border-bottom-left-radius: 40rpx;
			padding: 10rpx;
			position: absolute;
			top: 136rpx;
			right: 0;

		}

		.switch {
			font-size: 20rpx;
			line-height: 50rpx;
			margin-top: 5rpx;

		}

		.images {
			width: 10rpx;
			height: 16rpx;


		}

		.early {
			font-size: 24rpx;
			margin: 26rpx 22rpx;
		}

		.conversation {
			width: 706rpx;
			height: 90rpx;
			background: #878BA1;
			margin: 0 auto;
			margin-top: 16rpx;
			border-radius: 10rpx 10rpx 0rpx 0rpx;
		}

		.rights {
			width: 200rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
			.voice {
				width: 36rpx;
				height: 34rpx;
				padding-right: 25rpx;
				
				
			}
		}

		.line {
			width: 2rpx;
			height: 60rpx;
			margin-top: 15rpx;
		}

	}

	.health {
		width: 100%;
		height: 1000rpx;
		background: white;
		position: absolute;
		top: 414rpx;
		border-radius: 20rpx 20rpx 0rpx 0rpx;

		.horm {
			width: 100%;
			height: 30rpx;
			display: flex;
			align-items: center;
			margin: 34rpx 22rpx;

			 .tips {
				width: 32rpx;
				height: 30rpx;
				margin-top: 7rpx;
			}

			.pension {
				font-size: 24rpx;
				color: #868686;

			}
		}

		.relevant {
			width: 94%;
			height: 50rpx;
			margin: 0 auto;
			margin-top: 62rpx;

			.right1 {
				font-size: 32rpx;
				line-height: 50rpx;
			}

			.update {
				font-size: 24rpx;
				line-height: 50rpx;
				color: #878BA1;
			}
		}

		.shuaxin {
			width: 26.6rpx;
			height: 26.6rpx;
			margin-left: 50rpx;
		}

		.address {
			font-size: 28rpx;
			margin: 66rpx 0rpx 0rpx 22rpx;
		}

		.bracelet {
			font-size: 24rpx;
			color: #878BA1;
			margin: 10rpx 0rpx 0rpx 22rpx;
		}

		.balance {
			margin-top: 36rpx;
			padding: 0rpx 22rpx 0rpx 22rpx;
			text-align: center;

			.costs {
				font-size: 28rpx;
				color: #282828;
				font-weight: 700;

			}

			.name {
				font-size: 24rpx;
				color: #878BA1;
				margin-top: 10rpx;
			}
		}

		.open {
			font-size: 24rpx;
			color: #878BA1;
			text-align: center;
			margin-top: 70rpx;
		}

		.six {
			margin-top: 96rpx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;


			.daily {
				width: 26%;
				height: 150rpx;
				// border: 1rpx solid red;
				padding: 0rpx 30rpx 0rpx 30rpx;
				margin-bottom: 80rpx;
			}

			.yuan {
				display: flex;
				justify-content: center;
				align-items: center;

			}

			.icons {
				width: 100rpx;
				height: 100rpx;

				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;

				.imgs {
					width: 38rpx;
					height: 44rpx;


				}
			}

			.line {
				font-size: 24rpx;
				color: #666666;
				text-align: center;
				margin-top: 10rpx;
			}
		}

	}
</style>
