<template>
  <section id="studies" class="py-20 px-4 md:px-8 bg-base-100">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
      <div class="w-full lg:w-1/3 lg:sticky lg:top-24">
        <p class="text-accent font-bold tracking-widest mb-2">{{ $t('studies.eyebrow') }}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">{{ $t('studies.title') }}</h2>
        <p class="text-base-content/80 text-lg leading-relaxed">
          {{ $t('studies.description') }}
        </p>
      </div>
      
      <div class="w-full lg:w-2/3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">1</div>
              <h3 class="text-xl font-bold">{{ $t('studies.i1_title') }}</h3>
            </div>
            <p class="text-base-content/80">{{ $t('studies.i1_desc') }}</p>
          </div>
          
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">2</div>
              <h3 class="text-xl font-bold">{{ $t('studies.i2_title') }}</h3>
            </div>
            <p class="text-base-content/80">{{ $t('studies.i2_desc') }}</p>
          </div>
          
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">3</div>
              <h3 class="text-xl font-bold">{{ $t('studies.i3_title') }}</h3>
            </div>
            <p class="text-base-content/80">{{ $t('studies.i3_desc') }}</p>
          </div>
          
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">4</div>
              <h3 class="text-xl font-bold">{{ $t('studies.i4_title') }}</h3>
            </div>
            <p class="text-base-content/80">{{ $t('studies.i4_desc') }}</p>
          </div>
          
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">5</div>
              <h3 class="text-xl font-bold">{{ $t('studies.i5_title') }}</h3>
            </div>
            <p class="text-base-content/80">{{ $t('studies.i5_desc') }}</p>
          </div>
          
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">6</div>
              <h3 class="text-xl font-bold">{{ $t('studies.i6_title') }}</h3>
            </div>
            <p class="text-base-content/80">{{ $t('studies.i6_desc') }}</p>
          </div>
        </div>
        
        <div class="mt-12 rounded-box overflow-hidden h-64 md:h-96 w-full shadow-sm">
          <img src="/images/03.jpeg" alt="Technical Studies" class="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  </section>
</template>
