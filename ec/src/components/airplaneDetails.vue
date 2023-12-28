<template>
        <div class="foCIAdetails rounded-lg pa-3 mb-4">
            <div class="d-flex ciaLogonInfos">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png" class="ciaLogo">
                <p class="text-caption font-weight-regular EC-colorContentPrimary">Operado por <b>{{data.operation}}</b></p>
            </div>
            <div class="d-flex airplaneInfos">
                <p class="text-caption font-weight-regular  EC-colorContentPrimary">Vôo número:<b>{{data.number}}</b></p>
                <v-divider vertical></v-divider>
                <p class="text-caption font-weight-regular  EC-colorContentPrimary">{{data.model}}</p>
            </div>
        </div>
</template>

<script>
export default {
    name :"airplaneDetails",
    props: {data:Object},
 }
 </script>