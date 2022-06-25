<template>
  <div>
    <Header />
    <h1>DEFAULT LAYOUT ( header / footer )</h1>
    <hr>
    <nuxt />
    <hr>
    <Footer />
  </div>
</template>

<script>
import Header from './../components/header';
import Footer from './../components/footer';
export default {
  //middleware: ['anaylitics'],
  components: {
    Header,
    Footer
  }
}
</script>
