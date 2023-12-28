<script setup>
  import flightInfoDeparture from './flightInfoDeparture.vue'
</script>
<template>
<div class="foDetails foReturnDetails">
            <v-row cols="12" class="pa-4" justify="space-between">
            <p class="text-body font-weight-bold">Volta</p>
            <p class="text-caption font-weight-regular">Tempo total de Voo: 14h50</p>
            </v-row>
            <v-row class="px-2">
              <div class="foCIAdetails rounded-pill pa-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png" class="ciaLogo">
              <p class="text-caption font-weight-regular">Operado pela Azul</p>
              </div>
            </v-row>
            <flightInfoDeparture />
            <v-row>
              <div class="foFlightInfo foFlightInfoResume d-flex">
                <div class="foFinfoVisual">
                  <div class="foFinfoVisualLine"></div>
                </div>
                <div class="foFlightInfo foFlightInfoContent py-3">
                  <p class="text-caption font-weight-regular">Tempo de voo: 3h 34m</p>
                </div>
              </div>
            </v-row>
            <v-row>
              <div class="foFlightInfo connectingFInfo d-flex">
                <div class="foFinfoVisual">
                  <div class="foFinfoVisualLine"></div>
                  <div class="foFinfoVisualRounded"></div>
                  <div class="foFinfoVisualLine"></div>
                </div>
                <div class="foFlightInfo foFlightInfoContent">
                  <p class="text-body font-weight-bold">Quinta-feira, 11 de janeiro - 21:25</p>
                  <div class="foFlightInfoIATA d-flex">               
                    <p class="location text-caption font-weight-regular">São Paulo, Guarulhos</p>
                    <p class="IATA text-caption font-weight-bold">GRU</p>
                    </div>
                </div>
              </div>
            </v-row>
            <v-row>
              <div class="foFlightInfo foFlightInfoResume d-flex">
                <div class="foFinfoVisual">
                  <div class="foFinfoVisualLine"></div>
                </div>
                <div class="foFlightInfo foFlightInfoContent py-3">
                  <p class="text-caption font-weight-regular">Tempo de voo: 3h 34m</p>
                </div>
              </div>
            </v-row>
            <v-row>
              <div class="foFlightInfo arrivalFInfo d-flex">
                <div class="foFinfoVisual">
                  <div class="foFinfoVisualLine"></div>
                  <div class="foFinfoVisualRounded"></div>
                </div>
                <div class="foFlightInfo foFlightInfoContent">
                  <p class="text-body font-weight-bold">Quinta-feira, 11 de janeiro - 21:25</p>
                  <div class="foFlightInfoIATA d-flex">               
                    <p class="location text-caption font-weight-regular">São Paulo, Guarulhos</p>
                    <p class="IATA text-caption font-weight-bold">GRU</p>
                    </div>
                </div>
              </div>
            </v-row>
            <v-row>
              <v-divider></v-divider>
            </v-row>
            <v-row>
              <div class="detailsfoFlightInfo d-flex">
                <div class="">
                  <v-icon icon="mdi-bag-suitcase" size="x-small"></v-icon>
                  Bagagem de mão
                </div>
                <div class="">
                  <v-icon icon="mdi-seat-passenger" size="x-small"></v-icon>
                  Econômica
                </div>
              </div>
              </v-row>
              <v-row>
              <div class="detailsfoFlightInfo foTextInfos">
                <p>*1 mala por adulto.</p>
                <p>Deve caber no bagageiro da cambine</p>
              </div>
            </v-row>
            <v-row class="justify-end py-4">
                    <v-btn prepend-icon="mdi-cart-outline">Comprar</v-btn>
                    <v-btn prepend-icon="mdi-cart-outline">Comprar</v-btn>
            </v-row>
          </div>
  </template>

<script>
export default{
    name :"returnDetails"
 }
 </script>
 