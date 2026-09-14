<template>
  <div class="join">
    <NuxtLink
      class="btn btn-ghost btn-sm join-item text-lg px-2"
      :class="{ 'opacity-100': locale === 'es', 'opacity-50 hover:opacity-100': locale !== 'es' }"
      :to="switchLocalePath('es')"
      title="Español"
    >
      🇪🇸
    </NuxtLink>
    <NuxtLink
      class="btn btn-ghost btn-sm join-item text-lg px-2"
      :class="{ 'opacity-100': locale === 'en', 'opacity-50 hover:opacity-100': locale !== 'en' }"
      :to="switchLocalePath('en')"
      title="English"
    >
      🇺🇸
    </NuxtLink>
    <NuxtLink
      class="btn btn-ghost btn-sm join-item text-lg px-2"
      :class="{ 'opacity-100': locale === 'pt', 'opacity-50 hover:opacity-100': locale !== 'pt' }"
      :to="switchLocalePath('pt')"
      title="Português"
    >
      🇧🇷
    </NuxtLink>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

