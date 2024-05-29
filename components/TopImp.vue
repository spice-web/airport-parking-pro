<template>
  <div>
    <div class="main-content">
      <div class="inner">
        <h2 class="hero">
          <img src="@/assets/images/top/hero_sp.png" alt="空港民間駐車場の予約・顧客管理はAIRPORT PARKING" width="100%" />
          <img src="@/assets/images/top/hero.png" alt="空港民間駐車場の予約・顧客管理はAIRPORT PARKING" width="100%" />
        </h2>
        <div class="hero-list">
          <img src="@/assets/images/top/check_sp.png" alt="" class="" width="100%" height="auto">
          <img src="@/assets/images/top/check_pc.png" alt="" class="" width="100%" height="auto">
        </div>
        <div class="car-wrap">
          <img src="@/assets/images/top/car.png" alt="" class="car" width="100%" height="auto">
          <img src="@/assets/images/top/pctab.png" alt="" class="pctab">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.main-content {
  position: relative;
  background: $green;
  border-bottom: 150px solid #7C7C7C;
  margin-bottom: 150px;
  padding: 2.5rem 0 0;
  z-index: -1;
  position: relative;
  @media screen and (min-width: 850px) {
    border-bottom: 100px solid #7C7C7C;
  }
}

.inner {
  max-width: 1280px;
  @media screen and (min-width: 850px) {
    padding: 90px 2rem 0;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 300px;
  }
}
.hero, .hero-list {
  width: 100%;
  img {
    &:nth-child(2) {
      display: none;
    }
  }

  @media screen and (min-width: 850px) {
    img {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: block;
      }
    }
  }
}
.hero-list {
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 10%;
}
.car {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -2.3rem;
  @media screen and (min-width: 850px) {
    margin-left: 0;
    margin-bottom: -6rem;
  }
}
.pctab {
  position: absolute;
  z-index: 100;
  bottom: -280px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 100%;
  max-width: 375px;
  @media screen and (min-width: 850px) {
    width: 100%;
    position: static;
    bottom: 0;
    transform: none;
    max-width: 600px;
    // margin-top: -18rem;
    // margin-right: 0;
  }
}

@media screen and (min-width: 850px) {
  .car-wrap {
    display: grid;
    grid-template-columns: auto 1fr;
    margin-bottom: -200px;
  }
}
</style>