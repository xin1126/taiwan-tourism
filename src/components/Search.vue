<template>
  <section class="banner mb-4">
    <div
      class="container d-flex flex-column justify-content-center align-items-center align-items-sm-start h-100"
    >
      <div class="text-center text-sm-start">
        <h1 class="fw-bold">探索台灣的每一個角落</h1>
        <p class="text-white text-center text-sm-start fw-bold mb-3">
          我們整理了台灣的景點及活動<span class="d-none d-sm-inline">，</span
          ><br class="d-sm-none" />讓您能更了解台灣
        </p>
      </div>
      <div class="search d-flex flex-column flex-sm-row p-3 rounded-3">
        <div class="row flex-column flex-sm-row g-2 mb-2 mb-sm-0">
          <div class="col-sm-7 d-flex">
            <select class="form-select me-2" v-model="type">
              <option disabled value="">請選擇類別</option>
              <option v-for="item in data" :key="item.type" :value="item.tag">
                {{ item.type }}
              </option>
            </select>
            <select class="form-select" v-model="city">
              <option disabled value="">請選擇縣市</option>
              <option v-for="item in tw" :key="item.place" :value="item.tag">
                {{ item.place }}
              </option>
            </select>
          </div>
          <div class="col-sm-5">
            <input v-model="str" class="form-control h-100" type="text" placeholder="搜尋關鍵字" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary text-white ms-sm-2 px-5"
          ref="tooltip"
          :class="{ 'cursor-allowed': type === '' }"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          :data-bs-original-title="type === '' ? '請選擇類別' : ''"
          @click="search"
        >
          <i class="bi bi-search me-1"></i>查詢
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Tooltip from 'bootstrap/js/dist/tooltip';
import tw from '../lib/index';

export default {
  data() {
    return {
      city: '',
      type: '',
      str: '',
      tooltip: '',
      data: [
        {
          type: '探索景點',
          tag: 'ScenicSpot',
        },
        {
          type: '節慶活動',
          tag: 'Activity',
        },
        {
          type: '品嘗美食',
          tag: 'Restaurant',
        },
      ],
      tw,
    };
  },
  methods: {
    search() {
      if (this.type === '' && this.city === '') return;
      this.$store.dispatch('getData', { type: this.type, city: this.city, str: this.str });
      if (this.$route.path !== '/searchData' && this.type !== '') this.$router.push('/searchData');
    },
  },
  mounted() {
    this.tooltip = new Tooltip(this.$refs.tooltip);
  },
  computed: {
    newType() {
      return this.$store.state.status.type;
    },
  },
  watch: {
    newType() {
      this.type = this.newType;
    },
    $route() {
      if (this.$route.path === '/') {
        this.type = '';
        this.city = '';
        this.str = '';
        this.$store.dispatch('getData', { type: '' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all';

.banner {
  background-image: url('~@/assets/images/banner.jpg');
  background-position: center;
  background-size: cover;
  height: 400px;
}

.search {
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  @include media-breakpoint-up(sm) {
    width: auto;
  }
}

.cursor-allowed {
  cursor: not-allowed !important;
  pointer-events: initial !important;
  opacity: 0.65;
}
</style>
