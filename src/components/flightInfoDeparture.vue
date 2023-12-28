<template>
<v-row class="px-2 pt-4">
    <div class="foFlightInfo departureFInfo d-flex">
      <div class="foFinfoVisual">
        <div class="foFinfoVisualRounded"></div>
        <div class="foFinfoVisualLine"></div>
      </div>
      <div class="foFlightInfo foFlightInfoContent">
        <p class="text-body font-weight-bold EC-colorContentPrimary "> {{data.departureDate}}</p>
        <div class="foFlightInfoIATA d-flex">               
          <p class="location text-body font-weight-regular EC-colorContentPrimary ">{{data.departureLocation}}</p>
          <p class="IATA text-body font-weight-bold EC-colorContentPrimary ">{{data.departureIATA}}</p>
          </div>
          <p class="IATA text-caption font-weight-regular EC-colorContentPrimary">{{data.departureAirport}}</p>
      </div>
    </div>
  </v-row>
  <v-row class="px-2">
      <div class="foFlightInfo foFlightInfoResume d-flex">
        <div class="foFinfoVisual">
          <div class="foFinfoVisualLine"></div>
        </div>
        <div class="foFlightInfo foFlightInfoContent py-3">
          <p class="text-caption font-weight-regular EC-colorContentSecondary">Tempo de voo: <b class=""> {{data.departureFlightDuration}} </b></p>
        </div>
      </div>
    </v-row>
</template>

<script>
export default{
   name :"flightInfoDeparture",
   props: {data:Object}
}
</script>
