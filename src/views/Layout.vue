<template>
  <div>
    <Navbar />
    <Search />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Search from '@/components/Search.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    Footer,
    Search,
  },
};
</script>
