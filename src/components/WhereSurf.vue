<template>  
    <div class="home-wrapper">
    <!-- Hero Section -->
    <section id="hero">
        <v-container>
            <v-row>
                <h1 class="text-h3 font-weight-bold mb-6 text-grey-darken-3">
                    WHERE TO SURF? LOLLAND-FALSTER
                </h1>
            </v-row>
            <div class="text-h6 font-weight-light text-grey-darken-1">
                <p><strong>Under Construction</strong></p>
            </div>
            
            <!-- Grid Layout -->
            <v-row>
                <!-- First Row -->
                <v-col cols="12" md="6">
                    <v-card class="pa-4">
                        <div>
                            <h1>Weather in {{ location }}</h1>
                            <div v-if="weather">
                                <p>Temperature: {{ weather.temp }}°C</p>
                                <p>Wind Speed: {{ weather.wind }} m/s</p>
                                <p>Condition: {{ weather.description }}</p>
                            </div>
                            <div v-else-if="error" class="error-message">
                                {{ error }}
                            </div>
                            <p v-else>Loading weather data...</p>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="pa-4">
                        <div>
                            <h1>Weather in {{ location }}</h1>
                            <div v-if="weather">
                                <p>Temperature: {{ weather.temp }}°C</p>
                                <p>Wind Speed: {{ weather.wind }} m/s</p>
                                <p>Condition: {{ weather.description }}</p>
                            </div>
                            <div v-else-if="error" class="error-message">
                                {{ error }}
                            </div>
                            <p v-else>Loading weather data...</p>
                        </div>
                    </v-card>
                </v-col>

                <!-- Second Row -->
                <v-col cols="12" md="6">
                    <v-card class="pa-4">
                        <div>
                            <h1>Weather in {{ location }}</h1>
                            <div v-if="weather">
                                <p>Temperature: {{ weather.temp }}°C</p>
                                <p>Wind Speed: {{ weather.wind }} m/s</p>
                                <p>Condition: {{ weather.description }}</p>
                            </div>
                            <div v-else-if="error" class="error-message">
                                {{ error }}
                            </div>
                            <p v-else>Loading weather data...</p>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="pa-4">
                        <div>
                            <h1>Weather in {{ location }}</h1>
                            <div v-if="weather">
                                <p>Temperature: {{ weather.temp }}°C</p>
                                <p>Wind Speed: {{ weather.wind }} m/s</p>
                                <p>Condition: {{ weather.description }}</p>
                            </div>
                            <div v-else-if="error" class="error-message">
                                {{ error }}
                            </div>
                            <p v-else>Loading weather data...</p>
                        </div>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </section>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      location: "Sortsø",
      weather: null,
      error: null,
      apiBaseUrl: "https://web-production-0212.up.railway.app"
    };
  },
  methods: {
    async fetchWeather() {
      try {
        this.error = null;
        const response = await axios.get(
          `${this.apiBaseUrl}/api/weather/${this.location}`
        );
        this.weather = response.data;
      } catch (error) {
        console.error("Error fetching weather:", error);
        this.weather = null;
        if (error.response) {
          this.error = `Server error: ${error.response.data.error || 'Unknown error'}`;
        } else if (error.request) {
          this.error = "No response from server. Please try again.";
        } else {
          this.error = "Error setting up request. Please try again.";
        }
      }
    },
  },
  mounted() {
    this.fetchWeather();
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin: 1rem 0;
}
</style>