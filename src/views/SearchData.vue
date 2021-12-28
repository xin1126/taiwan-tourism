<template>
  <section class="container">
    <div class="d-flex justify-content-between">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ type }}</li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ city !== undefined ? city : '全台' }}
          </li>
        </ol>
      </nav>
      <p class="text-gray">搜尋結果：{{ newData.length }}筆</p>
    </div>
    <template v-if="newData.length > 0">
      <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4 mb-5">
        <div class="col" v-for="item in pageData.data" :key="item.ActivityID">
          <div class="card h-100 shadow" @click="detailed(item, status.type)">
            <div
              class="img"
              v-if="
                item.Picture.PictureUrl1 !== undefined
              "
            >
              <img
                :src="item.Picture.PictureUrl1"
                class="card-img-top"
                style="height: 200px"
                :alt="item[newName]"
              />
            </div>
            <div
              class="card-img-top d-flex justify-content-center align-items-center bg-gray text-white fs-4"
              style="height: 200px"
              v-else
            >
              未提供圖檔
            </div>
            <div class="card-body d-flex flex-column justify-content-between h-25">
              <h5 class="card-title fw-bold">{{ item[newName] }}</h5>
              <div>
                <span class="badge bg-secondary me-2">{{ item.Class1 }}</span
                ><span class="badge bg-secondary">{{ item.Class2 }}</span>
                <div class="d-flex justify-content-between mt-2">
                  <p class="card-text text-danger">
                    <i class="bi bi-geo-alt-fill me-1"></i>{{ item.City }}
                  </p>
                  <a href="#" class="card-text text-danger"
                    >美食詳情 <i class="bi bi-chevron-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        v-if="pageData.totalPages > 10"
        aria-label="Page navigation example"
        class="d-flex justify-content-center pb-5"
      >
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="page(-1)">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" :class="{ active: num === 1 }">
            <a class="page-link" href="#" @click.prevent="num = 1">1</a>
          </li>

          <li
            class="page-item"
            v-for="page in 5"
            :key="page + 'a'"
            :class="{ active: num === page + 1 }"
            v-show="num <= 4"
          >
            <a class="page-link" href="#" @click.prevent="num = page + 1">{{ page + 1 }}</a>
          </li>
          <li class="page-item" v-show="num >= 5">
            <a class="page-link" href="#" @click.prevent="page(-5)">...</a>
          </li>
          <li
            class="page-item"
            :class="{ active: num === page + 1 }"
            v-for="page in pageData.totalPages"
            :key="page"
            v-show="
              num >= 5 &&
              num + 1 > page &&
              num < page + 3 &&
              page !== 1 &&
              page <= pageData.totalPages - 2
            "
          >
            <a class="page-link" href="#" @click.prevent="num = page + 1">{{ page }}</a>
          </li>
          <li class="page-item" v-show="num < pageData.totalPages - 4">
            <a class="page-link" href="#" @click.prevent="page(5)">...</a>
          </li>
          <li class="page-item" :class="{ active: num === pageData.totalPages }">
            <a class="page-link" href="#" @click.prevent="num = pageData.totalPages">{{
              pageData.totalPages - 1
            }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="page(1)">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav
        v-else-if="pageData.totalPages !== 1"
        aria-label="Page navigation example"
        class="d-flex justify-content-center pb-5"
      >
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="page(-1)">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="page in pageData.totalPages"
            :key="page"
            :class="{ active: num === page }"
          >
            <a class="page-link" href="#" @click.prevent="num = page">{{ page }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="page(1)">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </template>
    <template v-else>
        <div class="img-transparent d-flex justify-content-center">
            <img class="" src="@/assets/images/noData.jpg" alt="查無資料" />
        </div>
    </template>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import detailed from '../mixins/detailed';
import newType from '../mixins/type';
import tw from '../lib/index';

export default {
  data() {
    return {
      num: 1,
    };
  },
  mixins: [detailed, newType],
  methods: {
    page(num) {
      this.num += num;
      this.num = this.num <= 0 ? 1 : this.num;
      this.num = this.num > this.pageData.totalPages ? this.pageData.totalPages : this.num;
    },
  },
  computed: {
    ...mapState(['data', 'status']),
    newData() {
      let data = [];
      this.data.forEach((item) => {
        const key = item.Picture.PictureUrl1;
        if (key !== undefined && key.indexOf('http://') < 0) {
          data.unshift(item);
        } else {
          data.push(item);
        }
      });
      if (this.status.str !== undefined) {
        data = data.filter((item) => item[this.newName].match(this.status.str));
      }
      return data;
    },
    pageData() {
      const pagination = {};
      const min = this.num * 8 - 8 + 1;
      const max = this.num * 8;
      const filterData = this.newData.filter((i, key) => key + 1 >= min && key + 1 <= max);
      pagination.totalPages = Math.ceil(this.newData.length / 12);
      pagination.data = this.newData.length <= 9 ? this.newData : filterData;
      return pagination;
    },
    city() {
      const data = tw.filter((item) => item.tag === this.status.city);
      return data[0]?.place;
    },
    newName() {
      return `${this.status.type}Name`;
    },
  },
  watch: {
    data() {
      this.num = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-transparent {
  mix-blend-mode: multiply;
  min-height: calc(100vh - 641px);
  img {
      object-fit: contain;
  }
}
</style>
