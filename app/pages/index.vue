<script setup>
useHead({
  title: 'NK Gestión — Environmental Solutions and Engineering',
  meta: [
    { name: 'description', content: 'Environmental management and engineering for projects that move forward' }
  ]
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
      <SectionIndustries />
      <SectionContact />
      <AppFooter />
    </div>
    
    <AppDrawerMenu />
  </div>
</template>
