<template>
    <v-row class="px-2">
      <div class="foFlightInfo connectingFInfo d-flex">
        <div class="foFinfoVisual">
          <div class="foFinfoVisualLine"></div>
          <div class="foFinfoVisualRounded VisualRoundedDashed"></div>
          <div class="foFinfoVisualLine"></div>
        </div>
        <div class="foFlightInfo foFlightInfoContent">
          <p class="text-body font-weight-bold EC-colorContentPrimary">{{data.connectionDate}}</p>
          <div class="foFlightInfoIATA d-flex">               
            <p class="location text-body font-weight-regular EC-colorContentPrimary">{{data.connectionLocation}}</p>
            <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{data.connectionIATA}}</p>
            </div>
            <p class="IATA text-caption font-weight-regular EC-colorContentPrimary">{{data.connectionAirport}}</p>
        </div>
      </div>
    </v-row>
    <v-row class="px-2">
      <div class="foFlightInfo foFlightInfoResume d-flex">
        <div class="foFinfoVisual">
          <div class="foFinfoVisualLine"></div>
        </div>
        <div class="foFlightInfo foFlightInfoContent py-3">
          <p class="text-caption font-weight-regular EC-colorContentSecondary">Conexão: <b class="EC-colorContentSecondary">{{data.connectionWaiting}}</b></p>
          <p class="text-caption font-weight-regular EC-colorContentSecondary">Tempo de voo: <b class="EC-colorContentSecondary">{{data.connectionFlightDuration}}</b></p>
        </div>
      </div>
    </v-row>
    </template>
    
    <script>
    export default{
       name :"flightInfoConnection",
       props: {data:Object}
    }
    </script>
    