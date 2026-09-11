<template>
  <div class="join">
    <button
      class="btn btn-ghost btn-sm join-item text-lg px-2"
      :class="{ 'opacity-100': locale === 'en', 'opacity-50 hover:opacity-100': locale !== 'en' }"
      @click="setLocale('en')"
      title="English"
    >
      🇺🇸
    </button>
    <button
      class="btn btn-ghost btn-sm join-item text-lg px-2"
      :class="{ 'opacity-100': locale === 'es', 'opacity-50 hover:opacity-100': locale !== 'es' }"
      @click="setLocale('es')"
      title="Español"
    >
      🇪🇸
    </button>
    <button
      class="btn btn-ghost btn-sm join-item text-lg px-2"
      :class="{ 'opacity-100': locale === 'pt', 'opacity-50 hover:opacity-100': locale !== 'pt' }"
      @click="setLocale('pt')"
      title="Português"
    >
      🇧🇷
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
</script>

