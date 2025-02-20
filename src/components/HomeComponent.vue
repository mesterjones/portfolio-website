<template>
  <div class="home-wrapper">
    <!-- Hero Section -->
    <section id="hero">
      <v-container class="py-8">
        <v-row align="center" justify="center">
          <v-col cols="12" md="10">
            <v-card
              class="pa-8 rounded-lg d-flex flex-column flex-md-row align-center"
              elevation="0"
              color="transparent"
            >
              <div class="flex-grow-1 text-left me-md-8">
                <div class="text-grey-lighten-1 text-h5 font-weight-light mb-4">
                  JONAS VAGNER RIIS
                </div>
                <h1 class="text-h3 font-weight-bold mb-6 text-grey-darken-3">
                  DIGITAL CREATOR AND<br>
                  WATERSPORT ENTHUSIAST
                </h1>
                <p class="text-h6 font-weight-light mb-12 text-grey-darken-1">
                  Jeg udvikler digitale løsninger med fokus på dataanalyse, datavisualisering og
                  automatisering af manuelle processer. Med en stærk teknisk baggrund og
                  forretningsforståelse skaber jeg effektive og brugervenlige værktøjer, der
                  omsætter data til indsigt og optimerer arbejdsgange.
                </p>
                <p class="text-h6 font-weight-light mb-8 text-grey-darken-1">
                  Kontakt mig, så kan vi tage en snak om, hvad jeg kan hjælpe dig med!
                </p>
                <div class="d-flex gap-4">
                  <v-btn
                    color="primary"
                    size="x-large"
                    variant="flat"
                    @click="scrollToSection('contact')"
                    class="px-8"
                  >
                    Kontakt mig
                  </v-btn>
                  <v-btn
                    href="https://linkedin.com/in/jonas-riis"
                    target="_blank"
                    color="primary"
                    size="x-large"
                    variant="outlined"
                    class="px-8 text-none"
                  >
                    <v-icon start class="me-2">
                      mdi-linkedin
                    </v-icon>
                    in/jonas-riis
                  </v-btn>
                </div>
              </div>
              <div class="profile-image-container mt-8 mt-md-0">
                <v-avatar size="400" class="profile-image">
                  <v-img
                    src="@/assets/profilepicture.png"
                    alt="Profile picture"
                    cover
                  />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Full width image separator -->
    <div class="separator-section">
      <div class="wave-divider">
        <svg 
          preserveAspectRatio="none" 
          viewBox="0 0 1200 120" 
          xmlns="http://www.w3.org/2000/svg"
          style="width: 100%; height: 80px;"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f5f5f5"
          ></path>
        </svg>
      </div>
    </div>

    <!-- About Section -->
    <section id="about">
      <v-container class="py-8">
        <v-row align="center" justify="center">
          <v-col cols="12" md="10">
            <v-card
              class="pa-8 rounded-lg"
              elevation="0"
              color="transparent"
            >
              <!-- About Header -->
              <div class="text-grey-lighten-1 text-h5 font-weight-light mb-4">
                ABOUT
              </div>
              
              <!-- Main Content Row -->
              <v-row>
                <!-- Text Column -->
                <v-col cols="12" md="8">
                  <p class="text-h6 font-weight-light text-grey-darken-1">
                    Jeg er 34 år gammel, far til 3, bosat i Nykøbing F.
                  </p>
                  <p class="text-h6 font-weight-light text-grey-darken-1 mt-4">
                    Som uddannet Prof. Bach. I International Handel og Markedsføring, og med 10+ års erfaring
                    med virksomhedsdrift og ledelse, har jeg udviklet en solid forretningsforståelse. Dette
                    kombinerer jeg med tekniske færdigheder, hvor jeg de seneste 3 år har specialiseret mig i
                    dataanalyse samt udvikling af digitale løsninger.
                  </p>
                  <p class="text-h6 font-weight-light text-grey-darken-1 mt-4">
                    Jeg bliver begejstret når jeg med teknologi kan hjælpe med at forbedre eller eliminere
                    manuelle forretningsprocesser.
                  </p>
                  <p class="text-h6 font-weight-light text-grey-darken-1 mt-4">
                    Privat elsker jeg kitesurfing og klatring og kan ofte findes på vandet ved kitespot farø eller i
                    den lokale bouldering klub.
                  </p>
                </v-col>

                <!-- Skills and Image Column -->
                <v-col cols="12" md="4">
                  <v-img
                    class="rounded-lg mt-4"
                    src="@/assets/surfing.jpg"
                    alt="Person surfing"
                    cover
                    height="300"
                  />
                </v-col>
              </v-row>
              <!-- Updated Skills Section -->
              <v-card
                class="mt-8 pa-6" 
                style="background: linear-gradient(to bottom, #f5f5f5, #e0e0e0);"
                elevation="0"
                color="grey-lighten-4"
                rounded="lg"
              >
                <h3 class="text-h6 font-weight-medium mb-4">Primære færdigheder</h3>
                <div class="d-flex flex-wrap gap-2">
                  <v-chip
                    v-for="skill in primarySkills"
                    :key="skill"
                    color="primary"
                    variant="flat"
                    class="ma-1"
                  >
                    {{ skill }}
                  </v-chip>
                </div>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Projects Section -->
    <section id="cases">
      <v-container class="py-8">
        <v-row justify="center" align="center">
          <v-col cols="12" md="10">
            <v-card
              class="pa-8 rounded-lg d-flex flex-column flex-md-row align-center"
              elevation="0"
              color="transparent">
              <div class="flex-grow-1 text-left me-md-8">
                <div class="text-grey-lighten-1 text-h5 font-weight-light mb-4">
                  CASES / WORK
                </div>
                <h1 class="text-h3 font-weight-bold mb-6 text-grey-darken-3">
                  Applikationsudvikling
                </h1>
              </div>                 
            </v-card>
            <!-- Application Development Section with increased spacing -->
            <v-row class="gap-6">
              <!-- Stock Reporting Automation -->
              <v-col cols="12" md="4">
                <v-card height="100%" class="d-flex flex-column pa-4" elevation="0" style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb);">
                  <v-card-title class="text-h5 font-weight-medium pa-4">STOCK REPORTING</v-card-title>
                  <v-card-text class="flex-grow-1 pa-4">
                    <p class="text-grey-darken-1">
                      En applikation som læser
                      optællingsdata, visualiserer
                      dataen og opretter en
                      optælllingsrapport.

                      Har fjernet brugen af excel filer
                      som før blev brugt til at lave
                      rapporter på lageroptællingen
                      til bl.a. revisorer og intern
                      ledelse. Bygget med Vue.js og
                      Python
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>

              <!-- Data Validation Engine -->
              <v-col cols="12" md="4">
                <v-card height="100%" class="d-flex flex-column pa-4" elevation="0" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4);">
                  <v-card-title class="text-h5 font-weight-medium pa-4">DATA VALIDATOR</v-card-title>
                  <v-card-text class="flex-grow-1 pa-4">
                    <p class="text-grey-darken-1">
                      En applikation som læser og
                      validerer al data inden det
                      indlæses i ERP systemet
                      Business Central.

                      Dette giver brugeren advarsler
                      og fejl, hvis noget data ikke
                      overholder forretningsregler,
                      eller afviger væsentlig fra
                      eksisterende database.

                      Bygget med React og Python
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>

              <!-- CREATOR Portal -->
              <v-col cols="12" md="4">
                <v-card height="100%" class="d-flex flex-column pa-4" elevation="0" style="background: linear-gradient(135deg, #a8e6cf, #dcedc1);">
                  <v-card-title class="text-h5 font-weight-medium pa-4">CREATOR</v-card-title>
                  <v-card-text class="flex-grow-1 pa-4">
                    <p class="text-grey-darken-1">
                      En online platform til udfyldning
                      af data med live validering af det
                      indsatte data. Har lettet
                      forretningsgange i flere
                      afdelinger og fjernet brug af
                      lokale excel filer, som før blev
                      brugt til at håndtere stamdata.
                      Bygget med Vue.js og Python.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-card
              class="pa-8 rounded-lg d-flex flex-column flex-md-row align-center"
              elevation="0"
              color="transparent">
              <div class="flex-grow-1">
                <h1 class="text-h3 font-weight-bold mb-6 text-grey-darken-3">
                  BI Rapportering
                </h1>
                <p class="text-h6 font-weight-light mb-8 text-grey-darken-1">
                  Jeg udvikler interaktive og visuelt
                  appellerende BI-rapporter med Power
                  BI og Python – altid tilpasset de
                  specifikke krav til funktionalitet og
                  værktøj. Her er et udsnit af de rapporter jeg har lavet.
                </p>
                <v-row class="gap-4 justify-center">
                  <v-col cols="12" md="5">
                    <v-card height="100%" class="pa-6" elevation="0" color="grey-lighten-4">
                      <div class="d-flex align-center mb-4">
                        <v-icon size="32" color="primary" class="me-3">mdi-shield-check</v-icon>
                        <h3 class="text-h6 font-weight-bold mb-0">MDO Surveillance</h3>
                      </div>
                      <p class="text-body-1">Et interaktivt værktøj til overvågning af vital master data i ERP systemet Business Central.</p>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-card height="100%" class="pa-6" elevation="0" color="grey-lighten-4">
                      <div class="d-flex align-center mb-4">
                        <v-icon size="32" color="primary" class="me-3">mdi-database-sync</v-icon>
                        <h3 class="text-h6 font-weight-bold mb-0">BC Mirror</h3>
                      </div>
                      <p class="text-body-1">Et "spejl" af al master data i Business Central. Gør det let og brugervenligt at tilgå stamdata og trække det ud til videre bearbejdning eller ændringer.</p>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-card height="100%" class="pa-6" elevation="0" color="grey-lighten-4">
                      <div class="d-flex align-center mb-4">
                        <v-icon size="32" color="primary" class="me-3">mdi-package-variant</v-icon>
                        <h3 class="text-h6 font-weight-bold mb-0">Stock Report</h3>
                      </div>
                      <p class="text-body-1">Rapport til at se lageroversigt af varer på tværs af flere lokationer</p>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-card height="100%" class="pa-6" elevation="0" color="grey-lighten-4">
                      <div class="d-flex align-center mb-4">
                        <v-icon size="32" color="primary" class="me-3">mdi-currency-usd</v-icon>
                        <h3 class="text-h6 font-weight-bold mb-0">Price Deviations</h3>
                      </div>
                      <p class="text-body-1">Rapport som overvåger afvigelser af salgs- pg købspriser sammenlignet med sidst indkøbte fakturapris</p>
                    </v-card>
                  </v-col>
                </v-row>
              </div>                 
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Private Projects Section -->
    <section id="about">
      <v-container class="py-8">
        <v-row align="center" justify="center">
          <v-col cols="12" md="10">
            <v-card
              class="pa-8 rounded-lg d-flex flex-column flex-md-row align-center"
              elevation="0"
              color="transparent"
            >
              <div class="flex-grow-1 text-left me-md-8">
                <div class="text-grey-lighten-1 text-h5 font-weight-light mb-4">
                  PRIVATE PROJECTS
                </div>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card height="100%" class="d-flex flex-column pa-4" elevation="0" style="background: linear-gradient(135deg, #a8e6cf, #dcedc1);">
                      <v-card-title class="text-h5 font-weight-medium pa-4">WHERE TO SURF?!</v-card-title>
                      <v-card-text class="flex-grow-1 pa-4">
                        <p class="text-grey-darken-1">
                          Et privat projekt, som jeg har lavet som tager vejrdata og fortæller mig hvor på Lolland-Falster det er bedst at surfe idag.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6" class="d-flex align-center">
                    <v-img
                      src="@/assets/kitesun.png"
                      alt="Kitesurfing"
                      class="rounded-lg"
                      cover
                    />
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Contact Section -->
    <section id="contact">
      <v-container class="py-8">
        <v-row justify="center" align="center">
          <v-col cols="12" md="10">
            <v-card
              class="pa-8 rounded-lg"
              elevation="0"
              color="transparent"
            >
              <div class="text-grey-lighten-1 text-h5 font-weight-light mb-4">
                CONTACT
              </div>
              <h2 class="text-h3 font-weight-bold mb-6 text-grey-darken-3">
                Lad os tage en snak
              </h2>
              <p class="text-h6 font-weight-light mb-8 text-grey-darken-1">
                Udfyld formularen nedenfor, så vender jeg tilbage hurtigst muligt.
              </p>
              
              <v-form ref="contactForm" @submit.prevent="submitForm" class="mt-6">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="formData.name"
                      label="Navn"
                      variant="outlined"
                      density="comfortable"
                      bg-color="white"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="formData.email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      density="comfortable"
                      bg-color="white"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.message"
                      label="Besked"
                      variant="outlined"
                      density="comfortable"
                      bg-color="white"
                      rows="4"
                      required
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      :loading="loading"
                      color="primary"
                      size="x-large"
                      type="submit"
                      variant="flat"
                      class="px-8"
                    >
                      Send besked
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>

              <v-alert
                v-if="success"
                type="success"
                variant="tonal"
                class="mt-4"
              >
                Tak for din besked! Jeg vender tilbage hurtigst muligt.
              </v-alert>
              
              <v-alert
                v-if="error"
                type="error"
                variant="tonal"
                class="mt-4"
              >
                Der opstod en fejl. Prøv venligst igen.
              </v-alert>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      loading: false,
      success: false,
      error: false,
      formspreeUrl: "https://formspree.io/f/mnnjoeaz", 
      primarySkills: [
        'Forretningsforståelse',
        'Dataanalyse og visualisering',
        'Python',
        'Power BI',
        'DAX',
        'SQL',
        'Power Query',
        'LEAN'
      ]
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    },
    async submitForm() {
      this.loading = true;
      this.success = false;
      this.error = false;

      try {
        const response = await fetch(this.formspreeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          this.success = true;
          this.formData = { name: "", email: "", message: "" };
        } else {
          this.error = true;
        }
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.home-wrapper {
  background-color: white;
}

.v-container {
  max-width: 1400px;
  min-height: auto;
}

.gap-4 {
  gap: 1rem;
}

.profile-image {
  border-radius: 50%;
  overflow: hidden;
}

@media (max-width: 960px) {
  .profile-image {
    width: 300px !important;
    height: 300px !important;
  }
}

.separator-section {
  position: relative;
  width: 100%;
  background: transparent;
  margin: 2rem 0;
}

.wave-divider {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-divider svg {
  display: block;
  transition: transform 0.3s ease;
}

.wave-divider:hover svg {
  transform: scale(1.02);
}
</style>