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
              <router-link to="/attractions" class="nav-link fs-5"
                >探索景點</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/activity" class="nav-link link-primary ms-sm-2 ms-4 fs-5"
                >節慶活動</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/delicacy" class="nav-link link-primary ms-sm-2 ms-4 fs-5"
                >品嘗美食</router-link
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

export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all';
 .router-link-active {
   color: $primary !important;
 }
</style>
