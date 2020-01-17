<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped app fixed dark temporary>
      <p style="padding-top:30px;">#Silence for now#</p>
    </v-navigation-drawer>
    <!-- TOOLBAR -->
    <v-app-bar
      :class="{ scrolled: scrolled }"
      color="transparent"
      class="remove-border-left"
      hide-on-scroll
      flat
      dark
      fixed
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn
        :href="getSourceLink"
        text
        color="blue-grey lighten-4"
        target="_blank"
      >
        <span class="hidden-sm-and-down">Get Source code</span>
        <v-icon right color="blue-grey lighten-4">fas fa-code fa-spin</v-icon>
      </v-btn>
      <v-spacer class="hidden-sm-and-down" />
      <!-- SOCIAL ACCOUNTS -->
      <v-btn
        v-for="socialsAccount in socialsAccounts"
        :key="socialsAccount.id"
        :href="socialsAccount.link"
        text
        icon
        color="gold"
        target="_blank"
      >
        <v-icon size="20px">{{ socialsAccount.icon }}</v-icon>
      </v-btn>
      <v-spacer class="hidden-sm-and-down" />
      <!-- MENU -->
      <v-toolbar-items class="menu-items flex-item-center">
        <v-btn
          nuxt
          text
          outlined
          small
          color="blue-grey lighten-4"
          to="/inspire"
        >
          Blog
        </v-btn>
        <v-btn
          :href="getCv"
          text
          outlined
          small
          target="_blank"
          color="blue-grey lighten-4"
          class="hidden-sm-and-down"
        >
          Télécharger mon CV
        </v-btn>
        <v-btn
          text
          outlined
          small
          color="blue-grey lighten-4"
          class="hidden-sm-and-down"
          >Say Hello
          <div class="pulsating-circle"></div>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- THE CONTENT -->
    <v-content>
      <v-container wrap>
        <nuxt />
      </v-container>
    </v-content>
    <!-- THE FOOTER -->
    <v-footer app>
      <v-container text-xs-center class="py-0">
        <p class="mb-0 caption text-xs-center">
          Cette version à été développé à l'aide
          <v-icon size="20px">fab fa-vuejs</v-icon>
          <v-btn @click.stop="drawer = !drawer" small outlined>
            Voir les autres stacks
          </v-btn>
        </p>
      </v-container>
      <v-snackbar v-model="snackbar" bottom left color="info">
        {{ maintenanceText }}
      </v-snackbar>
    </v-footer>
  </v-app>
</template>
<script>
import { socialsAccounts } from '../components/data'
export default {
  data() {
    return {
      scrolled: false,
      drawer: false,
      snackbar: true,
      socialsAccounts,
      maintenanceText: `Hello :) Vous êtes en train de consulter une version privée en cours du développement.
Pas mal d’idées, animations, bug fixes vont être mis en place prochainement`
    }
  },
  computed: {
    getSourceLink() {
      return this.$sourceCode
    },
    getCv() {
      return this.$cv
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>
