<template>
  <Html :lang="head.htmlAttrs.lang">
    <Head>
      <template v-for="link in head.link" :key="link.hid">
        <Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.hid">
        <Meta :id="meta.hid" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
  </Html>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
</script>
