<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom pb-sm-3 pb-2 bg-white">
    <div class="container d-flex justify-content-between flex-sm-row flex-column mt-2">
      <router-link to="/" class="mb-2 mb-sm-0"
        ><img src="@/assets/images/logo.jpg" alt="logo"
      /></router-link>
      <div>
        <div class="navbar-collapse">
          <ul class="navbar-nav flex-row fw-bold">
            <li class="nav-item">
              <a
                href="javascript:void(0);"
                class="nav-link fs-5"
                :class="{ 'text-primary': type === 'ScenicSpot' }"
                @click="search('ScenicSpot')"
                >探索景點</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0);"
                class="nav-link link-primary ms-sm-2 ms-4 fs-5"
                :class="{ 'text-primary': type === 'Activity' }"
                @click="search('Activity')"
                >節慶活動</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0);"
                class="nav-link link-primary ms-sm-2 ms-4 fs-5"
                :class="{ 'text-primary': type === 'Restaurant' }"
                @click="search('Restaurant')"
                >品嘗美食</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/js/dist/collapse';

export default {
  methods: {
    search(type) {
      this.$store.dispatch('getData', { type, city: '' });
      if (this.$route.path !== '/searchData') this.$router.push('/searchData');
    },
  },
  computed: {
    type() {
      return this.$store.state.status.type;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  cursor: pointer;
}
</style>
