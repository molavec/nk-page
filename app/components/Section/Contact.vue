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
        <div class="shrink-0 flex flex-col items-center lg:items-start gap-6 mt-4 lg:mt-0">
          <a :href="`https://wa.me/56962391165?text=${encodeURIComponent($t('contact.whatsapp_msg'))}`" target="_blank" rel="noopener noreferrer" class="btn btn-secondary text-secondary-content btn-lg border-none shadow-lg px-8 w-full sm:w-auto">
            {{ $t('contact.btn') }}
          </a>
        </div>
      </div>
      
      <!-- listado -->
      <div class="flex flex-col gap-5 text-lg md:text-xl opacity-90 mb-12">
        <a href="mailto:proyectos@nkgestion.cl" class="flex items-center gap-4 hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span>proyectos@nkgestion.cl</span>
        </a>
        <a href="https://wa.me/56962391165" target="_blank" class="flex items-center gap-4 hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-7 h-7 shrink-0">
            <path d="M12.031 21.082H12c-1.503 0-2.96-.395-4.269-1.144l-.307-.183-3.17.831.846-3.088-.2-.317A8.903 8.903 0 0 1 3.518 12c0-4.945 4.025-8.97 8.97-8.97h.008C17.441 3.037 21.46 7.065 21.46 12s-4.018 8.966-8.966 8.966c-.15 0-.3 0-.463-.017m4.922-6.52c-.272-.136-1.597-.788-1.846-.879-.247-.091-.429-.136-.607.136-.182.271-.7 .879-.858 1.059-.159.182-.317.204-.589.068-.272-.136-1.141-.421-2.173-1.341-.8-.716-1.338-1.598-1.498-1.87-.156-.271-.016-.419.12-.555.121-.122.271-.318.407-.477.136-.159.182-.271.272-.453.091-.182.046-.341-.023-.477-.068-.136-.606-1.464-.83-2.003-.219-.526-.44-.455-.607-.463l-.517-.008c-.182 0-.476.068-.727.34-.251.272-.962.941-.962 2.293 0 1.352.984 2.66 1.121 2.842.136.182 1.936 2.955 4.693 4.144.656.284 1.168.455 1.567.581.656.208 1.253.178 1.724.108.528-.078 1.597-.653 1.824-1.284.226-.632.226-1.171.159-1.284-.068-.113-.251-.181-.523-.317z" />
          </svg>
          <span>+56 9 6239 1165</span>
        </a>
        <a href="tel:+56962391165" class="flex items-center gap-4 hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.496-4.196-7.092-7.092l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span>+56 9 6239 1165</span>
        </a>
      </div>

      <div class="rounded-box overflow-hidden h-64 md:h-80 w-full shadow-lg">
        <img src="/images/04.jpeg" alt="Let's talk about your project" class="object-cover w-full h-full" />
      </div>
    </div>
  </section>
</template>
