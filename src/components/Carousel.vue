<template>
	<div class="carousel">
		<div class="carousel__main">
			<div class="carousel__left">
				<button 
					class="carousel__button carousel__button--left"
					type="button"
					@click="prevItem" />
			</div>
			<div class="carousel__center">
				<transition-group
					tag="div"
					class="carousel__slider"
					:name="style">
					<div
						v-for="(image, index) in imageList"
						v-show="currentImage === index"
						:key="index">
						<img
							:src="imageList[index]"
							class="carousel__img" />
					</div>
				</transition-group>
			</div>
			<div class="carousel__right">
				<button
					class="carousel__button carousel__button--right"
					type="button"
					@click="nextItem" />
			</div>
		</div>
		<div
			class="carousel__footer">
			<span
				class="carousel__pointer"
				v-for="index in imageList.length"
				:key="index"
				:class="{'is-active':index === (currentImage + 1) }">●
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imageList: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			currentImage: 0,
			style: ''
		}
	},
	methods: {
		prevItem() {
			this.style="slide-next"
			if (this.currentImage === 0) {
				this.currentImage = this.imageList.length - 1
			} else {
				this.currentImage--
			}
		},
		nextItem() {
			this.style="slide-prev"
			if (this.currentImage === this.imageList.length - 1) {
				this.currentImage = 0
			} else {
				this.currentImage++
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.slide-next-leave-active,
.slide-next-enter-active, 
.slide-prev-leave-active,
.slide-prev-enter-active {
  transition: 1s;
}
.slide-next-enter, 
.slide-prev-leave-to {
  transform: translate(100%, 0);
}
.slide-next-leave-to,
.slide-prev-enter {
  transform: translate(-100%, 0);
}

.carousel{
	width:100%;

	&__main{
		display:flex;
		justify-content: center;
		width:100%;
	}

	&__left, &__right{
		width:25%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__button{
		width:100px;
		height:100px;
		border: none;
		border-top: 50px solid transparent;
  	border-bottom: 50px solid transparent;
		&--left {
			border-right: 50px solid blue;
		}
		&--right {
			border-left: 50px solid blue;
		}
	}

	&__center{
			width:50%;
			text-align:center;
	}

	&__slider{
			overflow: hidden;
			height:300px;
			margin:0 auto;
	}

	&__img{
			background-size: contain;
			width: 100%;
			height: 100%;
	}

	&__footer{
			text-align:center;
	}

	&__pointer{
			&.is-active{
					color: blue;
			}
	}
}
</style>


