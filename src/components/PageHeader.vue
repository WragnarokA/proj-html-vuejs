<script >

export default {
    name: "PageHeader",

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
    <div class="jumbo">
        <div class="bar">
            <img src="../assets/images/gym_logo_1x.png" alt="">
            <div class="navBar">
                <div class="fgOrange">HOME</div>
                <div>ABOUT US</div>
                <div>FACILITIES</div>
                <div>MEMBERSHIP</div>
                <div>TRSTIMONIALS</div>
                <div>BLOGS</div>
            </div>
        </div>
        <div class="title">
            <h1>NO PAIN NO GAIN</h1>
            <p>Motivation is what gets you started. Habit is what keeps you going.</p>
            <button>JOIN US TODAY</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/mixins.scss' as *;
@use '../styles/variables' as *;



.jumbo {
    width: 100vw;
    height: 53rem;
    position: relative;
    background-image: url(../assets/images/home-banner.jpg);
    background-size: 98%;
    background-position: center top;
}

.bar {
    width: 100vw;
    height: 12.5rem;
    padding: 0 6rem;
    @include flex (row, space-between, center, );

    .navBar {
        @include flex (row, space-between, center, );
        gap: 1rem;
    }
}

.title {
    @include flex (column, center, center, );
    margin-top: 10rem;

    h1 {
        font-size: 6rem;
    }

    p {
        letter-spacing: 2px;
        margin: 1.3rem 0 2rem;
    }

    button {
        width: 10rem;
        height: 2.5rem;
        background-color: transparent;
        color: gray;
        border-color: gray;
    }


}
</style>


