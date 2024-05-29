<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
    <!-- drawer menu -->
    <button class="menu-button" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
      <span class="menu-icon"></span>
      <span class="close-icon"></span>
      <span class="menu-icon"></span>
    </button>
    <nav v-if="isMenuOpen" class="drawer-menu">
      <ul>
        <li><NuxtLink to="/">HOME<span>ホーム</span></NuxtLink></li>
        <li><NuxtLink to="/price">PRICE<span>料金について</span></NuxtLink></li>
        <li><NuxtLink to="/news">NEWS<span>ニュース一覧</span></NuxtLink></li>
        <li><NuxtLink to="/company">COMPANY PROFILE<span>会社概要</span></NuxtLink></li>
        <li><NuxtLink to="/faq">FAQ<span>よくある質問</span></NuxtLink></li>
        <li><NuxtLink to="/contact">CONTACT<span>お問い合わせ</span></NuxtLink></li>
        <li><NuxtLink to="/privacy">PRIVACY POLICY<span>プライバシーポリシー</span></NuxtLink></li>
        <li><NuxtLink to="/agreement">SITE POLICY<span>サイトポリシー</span></NuxtLink></li>
      </ul>
    </nav>
</template>

<style scoped lang="scss">
.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  width: 30px;
  z-index: 2;
  position: relative;
}

.menu-icon,
.close-icon {
  background-color: #000;
  height: 2px;
  width: 100%;
  transition: transform 0.3s ease;
}

.close-icon {
  display: block;
}

.is-active .menu-icon:nth-child(1),
.is-active .menu-icon:nth-child(3) {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #FFF;
}
.is-active .menu-icon:nth-child(1){
  transform: translate(-50%) rotate(45deg);
}
.is-active .menu-icon:nth-child(3) {
  transform: translate(-50%) rotate(-45deg);
}

.is-active .close-icon {
  display: none;
}

.drawer-menu {
  background-color: #404040;
  height: 100vh;
  left: 0;
  padding: 6rem 2rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  font-family: noto-sans-jp, sans-serif;
}

.is-active + .drawer-menu {
  opacity: 1;
  transform: translateX(0%);
}

.drawer-menu ul {
  max-width: 400px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}

.drawer-menu li {
  color: #FFF;
  margin: 1rem 0;
  border-bottom: 1px solid #FFF;
  padding-bottom: 1rem;
  font-size: 11px;
  a {
    text-decoration: none;
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    span {
      font-size: 1rem;
      font-weight: 500;
    }
  }
}

.close-button {
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
}

@media screen and (min-width: 850px) {
  .menu-button {
    display: none;
  }

  .drawer-menu {
    display: none;
  }
}
</style>