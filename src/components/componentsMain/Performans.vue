<script >
import { store } from '../../data/store';

export default {

    name: "Performans",

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
        <h2>HIGH PERFORMANCE FACILITIES</h2>
        <img class="m-2" src="../../assets/images/divider-xx-red.png">

        <div class="resulds">

            <div v-for="card, i in 6" class="cardResulds">
                <span><img src="../../assets/images/home-image1-200x135.jpg"></span>
            </div>


        </div>

    </div>
</template>









<style lang="scss" scoped>
@use '../../styles/mixins' as *;
@use '../../styles/variables' as *;

.containerResulds {
    width: 100vw;
    height: 39.5rem;
    background-color: #25292b;
    @include flex (column, start, center, );

    h2 {
        font-size: 2rem;
    }

}


.resulds {
    width: 60rem;
    height: 27.5rem;
    gap: 1.95rem;
    @include flex (row, space-between, center, wrap);
}


.cardResulds {
    width: 18.7rem;
    height: 12.5rem;
    display: flex;

    span {
        width: 18.7rem;
        height: 100%;

        img {
            width: 100%;

        }
    }
}
</style>