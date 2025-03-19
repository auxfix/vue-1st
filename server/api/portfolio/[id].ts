export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  
  // Validate that id is a valid portfolio item id
  if (!id || !['1', '2', '3', '4'].includes(id)) {
    throw createError({
      statusCode: 404,
      message: 'Portfolio item not found'
    })
  }

  // Now TypeScript knows id is a valid key
  const portfolioItems = {
    1: {
      id: 1,
      name: 'Luxury Penthouse',
      location: 'Downtown District',
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      category: 'Penthouses',
      image: '🏢',
      description: 'Stunning penthouse with panoramic city views and premium finishes.',
      features: [
        'Floor-to-ceiling windows',
        'Private rooftop terrace',
        'Smart home automation',
        'Gourmet kitchen',
        'Wine cellar',
        'Home theater'
      ],
      amenities: [
        '24/7 concierge service',
        'Private elevator',
        'Secure parking',
        'Fitness center access',
        'Rooftop pool'
      ],
      price: '$2,500,000',
      status: 'Available'
    },
    2: {
      id: 2,
      name: 'Garden Villa',
      location: 'Suburban Paradise',
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      category: 'Villas',
      image: '🏡',
      description: 'Spacious villa with private garden and modern amenities.',
      features: [
        'Private garden',
        'Swimming pool',
        'Outdoor kitchen',
        'Home office',
        'Guest house',
        'Smart irrigation system'
      ],
      amenities: [
        'Gated community',
        'Golf course access',
        'Tennis courts',
        'Community center',
        'Walking trails'
      ],
      price: '$3,800,000',
      status: 'Available'
    },
    3: {
      id: 3,
      name: 'Sky Apartment',
      location: 'City Center',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      category: 'Apartments',
      image: '🏬',
      description: 'Modern apartment with high-end finishes and city views.',
      features: [
        'Open floor plan',
        'Built-in storage',
        'Smart home system',
        'Balcony',
        'Walk-in closet',
        'Modern appliances'
      ],
      amenities: [
        'Rooftop lounge',
        'Co-working space',
        'Pet spa',
        'Package receiving',
        'Bike storage'
      ],
      price: '$950,000',
      status: 'Available'
    },
    4: {
      id: 4,
      name: 'Waterfront Villa',
      location: 'Coastal Area',
      bedrooms: 6,
      bathrooms: 5,
      area: 4000,
      category: 'Villas',
      image: '🏖️',
      description: 'Exclusive waterfront villa with private beach access.',
      features: [
        'Private beach access',
        'Boat dock',
        'Infinity pool',
        'Outdoor kitchen',
        'Wine room',
        'Home theater'
      ],
      amenities: [
        'Marina access',
        'Beach club membership',
        'Water sports equipment',
        'Private parking',
        'Security system'
      ],
      price: '$5,200,000',
      status: 'Available'
    }
  }

  const item = portfolioItems[id as '1' | '2' | '3' | '4']
  
  if (!item) {
    throw createError({
      statusCode: 404,
      message: 'Portfolio item not found'
    })
  }

  return item
})
