export default defineEventHandler(() => {
  return {
    features: [
      {
        id: 1,
        icon: '🏠',
        title: 'Premium Location',
        description: 'Prime spots in the heart of the city',
        isHovered: false
      },
      {
        id: 2,
        icon: '🛋️',
        title: 'Luxury Amenities',
        description: 'State-of-the-art facilities for your comfort',
        isHovered: false
      },
      {
        id: 3,
        icon: '🔒',
        title: '24/7 Security',
        description: 'Round-the-clock protection for your peace of mind',
        isHovered: false
      }
    ]
  }
}) 