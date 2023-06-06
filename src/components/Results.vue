<script >
import { store } from '../data/store';

export default {

    name: "Results",
    resuldsImg: [
        "../assets/images/review_1-compressor.jpg",
        "../assets/images/review_2-compressor.jpg",
        "../assets/images/review_3-compressor.jpg",
        "../assets/images/review_4-compressor.jpg"

    ],



    data() {
        return {
            store,

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
    <div class="containerResulds">
        <h2 class="pt-7 ">REAL WORLD RESULTS</h2>
        <img class="m-2" src="../assets/images/divider-xx-red.png">

        <div class="resulds">

            <div v-for="card, i in 4" class="cardResulds">
                <span><img src="../assets/images/review_1-compressor.jpg"></span>
                <div>
                    "{{ store.resuldsDescription[i] }}"
                    <p>{{ store.resuldsName[i] }}</p>

                </div>
            </div>

        </div>

    </div>
</template>









<style lang="scss" scoped>
@use '../styles/mixins.scss' as *;
@use '../styles/variables' as *;

.containerResulds {
    width: 100vw;
    height: 53.7rem;
    background-color: #25292b;
    @include flex (column, start, center, );

    h2 {
        font-size: 2rem;
    }

}


.resulds {
    width: 60rem;
    height: 23.75rem;
    gap: 2rem;
    @include flex (row, space-between, center, wrap);
}


.cardResulds {
    width: 28.8rem;
    height: 10.6rem;
    background-color: #1f2123;
    padding: 1.56rem;
    display: flex;

    span {
        width: 7.75rem;
        height: 100%;

        img {
            width: 100%;

        }
    }

    div {
        width: 18.5rem;
        padding-left: 1rem;
        font-size: 0.8rem;
        line-height: 1.6rem;


    }

}
</style>