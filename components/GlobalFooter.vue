<template>
  <footer class="l-footer">
    <div class="l-footer__inner">
      <div class="l-footer__left">
        <div class="l-footer__logo">
          <img src="@/assets/images/logo/logo_tate.svg" width="100%" height="auto" alt="">
          <img src="@/assets/images/logo/logo_white.svg" width="100%" height="auto" alt="">
        </div>
        <div class="l-footer__info">
          株式会社サン・ポート<br>
          〒286-0121 千葉県成田市駒井野 134<br>
          TEL : 0476-33-1155<br>
          FAX : 0476-33-1198<br>
          月～金 9:00～18:00
        </div>
      </div>
      <ul class="l-footer__right l-footer__nav">
        <li><NuxtLink to="">トップ</NuxtLink></li>
        <li><NuxtLink to="/price">料金について</NuxtLink></li>
        <li><NuxtLink to="/company">会社概要</NuxtLink></li>
        <li><NuxtLink to="/faq">よくある質問</NuxtLink></li>
        <li><NuxtLink to="/news">ニュース一覧</NuxtLink></li>
        <li><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
        <li><NuxtLink to="/privacy">プライバシーポリシー</NuxtLink></li>
        <li><NuxtLink to="/agreement">サイトポリシー</NuxtLink></li>
      </ul>
    </div>

    <p class="copyright">Copyright 2024 AIRPORT PARKING PRO</p>

  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #404040;
  color: white;
  padding: 2.5rem 1.5rem 1.5rem;
  text-align: center;
  // font-family: "fot-tsukuardgothic-std", sans-serif;
  font-size: 0.875rem;
  // font-weight: normal;

  @media screen and (min-width: 850px){
    padding-top: 5rem;
  }

}

.l-footer {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 850px) {
      flex-direction: row;
      margin-bottom: 8rem;
    }
  }
  &__left, &__right {
    border-bottom: 1px solid #FFF;
    padding-bottom: 2.5rem;
    margin-bottom: 2.5rem;
    @media screen and (min-width: 850px) {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
  &__logo {
    width: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;
    img:first-child {
      display: block;
    }
    img:last-child {
      display: none;
    }
    @media screen and (min-width: 850px) {
      width: 413px;
      margin-bottom: 2rem;
      img:first-child {
        display: none;
      }
      img:last-child {
        display: block;
      }
    }
  }

  &__info {
    line-height: 1.75;
    @media screen and (min-width: 850px) {
      text-align: left;
    }
  }

  &__nav {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(4, auto);
    text-align: left;
    column-gap: 1.5rem;
    line-height: 2;
    li::before {
      content: '●';
      color: #FFF;
      margin-right: 0.125rem;
    }
    a {
      text-decoration: none;
    }
  }
}

.copyright {
  margin-top: 5rem;
  font-size: .625rem;
}
</style>