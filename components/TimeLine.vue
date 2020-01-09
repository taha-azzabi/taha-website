<template>
  <div class="timeline">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="timeline in timelineData"
          :key="timeline.ID"
          class="swiper-slide"
        >
          <div class="time-line-content">
            <span>{{ timeline.yearStart }} - {{ timeline.yearEnd }}</span>
            <h2>{{ timeline.role }}</h2>
            <h3>
              {{ timeline.company.name }} - {{ timeline.company.location }}
            </h3>
            <div>
              <v-chip
                v-for="(keyWord, index) in renderKeyWord(timeline.keysWord)"
                :key="index"
                outlined
                text-color="cyan lighten-5"
                color="gold"
                >{{ keyWord }}</v-chip
              >
            </div>
            <div
              v-html="timeline.shortDescription"
              class="timeline__description"
            />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { timelineData } from './data'
export default {
  data() {
    return {
      banners: ['/1.jpg', '/2.jpg', '/3.jpg'],
      initialSlide: 0,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // I've used arrow function to solve 'this' scoop problem
          // this didn't work renderBullet: function (index, className) { ... }
          renderBullet: (index, className) => {
            const year = this.timelineData[index].yearEnd
            return `<p class="${className}"> ${year} </p>`
          }
        },
        on: {
          progress: (e) => {
            this.initialSlide = e
          }
        }
      },
      timelineData
    }
  },
  watch: {
    initialSlide(newPosition, oldPosition) {
      if (newPosition > oldPosition) {
        this.$nuxt.$emit('TIME_lINE_MOVE', 'down')
      } else {
        this.$nuxt.$emit('TIME_lINE_MOVE', 'up')
      }
    }
  },
  methods: {
    renderKeyWord(keysWord) {
      return keysWord.split(',')
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 80%;
  height: 300px;
}
.time-line-content {
  right: 23%;
  position: absolute;
  /* max-width: 57%; */
  text-align: right;
  width: 55%;
}
</style>
