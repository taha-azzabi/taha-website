<template>
  <div class="timeline">
    <div
      ref="timeLineExperience"
      v-swiper:mySwiper="swiperOption"
      class="timeline__wrapper"
    >
      <div class="swiper-wrapper">
        <div
          v-for="timeline in timelineData"
          :key="timeline.ID"
          class="swiper-slide timeline__experience"
        >
          <div class="timeline__content">
            <span class="timeline__date">
              {{ timeline.yearStart }} - {{ timeline.yearEnd }}
            </span>
            <h2 class="timeline__role">{{ timeline.role }}</h2>
            <h3 class="timeline__compagny">
              {{ timeline.company.name }} - {{ timeline.company.location }}
            </h3>
            <div class="timeline__tags">
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
      <div
        @click="prevSlide"
        class="timeline__navigation prev icon-prev swiper-button-prev"
      ></div>
      <div
        @click="nextSlide"
        class="timeline__navigation next icon-next swiper-button-next"
      ></div>
      <div class="timeline__pagination swiper-pagination"></div>
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
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
        },
        breakpoints: {
          768: {
            direction: 'horizontal'
          }
        }
      },
      timelineData
    }
  },
  computed: {
    timeLineExperience() {
      return this.$refs.timeLineExperience.swiper.slideNext()
    }
  },
  watch: {
    initialSlide(newPosition, oldPosition) {
      console.log(newPosition)
      if (newPosition > oldPosition) {
        this.$nuxt.$emit('TIME_lINE_MOVE', 'down')
      } else {
        this.$nuxt.$emit('TIME_lINE_MOVE', 'up')
      }
    }
  },
  mounted() {},
  methods: {
    renderKeyWord(keysWord) {
      return keysWord.split(',')
    },
    nextSlide() {
      this.$refs.timeLineExperience.swiper.slideNext()
    },
    prevSlide() {
      this.$refs.timeLineExperience.swiper.slidePrev()
    }
  }
}
</script>

<style scoped></style>
