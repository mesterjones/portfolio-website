<template>  
    <div class="home-wrapper">
    <!-- Hero Section -->
    <section id="hero">
        <v-container>
            <v-row>
                <h1 class="text-h3 font-weight-bold mb-6 text-grey-darken-3">
                    Where to surf today? 
                </h1>
            </v-row>
            
            <!-- Grid Layout -->
            <v-row>
                <!-- First Row -->
                <v-col cols="12" md="6">
                    <v-card class="pa-4 weather-card">
                        <div>
                            <h1 class="text-h5 mb-4 d-flex align-center">
                                <v-icon size="32" class="mr-2">mdi-map-marker</v-icon>
                                 {{ locations.sortso.name }}
                            </h1>
                            <div v-if="locations.sortso.weather" class="weather-content">
                                <v-row>
                                    <!-- Left Column -->
                                    <v-col cols="12" md="6" class="border-right">
                                        <div class="temperature-section mb-4">
                                            <v-icon size="48" class="weather-icon">
                                                {{ getWeatherIcon(locations.sortso.weather.description) }}
                                            </v-icon>
                                            <span class="text-h3">{{ locations.sortso.weather.temp }}°C</span>
                                            <div class="text-subtitle-1">{{ locations.sortso.weather.description }}</div>
                                        </div>
                                    </v-col>

                                    <!-- Right Column -->
                                    <v-col cols="12" md="6">
                                        <div class="weather-details">
                                            <div class="detail-item kiting-status">
                                                <v-icon size="40" :color="isGoodForKiting ? 'success' : 'error'">
                                                    mdi-windsock
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Kiting Conditions</span>
                                                    <span class="text-caption">{{ kiteConditionsMessage }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item wind-warning" v-if="isGoodForKiting">
                                                <v-icon size="40" :color="isNorthWind ? 'warning' : 'success'">
                                                    mdi-compass-rose
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Wind Direction Status</span>
                                                    <span class="text-caption">{{ windDirectionMessage }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon :color="getWindSpeedStatus === 'low' ? 'info' : getWindSpeedStatus === 'high' ? 'error' : 'success'">
                                                    mdi-weather-windy
                                                </v-icon>
                                                <span :class="{
                                                    'text-info': getWindSpeedStatus === 'low',
                                                    'text-error': getWindSpeedStatus === 'high',
                                                    'text-success': getWindSpeedStatus === 'normal'
                                                }">
                                                    Wind Speed: {{ locations.sortso.weather.wind_speed }} m/s
                                                </span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-windy-variant</v-icon>
                                                <span>Wind Gust: {{ locations.sortso.weather.wind_gust }} m/s</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-compass</v-icon>
                                                <span>Wind Direction: {{ locations.sortso.weather.wind_direction }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-up</v-icon>
                                                <span>Sunrise: {{ locations.sortso.weather.sunrise }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-down</v-icon>
                                                <span>Sunset: {{ locations.sortso.weather.sunset }}</span>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else-if="error" class="error-message">
                                <v-icon color="error" class="mr-2">mdi-alert-circle</v-icon>
                                {{ error }}
                            </div>
                            <div v-else class="d-flex align-center justify-center pa-4">
                                <v-progress-circular indeterminate></v-progress-circular>
                            </div>
                        </div>
                    </v-card>
                </v-col>

                <!-- First Row - Second Card (Lalandia) -->
                <v-col cols="12" md="6">
                    <v-card class="pa-4 weather-card">
                        <div>
                            <h1 class="text-h5 mb-4 d-flex align-center">
                                <v-icon size="32" class="mr-2">mdi-map-marker</v-icon>
                                 {{ locations.lalandia.name }}
                            </h1>
                            <div v-if="locations.lalandia.weather" class="weather-content">
                                <v-row>
                                    <!-- Left Column -->
                                    <v-col cols="12" md="6" class="border-right">
                                        <div class="temperature-section mb-4">
                                            <v-icon size="48" class="weather-icon">
                                                {{ getWeatherIcon(locations.lalandia.weather.description) }}
                                            </v-icon>
                                            <span class="text-h3">{{ locations.lalandia.weather.temp }}°C</span>
                                            <div class="text-subtitle-1">{{ locations.lalandia.weather.description }}</div>
                                        </div>
                                    </v-col>

                                    <!-- Right Column -->
                                    <v-col cols="12" md="6">
                                        <div class="weather-details">
                                            <div class="detail-item kiting-status">
                                                <v-icon size="40" :color="isGoodForKitingLalandia ? 'success' : 'error'">
                                                    mdi-windsock
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Kiting Conditions</span>
                                                    <span class="text-caption">{{ kiteConditionsMessageLalandia }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item wind-warning" v-if="isGoodForKitingLalandia">
                                                <v-icon size="40" :color="isNorthWindLalandia ? 'warning' : 'success'">
                                                    mdi-compass-rose
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Wind Direction Status</span>
                                                    <span class="text-caption">{{ windDirectionMessageLalandia }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon :color="getWindSpeedStatusLalandia === 'low' ? 'info' : getWindSpeedStatusLalandia === 'high' ? 'error' : 'success'">
                                                    mdi-weather-windy
                                                </v-icon>
                                                <span :class="{
                                                    'text-info': getWindSpeedStatusLalandia === 'low',
                                                    'text-error': getWindSpeedStatusLalandia === 'high',
                                                    'text-success': getWindSpeedStatusLalandia === 'normal'
                                                }">
                                                    Wind Speed: {{ locations.lalandia.weather.wind_speed }} m/s
                                                </span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-windy-variant</v-icon>
                                                <span>Wind Gust: {{ locations.lalandia.weather.wind_gust }} m/s</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-compass</v-icon>
                                                <span>Wind Direction: {{ locations.lalandia.weather.wind_direction }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-up</v-icon>
                                                <span>Sunrise: {{ locations.lalandia.weather.sunrise }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-down</v-icon>
                                                <span>Sunset: {{ locations.lalandia.weather.sunset }}</span>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else class="d-flex align-center justify-center pa-4">
                                <v-progress-circular indeterminate></v-progress-circular>
                            </div>
                        </div>
                    </v-card>
                </v-col>

                <!-- Second Row -->
                <v-col cols="12" md="6">
                    <v-card class="pa-4 weather-card">
                        <div>
                            <h1 class="text-h5 mb-4 d-flex align-center">
                                <v-icon size="32" class="mr-2">mdi-map-marker</v-icon>
                                 {{ locations.holten.name }}
                            </h1>
                            <div v-if="locations.holten.weather" class="weather-content">
                                <v-row>
                                    <!-- Left Column -->
                                    <v-col cols="12" md="6" class="border-right">
                                        <div class="temperature-section mb-4">
                                            <div class="kite-conditions mb-2">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ props }">
                                                        <v-icon
                                                            size="32"
                                                            v-bind="props"
                                                            :color="isGoodForKitingHolten ? 'success' : 'error'"
                                                        >
                                                            mdi-sail-boat
                                                        </v-icon>
                                                    </template>
                                                    {{ kiteConditionsMessageHolten }}
                                                </v-tooltip>
                                            </div>
                                            <v-icon size="48" class="weather-icon">
                                                {{ getWeatherIcon(locations.holten.weather.description) }}
                                            </v-icon>
                                            <span class="text-h3">{{ locations.holten.weather.temp }}°C</span>
                                            <div class="text-subtitle-1">{{ locations.holten.weather.description }}</div>
                                        </div>
                                    </v-col>

                                    <!-- Right Column -->
                                    <v-col cols="12" md="6">
                                        <div class="weather-details">
                                            <div class="detail-item kiting-status">
                                                <v-icon size="40" :color="isGoodForKitingHolten ? 'success' : 'error'">
                                                    mdi-windsock
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Kiting Conditions</span>
                                                    <span class="text-caption">{{ kiteConditionsMessageHolten }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item wind-warning" v-if="isGoodForKitingHolten">
                                                <v-icon size="40" :color="isNorthWindHolten ? 'warning' : 'success'">
                                                    mdi-compass-rose
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Wind Direction Status</span>
                                                    <span class="text-caption">{{ windDirectionMessageHolten }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon :color="getWindSpeedStatusHolten === 'low' ? 'info' : getWindSpeedStatusHolten === 'high' ? 'error' : 'success'">
                                                    mdi-weather-windy
                                                </v-icon>
                                                <span :class="{
                                                    'text-info': getWindSpeedStatusHolten === 'low',
                                                    'text-error': getWindSpeedStatusHolten === 'high',
                                                    'text-success': getWindSpeedStatusHolten === 'normal'
                                                }">
                                                    Wind Speed: {{ locations.holten.weather.wind_speed }} m/s
                                                </span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-windy-variant</v-icon>
                                                <span>Wind Gust: {{ locations.holten.weather.wind_gust }} m/s</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-compass</v-icon>
                                                <span>Wind Direction: {{ locations.holten.weather.wind_direction }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-up</v-icon>
                                                <span>Sunrise: {{ locations.holten.weather.sunrise }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-down</v-icon>
                                                <span>Sunset: {{ locations.holten.weather.sunset }}</span>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else class="d-flex align-center justify-center pa-4">
                                <v-progress-circular indeterminate></v-progress-circular>
                            </div>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="pa-4 weather-card">
                        <div>
                            <h1 class="text-h5 mb-4 d-flex align-center">
                                <v-icon size="32" class="mr-2">mdi-map-marker</v-icon>
                                 {{ locations.marielyst.name }}
                            </h1>
                            <div v-if="locations.marielyst.weather" class="weather-content">
                                <v-row>
                                    <!-- Left Column -->
                                    <v-col cols="12" md="6" class="border-right">
                                        <div class="temperature-section mb-4">
                                            <div class="kite-conditions mb-2">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ props }">
                                                        <v-icon
                                                            size="32"
                                                            v-bind="props"
                                                            :color="isGoodForKitingMarielyst ? 'success' : 'error'"
                                                        >
                                                            mdi-sail-boat
                                                        </v-icon>
                                                    </template>
                                                    {{ kiteConditionsMessageMarielyst }}
                                                </v-tooltip>
                                            </div>
                                            <v-icon size="48" class="weather-icon">
                                                {{ getWeatherIcon(locations.marielyst.weather.description) }}
                                            </v-icon>
                                            <span class="text-h3">{{ locations.marielyst.weather.temp }}°C</span>
                                            <div class="text-subtitle-1">{{ locations.marielyst.weather.description }}</div>
                                        </div>
                                    </v-col>

                                    <!-- Right Column -->
                                    <v-col cols="12" md="6">
                                        <div class="weather-details">
                                            <div class="detail-item kiting-status">
                                                <v-icon size="40" :color="isGoodForKitingMarielyst ? 'success' : 'error'">
                                                    mdi-windsock
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Kiting Conditions</span>
                                                    <span class="text-caption">{{ kiteConditionsMessageMarielyst }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item wind-warning" v-if="isGoodForKitingMarielyst">
                                                <v-icon size="40" :color="isNorthWindMarielyst ? 'warning' : 'success'">
                                                    mdi-compass-rose
                                                </v-icon>
                                                <div class="d-flex flex-column">
                                                    <span class="text-subtitle-1 font-weight-bold">Wind Direction Status</span>
                                                    <span class="text-caption">{{ windDirectionMessageMarielyst }}</span>
                                                </div>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon :color="getWindSpeedStatusMarielyst === 'low' ? 'info' : getWindSpeedStatusMarielyst === 'high' ? 'error' : 'success'">
                                                    mdi-weather-windy
                                                </v-icon>
                                                <span :class="{
                                                    'text-info': getWindSpeedStatusMarielyst === 'low',
                                                    'text-error': getWindSpeedStatusMarielyst === 'high',
                                                    'text-success': getWindSpeedStatusMarielyst === 'normal'
                                                }">
                                                    Wind Speed: {{ locations.marielyst.weather.wind_speed }} m/s
                                                </span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-windy-variant</v-icon>
                                                <span>Wind Gust: {{ locations.marielyst.weather.wind_gust }} m/s</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-compass</v-icon>
                                                <span>Wind Direction: {{ locations.marielyst.weather.wind_direction }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-up</v-icon>
                                                <span>Sunrise: {{ locations.marielyst.weather.sunrise }}</span>
                                            </div>
                                            <div class="detail-item">
                                                <v-icon>mdi-weather-sunset-down</v-icon>
                                                <span>Sunset: {{ locations.marielyst.weather.sunset }}</span>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else class="d-flex align-center justify-center pa-4">
                                <v-progress-circular indeterminate></v-progress-circular>
                            </div>
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
      locations: {
        sortso: {
          name: "Farø Kitespot",
          lat: 54.94121104966914,
          lon: 11.999484438482195,
          weather: null
        },
        lalandia: {
          name: "Lalandia, Rødby",
          lat: 54.663920557455675,
          lon: 11.32811318733027,
          weather: null
        },
        holten: {
          name: "Holten Strand",
          lat: 54.64493552399136,
          lon: 11.796297763211658,
          weather: null
        },
        marielyst: {
          name: "Marielyst",
          lat: 54.69673102659342,
          lon: 11.974533695073447,
          weather: null
        }
      },
      error: null,
      apiBaseUrl: "https://web-production-0212.up.railway.app"
    };
  },
  methods: {
    async fetchWeatherForLocation(location) {
      try {
        const response = await axios.get(
          `${this.apiBaseUrl}/api/weather/coordinates/${location.lat}/${location.lon}`
        );
        location.weather = response.data;
      } catch (error) {
        console.error(`Error fetching weather for ${location.name}:`, error);
        location.weather = null;
        if (error.response) {
          this.error = `Server error: ${error.response.data.error || 'Unknown error'}`;
        } else if (error.request) {
          this.error = "No response from server. Please try again.";
        } else {
          this.error = "Error setting up request. Please try again.";
        }
      }
    },
    async fetchAllWeather() {
      for (const location of Object.values(this.locations)) {
        await this.fetchWeatherForLocation(location);
      }
    },
    getWeatherIcon(description) {
      const desc = description.toLowerCase();
      if (desc.includes('clear')) return 'mdi-weather-sunny';
      if (desc.includes('cloud')) return 'mdi-weather-cloudy';
      if (desc.includes('rain')) return 'mdi-weather-rainy';
      if (desc.includes('thunder')) return 'mdi-weather-lightning';
      if (desc.includes('snow')) return 'mdi-weather-snowy';
      if (desc.includes('mist') || desc.includes('fog')) return 'mdi-weather-fog';
      return 'mdi-weather-cloudy';
    },
    getWindDirectionDegrees(direction) {
      // Convert cardinal directions to degrees
      const directionMap = {
        'N': 0,
        'NNE': 22.5,
        'NE': 45,
        'ENE': 67.5,
        'E': 90,
        'ESE': 112.5,
        'SE': 135,
        'SSE': 157.5,
        'S': 180,
        'SSW': 202.5,
        'SW': 225,
        'WSW': 247.5,
        'W': 270,
        'WNW': 292.5,
        'NW': 315,
        'NNW': 337.5
      };
      
      // If direction is already in degrees, return it
      if (typeof direction === 'number') return direction;
      
      // If direction is a cardinal direction, convert it
      return directionMap[direction] ?? 0;
    },
    isGustyDirection(direction, location) {
      const degrees = this.getWindDirectionDegrees(direction);
      let isGusty, isOffshore;
      
      switch(location) {
        case 'sortso':
          // Gusty when wind is from N to NE (345° to 45°)
          return (degrees >= 345 || degrees <= 45);
        
        case 'lalandia':
          // Gusty when wind is from NW to NE (315° to 45°)
          return (degrees >= 315 || degrees <= 45);
        
        case 'holten':
          // Gusty when wind is from E to S (90° to 180°)
          return (degrees >= 90 && degrees <= 180);
        
        case 'marielyst':
          // Check for both gusty conditions (N to E) and offshore winds (W)
          isGusty = (degrees >= 0 && degrees <= 90);
          isOffshore = (degrees >= 225 && degrees <= 315); // West winds (SW to NW)
          return { isGusty, isOffshore };
        
        default:
          return false;
      }
    }
  },
  computed: {
    isGoodForKiting() {
      if (!this.locations.sortso.weather) return false;
      const windSpeed = this.locations.sortso.weather.wind_speed;
      return windSpeed >= 6 && windSpeed <= 14;
    },
    isNorthWind() {
      if (!this.locations.sortso.weather) return false;
      return this.isGustyDirection(this.locations.sortso.weather.wind_direction, 'sortso');
    },
    kiteConditionsMessage() {
      if (!this.locations.sortso.weather) return 'Loading conditions...';
      const windSpeed = this.locations.sortso.weather.wind_speed;
      if (windSpeed < 6) {
        return 'Wind too low for kitesurfing (min 6 m/s needed)';
      } else if (windSpeed > 14) {
        return 'Wind too strong for kitesurfing (max 14 m/s recommended)';
      }
      return 'Good conditions for kitesurfing!';
    },
    windDirectionMessage() {
      if (!this.locations.sortso.weather) return '';
      return this.isNorthWind 
        ? 'Warning: Wind from N-NE may be gusty'
        : 'Good wind direction for kiting!';
    },
    isGoodForKitingLalandia() {
      if (!this.locations.lalandia.weather) return false;
      const windSpeed = this.locations.lalandia.weather.wind_speed;
      return windSpeed >= 6 && windSpeed <= 14;
    },
    isNorthWindLalandia() {
      if (!this.locations.lalandia.weather) return false;
      return this.isGustyDirection(this.locations.lalandia.weather.wind_direction, 'lalandia');
    },
    kiteConditionsMessageLalandia() {
      if (!this.locations.lalandia.weather) return 'Loading conditions...';
      const windSpeed = this.locations.lalandia.weather.wind_speed;
      if (windSpeed < 6) {
        return 'Wind too low for kitesurfing (min 6 m/s needed)';
      } else if (windSpeed > 14) {
        return 'Wind too strong for kitesurfing (max 14 m/s recommended)';
      }
      return 'Good conditions for kitesurfing!';
    },
    windDirectionMessageLalandia() {
      if (!this.locations.lalandia.weather) return '';
      return this.isNorthWindLalandia 
        ? 'Warning: Off Shore Wind'
        : 'Good wind direction for kiting!';
    },
    isGoodForKitingHolten() {
      if (!this.locations.holten.weather) return false;
      const windSpeed = this.locations.holten.weather.wind_speed;
      return windSpeed >= 6 && windSpeed <= 14;
    },
    isNorthWindHolten() {
      if (!this.locations.holten.weather) return false;
      return this.isGustyDirection(this.locations.holten.weather.wind_direction, 'holten');
    },
    kiteConditionsMessageHolten() {
      if (!this.locations.holten.weather) return 'Loading conditions...';
      const windSpeed = this.locations.holten.weather.wind_speed;
      if (windSpeed < 6) {
        return 'Wind too low for kitesurfing (min 6 m/s needed)';
      } else if (windSpeed > 14) {
        return 'Wind too strong for kitesurfing (max 14 m/s recommended)';
      }
      return 'Good conditions for kitesurfing!';
    },
    windDirectionMessageHolten() {
      if (!this.locations.holten.weather) return '';
      return this.isNorthWindHolten 
        ? 'Warning: Off Shore Wind!'
        : 'Good wind direction for kiting!';
    },
    isGoodForKitingMarielyst() {
      if (!this.locations.marielyst.weather) return false;
      const windSpeed = this.locations.marielyst.weather.wind_speed;
      return windSpeed >= 6 && windSpeed <= 14;
    },
    isNorthWindMarielyst() {
      if (!this.locations.marielyst.weather) return false;
      const conditions = this.isGustyDirection(this.locations.marielyst.weather.wind_direction, 'marielyst');
      return conditions.isGusty || conditions.isOffshore;
    },
    kiteConditionsMessageMarielyst() {
      if (!this.locations.marielyst.weather) return 'Loading conditions...';
      const windSpeed = this.locations.marielyst.weather.wind_speed;
      if (windSpeed < 6) {
        return 'Wind too low for kitesurfing (min 6 m/s needed)';
      } else if (windSpeed > 14) {
        return 'Wind too strong for kitesurfing (max 14 m/s recommended)';
      }
      return 'Good conditions for kitesurfing!';
    },
    windDirectionMessageMarielyst() {
      if (!this.locations.marielyst.weather) return '';
      const conditions = this.isGustyDirection(this.locations.marielyst.weather.wind_direction, 'marielyst');
      
      if (conditions.isOffshore) {
        return 'Warning: Offshore wind (W) - Not recommended for beginners!';
      } else if (conditions.isGusty) {
        return 'Warning: Wind from N-E may be gusty';
      }
      return 'Good wind direction for kiting!';
    },
    getWindSpeedStatus() {
      if (!this.locations.sortso.weather) return 'normal';
      const windSpeed = this.locations.sortso.weather.wind_speed;
      if (windSpeed < 6) return 'low';
      if (windSpeed > 14) return 'high';
      return 'normal';
    },
    getWindSpeedStatusLalandia() {
      if (!this.locations.lalandia.weather) return 'normal';
      const windSpeed = this.locations.lalandia.weather.wind_speed;
      if (windSpeed < 6) return 'low';
      if (windSpeed > 14) return 'high';
      return 'normal';
    },
    getWindSpeedStatusHolten() {
      if (!this.locations.holten.weather) return 'normal';
      const windSpeed = this.locations.holten.weather.wind_speed;
      if (windSpeed < 6) return 'low';
      if (windSpeed > 14) return 'high';
      return 'normal';
    },
    getWindSpeedStatusMarielyst() {
      if (!this.locations.marielyst.weather) return 'normal';
      const windSpeed = this.locations.marielyst.weather.wind_speed;
      if (windSpeed < 6) return 'low';
      if (windSpeed > 14) return 'high';
      return 'normal';
    },
  },
  mounted() {
    this.fetchAllWeather();
  },
};
</script>

<style scoped>
.weather-card {
  background: linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%);
  transition: transform 0.2s;
  position: relative;
}

.weather-card:hover {
  transform: translateY(-5px);
}

.weather-content {
  padding: 8px;
}

.temperature-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.weather-icon {
  margin-bottom: 16px;
}

.weather-details {
  display: grid;
  gap: 16px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.error-message {
  display: flex;
  align-items: center;
  color: #ff5252;
  margin: 1rem 0;
}

.kiting-status {
  padding: 12px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  margin-bottom: 8px;
}

.detail-item.kiting-status {
  gap: 16px;
}

.wind-warning {
  padding: 12px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  margin-bottom: 8px;
  gap: 16px;
}

.text-info {
  color: #2196F3 !important; /* Blue */
}

.text-error {
  color: #FF5252 !important; /* Red */
}

.text-success {
  color: #4CAF50 !important; /* Green */
}

.border-right {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
}

@media (max-width: 959px) {
    .border-right {
        border-right: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        margin-bottom: 16px;
    }
}

.temperature-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    justify-content: center;
}

.weather-details {
    display: grid;
    gap: 16px;
    height: 100%;
}
</style>