<template>
  <v-app>
    <!-- <v-app-bar class="navBar" :elevation="0">
      <h1 class="text-primary-darker-1">Nome</h1>
    </v-app-bar>
    <v-app-bar class="navBar" scroll-behavior="hide" scroll-threshold="120" :elevation="0">
      <h1>Nome</h1>
    </v-app-bar>
    <v-navigation-drawer class="eCfilter filterbar">
      <v-list-item title="Filtros"
        subtitle="Modifique sua busca através dos filtros inteligentes Embarque Certo"></v-list-item>
      <v-divider></v-divider>
      <div class="priceSection pa-2">
        <v-expansion-panels>
          <v-expansion-panel class="appbar" elevation="1">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-airplane"></v-icon>
                  <p class="text-body pl-2">Preço</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <v-theme-provider theme="dark">
                <v-range-slider class="px-2"></v-range-slider>
              </v-theme-provider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">R$ 0.00</p>
                  <p class="text-caption ">R$ 489.924,00</p>
                </v-row>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel  class="appbar" elevation="1">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-clock-outline"></v-icon>
                  <p class="text-body pl-2">Escalas</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="justify-center pb-4">
                <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
              </v-row>
              <div class="priceFilterSectiond">
                <v-checkbox label="Direto" value="direct"></v-checkbox>
                <v-checkbox label="1 Escala" value="with1Scale"></v-checkbox>
                <v-checkbox label="+ 2 Escalas" value="withScales"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="1">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-airplane"></v-icon>
                  <p class="text-body pl-2">Companhias</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-2">
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="1">
            <v-expansion-panel-title class="px-2 py-4"> <v-row class="flex-row align-center justify-space-between"
                no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-bag-suitcase"></v-icon>
                  <p class="text-body pl-2">Bagagens</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox label="Itens Pessoais" value="Itens Pessoais"></v-checkbox>
                <v-checkbox label="Mala de mão" value="Mala de mão"></v-checkbox>
                <v-checkbox label="Bagagem Despachada" value="Bagagem Despachada"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="1">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-seat-passenger"></v-icon>
                  <p class="text-body pl-2">Assentos</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox label="Econômica" value="Econômica"></v-checkbox>
                <v-checkbox label="Premium Economy" value="Premium Economy"></v-checkbox>
                <v-checkbox label="Executiva" value="Executiva"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="1">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-clock-outline"></v-icon>
                  <p class="text-body pl-2">Horários</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <p class="text-caption">Horário de partida</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>
              <div class="priceFilterSectiond flex-row pt-4">
                <p class="text-caption">Horário de retorno</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>

            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-row class="justify-end pa-5 pt-7">
          <v-btn class="rounded-xl " variant="outlined" elevation="0" prepend-icon="mdi-filter-outline">Filtrar</v-btn>
        </v-row>
      </div>
    </v-navigation-drawer> -->
    <!-- test-->
    <div class="bg-body">
      <v-main>
        <v-container class="">
          <div class="searchResultsContent">
            <v-expansion-panels variant="popout" multiple class="flightOptionsExpansion">
              <flightOptionComponent />
              <!-- <flightOption /> -->
            </v-expansion-panels>
            <div class="tisingSection pt-4">
              <!-- <v-img :width="220" class="rounded-lg mb-4" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
              <v-img :width="220" class="rounded-lg mb-4" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img> -->

            </div>
            </div>  
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script setup>
// Componente com componentes dentro
import flightOption from '@/components/flightOption.vue'

// Componente com array
import flightOptionComponent from '@/components/flightOptionComponent.vue'
</script>

<script>
export default {
}
</script>
