<template>
    <v-row class="px-2 pb-4">
      <div class="foFlightInfo arrivalFInfo d-flex">
        <div class="foFinfoVisual">
          <div class="foFinfoVisualLine"></div>
          <div class="foFinfoVisualRounded"></div>
        </div>
        <div class="foFlightInfo foFlightInfoContent">
          <p class="text-body font-weight-bold EC-colorContentPrimary">{{data.arrivalDate}}</p>
          <div class="foFlightInfoIATA d-flex">               
            <p class="location text-body font-weight-regular EC-colorContentPrimary">{{data.arrivalLocation}}</p>
            <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{data.arrivalIATA}}</p>
            </div>
            <p class="IATA text-caption font-weight-regular EC-colorContentPrimary">{{data.arrivalAirport}}</p>

        </div>
      </div>
    </v-row>
    </template>
    
<script>
    export default{
    name :"flightInfoArrival",
    props: {data:Object}
    }
</script>
    