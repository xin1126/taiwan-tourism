<template>
  <section class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ type }}</li>
        <li class="breadcrumb-item active" aria-current="page" v-show="detailed.City !== undefined">{{ detailed.City }}</li>
        <li class="breadcrumb-item active d-none d-sm-block" aria-current="page">{{ detailed[newName] }}</li>
      </ol>
    </nav>
    <div class="img mb-4" v-if="detailed.Picture.PictureUrl1 !== undefined">
      <img
        class="w-100 rounded-3"
        :src="detailed.Picture.PictureUrl1"
        :alt="detailed[newName]"
      />
    </div>
    <div v-else class="text-center">未提供圖檔</div>
    <h2 class="fw-bold mb-3">{{ detailed[newName] }}</h2>
    <p class="mb-4">{{ detailed.Description }}</p>
    <div class="row mb-4">
      <div class="col-sm-6 bg-white p-3 rounded-3 mb-sm-0 mb-4">
        <template v-if="detailed.type === 'ScenicSpot'">
          <ul>
            <li class="mb-2">開放時間：{{ detailed.OpenTime }}</li>
            <li class="mb-2">服務電話：{{ detailed.Phone }}</li>
            <li class="mb-2">景點地址：{{ detailed.Address }}</li>
            <li>票價資訊：{{ detailed.TicketInfo }}</li>
          </ul>
        </template>
        <template v-else-if="detailed.type === 'Activity'">
          <ul>
            <li class="mb-2">活動時間：{{ newTime(detailed.StartTime) }} ~ {{  newTime(detailed.EndTime) }}</li>
            <li class="mb-2">主辦單位： {{ detailed.Organizer }} </li>
            <li class="mb-2">活動地點： {{ detailed.Address }}</li>
            <li class="d-flex">官方網站： <a :href="detailed.WebsiteUrl" target="_blank">{{ detailed.WebsiteUrl !== undefined ? detailed.WebsiteUrl : '未提供' }}</a></li>
          </ul>
        </template>
        <template v-else>
          <ul>
            <li class="mb-2">營業時間：{{ detailed.OpenTime }}</li>
            <li class="mb-2">聯絡電話：{{ detailed.Phone !== undefined ? detailed.Phone : '未提供' }}</li>
            <li class="mb-2">餐廳地址： {{ detailed.Address }}</li>
            <li class="d-flex">官方網站： <a :href="detailed.WebsiteUrl" target="_blank">{{ detailed.WebsiteUrl !== undefined ? detailed.WebsiteUrl : '未提供' }}</a></li>
          </ul>
        </template>
      </div>
      <div class="col-sm-6">
        <iframe
          :src="`https://maps.google.com/maps?q=${detailed.Position.PositionLat},${detailed.Position.PositionLon}&hl=zh-TW&z=16&amp;output=embed`"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import newType from '../mixins/type';

export default {
  mixins: [newType],
  methods: {
    newTime(time) {
      return time.split('T')[0].replace('-', '/').replace('-', '/');
    },
  },
  computed: {
    ...mapState(['detailed', 'status']),
    newName() {
      return `${this.status.type}Name`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all';
.img {
  height: 180px;
  @include media-breakpoint-up(sm) {
    height: 250px;
  }
  @include media-breakpoint-up(md) {
    height: 400px;
  }
}
</style>
