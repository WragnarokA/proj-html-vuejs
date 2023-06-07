<script >

export default {

    name: "SingUp",

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
    <div class="containerSingUp">
        <div class="singUp">
            <div class="singUpLeft"><img src="../../assets/images/home_img-compressor-400x222.jpg"></div>
            <div class="singUpRight">
                <div>Sign Up For A Free Training Session!</div>
                <p>Name*</p>
                <input type="text">
                <p>Email</p>
                <input type="text">
                <button>START NOW!</button>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;
@use '../../styles/variables' as *;

.containerSingUp {
    width: 100vw;
    height: 32rem;
    background-color: #1f2123;
    @include flex (row, center, center, );
}


.singUp {
    @include flex (row, center, center, );
    width: 60rem;
    height: 19rem;

    .singUpLeft {
        width: 50%;
        height: 100%;

        img {
            width: 98%;
        }

    }

    .singUpRight {
        width: 50%;
        height: 100%;
        padding-left: 2%;



        div {
            font-size: 1.5rem;
            margin-bottom: 2.5rem;
            font-weight: bold;
        }

        p {
            font-size: 0.8rem;
            color: gray;
            margin-bottom: 0.5rem;
        }


        input {
            width: 100%;
            height: 2.25rem;
            background-color: transparent;
            border-color: gray;
            margin-bottom: 0.5rem;

        }

        button {
            width: 100%;
            height: 3rem;
            background-color: #ee6059;
            margin-top: 3.5rem;
        }


    }

}
</style>