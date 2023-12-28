<template>
    <div class="flightPriceDetailed">
                    <p class="text-caption EC-colorContentSecondary">ˆEm todo voo você tem direito a levar uma bolsa pequena com seus pertences </p>
                    <div class="priceTable rounded-lg mt-4">
                        <p class="text-body px-2 pt-2 pb-0 font-weight-bold EC-colorContentPrimary">Detalhamento da tarifa:</p>
                        <v-table class="px-2 pt-0 " density="compact">
                            <tbody>
                                <tr v-for="item in flightPrice" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td class="priceTd">{{ item.price }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                        <div class="priceVdetail pa-2">
                            <div class="finalPrice">
                                <div>
                                    <p class="text-body font-weight-bold EC-colorContentSecondary">Total:</p>
                                </div>
                                <div class="pricewTag ">
                                    <p class="text-body font-weight-bold EC-colorContentPrimary">R$ 10.166,00</p>
                                </div>
                            </div>
                            <div class="d-flex py-1 justify-end">
                                <nonRefundable />
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
  name: "flightPriceDetails",
  props: {data:Object},
  data() {
        return {
            flightPrice: [
                {
                    name: '2 Adultos',
                    price: 'R$ 5.410,00',
                },
                {
                    name: '1 Criança',
                    price: 'R$ 2.104,14',
                },
                {
                    name: 'Bebê',
                    price: 'Isento',
                },
                {
                    name: 'Taxa de Serviço',
                    price: 'R$ 113',
                },
                {
                    name: 'Taxa de Embarque',
                    price: 'R$ 513',
                },
            ],
        }
    },
}
  </script>