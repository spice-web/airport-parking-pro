<template>
  <h3>無料相談・資料請求は<br>こちらから</h3>
  <form action="">
    <!-- 会社名 -->
    <div class="form-group">
      <label for="company">会社名</label>
      <input type="text" id="company" name="company" required>
    </div>
    <!-- お名前 -->
    <div class="form-group">
      <label for="name">お名前</label>
      <input type="text" id="name" name="name" required>
    </div>
    <!-- 電話番号 -->
    <div class="form-group">
      <label for="tel">電話番号</label>
      <input type="tel" id="tel" name="tel" required>
    </div>
    <!-- メールアドレス -->
    <div class="form-group">
      <label for="email">メールアドレス</label>
      <input type="email" id="email" name="email" required>
    </div>
    <!-- 会社の所在地 -->
    <div class="form-group">
      <label for="address">会社の所在地</label>
      <input v-model="address" type="text" required>
    </div>
    <!-- 駐車場の総区画数 -->
    <div class="form-group">
      <label for="parking">駐車場の総区画数</label>
      <input type="number" id="parking" name="parking" required>
    </div>
    <!-- お問い合わせ内容 -->
    <div class="form-group">
      <label for="content">お問い合わせ内容</label>
      <textarea name="content" id="content" cols="30" rows="10" required></textarea>
    </div>

    <!-- 個人情報保護方針に同意 -->
    <div class="checkbox text-center mb-4">
      <input type="checkbox" id="agree" name="agree" required class="mr-2">
      <label for="agree"><NuxtLink to="privacy">個人情報保護方針</NuxtLink>に同意する</label>
    </div>

    <button type="submit" class="c-button">送 信</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped lang="scss">
h3 {
  color: $green;
  font-size: 1.375rem;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 1.5;
  text-align: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid $green;
}
input, textarea {
  background: #F7F7F7;
  border: .75px solid #404040;
  border-radius: 4px;
  padding: .5rem;
}
form {
  margin-bottom: 6rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 1.5rem;
}

.checkbox {
  a {
    color: $green;
    // text-decoration: underline;
  }
}

.c-button {
  color: #fff;
  width: 240px;
  text-align: center;
  display: block;
  height: 48px;
  border-radius: 24px;
  font-size: 22px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  &:after {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
    width: 15px;
    height: 30px;
    background-image: url('./icon/icon_arrow.svg');
    background-size: contain;
    background-position: center;

  }
}
</style>