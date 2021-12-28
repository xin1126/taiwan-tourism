<template>
  <main class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="text-primary fw-bold"><i class="bi bi-flag-fill me-2"></i>熱門活動</h2>
      <a href="#" class="fw-bold" @click="search('Activity')">查看更多熱門活動 <i class="bi bi-chevron-right"></i></a>
    </div>
    <div class="row row-cols-sm-2 row-cols-1 g-3 mb-5">
      <div class="col" v-for="item in activity" :key="item.ActivityID">
        <div class="card shadow" @click="detailed(item, 'Activity')">
          <div class="row g-0">
            <div class="col-md-5 img">
              <img
                :src="item.Picture.PictureUrl1"
                class="img-fluid rounded-start h-sm-100"
                :alt="item.ActivityName"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ item.ActivityName }}</h5>
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
      <h2 class="text-primary fw-bold"><i class="bi bi-geo-alt-fill me-2"></i>熱門景點</h2>
      <a href="#" class="fw-bold" @click="search('ScenicSpot')">查看更多熱門景點 <i class="bi bi-chevron-right"></i></a>
    </div>
    <div
      v-if="attractions.length !== 0"
      class="row row-cols-sm-3 row-cols-1 g-2 bg-white px-2 pt-1 pb-2 rounded-1 shadow mb-5"
    >
      <div class="col">
        <div class="row g-2 g-sm-0 flex-sm-column h-100">
          <div class="col attractions-img position-relative" @click="detailed(attractions[0], 'ScenicSpot')">
            <div
              class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
            >
              {{ attractions[0].ScenicSpotName }}
            </div>
            <img
              :src="attractions[0].Picture.PictureUrl1"
              :alt="attractions[0].ScenicSpotName"
              class="pb-sm-2"
            />
          </div>
          <div class="col attractions-img position-relative" @click="detailed(attractions[1], 'ScenicSpot')">
            <div
              class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
            >
              {{ attractions[1].ScenicSpotName }}
            </div>
            <img :src="attractions[1].Picture.PictureUrl1" :alt="attractions[1].ScenicSpotName" />
          </div>
        </div>
      </div>
      <div class="col attractions-img position-relative h-auto" @click="detailed(attractions[2], 'ScenicSpot')">
        <div
          class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
        >
          {{ attractions[2].ScenicSpotName }}
        </div>
        <img :src="attractions[2].Picture.PictureUrl1" :alt="attractions[2].ScenicSpotName" />
      </div>
      <div class="col">
        <div class="row g-2 g-sm-0 flex-sm-column h-100">
          <div class="col attractions-img position-relative" @click="detailed(attractions[3], 'ScenicSpot')">
            <div
              class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
            >
              {{ attractions[3].ScenicSpotName }}
            </div>
            <img
              :src="attractions[3].Picture.PictureUrl1"
              :alt="attractions[3].ScenicSpotName"
              class="pb-sm-2"
            />
          </div>
          <div class="col attractions-img position-relative" @click="detailed(attractions[4], 'ScenicSpot')">
            <div
              class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-4 text-nowrap bg-translucent-black rounded-1 px-2 py-1 z-index"
            >
              {{ attractions[4].ScenicSpotName }}
            </div>
            <img :src="attractions[4].Picture.PictureUrl1" :alt="attractions[4].ScenicSpotName" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="text-primary fw-bold"><i class="bi bi-egg-fried me-2"></i>熱門美食</h2>
      <a href="#" class="fw-bold" @click="search('Restaurant')">查看更多熱門美食 <i class="bi bi-chevron-right"></i></a>
    </div>
    <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4 mb-5">
      <div class="col" v-for="item in delicacy" :key="item.ActivityID">
        <div class="card shadow" @click="detailed(item, 'Restaurant')">
          <div class="img">
            <img
              :src="item.Picture.PictureUrl1"
              class="card-img-top"
              style="height: 200px"
              :alt="item.RestaurantName"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ item.RestaurantName }}</h5>
            <p class="card-text text-gray mb-2">
              {{ item.Description }}
            </p>
            <div class="d-flex justify-content-between">
              <p class="card-text text-danger"><i class="bi bi-geo-alt-fill"></i>{{ item.City }}</p>
              <a href="#" class="card-text text-danger"
                >美食詳情 <i class="bi bi-chevron-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import detailed from '../mixins/detailed';

export default {
  data() {
    return {
      activity: [],
      attractions: [],
      delicacy: [],
    };
  },
  mixins: [detailed],
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
        return data !== undefined && data.indexOf('http://') < 0 && item.ScenicSpotName.length < 6;
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
    search(type) {
      this.$store.dispatch('getData', { type, city: '' });
      if (this.$route.path !== '/searchData') this.$router.push('/searchData');
    },
  },
  created() {
    this.getActivity();
    this.getAttractions();
    this.getDelicacy();
  },
};
</script>

<style lang="scss" scoped>
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
