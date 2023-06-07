<script >
import Subscription from '../components/componentsFooter/Subscription.vue';
import Contacts from '../components/componentsFooter/Contacts.vue';
import Social from '../components/componentsFooter/Social.vue';



export default {
    name: "PageFooter",
    components: {
        Subscription,
        Contacts,
        Social

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
    <Subscription />
    <Contacts />
    <Social />


    <Subscription />
</template>

<style lang="scss" scoped></style>
     



