<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar
      elevation="0"
      color="grey-lighten-4"
      class="px-4"
    >
      <v-app-bar-title class="text-grey-darken-3">Jonas Vagner Riis</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" class="text-grey-darken-2" @click="scrollToSection('hero')">Home</v-btn>
      <v-btn variant="text" class="text-grey-darken-2" @click="scrollToSection('about')">About</v-btn>
      <v-btn variant="text" class="text-grey-darken-2" @click="scrollToSection('cases')">Cases</v-btn>
      <v-btn variant="text" class="text-grey-darken-2" @click="scrollToSection('contact')">Contact</v-btn>
      <v-btn variant="text" class="text-grey-darken-2" @click="$router.push('/where-surf')">Where To Surf?</v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="bg-grey-lighten-4">
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-white text-grey-darken-2">
      <v-row justify="center" no-gutters>
        <v-col class="text-center py-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Jonas Vagner Riis</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// NO IMPORTS HERE
export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
    async scrollToSection(sectionId) {
      if (this.$route.path !== '/') {
        await this.$router.push('/')
        // Wait a brief moment for the component to mount
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100)
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }
  }
}
</script>

<style>
.v-application {
  font-family: 'Inter', sans-serif !important;
}
</style>