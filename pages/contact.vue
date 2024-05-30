<template>
  <main class="l-main">
    <PageTitle mainTitle="CONTACT" subTitle="お問い合わせ" />

    <div>
      <p class="text-center mb-12 laptop:text-xl">お問い合わせは<br class="laptop:hidden">以下のフォームからお願いいたします。</p>
      <form>
        <!-- <div class="theme">
          <label>
            <input type="radio" v-model="category" name="category" value="product" checked /> <span>商品についての質問</span>
          </label>
          <label>
            <input type="radio" v-model="category" name="category" value="media" /> <span>メディア関係の方</span>
          </label>
          <label>
            <input type="radio" v-model="category" name="category" value="company" /> <span>会社へのお問い合わせ</span>
          </label>
        </div> -->
       
        <!-- <div>
          <label>貴社名 ※必須</label>
          <input type="text" v-model="companyName" required />
        </div> -->
        <div>
          <label>お名前 ※必須</label>
          <input type="text" v-model="form.name" required />
        </div>

        <!-- <div>
          <label>よみがな ※必須</label>
          <input type="text" v-model="kana" required />
        </div> -->

        <!-- <div>
          <label>役職名</label>
          <input type="text" v-model="position" />
        </div> -->

        <!-- <div>
          <label>郵便番号 ※必須</label>
          <input type="text" v-model="postalCode" required />
        </div>
        <div>
          <label>都道府県 ※必須</label>
          <input type="text" v-model="prefecture" required />
        </div>
        <div>
          <label>市区町村 ※必須</label>
          <input type="text" v-model="city" required />
        </div>
        <div>
          <label>丁目番地 ※必須</label>
          <input type="text" v-model="address" required />
        </div> -->

        <!-- <div>
          <label>お電話番号 ※必須</label>
          <input type="tel" v-model="tel" required />
        </div> -->

        <div>
          <label>メールアドレス ※必須</label>
          <input type="email" v-model="form.email" required />
        </div>
        <!-- <div>
          <label>お問い合わせ内容 ※必須</label>
          <textarea rows="5" cols="3" v-model="message" required></textarea>
        </div> -->
        
        <!-- <p class="text-center
        ">プライバシーポリシーについて</p>
        <div class="checkbox--privacy mb-4">
          <input type="checkbox" v-model="agree" id="agree" name="agree" required />
          <label for="agree">同意して入力内容を送信する</label>
        </div> -->
        <button @click="sendMail">&nbsp;送信</button>
      </form>

      <!-- 入力されたメールアドレスの値を出力 -->
      <p>{{ form.email }}</p>
    </div>
  </main>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue';
import { ref } from 'vue';
import { useNuxtApp } from '#app';


const form = ref({
  // category: '',
  // companyName: '',
  name: '',
  // kana: '',
  // position: '',
  // postalCode: '',
  // prefecture: '',
  // city: '',
  // address: '',
  // tel: '',
  email: '',
  // message: '',
  // agree: false
});

const sendMail = async () => {
  const nuxtApp = useNuxtApp();
  try {
    const response = await nuxtApp.$axios.post('https://test.spice-web.jp/nuxt/api/mail.php', form.value);
    alert(response.data);
  } catch (error) {
    console.error('メール送信エラー:', error);
    alert('メール送信に失敗しました。');
  }
};
</script>

<style scoped lang="scss">
// フォームのスタイル
form {
  display: grid;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

input:not([type="checkbox"]), textarea {
  width: 100%;
  padding: .5rem;
  background: #E5E5E5;
  border-radius: 4px;
}


.theme {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
  label {
    cursor: pointer;
    transition: background-color 0.3s ease;
    input[type="radio"] {
      display: none;
    }
    span {
      text-align: center;
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #C7C7C7;
      border-radius: 4px;
      color: #FFF;
    }
    input[type="radio"]:checked + span {
      background-color: $green;
    }
  }
}
.checkbox--privacy {
  display: flex;
  justify-content: center;
  gap: .5rem;
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
