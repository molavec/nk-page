<template>
  <div class="drawer drawer-end">
    <input id="main-menu" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content min-h-screen bg-base-100 font-sans text-base-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
        <div class="navbar-start">
          <a href="#" class="btn btn-ghost h-auto py-2 px-0 md:px-4">
            <img src="/logo.jpeg" alt="NK Gestión Logo" class="h-8 md:h-10 object-contain" />
          </a>
        </div>
        <div class="navbar-end w-full flex justify-end gap-2 md:gap-4">
          <a href="#contact" class="btn btn-primary text-primary-content font-bold">Let's Talk</a>
          <label for="main-menu" class="btn btn-ghost drawer-button px-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
      </div>

    <!-- Hero Section -->
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

    <!-- 01 - Why NK -->
    <section class="py-20 px-4 md:px-8 bg-base-200">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <p class="text-accent font-bold tracking-widest mb-2">// 01 — WHY NK</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary">Our expertise</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card bg-base-100 border-none shadow-sm hover:shadow-md transition-shadow">
            <div class="card-body">
              <h3 class="card-title text-sm tracking-widest text-accent mb-2">FOLLOW-UP</h3>
              <h4 class="text-xl font-bold mb-4">Ongoing regulatory compliance</h4>
              <p>We provide continuous follow-up on the project's environmental and sector-specific requirements at every stage.</p>
            </div>
          </div>
          <div class="card bg-base-100 border-none shadow-sm hover:shadow-md transition-shadow">
            <div class="card-body">
              <h3 class="card-title text-sm tracking-widest text-accent mb-2">COORDINATION</h3>
              <h4 class="text-xl font-bold mb-4">Integrated engineering, fieldwork and management</h4>
              <p>We coordinate technical design, field monitoring, and regulatory management as a single process.</p>
            </div>
          </div>
          <div class="card bg-base-100 border-none shadow-sm hover:shadow-md transition-shadow">
            <div class="card-body">
              <h3 class="card-title text-sm tracking-widest text-accent mb-2">COVERAGE</h3>
              <h4 class="text-xl font-bold mb-4">Presence in demanding technical sectors</h4>
              <p>Industry, mining, and construction — sectors with high technical and regulatory standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 - Business Lines -->
    <section id="services" class="py-20 px-4 md:px-8 bg-primary text-primary-content">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <p class="text-secondary font-bold tracking-widest mb-2">// 02 — BUSINESS LINES</p>
          <h2 class="text-3xl md:text-4xl font-bold">Business lines</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Line 1 & 2 -->
          <div class="space-y-12">
            <div>
              <h3 class="text-2xl font-bold mb-6 text-secondary border-b border-secondary/30 pb-4">N.01 | Environmental Management and Regulatory Compliance</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Design and preparation of environmental and sector-specific permitting instruments</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Monitoring of environmental commitments and requirements</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Analysis of operational gaps and regulatory risks</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Environmental Technical Inspection of Works (ITO)</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Consulting on quality, environmental, and energy efficiency management systems</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-6 text-secondary border-b border-secondary/30 pb-4">N.02 | Engineering, Permits and Regularizations</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Sector-specific permit management</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Regularization before the relevant authorities</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-secondary mt-1 font-bold">✓</span>
                  <span>Baseline studies</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Line 3 (Due Diligence) -->
          <div id="due-diligence" class="bg-base-100 text-base-content p-8 md:p-10 rounded-box shadow-xl relative overflow-hidden flex flex-col">
            <div class="absolute top-0 right-0 w-48 h-48 bg-accent opacity-10 rounded-bl-full pointer-events-none"></div>
            <h3 class="text-2xl font-bold mb-4 text-primary">N.03 | Environmental and permitting due diligence</h3>
            <p class="mb-6 text-lg">We assess the environmental and regulatory status of an asset or project, providing a clear technical basis for purchase, lease, or financing decisions.</p>
            <ul class="space-y-4 flex-grow">
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1 font-bold">→</span>
                <span>Review of environmental liabilities and compliance history</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1 font-bold">→</span>
                <span>Verification of the validity and scope of sector permits</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1 font-bold">→</span>
                <span>Identification of regulatory gaps and associated risks</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1 font-bold">→</span>
                <span>Executive report to support decision-making</span>
              </li>
            </ul>
            <div class="mt-8 rounded-box overflow-hidden h-48 relative w-full">
              <img src="/images/02.jpeg" alt="Due Diligence" class="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 - Technical Capability -->
    <section id="studies" class="py-20 px-4 md:px-8 bg-base-200">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        <div class="w-full lg:w-1/3 lg:sticky lg:top-24">
          <p class="text-accent font-bold tracking-widest mb-2">// 03 — TECHNICAL CAPABILITY</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">Technical studies and analysis</h2>
          
          <div class="card bg-base-100 border-none shadow-sm mt-8">
            <div class="card-body">
              <h3 class="card-title text-primary">Georeferenced, traceable data</h3>
              <p>Each measurement is recorded and documented on-site, with full traceability for technical and regulatory purposes.</p>
              <div class="badge badge-accent p-4 mt-4 font-bold w-full uppercase text-xs text-center">Field Record — Puchuncaví, Valparaíso</div>
            </div>
          </div>
        </div>
        
        <div class="w-full lg:w-2/3">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">1</div>
                <h3 class="text-xl font-bold">Noise and vibration</h3>
              </div>
              <p class="text-base-content/80">Environmental noise monitoring (D.S. 38 MMA), occupational noise (D.S. 594 MINSAL), fauna-component noise (SEA-MMA), underwater noise, illuminance and vibration monitoring.</p>
            </div>
            
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">2</div>
                <h3 class="text-xl font-bold">Air quality</h3>
              </div>
              <p class="text-base-content/80">PM10, PM2.5, PM1 and TSP (DS 61/2008), settleable particulate matter, process gas monitoring, on-site meteorology.</p>
            </div>
            
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">3</div>
                <h3 class="text-xl font-bold">Water component</h3>
              </div>
              <p class="text-base-content/80">Physicochemical water analysis and hydrogeological monitoring.</p>
            </div>
            
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">4</div>
                <h3 class="text-xl font-bold">Geophysics and fieldwork</h3>
              </div>
              <p class="text-base-content/80">VES, ERT, TEM, and SP surveys up to 300 m depth. Exploratory drilling, test pits, soil mechanics, RTK topography, drone surveys, and bathymetry.</p>
            </div>
            
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">5</div>
                <h3 class="text-xl font-bold">Biotic environment</h3>
              </div>
              <p class="text-base-content/80">Terrestrial and aquatic flora and fauna surveys with SAG and SUBPESCA-certified consultants, soil biology, and macroinvertebrates.</p>
            </div>
            
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content shrink-0">6</div>
                <h3 class="text-xl font-bold">Social environment</h3>
              </div>
              <p class="text-base-content/80">Social risk analysis, social studies, and public participation processes (PAC).</p>
            </div>
          </div>
          
          <div class="mt-12 rounded-box overflow-hidden h-64 md:h-96 w-full shadow-sm">
            <img src="/images/03.jpeg" alt="Technical Studies" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- 04 - Where we work & 05 - Let's talk -->
    <section class="grid grid-cols-1 lg:grid-cols-2">
      <!-- Where we work -->
      <div class="bg-base-200 py-20 px-8 lg:px-16 flex flex-col justify-center">
        <p class="text-accent font-bold tracking-widest mb-2">// 04 — WHERE WE WORK</p>
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-8">We work where your business operates</h2>
        <div class="space-y-4 text-xl w-full">
          <div class="flex items-center gap-4 bg-base-100 p-4 rounded-box shadow-sm">
            <div class="w-2 h-12 bg-accent rounded-full shrink-0"></div>
            <span class="font-bold">Industria (Industry)</span>
          </div>
          <div class="flex items-center gap-4 bg-base-100 p-4 rounded-box shadow-sm">
            <div class="w-2 h-12 bg-accent rounded-full shrink-0"></div>
            <span class="font-bold">Minería — Construcción (Mining — Construction)</span>
          </div>
        </div>
        <div class="mt-12 rounded-box overflow-hidden h-64 w-full">
            <img src="/images/04.jpeg" alt="Industry and Mining" class="object-cover w-full h-full" />
        </div>
      </div>
      
      <!-- Let's talk -->
      <div id="contact" class="bg-primary text-primary-content py-20 px-8 lg:px-16 flex flex-col justify-center relative overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/images/05.jpeg" alt="Contact Background" class="object-cover w-full h-full opacity-20 mix-blend-overlay" />
        </div>
        <div class="relative z-10 w-full">
          <p class="text-secondary font-bold tracking-widest mb-2">// 05 — LET'S TALK</p>
          <h2 class="text-3xl md:text-5xl font-bold mb-6">Let's talk about your project</h2>
          <p class="text-lg md:text-xl mb-10 max-w-md opacity-90">
            Schedule a free 20-minute conversation to review the environmental management and engineering support your project needs.
          </p>
          <a href="mailto:natalia.munoz@nkgestion.cl" class="btn btn-secondary text-secondary-content btn-lg border-none shadow-lg w-full sm:w-auto">
            Schedule a conversation
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-neutral text-neutral-content p-10 font-sans md:px-16 lg:px-24">
      <aside>
        <img src="/logo.jpeg" alt="NK Gestión Logo" class="h-12 object-contain bg-white p-2 rounded mb-4" />
        <p class="font-bold text-lg">NK GESTIÓN</p>
        <p>ENVIRONMENTAL SOLUTIONS AND ENGINEERING<br/>PROPOSAL DOCUMENT — FOR COMMERCIAL USE</p>
      </aside>
      <nav>
        <h6 class="footer-title opacity-100 text-secondary">Contact</h6>
        <div class="flex flex-col gap-2">
          <p><span class="font-bold">Natalia Muñoz</span> — Commercial Director</p>
          <a href="mailto:natalia.munoz@nkgestion.cl" class="link link-hover flex items-center gap-2">
            ✉️ natalia.munoz@nkgestion.cl
          </a>
          <a href="mailto:natmunozac@gmail.com" class="link link-hover flex items-center gap-2">
            ✉️ natmunozac@gmail.com
          </a>
          <a href="https://wa.me/56962391165" target="_blank" rel="noopener noreferrer" class="link link-hover flex items-center gap-2 text-secondary font-bold mt-2">
            📱 +56 9 6239 1165 (WhatsApp)
          </a>
        </div>
      </nav>
      <nav>
        <h6 class="footer-title opacity-100 text-secondary">Navigation</h6>
        <a href="#services" class="link link-hover">Services</a>
        <a href="#studies" class="link link-hover">Studies & Analysis</a>
        <a href="#due-diligence" class="link link-hover">Due Diligence</a>
      </nav>
    </footer>
    </div> <!-- End drawer-content -->
    
    <div class="drawer-side z-[100]">
      <label for="main-menu" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-100 text-base-content min-h-full w-80 p-6 text-2xl gap-6 font-medium">
        <!-- Close button -->
        <li class="flex justify-end mb-8">
          <label for="main-menu" class="btn btn-ghost btn-circle self-end">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </label>
        </li>
        <li><a href="#services" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Services</a></li>
        <li><a href="#studies" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Studies & Analysis</a></li>
        <li><a href="#due-diligence" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Due Diligence</a></li>
        <li><a href="#contact" onclick="document.getElementById('main-menu').checked = false" class="py-4 px-6 hover:text-primary active:bg-base-200">Contact</a></li>
        
        <li class="mt-8"><a href="#contact" onclick="document.getElementById('main-menu').checked = false" class="btn btn-primary text-primary-content text-xl py-4 h-auto">Let's Talk</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'NK Gestión — Environmental Solutions and Engineering',
  meta: [
    { name: 'description', content: 'Environmental management and engineering for projects that move forward' }
  ]
})
</script>
