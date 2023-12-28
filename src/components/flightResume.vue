<script setup>
  import durationFlight from './durationFlight.vue';
</script>
<template>
    <h4 class="d-none d-md-flex">Ida</h4>                
    <div class="foResume foDeparture">
      <div class="foDepaturefTime foTimenFlight">
        <div class="foHour">
          <p class="foTime text-h5">21:25</p>
        </div>
        <p class="foIATA">GRU</p>
      </div>
      <durationFlight/>
      <div class="foArrivalTime foTimenFlight">
        <div class="foHour">
          <p class="foTime text-h5">21:25</p>
          <p class="nextDay">+1</p>
        </div>
        <p class="foIATA">SFO</p>
      </div>
    </div>
</template>

<script>
export default{
   name :"flightResume"
}
</script>
