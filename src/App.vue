<template>
  <div class="px-20 pt-6 pb-8 bg-[url(./images/desktop/banner.png)] bg-no-repeat bg-cover">
    <HeaderNav />
    <BannerSlide />
  </div>
  <div class="px-20 pt-20 pb-30 bg-secondary-dark">
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import HeaderNav from '@/components/Layout/HeaderNav.vue';
import BannerSlide from '@/components/Layout/BannerSlide.vue';
import FooterNav from '@/components/Layout/FooterNav.vue';

</script>