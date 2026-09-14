<template>
  <div class="drawer-side z-100">
    <label for="main-menu" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-100 text-base-content min-h-full w-80 p-6 text-2xl gap-6 font-medium">
      <!-- Close button -->
      <li class="flex justify-between items-center mb-8 flex-row-reverse">
        <label for="main-menu" class="btn btn-ghost btn-circle self-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </label>
        <LangSwitcher class="sm:hidden" />
      </li>
      <li><a href="#why-nk" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">{{ $t('drawer.why') }}</a></li>
      <li><a href="#services" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">{{ $t('drawer.services') }}</a></li>
      <li><a href="#studies" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">{{ $t('drawer.studies') }}</a></li>
      <li><a href="#contact" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">{{ $t('drawer.contact') }}</a></li>
      
      <li class="mt-6">
        <a :href="`https://wa.me/56962391165?text=${encodeURIComponent($t('contact.whatsapp_msg'))}`" target="_blank" rel="noopener noreferrer" onclick="document.getElementById('main-menu').checked = false" class="btn btn-primary text-primary-content text-xl py-4 h-auto">
          {{ $t('contact.btn') }}
        </a>
      </li>
    </ul>
  </div>
</template>
