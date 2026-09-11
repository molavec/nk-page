<template>
  <section id="contact" class="py-24 px-4 md:px-8 bg-primary text-primary-content">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
        <div class="max-w-2xl text-center lg:text-left">
          <p class="text-secondary font-bold tracking-widest mb-2">{{ $t('contact.eyebrow') }}</p>
          <h2 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">{{ $t('contact.title') }}</h2>
          <p class="text-lg md:text-xl opacity-90 leading-relaxed">
            {{ $t('contact.desc') }}
          </p>
        </div>
        <div class="shrink-0">
          <a :href="`https://wa.me/56962391165?text=${encodeURIComponent($t('contact.whatsapp_msg'))}`" target="_blank" rel="noopener noreferrer" class="btn btn-secondary text-secondary-content btn-lg border-none shadow-lg px-8">
            {{ $t('contact.btn') }}
          </a>
        </div>
      </div>

      <div class="rounded-box overflow-hidden h-64 md:h-80 w-full shadow-lg">
        <img src="/images/04.jpeg" alt="Let's talk about your project" class="object-cover w-full h-full" />
      </div>
    </div>
  </section>
</template>
