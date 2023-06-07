<script >
import { store } from '../../data/store';

export default {

    name: "Social",

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
    <div class="containerSocial">
        <div class="social">

            <div> Copyright 2012-2020 | Avada Theme by Theme Fusion I AII Rights Reserved I Powered by WordPress</div>
            <div class="icons">
                <p><i class="fa-brands fa-facebook"></i></p>
                <p><i class="fa-brands fa-twitter"></i></p>
                <p><i class="fa-brands fa-instagram"></i></p>
            </div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;
@use '../../styles/variables' as *;

.containerSocial {
    width: 100vw;
    height: 5.6rem;
    background-color: #1a1c1e;
    @include flex (row, center, center, );

}

.social {
    width: 60rem;
    height: 100%;
    @include flex (row, space-between, center, );
    color: gray;

    .icons {
        @include flex (row, space-between, center, );
        gap: 1rem;
        font-size: 0.7;

        i {
            padding: 0.6rem;
            background-color: #ee6059;
            border-radius: 5px;
            color: white;
        }
    }

}
</style>




