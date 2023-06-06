<script >
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: "app",
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return {
      images: [
        "../assets/images/review_1-compressor.jpg",
        "../assets/images/review_2-compressor.jpg",
        "../assets/images/review_3-compressor.jpg",
        "../assets/images/review_4-compressor.jpg"

      ]


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
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style lang="scss" scoped></style>
