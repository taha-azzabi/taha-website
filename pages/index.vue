<template>
  <v-layout>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/taha-azzabi.appspot.com/o/IMG_20190521_180128-removebg-preview.png?alt=media&token=41eb31dd-59f6-4fac-bc2e-7817cc0ac047"
      style="position:fixed;left: 0;-webkit-filter: blur(3px);filter: blur(1px);"
      alt="Vuetify.js"
    />
    <canvas id="granim-canvas" style="opacity: 0.9;" />
    <v-flex xs12 sm12 md12>
      <v-card flat class="transparent">
        <v-container fluid grid-list-md class="pb-0 px-0">
          <v-layout row wrap>
            <v-flex xs12 sm3 md3>
              <v-card color="transparent fill-height" tile flat>
                <v-card-text>
                  <p class="text-highlighted-1 text-roboto mb-0">
                    <span class="white--text">${ Bonjour :), je suis</span>
                    <span class="gold--text"> Taha Azzabi</span>
                  </p>
                  <p class="text-highlighted-2 text-roboto">
                    Développeur web basé à Paris }
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm1 md1>
              <v-card color="transparent fill-height d-flex" tile flat>
                <v-card-text class="px-0 flex-self-center">
                  <img
                    ref="cardOne"
                    src="~/assets/rotated-right-arrow-with-broken-line.png"
                    class="responsive-img"
                    alt="Vuetify.js"
                  />
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm3 md3>
              <v-card color="transparent full-height" tile flat>
                <v-card-text>
                  <div ref="cardTwo">
                    <div v-html="about" />
                    <full-about />
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm1 md1>
              <v-card color="transparent fill-height d-flex" tile flat>
                <v-card-text class="px-0 flex-self-center">
                  <img
                    ref="cardThree"
                    src="~/assets/rotated-right-arrow-with-broken-line-bm.png"
                    class="responsive-img"
                    alt="Vuetify.js"
                  />
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm3 md3>
              <v-card ref="certifications" color="transparent full-height" flat>
                <v-card-text class="pt-0">
                  <h3 class="headline">Certifications</h3>
                  <certification>
                    <v-flex
                      v-for="certification in certifications"
                      :key="certification.id"
                      d-inline-flex
                      class="flex-item-center"
                    >
                      <img :src="certification.logo" class="mr-2" alt="" />
                      <h4>
                        <a :href="certification.link" target="_blank">{{
                          certification.title
                        }}</a>
                      </h4>
                      <v-btn
                        :href="certification.link"
                        target="_blank"
                        text
                        small
                        icon
                        color="gold"
                      >
                        <v-icon>link</v-icon>
                      </v-btn>
                    </v-flex>
                  </certification>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <v-card flat class="transparent">
        <v-container class="pb-0 pt-0 px-0">
          <v-card color="transparent" flat>
            <v-card-text class="experience-rotate-arrow">
              <img
                ref="rotate"
                src="~/assets/rotating-arrows.png"
                alt="Vuetify.js"
              />
              <h3>Expériences</h3>
            </v-card-text>
          </v-card>
          <v-card color="transparent" flat>
            <v-card-text>
              <time-line />
            </v-card-text>
          </v-card>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Granim from 'granim'
import animeJS from 'animejs'
import { mapGetters } from 'vuex'
import { certifications } from './../components/data'
import TimeLine from './../components/TimeLine'
import Certification from './../components/Certification'
import FullAbout from './../components/FullAbout'

export default {
  components: {
    Certification,
    TimeLine,
    FullAbout
  },
  data() {
    return {
      graminObject: Object,
      animJsObject: {},
      animationJsSequenceObject: {},
      certifications,
      about: `
        <p>Polyvalent Senior JavaScript, développeur web doté d’une large expérience en backends,</p>
        <p>je crée des applications et des sites internet avec des interfaces conviviales qui reçoivent de bons feedbacks
        tout en prenant en considération quatre facteurs clés :</p>
          <ul>
            <li>Optimisation pour les moteurs de recherche...</li>
          </ul>
        `,
      from: 0,
      to: 60
    }
  },
  computed: {
    ...mapGetters({
      getSettings: 'todos/getSettings'
    })
  },
  mounted() {
    // right-arrow-with-broken-line about-me-card right-arrow-with-broken-line-bm certifications
    this.animationJsSequenceObject = animeJS.timeline()
    this.animationJsSequenceObject
      .add({
        targets: this.$refs.cardOne,
        rotate: [120, 360],
        easing: 'easeInOutSine'
      })
      .add({
        targets: this.$refs.cardThree,
        rotate: [60, 360],
        easing: 'easeInCubic'
      })
    this.animJsObject = animeJS({
      targets: this.$refs.rotate,
      rotate: [this.from, this.to],
      easing: 'easeInOutSine',
      autoplay: false,
      delay: 400
    })
    this.graminObject = new Granim({
      element: document.getElementById('granim-canvas'),
      name: 'granim',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [
            ['#834D9B', '#88438b'],
            ['#1CD8D2', '#001940']
          ]
        }
      }
    })
  },
  created() {
    this.$nuxt.$on('TIME_lINE_MOVE', (data) => {
      this.animJsObject.reverse()
      this.animJsObject.play()
    })
  }
}
</script>
