<script >
import { store } from '../../data/store';

export default {

    name: "Subscription",

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
    <div class="containerSubs">
        <div class="subscription">
            <div>
                <h2>Achieve Your Fitness Coals</h2>
                <p>Flexible membership packages to suit all levels of athlete and achive your fitness goals</p>
            </div>
            <button>JOIN US</button>
        </div>

    </div>
</template>




<style lang="scss" scoped>
@use '../../styles/mixins' as *;
@use '../../styles/variables' as *;

.containerSubs {
    width: 100vw;
    height: 11.25rem;
    background-image: url(../../assets/images/home-parallax.jpg);
    background-size: cover;
    background-position: center 18%;
    @include flex (row, center, center, );

}

.subscription {
    width: 60rem;
    height: 100%;
    @include flex (row, start, center, );

    div {
        h2 {
            font-size: 2rem;
            word-spacing: 0.5rem;
            margin-bottom: 0.6rem;
        }

    }

    button {
        width: 8rem;
        height: 2.5rem;
        margin-left: 7rem;

        background-color: transparent;
        color: white;
        border-color: white;

    }




}
</style>