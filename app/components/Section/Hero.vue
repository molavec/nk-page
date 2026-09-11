<template>
  <div class="relative w-full min-h-[80vh] bg-primary flex items-center overflow-hidden">
    <!-- Background Image (Right side on desktop, full on mobile) -->
    <div class="absolute inset-0 lg:left-[45%]">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url(/images/01.jpeg);"></div>
      <!-- Gradient overlay to blend the image with the left solid color (desktop only) -->
      <div class="hidden lg:block absolute inset-y-0 left-0 w-64 bg-linear-to-r from-primary to-transparent"></div>
      <!-- Mobile overlay to ensure text readability -->
      <div class="absolute inset-0 bg-primary/80 lg:hidden"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 md:px-8 md:py-20 flex flex-col lg:flex-row items-center">
      <!-- Text Content -->
      <div class="w-full lg:w-[55%] text-white pr-0 lg:pr-12">
        <p class="mb-6 text-xs md:text-sm font-bold tracking-widest text-secondary uppercase">ENVIRONMENTAL SOLUTIONS AND ENGINEERING</p>
        <h1 class="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">Environmental management and engineering for projects that move forward</h1>
        <p class="mb-12 text-lg md:text-xl opacity-90 max-w-lg">
          We design, process, and monitor the environmental compliance of your project, coordinating engineering, fieldwork, and regulatory management in a single process.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-2">
          <a href="#contact" class="btn btn-lg btn-secondary text-secondary-content border-none rounded-sm px-10">Request an assessment</a>
          <a href="#services" class="btn btn-lg btn-outline border-white/50 text-white hover:bg-white hover:text-primary rounded-sm px-10">View services</a>
        </div>
      </div>
      
      <!-- Empty right side to balance flex/grid and add decoration -->
      <div class="w-full lg:w-[45%] relative hidden lg:block h-full min-h-125">
         <!-- Yellow corner decoration (⌜) -->
         <div class="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-secondary opacity-80"></div>
      </div>
    </div>

    <!-- Target Sectors Bar at bottom-0 -->
    <div class="absolute bottom-0 left-0 w-full z-20 border-t border-white/20 bg-primary/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
      <div class="max-w-7xl mx-auto px-6 md:px-8 py-6">
        <div class="w-full lg:w-[55%] flex flex-wrap gap-8 md:gap-12 text-sm md:text-base font-thin tracking-widest uppercase text-white/80">
          <span>INDUSTRY</span>
          <span>MINING</span>
          <span>CONSTRUCTION</span>
        </div>
      </div>
    </div>
  </div>
</template>

