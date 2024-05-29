<template>
  <header class="l-header">
    <p class="l-header__text sans">（R4 事業再構築 機-R2128E00068000）</p>
    <h1 class="l-header__logo">
      <NuxtLink to="/"><img src="@/assets/images/logo/logo_black.svg" width="100%" alt="AIRPORT PARKING"></NuxtLink>
    </h1>
    <nav class="l-header__nav">
      <ul>
        <li><NuxtLink to="/">トップ</NuxtLink></li>
        <li><NuxtLink to="/price">料金について</NuxtLink></li>
        <!-- <li><NuxtLink to="/contact">システム概要</NuxtLink></li> -->
        <li><NuxtLink to="/faq">よくある質問</NuxtLink></li>
        <li class="c-button"><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
      </ul>
    </nav>

    <DrawerMenu />
  </header>
</template>



<style lang="scss" scoped>
.l-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #A7DFD7;
  height: 80px;
  padding: 1rem 1.5rem 0 ;
  font-family: "fot-tsukuardgothic-std", sans-serif;
  font-weight: 700;
  font-style: normal;
  position: relative;

  &__text {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: .625rem;
  }

  &__logo {
    width: 25vw;
    min-width: 222px;
    max-width: 305px;
    a {
      display: grid;
      item-align: center;
    }
  }
}

.l-header__nav {
  display: none;

  @media screen and (min-width: 850px) {
  display: block;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 1.125rem;
    li {
      font-size: 1rem;
      &::before {
        content: '●';
        color: #FFF;
        padding-right: 0.15rem;
      }
      a {
        // color: #333;
        text-decoration: none;
        &:hover {
          // color: #555;
          opacity: 0.7;
        }
      }
    }
  }
    
  }
}
</style>