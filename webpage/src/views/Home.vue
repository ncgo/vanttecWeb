<template>
  <div class="home">
    <v-card class="overflow-hidden mavbar">
      <v-app-bar
        :height="windowHeight - 300"
        absolute
        color="#004AAD"
        dark
        shrink-on-scroll
        prominent
        src="https://www.linkpicture.com/q/6B8008F5-2A1A-4ACA-8BC2-68E7E07DC982.jpg"
        fade-img-on-scroll
        scroll-target="#scroll-target"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, #004AAD, rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-toolbar-title
          ><img
            src="@/assets/vanttecLogo.png"
            :width="500 - offsetTopResize"
            min-width="30"
            class="ml-10"
            alt=""
            style="margin-bottom: -20px;"
        /></v-toolbar-title>

        <v-spacer></v-spacer>
        <v-row align="center" justify="end">
          <v-btn text>About</v-btn>
          <v-btn text>Team</v-btn>
          <v-btn text>Sponsors</v-btn>
          <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </v-row>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>HOME</v-tab>
            <v-tab>RoboBoat</v-tab>
            <v-tab>RoboSub</v-tab>
            <v-tab>Research</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet id="scroll-target" class="overflow-y-auto" max-height="100vh">
        <v-container
          v-scroll:#scroll-target="onScroll"
          style="height: 2000px;"
        ></v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    windowHeight: window.innerHeight,
    w: window.innerWidth,
    offsetTop: 0,
    offsetTopResize: 0,
    resources: [
      {
        id: "23",
        image: "./assets/images/labo.jpg"
      },
      {
        id: "32",
        image: "./assets/images/competencia.jpg"
      }
    ]
  }),
  components: {},
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
      this.offsetTopResize = Math.min(410, this.offsetTop);
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
      this.windoWidth = window.innerWidth;
    });
  }
};
</script>

<style lang="scss" scoped></style>
