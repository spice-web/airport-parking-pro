<template>
  <main class="l-main">
    <PageTitle mainTitle="CONTACT" subTitle="お問い合わせ" />

    <div>
      <p class="text-center mb-12">お問い合わせは<br>以下のフォームからお願いいたします。</p>
      <form>
        <div>
          <label>お名前</label>
          <input type="text" />
        </div>
        <div>
          <label>メールアドレス ※必須</label>
          <input type="email" />
        </div>
        <div>
          <label>お問い合わせ内容 ※必須</label>
          <textarea></textarea>
        </div>
        <button>&nbsp;送信</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue';
</script>

<style scoped lang="scss">
// フォームのスタイル
form {
  display: grid;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

input, textarea {
  width: 100%;
  padding: .5rem;
  background: #E5E5E5;
  border-radius: 4px;
}

button {
  background: #F57D00;
  color: #fff;
  width: 80%;
  max-width: 128px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  line-height: 40px;
  border-radius: 4px;
  letter-spacing: 1em;
  text-align: center;
}
</style>
