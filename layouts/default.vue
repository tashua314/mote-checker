<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title>
        <nuxt-link to="/" style="color: black; text-decoration: none">{{
          title
        }}</nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon href="https://twitter.com/tashua314" target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <v-layout justify-center>
        <span
          >恋愛研究会 TechGuide LLC.&copy; {{ new Date().getFullYear() }}</span
        >
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Mote-Checker',
    }
  },
}
</script>
<style>
body {
  background: linear-gradient(135deg, #f5f7fa 0%, #f36ae5 100%);
}
header {
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}
</style>
