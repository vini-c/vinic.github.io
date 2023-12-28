<template>
    <v-row class="pa-2">
      <div class="detailsfoFlightInfo d-flex">
        <div class="EC-colorContentPrimary">
          <v-icon icon="mdi-bag-suitcase" size="x-small"></v-icon>
          {{data.inFlightLuggageType}}
        </div>
        <div class="EC-colorContentPrimary">
          <v-icon icon="mdi-seat-passenger" size="x-small"></v-icon>
          {{data.inFlightClass}}
        </div>
      </div>
      </v-row>
      <v-row class="pa-2 pb-3">
      <div class="detailsfoFlightInfo foTextInfos">
        <p class="text-caption EC-colorContentPrimary">{{data.inFlightExtraInfos}}</p>
      </div>
    </v-row>
</template>
<script>
export default{
    name :"flightDetailsInfos",
    props: {data:Object},
 }
 </script>
 