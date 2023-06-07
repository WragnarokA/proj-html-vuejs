<script >
import { store } from '../../data/store';

export default {

    name: "JumboPunch",

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
            <div class="testimonial">
                <span>
                    <p>" I fear not the man who haspracticed 10,000</p>
                    <p>kicks once, but I fearcthe man who has</p>
                    <p>practiced kick 10,000 times "</p>
                    <div>BRUCE LEE • QUOTE OF THE DAY</div>


                </span>
                <p></p>
            </div>

        </div>
    </div>
</template>




<style lang="scss" scoped>
@use '../../styles/mixins' as *;
@use '../../styles/variables' as *;

.containerB {
    width: 100vw;
    height: 30.6rem;
    background-image: url(../../assets/images/home-testimonial-bg.jpg);
    background-size: cover;
    background-position: center 45%;
    @include flex (row, center, center, );
}

.testimonial {
    width: 37.5rem;
    height: 12.5rem;

    span {
        width: 100%;
        font-size: 1.5rem;
        @include flex (row, center, center, wrap);
        letter-spacing: 1px;
        word-spacing: 9px;
        line-height: 2rem;

        div {
            font-size: 1rem;
            font-weight: bold;
            padding-top: 5.1rem;
        }
    }



}
</style>