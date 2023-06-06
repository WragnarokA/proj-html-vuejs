<script >
import SingUp from './SingUp.vue';

export default {

    name: "PageMain",
    components: {
        SingUp
    },

    data() {
        return {

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
    <main>
        <div class="worldClass">
            <h2>WORLD CLASS Fitness</h2>
            <img src="../assets/images/divider-xx-red.png" alt="">
            <p>At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped</p>
            <p>to help you reach your goals of a healthy and fit lifestyle.</p>
        </div>
        <SingUp />


    </main>
</template>

<style lang="scss" scoped>
@use '../styles/mixins.scss' as *;
@use '../styles/variables' as *;

.worldClass {
    width: 100vw;
    height: 24.5rem;
    background-color: #25292b;
    @include flex (column, center, center, );

    h2 {
        font-size: 1.7rem;
    }

    img {
        padding: 2rem;
    }

    p {
        padding-bottom: 1rem;
    }

}
</style>