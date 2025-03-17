<template>
  <nav class="nav" :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav-brand">{{ siteContent.brandName }}</div>
    <div class="nav-links">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.id"
        :to="link.href"
        class="nav-link"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface NavLink {
  id: number
  text: string
  href: string
}

const { siteContent } = useSiteContent()
const isScrolled = ref(false)

const navLinks = ref<NavLink[]>([
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'About', href: '/about' },
  { id: 3, text: 'Services', href: '/services' },
  { id: 4, text: 'Portfolio', href: '/portfolio' },
  { id: 5, text: 'Contact', href: '/contact' }
])

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  transition: background 0.3s;
  z-index: 1000;
}

.nav-scrolled {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--secondary-color);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--primary-color);
}
</style> 