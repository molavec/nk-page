<template>
  <section id="services" class="py-20 px-4 md:px-8 bg-primary text-primary-content">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <p class="text-secondary font-bold tracking-widest mb-2">{{ $t('services.eyebrow') }}</p>
        <h2 class="text-3xl md:text-4xl font-bold">{{ $t('services.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        <!-- 1. Gestión Ambiental -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-secondary border-b border-secondary/30 pb-4">{{ $t('services.s1_title') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s1_l1') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s1_l2') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s1_l3') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s1_l4') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s1_l5') }}</span>
            </li>
          </ul>
        </div>

        <!-- 2. Elaboración de Permisos -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-secondary border-b border-secondary/30 pb-4">{{ $t('services.s2_title') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s2_l1') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s2_l2') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s2_l3') }}</span>
            </li>
          </ul>
        </div>

        <!-- 3. Due Diligence -->
        <div id="due-diligence" class="w-full">
          <h3 class="text-2xl font-bold mb-6 text-secondary border-b border-secondary/30 pb-4">{{ $t('services.s3_title') }}</h3>
          <p class="mb-4 opacity-90 text-sm md:text-base leading-relaxed">
            {{ $t('services.s3_desc') }}
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s3_l1') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s3_l2') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s3_l3') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s3_l4') }}</span>
            </li>
          </ul>
        </div>

        <!-- 4. Estudios complementarios -->
        <div class="w-full">
          <h3 class="text-2xl font-bold mb-6 text-secondary border-b border-secondary/30 pb-4">{{ $t('services.s4_title') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s4_l1') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s4_l2') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-secondary mt-1 font-bold">✓</span>
              <span>{{ $t('services.s4_l3') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Section Image Banner -->
      <div class="mt-14 rounded-box overflow-hidden h-64 md:h-80 w-full shadow-lg">
        <img src="/images/02.jpeg" alt="Due Diligence and Engineering" class="object-cover w-full h-full" />
      </div>
    </div>
  </section>
</template>
