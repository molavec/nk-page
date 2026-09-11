<template>
  <footer class="flex flex-col md:flex-row justify-between items-start p-10 font-sans md:px-16 lg:px-24 bg-base-100 text-base-content border-t border-base-200 gap-10">
    <!-- Columna 1 -->
    <div class="flex flex-col items-start gap-4">
      <div>
        <img src="/logo.jpeg" alt="NK Gestión Logo" class="h-12 object-contain mb-4" />
        <p class="font-bold text-xl text-primary">NK GESTIÓN</p>
      </div>
      <LangSwitcher />
    </div>

    <!-- Columna 2: Contact -->
    <div class="flex flex-col items-start">
      <h6 class="text-xs font-bold uppercase tracking-widest text-accent mb-3">{{ $t('footer.contact') }}</h6>
      <div class="flex flex-col space-y-1">
        <p class="text-base md:text-lg mb-1"><span class="font-semibold text-primary">Natalia Muñoz</span> — {{ $t('footer.director') }}</p>
        <a href="mailto:natalia.munoz@nkgestion.cl" class="link link-hover text-base md:text-lg text-base-content/90 hover:text-primary py-1.5 transition-colors">
          natalia.munoz@nkgestion.cl
        </a>
        <a href="mailto:natmunozac@gmail.com" class="link link-hover text-base md:text-lg text-base-content/90 hover:text-primary py-1.5 transition-colors">
          natmunozac@gmail.com
        </a>
        <a href="https://wa.me/56962391165" target="_blank" rel="noopener noreferrer" class="link link-hover text-base md:text-lg text-base-content/90 hover:text-primary py-1.5 transition-colors">
          +56 9 6239 1165 (WhatsApp)
        </a>
      </div>
    </div>
  </footer>
</template>
