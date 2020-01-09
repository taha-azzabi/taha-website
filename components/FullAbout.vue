<template>
  <v-layout row>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn text color="gold" v-on="on">
          plus
          <v-icon>more_horiz</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar color="gold">
          <v-spacer></v-spacer>
          <v-btn @click.native="dialog = false" icon dark>
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <p>
            Je dispose de plus de 8 ans d’expérience. Depuis mon jeune âge,
            l’informatique et les mystérieux codes qui sont destinés à résoudre
            des problèmes et produire des programmes, me passionnent beaucoup.
          </p>
          <p>
            Je me sens avantageux par le choix de ce secteur d’activité que
            j’aime énormément.
          </p>

          <ul>
            <li>
              Je conçois et développe des sites internet et des applications web
              simples ou complexes.
            </li>
            <li>
              Je crée des applications mobiles hybrides avec un look natif.
            </li>
          </ul>

          <p>
            Autonome avec un esprit collaboratif, je ne cesse de vouloir
            s’informer et d’apprendre dans l’optique de toujours répondre
            nettement à des demandes spécifiques.
          </p>
          <p>
            Outre le développement, je suis muni d’un esprit d’entreprendre, de
            penser, de se fixer des objectifs et de réaliser des idées.
          </p>

          <p>
            Je possède une bonne expérience dans le secteur des centres
            d’appels, j’avais l’opportunité et la confiance d’un partenaire pour
            pouvoir financer et créer mon centre d’appels.
          </p>
          <p>
            J’ai passé par l’élaboration de toutes les étapes de la création de
            ce projet en commençant par la mise en place du business plan,
            recherche et recrutement des candidats, mise en place de solutions
            techniques (Dev d’application web avec PHP/Laravel, CRM, VOIP,
            Réseaux, choix des équipements..) et finalement le lancement et le
            suivie du projet.
          </p>
          <p>
            Actuellement je suis fasciné par le JavaScript native, VueJS,
            ReactJS, Firestore et Metor (Framework basé sur Node JS), je me
            lancerais si possible prochainement dans l’intelligence
            artificielle. Qui sait ? Peut-être qu’il arrivera ce jour où la
            plupart des travaux se feront par des rebots :)
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  }
}
</script>
