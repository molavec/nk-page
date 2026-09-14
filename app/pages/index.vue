<script setup>
useSeoMeta({
  title: 'NK Gestión — Environmental Solutions and Engineering',
  description: 'Environmental management and engineering for projects that move forward',
  ogTitle: 'NK Gestión — Environmental Solutions and Engineering',
  ogDescription: 'Environmental management and engineering for projects that move forward',
  ogImage: '/images/03.jpeg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'NK Gestión — Environmental Solutions and Engineering',
  twitterDescription: 'Environmental management and engineering for projects that move forward',
  twitterImage: '/images/03.jpeg'
})
</script>

<template>
  <div class="drawer drawer-end">
    <input id="main-menu" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content min-h-screen bg-base-100 font-sans text-base-content flex flex-col">
      <AppNavbar />
      <SectionHero />
      <SectionWhyNk />
      <SectionServices />
      <SectionStudies />
      <!-- <SectionIndustries /> -->
      <SectionContact />
      <AppFooter />
    </div>
    
    <AppDrawerMenu />
  </div>
</template>
