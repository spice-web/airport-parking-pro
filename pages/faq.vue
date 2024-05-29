<template>
  <main class="l-main">
    <PageTitle mainTitle="FAQ" subTitle="よくある質問" />
    <dl>
      <dt>システムの導入にはどれくらいの<br>時間がかかりますか？</dt>
      <dd>通常、システムの導入には2週間から1か月程度かかります。詳細なスケジュールは、駐車場の規模や現行のシステム環境により異なりますので、個別にご相談となります。</dd>
    </dl>
    <dl>
      <dt>システムの操作は 簡単ですか？</dt>
      <dd>はい、システムは直感的で使いやすいインターフェースを採用しています。初めての方でも安心してご利用いただけるよう、操作マニュアルやサポートも充実しています。</dd>
    </dl>
    <dl>
      <dt>システム導入後のサポートは ありますか？</dt>
      <dd>導入後も専門のサポートチームがサポートを提供します。メール、オンラインチャットでのお問い合わせに対応します。</dd>
    </dl>
    <dl>
      <dt>お客様のMYページでは どのような操作が可能ですか？</dt>
      <dd>MYページでは、予約の変更、キャンセル、空車状況の確認が可能です。また、予約履歴の確認や個人情報の更新も行えます。</dd>
    </dl>
    <dl>
      <dt>バスの送迎管理は どのように行いますか？</dt>
      <dd>予約時にお客様が人数とフライト便の情報を入力することで、バス乗車人数や送り時間、送迎時間をWEB上で把握し、効率的にバスの手配ができます。</dd>
    </dl>
    <dl>
      <dt>デジタル預り証の発行について 詳しく教えてください。</dt>
      <dd>お客様の入庫時に、システムが自動的にデジタル預り証を発行します。これにより、紙ベースの管理から解放され、預り証の紛失リスクも軽減できます。</dd>
    </dl>
    <dl>
      <dt>予約が重ならないように するための機能はありますか？</dt>
      <dd>はい、予約時に入庫時間を30分単位で指定できる機能があり、これにより混雑を避けてスムーズに駐車することができます。</dd>
    </dl>
    <dl>
      <dt>台風や遅延時の対応は どのように行いますか？</dt>
      <dd>システムは影響のあるお客様を自動で抽出し、メールやLINEでお知らせする機能があります。これにより、迅速かつ的確な対応が可能です。</dd>
    </dl>
    <dl>
      <dt>システムはどのような デバイスで利用できますか？</dt>
      <dd>システムはパソコン、タブレット、スマートフォンなど、様々なデバイスで利用可能です。インターネットに接続できる環境があれば、どこからでもアクセスできます。</dd>
    </dl>
    <dl>
      <dt>システムの料金体系を 教えてください。</dt>
      <dd>システムの料金は、駐車場の規模や導入する機能によって異なります。詳しい料金については、お問い合わせいただければ個別にお見積もりいたします。</dd>
    </dl>
  </main>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue'
</script>

<style lang="scss" scoped>
dl {
  border-bottom: 1px solid #404040;
  padding-bottom: 3.5rem;
  margin-bottom: 3.5rem;
}
dt {
  font-size: 1.25rem;
  font-weight: 600;
  display: grid;
  grid-template-columns: 36px 1fr;
  // align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  &:before {
    content: 'Q';
    font-weight: 600;
    background: #404040;
    color: #fff;
    width: 36px;
    height: 36px;
    display: inline-block;
    text-align: center;
    line-height: 36px;
  }
}
dd {
  display: grid;
  grid-template-columns: 36px 1fr;
  // align-items: center;
  gap: 1rem;
  &:before {
    content: 'A';
    font-weight: 600;
    background: #31B6A2;
    color: #fff;
    width: 36px;
    height: 36px;
    display: inline-block;
    text-align: center;
    line-height: 36px;
  }
}
</style>