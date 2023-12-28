<template>
    <section class="flightOptionCard rounded-lg pb-4 " v-for="item in flightOptionData" :key="item.type">
        <section class="foCard">
            <div class="foResumeContent">
                <div class="foHeader">
                    <div class="d-flex align-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png"
                            class="ciaLogo">
                        <p>
                        <p class="ciaSpecs hideMobile font-weight-regular pl-4">{{ item.Doperation }}
                        </p>
                        </p>
                    </div>
                    <v-chip v-if="item.betterPrice" class="chipAdvisory bestPrice">
                        Melhor preço
                    </v-chip>
                    <v-chip v-if="item.betterOption" class="chipAdvisory bestOption">
                        Melhor escolha
                    </v-chip>
                </div>
                <div class="foBody mt-2 rounded-lg">
                    <div class="foSpec">
                        <div class="foSpecwTitle">
                            <h4 class="d-none d-md-flex">{{ item.DtypeInfo }}</h4>
                            <div class="foResume foDeparture">
                                <div class="foDepaturefTime foTimenFlight">
                                    <p class="foDate">{{ item.DdeparturenumberDate }}</p>
                                    <div class="foHour">
                                        <p class="foTime">{{ item.DdepartureTime }}</p>
                                    </div>
                                    <p class="foIATA">{{ item.DdepartureIATA }}</p>
                                </div>
                                <div class="durationFlight">
                                    <p class=" text-primary-lighter-2">{{ item.DtotalFlightDuration }}</p>
                                    <img v-if="item.DdirectFlight" class="text-primary" src="../assets/direct-Flight.svg">
                                    <p v-if="item.DdirectFlight" class=" text-primary-lighter-2">Direto</p>
                                    <img v-if="item.DhasOneConnection" class="text-primary"
                                        src="../assets/oneConnection-Flight.svg">
                                    <p v-if="item.DhasOneConnection" class=" text-primary-lighter-2">1 Conexão</p>
                                    <img v-if="item.DhasMultipleConnection" class="text-primary"
                                        src="../assets/moConnections-Flight.svg">
                                    <p v-if="item.DhasMultipleConnection" class=" text-primary-lighter-2">2+ Conexões</p>
                                </div>
                                <div class="foArrivalTime foTimenFlight">
                                    <p class="foDate">{{ item.DArrivalnumberDate }}</p>
                                    <div class="foHour">
                                        <p class="foTime">{{ item.DarrivalTime }}</p>
                                        <p v-if="item.DoverNight" class="nextDay">+1</p>
                                    </div>
                                    <p class="foIATA">{{ item.DarrivalIATA }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="foSpecwTitle" v-if="item.hasReturn">
                            <h4 class="d-none d-md-flex">{{ item.RtypeInfo }}</h4>
                            <div class="foResume foDeparture">
                                <div class="foDepaturefTime foTimenFlight">
                                    <p class="foDate">{{ item.RdeparturenumberDate }}</p>
                                    <div class="foHour">
                                        <p class="foTime">{{ item.RdepartureTime }}</p>
                                    </div>
                                    <p class="foIATA">{{ item.RdepartureIATA }}</p>
                                </div>
                                <div class="durationFlight">
                                    <p class=" text-primary-lighter-2">{{ item.RtotalFlightDuration }}</p>
                                    <img v-if="item.RdirectFlight" class="text-primary" src="../assets/direct-Flight.svg">
                                    <p v-if="item.RdirectFlight" class=" text-primary-lighter-2">Direto</p>
                                    <img v-if="item.RhasOneConnection" class="text-primary"
                                        src="../assets/oneConnection-Flight.svg">
                                    <p v-if="item.RhasOneConnection" class=" text-primary-lighter-2">1 Conexão</p>
                                    <img v-if="item.RhasMultipleConnection" class="text-primary"
                                        src="../assets/moConnections-Flight.svg">
                                    <p v-if="item.RhasMultipleConnection" class=" text-primary-lighter-2">2+ Conexões</p>


                                </div>
                                <div class="foArrivalTime foTimenFlight">
                                    <p class="foDate">{{ item.RArrivalnumberDate }}</p>
                                    <div class="foHour">
                                        <p class="foTime">{{ item.RarrivalTime }}</p>
                                        <p v-if="item.RoverNight" class="nextDay">+1</p>
                                    </div>
                                    <p class="foIATA">{{ item.RarrivalIATA }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foPrice justify-end">
                        <div>
                            <p class="foType  font-weight-regular fullColor">Valor Final</p>
                        </div>
                        <h3 class=" font-weight-bold justify-end">{{ item.finalPrice }}</h3>
                        <div v-if="item.isRefundable"
                            class="d-flex align-center flex-row hideMobile featureDescription errorType">
                            <v-icon icon="mdi-alert-outline" size="x-small"></v-icon>
                            <p class="">Tarifa não reembolsável</p>
                        </div>
                        <p class="ciaSpecs hideDesktop font-weight-regular pl-4">{{ item.Doperation }}</p>
                    </div>
                </div>
            </div>

        </section>
        <v-expansion-panel elevation="0" class="rounded-lg foExpansion">
            <v-expansion-panel-title class="fodetailTrigger bg-card" v-slot="{ open }">
                <div class="foActionBar">
                    <v-btn class="rounded-xl justify-end" size="x-small" elevation="0" variant="text">Detalhes do
                        Voo</v-btn>
                </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="px-1">
                <section class="foDetailsContent ">

                    <!-- flightDetails Departure -->
                    <div class="foDetails foDepartureDetails bg-details surface-1 rounded-lg">
                        <v-row cols="12" justify="space-between" class="pa-4 pb-6 align-center">
                            <p class="primaryText EC-colorContentPrimary font-weight-bold">{{ item.DtypeInfo }}</p>
                            <p class="observationText font-weight-regular  EC-colorContentSecondary">Tempo total de viagem:
                                <b>{{ item.DtotalFlightDuration }}</b>
                            </p>
                        </v-row>

                        <!-- airplaneDetails -->
                        <div class="foCIAdetails rounded-lg pa-3 mb-4">
                            <div class="d-flex ciaLogonInfos">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png"
                                    class="ciaLogo">
                                <p class=" font-weight-regular EC-colorContentPrimary">Operado por
                                    <b>{{ item.Doperation }}</b>
                                </p>
                            </div>
                            <div class="d-flex airplaneInfos">
                                <p class=" font-weight-regular  EC-colorContentPrimary">Vôo
                                    número:<b>{{ item.Dnumber }}</b></p>
                                <v-divider vertical></v-divider>
                                <p class=" font-weight-regular  EC-colorContentPrimary">{{ item.Dmodel }}</p>
                            </div>
                        </div>

                        <!-- Departure -->
                        <v-row class="px-2 pt-4">
                            <div class="foFlightInfo departureFInfo d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualRounded">
                                        <div class="foFinfoVisualDot"></div>
                                    </div>
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent">
                                    <p class="text-body font-weight-bold EC-colorContentPrimary ">{{ item.DdepartureDate }}
                                        às {{ item.DdepartureTime }}
                                    </p>
                                    <div class="foFlightInfoIATA d-flex">
                                        <p class="location text-body font-weight-regular EC-colorContentPrimary ">
                                            {{ item.DdepartureLocation }}</p>
                                        <p class="IATA text-body font-weight-bold EC-colorContentPrimary ">
                                            {{ item.DdepartureIATA }}</p>
                                    </div>
                                    <p class="airport  font-weight-regular EC-colorContentPrimary">
                                        {{ item.DdepartureAirport }}</p>
                                </div>
                            </div>
                        </v-row>
                        <v-row class="px-2">
                            <div class="foFlightInfo foFlightInfoResume d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent py-3">
                                    <p class="observationText font-weight-regular EC-colorContentSecondary">Tempo de voo: <b
                                            class=""> {{ item.DdepartureFlightDuration }} </b></p>
                                </div>
                            </div>
                        </v-row>

                        <!-- Connection -->


                        <v-row v-if="item.DhasConnection" class="px-2">
                            <div class="foFlightInfo connectingFInfo d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine"></div>
                                    <div class="foFinfoVisualRoundedDashed"></div>
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent">
                                    <div v-if="item.DchangeAirplane"
                                        class="foCIAdetails ciaChangedConnection rounded-lg pa-3 mb-4">
                                        <div class="d-flex ciaLogonInfos">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png"
                                                class="ciaLogo">
                                            <p class=" font-weight-regular EC-colorContentPrimary">Operado por
                                                <b>{{ item.Dconnectionoperation }}</b>
                                            </p>
                                        </div>
                                        <div class="d-flex airplaneInfos">
                                            <p class=" font-weight-regular  EC-colorContentPrimary">Vôo
                                                número:<b>{{ item.Dconnectionnumber }}</b></p>
                                            <v-divider vertical></v-divider>
                                            <p class=" font-weight-regular  EC-colorContentPrimary">{{ item.Dconnectionmodel
                                            }}</p>
                                        </div>
                                    </div>
                                    <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.DconnectionDate }}
                                        às {{ item.DconnectionTime }}
                                    </p>
                                    <div class="foFlightInfoIATA d-flex">
                                        <p class="location text-body font-weight-regular EC-colorContentPrimary">
                                            {{ item.DconnectionLocation }}</p>
                                        <p class="IATA text-body font-weight-bold EC-colorContentPrimary">
                                            {{ item.DconnectionIATA }}</p>
                                    </div>
                                    <p class="airport  font-weight-regular EC-colorContentPrimary">
                                        {{ item.DconnectionAirport }}</p>
                                </div>
                            </div>
                        </v-row>
                        <v-row v-if="item.DhasConnection" class="px-2">
                            <div class="foFlightInfo foFlightInfoResume d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent py-3">
                                    <p class="observationText font-weight-regular EC-colorContentSecondary">Conexão: <b
                                            class="EC-colorContentSecondary">{{ item.DconnectionDelay }}</b></p>
                                    <p class="observationText font-weight-regular EC-colorContentSecondary">Tempo de voo: <b
                                            class="EC-colorContentSecondary">{{ item.DconnectionFlightDuration }}</b></p>
                                </div>
                            </div>
                        </v-row>

                        <!-- Arrival -->

                        <v-row class="px-2 pb-4">
                            <div class="foFlightInfo arrivalFInfo d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine"></div>
                                    <v-icon icon="mdi-map-marker-outline" class="arrivalIcon"></v-icon>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent">
                                    <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.DarrivalDate }} às
                                        {{ item.DarrivalTime }}</p>
                                    <div class="foFlightInfoIATA d-flex">
                                        <p class="location text-body font-weight-regular EC-colorContentPrimary">
                                            {{ item.DarrivalLocation }}</p>
                                        <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{
                                            item.DarrivalIATA }}
                                        </p>
                                    </div>
                                    <p class="airport  font-weight-regular EC-colorContentPrimary">
                                        {{ item.DarrivalAirport }}</p>

                                </div>
                            </div>
                        </v-row>


                        <v-row class="">
                            <div class="detailsfoFlightInfo d-flex">
                                <div class="iconFlexEC EC-colorContentPrimary" v-if="item.DcheckedBag">
                                    <v-icon icon="mdi-bag-personal" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-carry-on" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-suitcase" class="enableContent"></v-icon>
                                    <p class="observationText">Bagagem Despachada</p>
                                </div>
                                <div class="iconFlexEC EC-colorContentPrimary" v-if="item.DboardBag">
                                    <v-icon icon="mdi-bag-personal" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-carry-on" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-suitcase-off-outline" class="disableContent"></v-icon>
                                    <p class="observationText">Bagagem de mão</p>
                                </div>
                                <div class="iconFlexEC EC-colorContentPrimary" v-if="item.DpersonalBag">
                                    <v-icon icon="mdi-bag-personal" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-carry-on-off" class="disableContent"></v-icon>
                                    <v-icon icon="mdi-bag-suitcase-off-outline" class="disableContent"></v-icon>
                                    <p class="observationText">Bagagem pessoal</p>
                                </div>
                                <div v-if="item.DeconomyClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-recline-normal" class="enableContent"></v-icon>
                                    <p class="observationText">Econômica</p>
                                </div>
                                <div v-if="item.DPremiumClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-recline-extra" class="enableContent"></v-icon>
                                    <p class="observationText">Premium Economy</p>
                                </div>
                                <div v-if="item.DExecutiveClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-flat-angled" class="enableContent"></v-icon>
                                    <p class="observationText">Executiva</p>
                                </div>
                            </div>
                        </v-row>
                        <v-row class="pa-2 pb-3">
                            <div class="detailsfoFlightInfo foTextInfos">
                                <p class="observationText EC-colorContentPrimary">{{ item.DinFlightExtraInfos }}</p>
                            </div>
                        </v-row>
                    </div>


                    <!-- flightDetails Return if has checked on boolean hasReturn -->
                    <div v-if="item.hasReturn" class="foDetails foDepartureDetails bg-details surface-1 rounded-lg">
                        <v-row cols="12" justify="space-between" class="pa-4 pb-6 align-center">
                            <p class="primaryText EC-colorContentPrimary font-weight-bold">{{ item.RtypeInfo }}</p>
                            <p class="observationText font-weight-regular  EC-colorContentSecondary">Tempo total de viagem:
                                <b>{{ item.RtotalFlightDuration }}</b>
                            </p>
                        </v-row>

                        <!-- airplaneDetails -->
                        <div class="foCIAdetails rounded-lg pa-3 mb-4">
                            <div class="d-flex ciaLogonInfos">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png"
                                    class="ciaLogo">
                                <p class=" font-weight-regular EC-colorContentPrimary">Operado por
                                    <b>{{ item.Roperation }}</b>
                                </p>
                            </div>
                            <div class="d-flex airplaneInfos">
                                <p class=" font-weight-regular  EC-colorContentPrimary">Vôo
                                    número:<b>{{ item.Rnumber }}</b></p>
                                <v-divider vertical></v-divider>
                                <p class=" font-weight-regular  EC-colorContentPrimary">{{ item.Rmodel }}</p>
                            </div>
                        </div>

                        <!-- Departure -->
                        <v-row class="px-2 pt-4">
                            <div class="foFlightInfo departureFInfo d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualRounded">
                                        <div class="foFinfoVisualDot"></div>
                                    </div>
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent">
                                    <p class="text-body font-weight-bold EC-colorContentPrimary ">{{ item.RdepartureDate }}
                                        às {{ item.RdepartureTime }}
                                    </p>
                                    <div class="foFlightInfoIATA d-flex">
                                        <p class="location text-body font-weight-regular EC-colorContentPrimary ">
                                            {{ item.RdepartureLocation }}</p>
                                        <p class="IATA text-body font-weight-bold EC-colorContentPrimary ">
                                            {{ item.RdepartureIATA }}</p>
                                    </div>
                                    <p class="airport  font-weight-regular EC-colorContentPrimary">
                                        {{ item.RdepartureAirport }}</p>
                                </div>
                            </div>
                        </v-row>
                        <v-row class="px-2">
                            <div class="foFlightInfo foFlightInfoResume d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent py-3">
                                    <p class="observationText font-weight-regular EC-colorContentSecondary">Tempo de voo: <b
                                            class=""> {{ item.RdepartureFlightDuration }} </b></p>
                                </div>
                            </div>
                        </v-row>

                        <!-- Connection -->


                        <v-row v-if="item.RhasConnection" class="px-2">
                            <div class="foFlightInfo connectingFInfo d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine">
                                        <div class="foFinfoVisualDot"></div>
                                    </div>
                                    <div class="foFinfoVisualRoundedDashed"></div>
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent">
                                    <div v-if="item.RchangeAirplane"
                                        class="foCIAdetails ciaChangedConnection rounded-lg pa-3 mb-4">
                                        <div class="d-flex ciaLogonInfos">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png"
                                                class="ciaLogo">
                                            <p class=" font-weight-regular EC-colorContentPrimary">Operado por
                                                <b>{{ item.Rconnectionoperation }}</b>
                                            </p>
                                        </div>
                                        <div class="d-flex airplaneInfos">
                                            <p class=" font-weight-regular  EC-colorContentPrimary">Vôo
                                                número:<b>{{ item.Rconnectionnumber }}</b></p>
                                            <v-divider vertical></v-divider>
                                            <p class=" font-weight-regular  EC-colorContentPrimary">{{ item.Rconnectionmodel
                                            }}</p>
                                        </div>
                                    </div>
                                    <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.RconnectionDate }}
                                        às {{ item.RconnectionTime }}
                                    </p>
                                    <div class="foFlightInfoIATA d-flex">
                                        <p class="location text-body font-weight-regular EC-colorContentPrimary">
                                            {{ item.RconnectionLocation }}</p>
                                        <p class="IATA text-body font-weight-bold EC-colorContentPrimary">
                                            {{ item.RconnectionIATA }}</p>
                                    </div>
                                    <p class="airport  font-weight-regular EC-colorContentPrimary">
                                        {{ item.RconnectionAirport }}</p>
                                </div>
                            </div>
                        </v-row>
                        <v-row v-if="item.RhasConnection" class="px-2">
                            <div class="foFlightInfo foFlightInfoResume d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine"></div>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent py-3">
                                    <p class="observationText font-weight-regular EC-colorContentSecondary">Conexão: <b
                                            class="EC-colorContentSecondary">{{ item.RconnectionDelay }}</b></p>
                                    <p class="observationText font-weight-regular EC-colorContentSecondary">Tempo de voo: <b
                                            class="EC-colorContentSecondary">{{ item.RconnectionFlightDuration }}</b></p>
                                </div>
                            </div>
                        </v-row>

                        <!-- Arrival -->

                        <v-row class="px-2 pb-4">
                            <div class="foFlightInfo arrivalFInfo d-flex">
                                <div class="foFinfoVisual">
                                    <div class="foFinfoVisualLine"></div>
                                    <v-icon icon="mdi-map-marker-outline" class="arrivalIcon"></v-icon>
                                </div>
                                <div class="foFlightInfo foFlightInfoContent">
                                    <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.RarrivalDate }} às
                                        {{ item.RarrivalTime }}</p>
                                    <div class="foFlightInfoIATA d-flex">
                                        <p class="location text-body font-weight-regular EC-colorContentPrimary">
                                            {{ item.RarrivalLocation }}</p>
                                        <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{
                                            item.RarrivalIATA }}
                                        </p>
                                    </div>
                                    <p class="airport  font-weight-regular EC-colorContentPrimary">
                                        {{ item.RarrivalAirport }}</p>

                                </div>
                            </div>
                        </v-row>


                        <v-row class="">
                            <div class="detailsfoFlightInfo d-flex">
                                <div class="iconFlexEC EC-colorContentPrimary" v-if="item.RcheckedBag">
                                    <v-icon icon="mdi-bag-personal" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-carry-on" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-suitcase" class="enableContent"></v-icon>
                                    <p class="observationText">Bagagem Despachada</p>
                                </div>
                                <div class="iconFlexEC EC-colorContentPrimary" v-if="item.RboardBag">
                                    <v-icon icon="mdi-bag-personal" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-carry-on" class="enableContent"></v-icon>
                                    <v-icon icon="mdi-bag-suitcase-off-outline" class="disableContent"></v-icon>
                                    <p class="observationText">Bagagem de mão</p>
                                </div>
                                <div class="iconFlexEC EC-colorContentPrimary" v-if="item.RpersonalBag">
                                    <v-icon icon="mdi-bag-personal" class="enableContent" size="x-small"></v-icon>
                                    <v-icon icon="mdi-bag-carry-on-off" class="disableContent" size="x-small"></v-icon>
                                    <v-icon icon="mdi-bag-suitcase-off-outline" class="disableContent"
                                        size="x-small"></v-icon>
                                    <p class="observationText">Bagagem pessoal</p>
                                </div>
                                <div v-if="item.ReconomyClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-recline-normal" class="enableContent"></v-icon>
                                    <p class="observationText">Econômica</p>
                                </div>
                                <div v-if="item.RPremiumClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-recline-extra" class="enableContent"></v-icon>
                                    <p class="observationText">Premium Economy</p>
                                </div>
                                <div v-if="item.RExecutiveClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-flat-angled" class="enableContent"></v-icon>
                                    <p class="observationText">Executiva</p>
                                </div>
                            </div>
                        </v-row>
                        <v-row class="pa-2 pb-3">
                            <div class="detailsfoFlightInfo foTextInfos">
                                <p class="observationText EC-colorContentPrimary">{{ item.RinFlightExtraInfos }}</p>
                            </div>
                        </v-row>
                    </div>

                    <!-- PricenDetails -->
                    <div class="flightPriceDetailed">
                        <p class=" EC-colorContentSecondary">{{ item.generalInfos }} </p>
                        <div class="priceTable rounded-lg mt-4">
                            <p class="text-body px-2 pt-2 pb-0 font-weight-bold EC-colorContentSecondary">Detalhamento da
                                tarifa:
                            </p>
                            <v-table class="px-2 pt-0 " density="compact">
                                <tbody>
                                    <tr>
                                        <td>{{ item.Adults }}</td>
                                        <td class="priceTd">{{ item.AdultsPrice }}</td>
                                    </tr>
                                    <tr>
                                        <td v-if="item.hasKids">{{ item.Kids }}</td>
                                        <td v-if="item.hasKids" class="priceTd">{{ item.KidsPrice }}</td>
                                    </tr>
                                    <tr>
                                        <td v-if="item.hasBabys">{{ item.Baby }}</td>
                                        <td v-if="item.hasBabys" class="priceTd">{{ item.BabysPrice }}</td>
                                    </tr>
                                    <tr>
                                        <td>Taxa de Serviço:</td>
                                        <td class="priceTd">{{ item.serviceTax }}</td>
                                    </tr>
                                    <tr>
                                        <td>Taxa de Embarque:</td>
                                        <td class="priceTd">{{ item.flightTax }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <div class="priceVdetail pa-2">
                                <div class="finalPrice">
                                    <div>
                                        <p class="text-body font-weight-bold EC-colorContentSecondary">Total:</p>
                                    </div>
                                    <div class="pricewTag ">
                                        <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.finalPrice }}
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex py-1 justify-end">
                                    <div v-if="item.isRefundable"
                                        class="d-flex align-center flex-row featureDescription errorType">
                                        <v-icon icon="mdi-alert-outline" size="x-small"></v-icon>
                                        <p class="">Tarifa não reembolsável</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </v-expansion-panel-text>

        </v-expansion-panel>
        <div class="foBodyDetailsBar pt-3">
            <div class="detailsfoFlightInfo d-flex">
                <div class="EC-colorContentPrimary d-flex" v-if="item.DcheckedBag">
                    <v-icon icon="mdi-bag-personal" size="x-small" class="enableContent"></v-icon>
                    <v-icon icon="mdi-bag-carry-on" size="x-small" class="enableContent"></v-icon>
                    <v-icon icon="mdi-bag-suitcase" size="x-small" class="enableContent"></v-icon>
                    <p class="observationText hideMobile">Bagagem Despachada</p>
                </div>
                <div class="EC-colorContentPrimary d-flex" v-if="item.DboardBag">
                    <v-icon icon="mdi-bag-personal" size="x-small" class="enableContent"></v-icon>
                    <v-icon icon="mdi-bag-carry-on" size="x-small" class="enableContent"></v-icon>
                    <v-icon icon="mdi-bag-suitcase-off-outline" size="x-small" class="disableContent"></v-icon>
                    <p class="observationText hideMobile">Bagagem de Mão</p>

                </div>
                <div class="EC-colorContentPrimary d-flex" v-if="item.DpersonalBag">
                    <v-icon icon="mdi-bag-personal" class="enableContent" size="x-small"></v-icon>
                    <v-icon icon="mdi-bag-carry-on-off" class="disableContent" size="x-small"></v-icon>
                    <v-icon icon="mdi-bag-suitcase-off-outline" class="disableContent" size="x-small"></v-icon>
                    <p class="observationText hideMobile">Bagagem Pessoal</p>

                </div>
                <div v-if="item.DeconomyClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-recline-normal" size="x-small" class="enableContent"></v-icon>
                                    <p class="observationText">Econômica</p>
                                </div>
                                <div v-if="item.DPremiumClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-recline-extra" size="x-small" class="enableContent"></v-icon>
                                    <p class="observationText">Premium Economy</p>
                                </div>
                                <div v-if="item.DExecutiveClass" class="iconFlexEC EC-colorContentPrimary">
                                    <v-icon icon="mdi-seat-flat-angled" size="x-small" class="enableContent"></v-icon>
                                    <p class="observationText">Executiva</p>
                                </div>
            </div>
            <div class="flex-row justify-end">

                <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0"
                    prepend-icon="mdi-cart-outline">Comprar</v-btn>
            </div>
        </div>
        <div v-if="item.isRefundable" class=" hideDesktop pt-4 justify-end d-flex px-4">
            <div class="d-flex align-center flex-row featureDescription errorType">
                <v-icon icon="mdi-alert-outline" size="x-small"></v-icon>
                <p class="">Tarifa não reembolsável</p>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "flightOptionComponent",
    props: { data: Object },
    data() {
        return {
            flightOptionData: [
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',
                    hasReturn: true,
                    isRefundable: true,
                    betterPrice: false,
                    betterOption: true,
                    hasKids: true,
                    hasBabys: true,

                    // priceInfos
                    finalPrice: 'R$ 32.544',
                    Adults: '2 Adultos',
                    AdultsPrice: 'R$ 18.506',
                    Kids: '1 Criança',
                    KidsPrice: 'R$ 9.253',
                    Baby: '1 Bebê',
                    BabysPrice: 'R$ 926',
                    flightTax: 'R$ 3.859',
                    serviceTax: 'R$ 512',

                    // Departure general infos
                    DtypeInfo: 'Ida',
                    DdeparturenumberDate: '09/01',
                    DArrivalnumberDate: '10/01',
                    DtotalFlightDuration: '21h10m',
                    DdirectFlight: false,
                    DpersonalBag: false,
                    DcheckedBag: false,
                    DboardBag: true,
                    DeconomyClass: false,
                    DPremiumClass: true,
                    DExecutiveClass: false,

                    //This flight has Overnight?
                    DoverNight: true,


                    //Departure airplane Infos
                    Doperation: 'Gol',
                    Dnumber: 'AV86',
                    Dmodel: 'Airbus A320-100/200',
                    DciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    DdepartureDate: 'Ter, 09 de Jan de 2023',
                    DdepartureTime: '07:30',
                    DdepartureLocation: 'Guarulhos, São Paulo',
                    DdepartureIATA: 'GRU',
                    DdepartureAirport: 'Aeroporto Internacional de Guarulhos',
                    DdepartureFlightDuration: '5h 15m',

                    //This Departure flight has Connections?
                    DhasConnection: true,
                    DhasOneConnection: true,
                    DhasMultipleConnection: false,
                    DchangeAirplane: true,

                    //Departure airplane Infos
                    Dconnectionoperation: 'Latam',
                    Dconnectionnumber: 'AV86',
                    Dconnectionmodel: 'Airbus A320-100/200',
                    DconnectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    DconnectionDate: 'Ter, 09 de Jan de 2023',
                    DconnectionTime: '22:55',
                    DconnectionLocation: 'Bogotá, Colombia',
                    DconnectionIATA: 'BOG',
                    DconnectionAirport: 'Aeroporto Internacional El Nuevo Dorado',
                    DconnectionFlightDuration: '3h 50m',
                    DconnectionDelay: '11h 30m',

                    DarrivalDate: 'Quar, 10 de Jan de 2023',
                    DarrivalTime: '02:45',
                    DarrivalLocation: 'Miami, Florida',
                    DarrivalIATA: 'MIA',
                    DarrivalAirport: 'Aeroporto Internacional Miami',
                    DinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',



                    // RETURN general infos
                    RtypeInfo: 'Volta',
                    RdeparturenumberDate: '19/01',
                    RArrivalnumberDate: '19/01',
                    RtotalFlightDuration: '8h15m',
                    RdirectFlight: true,
                    RpersonalBag: false,
                    RcheckedBag: false,
                    RboardBag: true,
                    ReconomyClass: true,
                    RPremiumClass: false,
                    RExecutiveClass: false,

                    //This flight has Overnight?
                    RoverNight: false,


                    //Departure airplane Infos
                    Roperation: 'Delta Airlines | LATAM Airlines Group',
                    Rnumber: 'DL6072',
                    Rmodel: 'Airbus A320-100/200',
                    RciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    RdepartureDate: 'Sex, 19 de Jan de 2023',
                    RdepartureTime: '09:25',
                    RdepartureLocation: 'Miami, Florida',
                    RdepartureIATA: 'MIA',
                    RdepartureAirport: 'Aeroporto Internacional de Miami',
                    RdepartureFlightDuration: '8h15m',

                    //This Departure flight has Connections?
                    RhasConnection: false,
                    RhasOneConnection: false,
                    RhasMultipleConnection: false,
                    RchangeAirplane: false,

                    //Departure airplane Infos
                    Rconnectionoperation: '',
                    Rconnectionnumber: '',
                    Rconnectionmodel: '',
                    RconnectionciaLogo: '',

                    RconnectionDate: '',
                    RconnectionTime: '',
                    RconnectionLocation: '',
                    RconnectionIATA: '',
                    RconnectionAirport: '',
                    RconnectionFlightDuration: '',
                    RconnectionDelay: '',

                    RarrivalDate: 'Sex, 19 de Jan de 2023',
                    RarrivalTime: '19:40',
                    RarrivalLocation: 'Guarulhos, São Paulo',
                    RarrivalIATA: 'GRU',
                    RarrivalAirport: 'Aeroporto Internacional Guarulhos',
                    RinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',

                },

                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    generalInfos: '*Em todo voo você tem direito a levar uma bolsa pequena com seus pertences',
                    hasReturn: true,
                    isRefundable: false,
                    betterPrice: true,
                    betterOption: false,
                    hasKids: true,
                    hasBabys: true,

                    // priceInfos
                    finalPrice: 'R$ 32.544',
                    Adults: '2 Adultos',
                    AdultsPrice: 'R$ 18.506',
                    Kids: '1 Criança',
                    KidsPrice: 'R$ 9.253',
                    Baby: '1 Bebê',
                    BabysPrice: 'R$ 926',
                    flightTax: 'R$ 3.859',
                    serviceTax: 'R$ 512',

                    // Departure general infos
                    DtypeInfo: 'Ida',
                    DdeparturenumberDate: '09/01',
                    DArrivalnumberDate: '10/01',
                    DtotalFlightDuration: '21h10m',
                    DdirectFlight: false,
                    DpersonalBag: false,
                    DcheckedBag: true,
                    DboardBag: false,
                    DeconomyClass: false,
                    DPremiumClass: false,
                    DExecutiveClass: true,

                    //This flight has Overnight?
                    DoverNight: true,


                    //Departure airplane Infos
                    Doperation: 'Latam',
                    Dnumber: 'AV86',
                    Dmodel: 'Airbus A320-100/200',
                    DciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    DdepartureDate: 'Ter, 09 de Jan de 2023',
                    DdepartureTime: '07:30',
                    DdepartureLocation: 'Guarulhos, São Paulo',
                    DdepartureIATA: 'GRU',
                    DdepartureAirport: 'Aeroporto Internacional de Guarulhos',
                    DdepartureFlightDuration: '5h 15m',

                    //This Departure flight has Connections?
                    DhasConnection: true,
                    DhasOneConnection: true,
                    DhasMultipleConnection: false,
                    DchangeAirplane: true,

                    //Departure airplane Infos
                    Dconnectionoperation: 'Latam',
                    Dconnectionnumber: 'AV86',
                    Dconnectionmodel: 'Airbus A320-100/200',
                    DconnectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    DconnectionDate: 'Ter, 09 de Jan de 2023',
                    DconnectionTime: '22:55',
                    DconnectionLocation: 'Bogotá, Colombia',
                    DconnectionIATA: 'BOG',
                    DconnectionAirport: 'Aeroporto Internacional El Nuevo Dorado',
                    DconnectionFlightDuration: '3h 50m',
                    DconnectionDelay: '11h 30m',

                    DarrivalDate: 'Quar, 10 de Jan de 2023',
                    DarrivalTime: '02:45',
                    DarrivalLocation: 'Miami, Florida',
                    DarrivalIATA: 'MIA',
                    DarrivalAirport: 'Aeroporto Internacional Miami',
                    DinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',



                    // RETURN general infos
                    RtypeInfo: 'Volta',
                    RdeparturenumberDate: '19/01',
                    RArrivalnumberDate: '19/01',
                    RtotalFlightDuration: '8h15m',
                    RdirectFlight: true,
                    RpersonalBag: false,
                    RcheckedBag: false,
                    RboardBag: true,
                    ReconomyClass: true,
                    RPremiumClass: false,
                    RExecutiveClass: false,

                    //This flight has Overnight?
                    RoverNight: false,


                    //Departure airplane Infos
                    Roperation: 'Delta Airlines | LATAM Airlines Group',
                    Rnumber: 'DL6072',
                    Rmodel: 'Airbus A320-100/200',
                    RciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    RdepartureDate: 'Sex, 19 de Jan de 2023',
                    RdepartureTime: '09:25',
                    RdepartureLocation: 'Miami, Florida',
                    RdepartureIATA: 'MIA',
                    RdepartureAirport: 'Aeroporto Internacional de Miami',
                    RdepartureFlightDuration: '8h15m',

                    //This Departure flight has Connections?
                    RhasConnection: false,
                    RhasOneConnection: false,
                    RhasMultipleConnection: false,
                    RchangeAirplane: false,

                    //Departure airplane Infos
                    Rconnectionoperation: '',
                    Rconnectionnumber: '',
                    Rconnectionmodel: '',
                    RconnectionciaLogo: '',

                    RconnectionDate: '',
                    RconnectionTime: '',
                    RconnectionLocation: '',
                    RconnectionIATA: '',
                    RconnectionAirport: '',
                    RconnectionFlightDuration: '',
                    RconnectionDelay: '',

                    RarrivalDate: 'Sex, 19 de Jan de 2023',
                    RarrivalTime: '19:40',
                    RarrivalLocation: 'Guarulhos, São Paulo',
                    RarrivalIATA: 'GRU',
                    RarrivalAirport: 'Aeroporto Internacional Guarulhos',
                    RinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',

                },
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    generalInfos: '*Em todo voo você tem direito a levar uma bolsa pequena com seus pertences',
                    hasReturn: true,
                    isRefundable: true,
                    betterPrice: false,
                    betterOption: false,
                    hasKids: true,
                    hasBabys: true,

                    // priceInfos
                    finalPrice: 'R$ 32.544',
                    Adults: '2 Adultos',
                    AdultsPrice: 'R$ 18.506',
                    Kids: '1 Criança',
                    KidsPrice: 'R$ 9.253',
                    Baby: '1 Bebê',
                    BabysPrice: 'R$ 926',
                    flightTax: 'R$ 3.859',
                    serviceTax: 'R$ 512',

                    // Departure general infos
                    DtypeInfo: 'Ida',
                    DdeparturenumberDate: '09/01',
                    DArrivalnumberDate: '10/01',
                    DtotalFlightDuration: '21h10m',
                    DdirectFlight: false,
                    DpersonalBag: true,
                    DcheckedBag: false,
                    DboardBag: false,
                    DeconomyClass: true,
                    DPremiumClass: false,
                    DExecutiveClass: false,

                    //This flight has Overnight?
                    DoverNight: true,


                    //Departure airplane Infos
                    Doperation: 'Latam',
                    Dnumber: 'AV86',
                    Dmodel: 'Airbus A320-100/200',
                    DciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    DdepartureDate: 'Ter, 09 de Jan de 2023',
                    DdepartureTime: '07:30',
                    DdepartureLocation: 'Guarulhos, São Paulo',
                    DdepartureIATA: 'GRU',
                    DdepartureAirport: 'Aeroporto Internacional de Guarulhos',
                    DdepartureFlightDuration: '5h 15m',

                    //This Departure flight has Connections?
                    DhasConnection: true,
                    DhasOneConnection: true,
                    DhasMultipleConnection: false,
                    DchangeAirplane: true,

                    //Departure airplane Infos
                    Dconnectionoperation: 'Latam',
                    Dconnectionnumber: 'AV86',
                    Dconnectionmodel: 'Airbus A320-100/200',
                    DconnectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    DconnectionDate: 'Ter, 09 de Jan de 2023',
                    DconnectionTime: '22:55',
                    DconnectionLocation: 'Bogotá, Colombia',
                    DconnectionIATA: 'BOG',
                    DconnectionAirport: 'Aeroporto Internacional El Nuevo Dorado',
                    DconnectionFlightDuration: '3h 50m',
                    DconnectionDelay: '11h 30m',

                    DarrivalDate: 'Quar, 10 de Jan de 2023',
                    DarrivalTime: '02:45',
                    DarrivalLocation: 'Miami, Florida',
                    DarrivalIATA: 'MIA',
                    DarrivalAirport: 'Aeroporto Internacional Miami',
                    DinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',



                    // RETURN general infos
                    RtypeInfo: 'Volta',
                    RdeparturenumberDate: '19/01',
                    RArrivalnumberDate: '19/01',
                    RtotalFlightDuration: '8h15m',
                    RdirectFlight: true,
                    RpersonalBag: false,
                    RcheckedBag: false,
                    RboardBag: true,
                    ReconomyClass: true,
                    RPremiumClass: false,
                    RExecutiveClass: false,

                    //This flight has Overnight?
                    RoverNight: false,


                    //Departure airplane Infos
                    Roperation: 'Delta Airlines | LATAM Airlines Group',
                    Rnumber: 'DL6072',
                    Rmodel: 'Airbus A320-100/200',
                    RciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    RdepartureDate: 'Sex, 19 de Jan de 2023',
                    RdepartureTime: '09:25',
                    RdepartureLocation: 'Miami, Florida',
                    RdepartureIATA: 'MIA',
                    RdepartureAirport: 'Aeroporto Internacional de Miami',
                    RdepartureFlightDuration: '8h15m',

                    //This Departure flight has Connections?
                    RhasConnection: false,
                    RhasOneConnection: false,
                    RhasMultipleConnection: false,
                    RchangeAirplane: false,

                    //Departure airplane Infos
                    Rconnectionoperation: '',
                    Rconnectionnumber: '',
                    Rconnectionmodel: '',
                    RconnectionciaLogo: '',

                    RconnectionDate: '',
                    RconnectionTime: '',
                    RconnectionLocation: '',
                    RconnectionIATA: '',
                    RconnectionAirport: '',
                    RconnectionFlightDuration: '',
                    RconnectionDelay: '',

                    RarrivalDate: 'Sex, 19 de Jan de 2023',
                    RarrivalTime: '19:40',
                    RarrivalLocation: 'Guarulhos, São Paulo',
                    RarrivalIATA: 'GRU',
                    RarrivalAirport: 'Aeroporto Internacional Guarulhos',
                    RinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',

                },
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    generalInfos: '*Em todo voo você tem direito a levar uma bolsa pequena com seus pertences',
                    hasReturn: true,
                    isRefundable: true,
                    betterPrice: false,
                    betterOption: false,
                    hasKids: true,
                    hasBabys: true,

                    // priceInfos
                    finalPrice: 'R$ 32.544',
                    Adults: '2 Adultos',
                    AdultsPrice: 'R$ 18.506',
                    Kids: '1 Criança',
                    KidsPrice: 'R$ 9.253',
                    Baby: '1 Bebê',
                    BabysPrice: 'R$ 926',
                    flightTax: 'R$ 3.859',
                    serviceTax: 'R$ 512',

                    // Departure general infos
                    DtypeInfo: 'Ida',
                    DdeparturenumberDate: '09/01',
                    DArrivalnumberDate: '10/01',
                    DtotalFlightDuration: '21h10m',
                    DdirectFlight: false,
                    DpersonalBag: false,
                    DcheckedBag: true,
                    DboardBag: false,
                    DeconomyClass: false,
                    DPremiumClass: true,
                    DExecutiveClass: false,

                    //This flight has Overnight?
                    DoverNight: true,


                    //Departure airplane Infos
                    Doperation: 'Latam',
                    Dnumber: 'AV86',
                    Dmodel: 'Airbus A320-100/200',
                    DciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    DdepartureDate: 'Ter, 09 de Jan de 2023',
                    DdepartureTime: '07:30',
                    DdepartureLocation: 'Guarulhos, São Paulo',
                    DdepartureIATA: 'GRU',
                    DdepartureAirport: 'Aeroporto Internacional de Guarulhos',
                    DdepartureFlightDuration: '5h 15m',

                    //This Departure flight has Connections?
                    DhasConnection: true,
                    DhasOneConnection: true,
                    DhasMultipleConnection: false,
                    DchangeAirplane: true,

                    //Departure airplane Infos
                    Dconnectionoperation: 'Latam',
                    Dconnectionnumber: 'AV86',
                    Dconnectionmodel: 'Airbus A320-100/200',
                    DconnectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    DconnectionDate: 'Ter, 09 de Jan de 2023',
                    DconnectionTime: '22:55',
                    DconnectionLocation: 'Bogotá, Colombia',
                    DconnectionIATA: 'BOG',
                    DconnectionAirport: 'Aeroporto Internacional El Nuevo Dorado',
                    DconnectionFlightDuration: '3h 50m',
                    DconnectionDelay: '11h 30m',

                    DarrivalDate: 'Quar, 10 de Jan de 2023',
                    DarrivalTime: '02:45',
                    DarrivalLocation: 'Miami, Florida',
                    DarrivalIATA: 'MIA',
                    DarrivalAirport: 'Aeroporto Internacional Miami',
                    DinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',



                    // RETURN general infos
                    RtypeInfo: 'Volta',
                    RdeparturenumberDate: '19/01',
                    RArrivalnumberDate: '19/01',
                    RtotalFlightDuration: '8h15m',
                    RdirectFlight: true,
                    RpersonalBag: false,
                    RcheckedBag: false,
                    RboardBag: true,
                    ReconomyClass: true,
                    RPremiumClass: false,
                    RExecutiveClass: false,

                    //This flight has Overnight?
                    RoverNight: false,


                    //Departure airplane Infos
                    Roperation: 'Delta Airlines | LATAM Airlines Group',
                    Rnumber: 'DL6072',
                    Rmodel: 'Airbus A320-100/200',
                    RciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    RdepartureDate: 'Sex, 19 de Jan de 2023',
                    RdepartureTime: '09:25',
                    RdepartureLocation: 'Miami, Florida',
                    RdepartureIATA: 'MIA',
                    RdepartureAirport: 'Aeroporto Internacional de Miami',
                    RdepartureFlightDuration: '8h15m',

                    //This Departure flight has Connections?
                    RhasConnection: false,
                    RhasOneConnection: false,
                    RhasMultipleConnection: false,
                    RchangeAirplane: false,

                    //Departure airplane Infos
                    Rconnectionoperation: '',
                    Rconnectionnumber: '',
                    Rconnectionmodel: '',
                    RconnectionciaLogo: '',

                    RconnectionDate: '',
                    RconnectionTime: '',
                    RconnectionLocation: '',
                    RconnectionIATA: '',
                    RconnectionAirport: '',
                    RconnectionFlightDuration: '',
                    RconnectionDelay: '',

                    RarrivalDate: 'Sex, 19 de Jan de 2023',
                    RarrivalTime: '19:40',
                    RarrivalLocation: 'Guarulhos, São Paulo',
                    RarrivalIATA: 'GRU',
                    RarrivalAirport: 'Aeroporto Internacional Guarulhos',
                    RinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',

                },
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',
                    hasReturn: true,
                    isRefundable: true,
                    betterPrice: false,
                    betterOption: false,
                    hasKids: false,
                    hasBabys: false,

                    // priceInfos
                    finalPrice: 'R$ 32.544',
                    Adults: '2 Adultos',
                    AdultsPrice: 'R$ 18.506',
                    Kids: '1 Criança',
                    KidsPrice: 'R$ 9.253',
                    Baby: '1 Bebê',
                    BabysPrice: 'R$ 926',
                    flightTax: 'R$ 3.859',
                    serviceTax: 'R$ 512',

                    // Departure general infos
                    DtypeInfo: 'Ida',
                    DdeparturenumberDate: '09/01',
                    DArrivalnumberDate: '10/01',
                    DtotalFlightDuration: '21h10m',
                    DdirectFlight: false,
                    DpersonalBag: false,
                    DcheckedBag: false,
                    DboardBag: true,
                    DeconomyClass: false,
                    DPremiumClass: true,
                    DExecutiveClass: false,

                    //This flight has Overnight?
                    DoverNight: true,


                    //Departure airplane Infos
                    Doperation: 'Gol',
                    Dnumber: 'AV86',
                    Dmodel: 'Airbus A320-100/200',
                    DciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    DdepartureDate: 'Ter, 09 de Jan de 2023',
                    DdepartureTime: '07:30',
                    DdepartureLocation: 'Guarulhos, São Paulo',
                    DdepartureIATA: 'GRU',
                    DdepartureAirport: 'Aeroporto Internacional de Guarulhos',
                    DdepartureFlightDuration: '5h 15m',

                    //This Departure flight has Connections?
                    DhasConnection: true,
                    DhasOneConnection: false,
                    DhasMultipleConnection: true,
                    DchangeAirplane: true,

                    //Departure airplane Infos
                    Dconnectionoperation: 'Latam',
                    Dconnectionnumber: 'AV86',
                    Dconnectionmodel: 'Airbus A320-100/200',
                    DconnectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    DconnectionDate: 'Ter, 09 de Jan de 2023',
                    DconnectionTime: '22:55',
                    DconnectionLocation: 'Bogotá, Colombia',
                    DconnectionIATA: 'BOG',
                    DconnectionAirport: 'Aeroporto Internacional El Nuevo Dorado',
                    DconnectionFlightDuration: '3h 50m',
                    DconnectionDelay: '11h 30m',

                    DarrivalDate: 'Quar, 10 de Jan de 2023',
                    DarrivalTime: '02:45',
                    DarrivalLocation: 'Miami, Florida',
                    DarrivalIATA: 'MIA',
                    DarrivalAirport: 'Aeroporto Internacional Miami',
                    DinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',



                    // RETURN general infos
                    RtypeInfo: 'Volta',
                    RdeparturenumberDate: '19/01',
                    RArrivalnumberDate: '19/01',
                    RtotalFlightDuration: '8h15m',
                    RdirectFlight: true,
                    RpersonalBag: false,
                    RcheckedBag: false,
                    RboardBag: true,
                    ReconomyClass: true,
                    RPremiumClass: false,
                    RExecutiveClass: false,

                    //This flight has Overnight?
                    RoverNight: false,


                    //Departure airplane Infos
                    Roperation: 'Delta Airlines | LATAM Airlines Group',
                    Rnumber: 'DL6072',
                    Rmodel: 'Airbus A320-100/200',
                    RciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

                    //Departure Flight Details
                    RdepartureDate: 'Sex, 19 de Jan de 2023',
                    RdepartureTime: '09:25',
                    RdepartureLocation: 'Miami, Florida',
                    RdepartureIATA: 'MIA',
                    RdepartureAirport: 'Aeroporto Internacional de Miami',
                    RdepartureFlightDuration: '8h15m',

                    //This Departure flight has Connections?
                    RhasConnection: false,
                    RhasOneConnection: false,
                    RhasMultipleConnection: false,
                    RchangeAirplane: false,

                    //Departure airplane Infos
                    Rconnectionoperation: '',
                    Rconnectionnumber: '',
                    Rconnectionmodel: '',
                    RconnectionciaLogo: '',

                    RconnectionDate: '',
                    RconnectionTime: '',
                    RconnectionLocation: '',
                    RconnectionIATA: '',
                    RconnectionAirport: '',
                    RconnectionFlightDuration: '',
                    RconnectionDelay: '',

                    RarrivalDate: 'Sex, 19 de Jan de 2023',
                    RarrivalTime: '19:40',
                    RarrivalLocation: 'Guarulhos, São Paulo',
                    RarrivalIATA: 'GRU',
                    RarrivalAirport: 'Aeroporto Internacional Guarulhos',
                    RinFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',

                },


            ]
        }
    }
}

</script>


