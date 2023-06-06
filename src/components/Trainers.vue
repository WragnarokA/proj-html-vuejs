<script >
import { store } from '../data/store';

export default {

    name: "Trainers",
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
        <h2 class="pt-7 ">MEET OUR TRAINERS</h2>
        <img class="m-2" src="../assets/images/divider-xx-red.png">

        <div class="resulds">

            <div v-for="card, i in 3" class="cardResulds">
                <span><img src="../assets/images/trainer1-600x445.jpg"></span>
                <div>
                    <p>{{ store.trainersName[i] }}</p>
                    <p>Personal Trainer</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet,</p>
                    <p>consectetur adipiscing elit. In augue</p>
                    <p>nisl, onare volutpat,</p>
                </div>
                <div>
                    <p><i class="fa-brands fa-facebook"></i></p>
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p><i class="fa-brands fa-instagram"></i></p>
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
    height: 61.8rem;
    background-color: #25292b;
    @include flex (column, start, center, );

    h2 {
        font-size: 2rem;
    }

}


.resulds {
    width: 60rem;
    height: 30.6rem;
    @include flex (row, space-between, center, wrap);
}


.cardResulds {
    width: 18.5rem;
    height: 30.6rem;
    background-color: #1f2123;
    display: flex;
    flex-direction: column;

    span {
        width: 100%;
        height: 13.75rem;

        img {
            width: 100%;
            // padding-bottom: 2.3rem;
        }
    }

}
</style>







