<template>
  <div>
    <PageTitle mainTitle="COMPANY PROFILE" subTitle="会社概要" />
    <div class="l-main">
      <section class="main-content">
        <dl>
          <dt>会社名</dt>
          <dd>株式会社サン･ポート</dd>
        </dl>
        <dl>
          <dt>本　社</dt>
          <dd>千葉県成田市駒井野 134</dd>
        </dl>
        <dl>
          <dt>創　業</dt>
          <dd>1985年 2月</dd>
        </dl>
        <dl>
          <dt>資本金</dt>
          <dd>1,000 万円</dd>
        </dl>
        <dl>
          <dt>代表者</dt>
          <dd>代表取締役　清宮 正博</dd>
        </dl>
        <dl>
          <dt>従業員</dt>
          <dd>150名</dd>
        </dl>
        <dl>
          <dt>事　業</dt>
          <dd>空港利用者用駐車場</dd>
        </dl>
      </section>

      <section class="office">
        <h3>事　業　所</h3>
        <div>
          本社<br>
          千葉県成田市駒井野 134<br>
          TEL：0476-33-1155　FAX：0476-33-1198
        </div>
        <div>
          サンパーキング成田店<br>
          千葉県成田市駒井野 134<br>
          TEL：0476-33-1166　FAX：0476-33-1167
        </div>

        <div>
          サン予約センター<br>
          千葉県成田市駒井野134<br>
          TEL：0476-33-1123　FAX：0476-33-1331
        </div>

        <div>
          プレミアパーキング<br>
          千葉県成田市駒井野 134<br>
          TEL：0476-33-5800　FAX：0476-33-1167
        </div>

        <div>
          レンタルスペース事業部<br>
          千葉県成田市駒井野134<br>
          TEL：0476-33-1155　FAX：0476-33-1198
        </div>

        <div>
          人材派遣事業部<br>
          千葉県成田市駒井野 134<br>
          TEL：0476-33-1155　FAX：0476-33-1198
        </div>

      </section>

      <section>
        <h3>沿革</h3>
        <ul class="list">
          <li>1990年4月／予約センター開設</li>
          <li>1995年4月／中長期計画とCIを導入</li>
          <li>1995年12月／サンパーキング成田新社屋完成</li>
          <li>1998年12月／サンレッドガレージ店設立</li>
          <li>1999年2月／POSシステムの導入</li>
          <li>1999年12月／到着専用ターミナル設置</li>
          <li>2001年3月／サンパーキング羽田浮島店設立</li>
          <li>2002年12月／エース損害保険（現：Chubb損害保険） 代理店登録（旅行傷害保険取扱い開始）</li>
          <li>2003年3月／本社・予約センター公津の杜駅ビルへ移転</li>
          <li>2003年7月／サンパーキング羽田大井店設立</li>
          <li>2004年4月／プレミアパーキング設立</li>
          <li>2006年3月／浮島店拡張（大井店統合）</li>
          <li>2007年11月／ホームページリニューアル</li>
          <li>2009年3月／POSシステムリニューアル</li>
          <li>2010年9月／本社成田市駒井野へ移転</li>
          <li>2010年12月／サンレッドガレージリニューアル</li>
          <li>2011年5月／ホームページリニューアル</li>
          <li>2012年9月／旅行傷害保険 比較サイト開始</li>
          <li>2012年10月／新SUNメンバーズカード開始</li>
          <li>2012年10月／成田店、プレミアパーキング 早朝4：30オープン開始</li>
          <li>2014年4月／プレミアパーキング 駒井野へ移転</li>
          <li>2014年6月／公式サイトスマホ版スタート</li>
          <li>2014年8月／成田駐車場サービス営業権継承</li>
          <li>2014年10月／成田－羽田 マイカー車載陸送サービス開始</li>
          <li>2015年2月／成田－羽田 マイカー自走回送サービス開始</li>
          <li>2015年4月／空港勤務者向け月極駐車サービス開始（成田店）</li>
          <li>2015年7月／キーパーコーティングプロショップ登録</li>
          <li>2016年2月／成田LCCコース発売（サンレッドガレージ）</li>
          <li>2017年5月／成田羽田空港間回送サービス1000台達成</li>
          <li>2019年2月／成田店拡張(成田駐車場サービス統合)</li>
          <li>2019年3月／浮島店移転</li>
          <li>2020年1月／浮島店休業</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue'
</script>

<style scoped lang="scss">
section {
  margin-bottom: 4rem;
}
h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;
  background: #E5E5E5;
  border: 1px solid #404040;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  margin-bottom: 1.5rem;
}
dl {
  border-bottom: 1px solid #404040;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  &:first-child {
    border-top: 1px solid #404040;
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
}

dt {
  font-size: .75rem;
  // font-weight: 600;
}

dd {
  font-size: .75rem;
  font-weight: 400;
}

.office {
  div {
    line-height: 2;
    margin-bottom: 1rem;
  }
}
.list {
  line-height: 2;
}
</style>