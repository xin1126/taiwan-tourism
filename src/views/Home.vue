<template>
  <div>
    <section class="banner mb-5">
      <div
        class="container d-flex flex-column justify-content-center align-items-center align-items-sm-start h-100"
      >
        <div class="text-center text-sm-start">
          <h1 class="fw-bold">探索台灣的每一個角落</h1>
          <p class="text-white fw-bold mb-3">
            我們整理了台灣的景點及活動<span class="d-none d-sm-inline">，</span
            ><br class="d-sm-none" />讓您能更了解台灣
          </p>
        </div>
        <div class="search d-flex flex-column flex-sm-row p-3 rounded-3">
          <div class="row flex-column flex-sm-row g-2 mb-2 mb-sm-0">
            <div class="col-sm-5">
              <select class="form-select">
                <option selected>縣市</option>
                <option value="1">台北市</option>
                <option value="2">新北市</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-sm-7">
              <input class="form-control h-100" type="text" placeholder="搜尋關鍵字" />
            </div>
          </div>
          <button class="btn btn-primary text-white ms-sm-2 px-5">
            <i class="bi bi-search me-1"></i>查詢
          </button>
        </div>
      </div>
    </section>
    <main class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="text-primary fw-bold"><i class="bi bi-flag-fill me-2"></i>熱門活動</h2>
        <a href="#" class="fw-bold">查看更多熱門活動 <i class="bi bi-chevron-right"></i></a>
      </div>
      <div class="row row-cols-sm-2 row-cols-1 g-3 mb-5">
        <div class="col" v-for="item in activity" :key="item.ActivityID">
          <div class="card shadow">
            <div class="row g-0">
              <div class="col-md-5 img">
                <img
                  :src="item.Picture.PictureUrl1"
                  class="img-fluid rounded-start h-100"
                  :alt="item.Name"
                />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ item.Name }}</h5>
                  <p class="card-text activity-text text-gray mb-2">
                    {{ item.Description }}
                  </p>
                  <div class="d-flex justify-content-between">
                    <p class="card-text text-danger">
                      <i class="bi bi-geo-alt-fill"></i>{{ item.City }}
                    </p>
                    <a href="#" class="card-text text-danger"
                      >活動詳情 <i class="bi bi-chevron-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h2 class="text-primary fw-bold"><i class="bi bi-flag-fill me-2"></i>熱門景點</h2>
        <a href="#" class="fw-bold">查看更多熱門景點 <i class="bi bi-chevron-right"></i></a>
      </div>
      <div
        v-if="attractions.length !== 0"
        class="row row-cols-sm-3 row-cols-1 g-2 bg-white px-2 pt-1 pb-2 rounded-1 shadow mb-5"
      >
        <div class="col">
          <div class="row g-2 g-sm-0 flex-sm-column h-100">
            <div class="col attractions-img position-relative">
              <div
                class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
              >
                {{ attractions[0].Name }}
              </div>
              <img
                :src="attractions[0].Picture.PictureUrl1"
                :alt="attractions[0].Name"
                class="pb-sm-2"
              />
            </div>
            <div class="col attractions-img position-relative">
              <div
                class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
              >
                {{ attractions[1].Name }}
              </div>
              <img :src="attractions[1].Picture.PictureUrl1" :alt="attractions[1].Name" />
            </div>
          </div>
        </div>
        <div class="col attractions-img position-relative h-auto">
          <div
            class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
          >
            {{ attractions[2].Name }}
          </div>
          <img :src="attractions[2].Picture.PictureUrl1" :alt="attractions[2].Name" />
        </div>
        <div class="col">
          <div class="row g-2 g-sm-0 flex-sm-column h-100">
            <div class="col attractions-img position-relative">
              <div
                class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
              >
                {{ attractions[3].Name }}
              </div>
              <img
                :src="attractions[3].Picture.PictureUrl1"
                :alt="attractions[3].Name"
                class="pb-sm-2"
              />
            </div>
            <div class="col attractions-img position-relative">
              <div
                class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
              >
                {{ attractions[4].Name }}
              </div>
              <img :src="attractions[4].Picture.PictureUrl1" :alt="attractions[4].Name" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="text-primary fw-bold"><i class="bi bi-flag-fill me-2"></i>熱門美食</h2>
        <a href="#" class="fw-bold">查看更多熱門美食 <i class="bi bi-chevron-right"></i></a>
      </div>
      <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4 mb-5">
        <div class="col" v-for="item in delicacy" :key="item">
          <div class="card shadow">
            <div class="img">
              <img
                :src="item.Picture.PictureUrl1"
                class="card-img-top"
                style="height: 200px"
                :alt="item.Name"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ item.Name }}</h5>
              <p class="card-text text-gray mb-2">
                {{ item.Description }}
              </p>
              <div class="d-flex justify-content-between">
                <p class="card-text text-danger">
                  <i class="bi bi-geo-alt-fill"></i>{{ item.City }}
                </p>
                <a href="#" class="card-text text-danger"
                  >活動詳情 <i class="bi bi-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: [],
      attractions: [],
      delicacy: [],
    };
  },
  methods: {
    async getActivity() {
      const res = await this.$api.get('/Activity?%24top=100&%24format=JSON');
      const filterData = res.filter((item) => item.Picture.PictureUrl1 !== undefined);
      this.activity = filterData.sort(() => Math.random() - 0.5).slice(-4);
    },
    async getAttractions() {
      const res = await this.$api.get('/ScenicSpot?%24top=50&%24format=JSON');
      const filterData = res.filter((item) => {
        const data = item.Picture.PictureUrl1;
        return data !== undefined && data.indexOf('https://www') >= 0 && item.Name.length < 6;
      });
      this.attractions = filterData.sort(() => Math.random() - 0.5).slice(-5);
    },
    async getDelicacy() {
      const res = await this.$api.get('/Restaurant?%24top=50&%24format=JSON');
      const filterData = res.filter((item) => {
        const data = item.Picture.PictureUrl1;
        return data !== undefined && item.Description.length <= 15;
      });
      this.delicacy = filterData.sort(() => Math.random() - 0.5).slice(-8);
    },
  },
  created() {
    this.getActivity();
    this.getAttractions();
    this.getDelicacy();
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all';
.banner {
  background-image: url('~@/assets/images/1.jpg');
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

.activity-text {
  height: 120px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.attractions-img {
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transition: 0.5s;
    filter: grayscale(80%);
  }
}
</style>
