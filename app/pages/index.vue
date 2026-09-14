<script setup>
useSeoMeta({
  title: 'NK Gestión — Soluciones Ambientales e Ingeniería',
  description: 'Gestión ambiental e ingeniería para proyectos que avanzan',
  ogTitle: 'NK Gestión — Soluciones Ambientales e Ingeniería',
  ogDescription: 'Gestión ambiental e ingeniería para proyectos que avanzan',
  ogImage: '/images/03.jpeg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'NK Gestión — Soluciones Ambientales e Ingeniería',
  twitterDescription: 'Gestión ambiental e ingeniería para proyectos que avanzan',
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
