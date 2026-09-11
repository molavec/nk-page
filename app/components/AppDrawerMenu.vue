<template>
  <div class="drawer-side z-[100]">
    <label for="main-menu" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-100 text-base-content min-h-full w-80 p-6 text-2xl gap-6 font-medium">
      <!-- Close button -->
      <li class="flex justify-end mb-8">
        <label for="main-menu" class="btn btn-ghost btn-circle self-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </label>
      </li>
      <li><a href="#why-nk" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Why NK</a></li>
      <li><a href="#services" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Business Lines</a></li>
      <li><a href="#studies" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Technical Studies</a></li>
      <li><a href="#industries" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Key Industries</a></li>
      <li><a href="#contact" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Get in Touch</a></li>
      
      <li class="mt-6">
        <a href="https://wa.me/56962391165?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20conversation%20about%20environmental%20management%20for%20my%20project." target="_blank" rel="noopener noreferrer" onclick="document.getElementById('main-menu').checked = false" class="btn btn-primary text-primary-content text-xl py-4 h-auto">
          Chat on WhatsApp
        </a>
      </li>
    </ul>
  </div>
</template>

