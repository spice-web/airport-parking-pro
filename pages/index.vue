<template>
  <div class="">
    <TopImp />
    
    <h3 class="green font-bold text-lg text-center mb-24">業界特化のシステムで、<br>運営を新基準にアップデート！</h3>

    <!-- 空港民間駐車場業界に まつわる予約を まとめてすっきり！ -->
    <h3 class="title__fukidashi"><span>空港民間駐車場業界に<br>まつわる予約を<br>まとめてすっきり！</span></h3>
    <ul class="grid grid-cols-1 gap-4 inner mb-32">
      <li><img src="@/assets/images/top/top_p001.jpg" alt="" class="rounded-2xl"></li>
      <li><img src="@/assets/images/top/top_p002.jpg" alt="" class="rounded-2xl"></li>
      <li><img src="@/assets/images/top/top_p003.jpg" alt="" class="rounded-2xl"></li>
    </ul>
    <!-- 空港周辺の 民間駐車場は必見！ 多様な業態に柔軟に対応！ -->
    <div class="support">
      <h3 class="title__white">空港周辺の<br>民間駐車場は必見！<br>多様な業態に柔軟に対応！</h3>
      <div class="inner">
        <ul class="grid grid-cols-2 gap-4">
          <li><img src="@/assets/images/top/pict001.png" alt=""></li>
          <li><img src="@/assets/images/top/pict002.png" alt=""></li>
          <li><img src="@/assets/images/top/pict003.png" alt=""></li>
          <li><img src="@/assets/images/top/pict004.png" alt=""></li>
        </ul>
      </div>
    </div>

    <!-- こんなお悩みありませんか？ -->
    <h3 class="title__fukidashi"><span>こんなお悩み<br>ありませんか？</span></h3>
    <ul class="problems">
      <li>
        <figure>
          <img src="@/assets/images/top/problem001.png" alt="">
        <figcaption>予約時に入庫時間を30分単位で指定できるため、混雑時でもスムーズに駐車でき、サービスの質向上に繋がります。</figcaption>
      </figure>
      </li>
      <li>
        <figure>
          <img src="@/assets/images/top/problem002.png" alt="">
        <figcaption>お客様の入庫時に預り証をデジタルで発行可能。煩雑な紙の管理から解放され、スムーズで効率的な運営が実現します。</figcaption>
      </figure>
      </li>
      <li>
        <figure>
          <img src="@/assets/images/top/problem003.png" alt="">
        <figcaption>駐車可能数とは別に在庫管理機能があるので、満車日を挟む期間でも予約が自動で取れ、機会損失を補えます。</figcaption>
      </figure>
      </li>
      <li>
        <figure>
          <img src="@/assets/images/top/problem004.png" alt="">
        <figcaption>例えば、台風による運行停止や遅延の際、影響のあるお客様を抽出し、メールやLINEで迅速にお知らせできます。</figcaption>
      </figure>
      </li>
      <li>
        <figure>
          <img src="@/assets/images/top/problem005.png" alt="">
        <figcaption>お客様にMYページを付与することで、予約の変更、キャンセル、空車状況の確認をお客様自身が簡単に行えます。</figcaption>
      </figure>
      </li>
      <li>
        <figure>
          <img src="@/assets/images/top/problem006.png" alt="">
        <figcaption>予約時に人数を入力し、フライト便の情報を登録することで、バス乗車人数と送迎時間をWEB上で簡単に把握できます。</figcaption>
      </figure>
      </li>
    </ul>

    <!-- そんなお悩み、 まるごと解決！ -->
    <div class="resolve-problems">
      <p class="title__fukidashi"><span>そんなお悩み、<br>まるごと解決！</span></p>
      <img src="@/assets/images/logo/logo_green.svg" width="100%" alt="">
      <div class="resolve-problems__inner">
        <h3 class="title__white">空港民間駐車場を<br>
        管理する際に発生する<br>
        全ての業務をオンラインで完結！</h3>

      <ul>
        <li>売上管理</li>
        <li>売上分析</li>
        <li>予約管理</li>
      </ul>
      <ul>
        <li>予約の決済</li>
        <li>予約連絡</li>
      </ul>
      <ul>
        <li>顧客管理</li>
        <li>顧客分析</li>
        <li>フライト管理</li>
      </ul>
      <ul>
        <li>セグメント分け</li>
        <li>MYページ管理</li>
      </ul>
      <ul>
        <li>オーナー精算書</li>
      </ul>
      <p class="text-center text-base mt-12 font-bold">詳しいお話が聞きたい場合まず、<br>お問い合わせください。</p>
      <ApplyButtonImage />
      </div>
    </div>

    <!-- side 申し込みフォーム -->
    <div class="side">
      <ApplyForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-form {
  @media screen and (min-width: 850px) {
    position: absolute;

  }
}

.inner {
  max-width: calc(1280px + 45px);
  margin-left: auto;
  margin-right: auto;
  padding: 0 22.5px;
}

.title {
  &__fukidashi {
    color: $green;
    font-size: 1.375rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 2rem;
    span {
      display: inline-block;
      position: relative;
      background: #FFF;
      z-index: 1;
      &:before, &:after {
        position: absolute;
        bottom: 0px;
        // transform: translateY(-50%);
        content: "";
        width: 2px;
        height: 60px;
        background-color: $green;
        display: block;
      }
      &:before {
        left: -20px;
        transform: rotate(-25deg);
      }
      &:after {
        right: -20px;
        transform: rotate(25deg);    
      }
    }
  }

  &__white {
    color: #FFF;
    font-size: 22px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
    letter-spacing: 0.1em;
  }
}

.support {
  position: relative;
  background: $green;
  padding: 5rem 0.5rem;
  color: #FFF;
  text-align: center;
  &:before {
    position: absolute;
    top: 30px;
    right: 30px;
    content: '';
    display: block;
    background-image: url('./icon/airplane.svg');
    background-size: contain;
    width: 100px;
    height: 100px;
  }
  img {
    width: 100%;
  }
}
.problems {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}
.resolve-problems {
  
  &__inner {
    background: $green;
    padding: 3rem 0.5rem;
    color: #FFF;
  }

  img {
    margin-bottom: -3px;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: .5rem;
    margin-bottom: 1rem;
  }
  li {
    font-size: 14px;
    letter-spacing: 0;
    font-weight: bold;
    color: #404040;
    width: 33%;
    height: 38px;
    background: #FFF;
    border: 1px solid #404040;
    border-radius: 19px;
    text-align: center;
    line-height: 38px;
    box-shadow: 3px 3px 0 rgba(64, 64, 64, 1);
  }
  
}
.side {
  padding: 0 10%;
}

</style>