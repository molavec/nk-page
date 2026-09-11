<template>
  <section id="why-nk" class="py-20 px-4 md:px-8 bg-base-200">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <p class="text-accent font-bold tracking-widest mb-2">{{ $t('why.eyebrow') }}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-primary">{{ $t('why.title') }}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card bg-base-100 border-none shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body">
            <h3 class="card-title text-sm tracking-widest text-accent mb-2">{{ $t('why.c1_title') }}</h3>
            <h4 class="text-xl font-bold mb-4">{{ $t('why.c1_sub') }}</h4>
            <p>{{ $t('why.c1_desc') }}</p>
          </div>
        </div>
        <div class="card bg-base-100 border-none shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body">
            <h3 class="card-title text-sm tracking-widest text-accent mb-2">{{ $t('why.c2_title') }}</h3>
            <h4 class="text-xl font-bold mb-4">{{ $t('why.c2_sub') }}</h4>
            <p>{{ $t('why.c2_desc') }}</p>
          </div>
        </div>
        <div class="card bg-base-100 border-none shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body">
            <h3 class="card-title text-sm tracking-widest text-accent mb-2">{{ $t('why.c3_title') }}</h3>
            <h4 class="text-xl font-bold mb-4">{{ $t('why.c3_sub') }}</h4>
            <p>{{ $t('why.c3_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
