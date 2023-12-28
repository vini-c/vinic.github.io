<script setup>
import flightOption from './flightResume.vue'
import advisoryChip from './advisoryChip.vue'
import flightDetails from './flightDetails.vue'
import nonRefundable from './nonRefundable.vue'
import FlightPricenDetails from './flightPricenDetails.vue'

</script>

<template>
    <v-expansion-panel elevation="0" class="rounded-lg foExpansion">
        <v-expansion-panel-title class="pa-3 bg-card" v-slot="{ open }" expand-icon="" collapse-icon="">
            <section class="foCard">
                <div class="foResumeContent">
                    <div class="foHeader">
                        <div class="d-flex align-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png"
                                class="ciaLogo">
                            <p>
                            <p class="ciaSpecs text-caption font-weight-regular pl-4">GOL/Copa Airlines - Operado pela Azul
                            </p>
                            </p>
                        </div>
                        <advisoryChip />
                    </div>
                    <div class="foBody pr-4 py-2 pl-4 mt-2 rounded-lg">
                        <div class="foSpec">
                            <flightOption />
                            <v-divider inset vertical></v-divider>
                            <flightOption />
                        </div>
                        <div class="foPrice justify-end">
                            <div>
                            <p class="foType text-caption font-weight-regular fullColor">Valor Final</p>
                            <v-icon icon="$vuetify"></v-icon></div>
                            <h3 class="text-h5 font-weight-bold pb-2 justify-end">R$ 8.104</h3>
                            <nonRefundable />
                        </div>
                    </div>
                </div>
                <div class="foActionBar">
                    <v-btn class="rounded-xl justify-end" size="x-small" elevation="0" variant="text"
                        append-icon="mdi-arrow-right">Detalhes do Voo</v-btn>
                </div>
            </section>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="px-1">
            <section class="foDetailsContent ">
                <flightDetails 
                flightType="Ida"
                flightTotalTime="24h 12min"
                />
                <flightDetails 
                flightType="Volta"
                flightTotalTime="30h 12min"/>
                <FlightPricenDetails/>
            </section>
        </v-expansion-panel-text>
        <v-expansion-panel-title class="px-3 py-0 pb-4 bg-card foDetailsFlight" expand-icon="" collapse-icon="">
            <section class="foCard">
                <div class="foBodyDetailsBar pt-3">
                    <div class="d-flex foDetailsBar">
                        <div class="d-flex align-center flex-row featureDescription">
                            <v-icon icon="$vuetify"></v-icon>
                            <p class="text-body">Econômica</p>
                        </div>
                        <div class="d-flex align-center flex-row featureDescription">
                            <v-icon icon="$vuetify"></v-icon>
                            <p class="text-body">Econômica</p>
                        </div>
                        <div class="d-flex align-center flex-row featureDescription">
                            <v-icon icon="$vuetify"></v-icon>
                            <p class="text-body">Econômica</p>
                        </div>
                    </div>
                    <div class="flex-row justify-end">
                        <v-btn class="rounded-xl main-btn" elevation="0" prepend-icon="mdi-cart-outline">Comprar</v-btn>
                    </div>
                </div>
            </section>
        </v-expansion-panel-title>
    </v-expansion-panel>
</template>

<script>
export default {
    priceCategory: "flightOption",
}

</script>


