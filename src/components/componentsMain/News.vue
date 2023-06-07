<script >
import { store } from '../../data/store';

export default {

    name: "News",
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
        <h2 class="pt-7 ">PERFORMANCE NEWS</h2>
        <img class="m-2" src="../../assets/images/divider-xx-red.png">

        <div class="resulds">

            <div v-for="card, i in 6" class="cardResulds h31">
                <span><img src="../../assets/images/blog1-800x415.jpg"></span>

                <div class="cardText ">
                    <div>
                        <p><strong>{{ store.newsPreforman[i] }}</strong> </p>
                    </div>
                    <div class="fg-grey fs-08">
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec pretium, tortor vitae porttitor
                            suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]</p>
                    </div>
                </div>
            </div>
            <div class="BtnTrainer">
                <button>VIE ALL TRAINERS</button>
            </div>

        </div>

    </div>
</template>




<style lang="scss" scoped>
@use '../../styles/mixins' as *;
@use '../../styles/variables' as *;

.containerResulds {
    width: 100vw;
    height: 90rem;
    background-color: #25292b;
    @include flex (column, start, center, );

    h2 {
        font-size: 2rem;
    }

}

.resulds {
    width: 60rem;
    height: 30.6rem;
    margin-top: 2rem;
    gap: 2.2rem;
    @include flex (row, space-between, center, wrap);
}

.cardResulds {
    width: 18.5rem;
    height: 22.1rem;
    background-color: #1f2123;
    display: flex;
    flex-direction: column;
    line-height: 1rem;

    span {
        width: 100%;
        height: 13.75rem;

        img {
            width: 100%;
        }
    }

}

.cardText {
    padding: 1.3rem;

    div {
        margin-bottom: 1rem;
        line-height: 1.4rem;
    }
}

.BtnTrainer {
    width: 100%;
    @include flex (row, center, center, wrap);

    button {
        width: 13.8rem;
        height: 3rem;
        margin-top: 4.1rem;
        background-color: transparent;
        color: gray;
        border-color: gray;

    }

}
</style>













