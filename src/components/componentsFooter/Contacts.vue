<script >
import { store } from '../../data/store';

export default {

    name: "Contacts",

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
    <div class="containerCts">
        <div class="contacts">

            <div class="contatti">
                <div>COME FIND US</div>
                <p>12345 North Main Street</p>
                <p>New York, NY 555555</p>
                <p>Phone: 1.800,555.6789</p>
                <p>Email: info@your-domain.com</p>
            </div>
            <div class="contatti">
                <div>RECENT POSTS</div>
                <p>> Train with free weights or your</p>
                <p>body weight?</p>
                <p class="line">_____________________</p>
                <p>> Nutritional advice that will keep</p>
                <p>you training</p>
                <p class="line">_____________________</p>
            </div>
            <div class="contatti">
                <div>OPENING T INIES</div>
                <p>Weekdays Monday - Friday</p>
                <p class="fg-grey">09:00 - 19:00</p>
                <p>Weekends Saturday - Sunday</p>
                <p class="fg-grey">09:00 - 21:00</p>
                <p></p>
            </div>
            <div><img src="../../assets/images/gym_ad-compressor.jpg"></div>
        </div>

    </div>
</template>
              




<style lang="scss" scoped>
@use '../../styles/mixins' as *;
@use '../../styles/variables' as *;

.containerCts {
    width: 100vw;
    height: 20.7rem;
    background-color: #1f2123;
    @include flex (row, center, center, );
}

.contacts {
    width: 60rem;
    height: 12rem;
    @include flex (row, space-between, start);

}

.contatti {
    height: 100%;
    gap: 1rem;

    div {
        margin-bottom: 2rem;
        color: rgba(67, 67, 67, 0.952);
    }

    .line {
        color: rgb(59, 59, 59);
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 0.4rem;
        font-size: 0.8rem;
        color: gray;

    }

}
</style>