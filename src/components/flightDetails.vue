<script setup>
import flightInfoDeparture from './flightInfoDeparture.vue'
import flightInfoConnection from './flightInfoConnection.vue'
import flightInfoArrival from './flightInfoArrival.vue'
import flightDetailsInfos from './flightDetailsInfos.vue'
import airplaneDetails from './airplaneDetails.vue'

</script>
<template>
  <div class="foDetails foDepartureDetails bg-details surface-1 pa-4 rounded-lg">
    <v-row cols="12" justify="space-between" class="pa-4 pb-6">
      <p class="text-body EC-colorContentPrimary font-weight-bold">{{ flightType }}</p>
      <p class="text-caption font-weight-regular  EC-colorContentSecondary">Tempo de viagem total: <b>{{ flightTotalTime }}</b></p>
    </v-row>
    <airplaneDetails :data="planeDetail" />
    <flightInfoDeparture :data="flightDepartureDetailedInfo"/>
    <flightInfoConnection :data="flightConnectionDetailedInfo"/>
    <flightInfoArrival :data="flightArrivalDetailedInfo" />
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <flightDetailsInfos :data="flightextraInfos"/>
  </div>
</template>

<script>
export default {
  name: "flightDetails",
  props: {
    flightType: String,
    flightTotalTime: String,
  },
  data() {
    return {
      planeDetail: {
        operation: 'Latam',
        number: 'A91731',
        model: 'Airbus A320',
        ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png'
      },
      flightDepartureDetailedInfo: {
        departureDate: 'Quinta-feira, 22 de Jan de 2023',
        departureLocation: 'Guarulhos, São Paulo',
        departureIATA:'GRU',
        departureAirport: 'Aeroporto Internacional de Guarulhos',
        departureFlightDuration: '10h32min'
      },
      flightConnectionDetailedInfo: {
        connectionDate: 'Quinta-feira, 22 de Jan de 2023',
        connectionLocation: 'Miami, Florida',
        connectionIATA:'MIA',
        connectionAirport: 'Aeroporto Internacional de Miami',
        connectionFlightDuration: '10h 32min',
        connectionWaiting: '3h 40min',
      },
      flightArrivalDetailedInfo: {
        arrivalDate: 'Quinta-feira, 22 de Jan de 2023',
        arrivalLocation: 'San Francisco, California',
        arrivalIATA:'SFO',
        arrivalAirport: 'Aeroporto Internacional de São Francisco',
        arrivalFlightDuration: '5h 10min'
      },
      flightextraInfos: {
        inFlightLuggageType:'Bagagem de Mão',
        inFlightClass: 'Econômica',
        inFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia'
      }
    }
  }
}
</script>
 