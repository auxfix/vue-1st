import type { SiteContent, FeaturesResponse } from '~/types'

export const useSiteContent = () => {
  const { data: siteContent, pending: siteContentPending } = useFetch<SiteContent>('/api/site-content')
  const { data: features, pending: featuresPending } = useFetch<FeaturesResponse>('/api/features')

  const isLoading = computed(() => siteContentPending.value || featuresPending.value)

  // Provide default values when data is not yet loaded
  const defaultSiteContent: SiteContent = {
    hero: {
      title: 'Loading...',
      subtitle: 'Please wait'
    },
    brandName: 'Loading...',
    footerContent: {
      about: 'Loading...',
      links: [],
      contactInfo: {
        address: 'Loading...',
        email: 'Loading...',
        phone: 'Loading...'
      }
    }
  }

  const defaultFeatures: FeaturesResponse = {
    features: []
  }

  // Use computed properties to always return valid data
  const safeSiteContent = computed(() => siteContent.value || defaultSiteContent)
  const safeFeatures = computed(() => features.value || defaultFeatures)

  return {
    siteContent: safeSiteContent,
    features: safeFeatures,
    isLoading
  }
} 