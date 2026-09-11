<template>
  <section id="industries" class="py-20 px-4 md:px-8 bg-base-200">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <p class="text-accent font-bold tracking-widest mb-2">KEY INDUSTRIES</p>
        <h2 class="text-3xl md:text-4xl font-bold text-primary">We work where your business operates</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Card 1: Industry -->
        <div class="relative rounded-none overflow-hidden h-72 md:h-80 shadow-md group">
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style="background-image: url(/images/03.jpeg);"></div>
          <div class="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors"></div>
          
          <div class="absolute bottom-6 left-6 z-10">
            <div class="bg-base-200/95 backdrop-blur-sm px-6 py-3.5 rounded-sm shadow-lg border border-base-300/50">
              <span class="font-bold uppercase text-xl md:text-2xl text-accent tracking-widest">Industry</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Mining — Construction -->
        <div class="relative rounded-none overflow-hidden h-72 md:h-80 shadow-md group">
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style="background-image: url(/images/05.jpeg);"></div>
          <div class="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors"></div>
          
          <div class="absolute bottom-6 left-6 z-10">
            <div class="bg-base-200/95 backdrop-blur-sm px-6 py-3.5 rounded-sm shadow-lg border border-base-300/50">
              <span class="font-bold uppercase text-xl md:text-2xl text-accent tracking-widest">Mining — Construction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

