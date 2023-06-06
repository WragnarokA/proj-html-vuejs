<script >
import { store } from '../data/store';

export default {

    name: "Benefits",

    data() {
        return {
            store

        }
    },
    computed: {

    },
    methods: {

    },
    created() {

    }
}
</script>



<template>
    <div class="containerB">
        <div class="benefits">
            <div v-for="card, i in 4" class="benefitsCard">

                <i :class="store.icons[i]"></i>
                <span class="fontWB">{{ store.benefitsList[i] }}</span>
                <img class="m-1" src="../assets/images/divider-x-red.png">
                <p>Lorem ipsom dolor Sit arnet,</p>
                <p>consectetur adipiscing elit. In augue</p>
                <p>nisl, ornare es volutpat etra us.</p>
            </div>



        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/mixins.scss' as *;
@use '../styles/variables' as *;

.containerB {
    width: 100vw;
    height: 28rem;
    background-image: url(../assets/images/gym_bkgd_bw-compressor.jpg);
    background-size: cover;
    background-position: center 30%;
    @include flex (row, center, center, );
}

.benefits {
    width: 60rem;
    height: 13.25rem;
    @include flex (row, space-between, center, );

}

.benefitsCard {
    width: 13rem;
    height: 13.25rem;
    @include flex (column, start, center, );


    i {
        font-size: 2.7rem;
        padding: 0.5rem;
        border: solid 1px;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.8rem;
        line-height: 1.6rem;
        color: gray;
    }
}
</style>