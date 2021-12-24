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
          <button class="btn btn-primary text-white ms-sm-2 px-5"><i class="bi bi-search me-1"></i>查詢</button>
        </div>
      </div>
    </section>
    <main class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="text-primary fw-bold"><i class="bi bi-flag-fill me-2"></i>熱門活動</h2>
        <a href="#" class="fw-bold">查看更多熱門活動 ></a>
      </div>
      <div class="row row-cols-sm-2 row-cols-1 g-4 mb-5">
        <div class="col" v-for="item in 4" :key="item">
          <div class="card shadow mb-3">
            <div class="row g-0">
              <div class="col-md-5">
                <img src="@/assets/images/1.jpg" class="img-fluid rounded-start h-100" alt="..." />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-primary fw-bold pb-2"><i class="bi bi-egg-fried me-2"></i>熱門美食</h2>
      <div class="row g-2 bg-white px-2 pt-1 pb-2 rounded-1 shadow mb-5">
        <div class="col-4 flex-column">
          <img src="@/assets/images/1.jpg" alt="..." class="mb-2"/>
          <img src="@/assets/images/1.jpg" alt="..."/>
        </div>
        <div class="col-4 h-auto">
          <img src="@/assets/images/1.jpg" class="h-100" alt="..."/>
        </div>
        <div class="col-4 flex-column">
          <img src="@/assets/images/1.jpg" alt="..." class="mb-2"/>
          <img src="@/assets/images/1.jpg" alt="..."/>
        </div>
      </div>
      <h2 class="text-primary fw-bold"><i class="bi bi-geo-alt-fill me-2"></i>熱門景點</h2>
      <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4 mb-5">
        <div class="col" v-for="item in 8" :key="item">
          <div class="card">
            <img src="@/assets/images/1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
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
</style>
