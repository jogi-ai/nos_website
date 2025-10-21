import { createClient } from '@sanity/client'
import 'dotenv/config'

// Environment variables from .env.local
const projectId = 'ekczy83i'
const dataset = 'production'
const apiVersion = '2025-10-05'

// Create Sanity client with write token
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for mutations
  token: process.env.SANITY_WRITE_TOKEN, // Use the write token from .env.local
})

// Sample data for seeding
const seedData = {
  author: {
    _type: 'author',
    name: 'Jogi Pandit',
    slug: {
      _type: 'slug',
      current: 'jogi-pandit'
    },
    bio: 'Professional kayaking instructor and founder of National Outdoor School. With over 15 years of experience in white water kayaking, Jogi has trained hundreds of paddlers across India and is passionate about promoting safe and sustainable water sports.',
  },
  
  category: {
    _type: 'category',
    title: 'White Water Kayaking',
    slug: {
      _type: 'slug',
      current: 'white-water-kayaking'
    },
    description: 'Everything you need to know about white water kayaking - from beginner guides to advanced techniques, locations, and gear reviews.'
  },

  articles: [
    {
      _type: 'post',
      title: 'What is White Water Kayaking and Why Are People Obsessing About It These Days?',
      slug: {
        _type: 'slug',
        current: 'what-is-white-water-kayaking-and-why-are-people-obsessing-about-it'
      },
      excerpt: 'Discover the thrilling world of white water kayaking and understand why this adrenaline-pumping sport is capturing hearts across India. From the basics to the benefits, learn everything you need to know.',
      tags: ['beginner', 'techniques', 'adventure'],
      readTime: '8 min read',
      featured: true,
      publishedAt: '2024-10-01T00:00:00Z',
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'White water kayaking has exploded in popularity across India, and for good reason. This adrenaline-pumping water sport combines the thrill of navigating turbulent rapids with the serenity of being one with nature. But what exactly is white water kayaking, and why are so many adventure enthusiasts becoming obsessed with it?'}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'What is White Water Kayaking?'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'White water kayaking is the sport of paddling a kayak down rivers containing rapids and turbulent water. Unlike calm-water kayaking, white water kayaking requires navigating through challenging obstacles like rocks, drops, and powerful currents. The "white water" gets its name from the white foam created when water flows rapidly over rocks and obstacles.'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Rivers are classified on a scale from Class I (easy) to Class VI (extremely dangerous), with most beginners starting on Class I-II rapids and progressing to more challenging waters as their skills develop.'}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'Why the Growing Obsession?'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: '1. The Ultimate Adrenaline Rush'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Few activities can match the pure adrenaline rush of dropping into a rapid. The combination of speed, technique, and split-second decision-making creates an unparalleled natural high that keeps paddlers coming back for more.'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: '2. Mental Health Benefits'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'In our increasingly digital world, white water kayaking offers a complete disconnect from screens and stress. The focus required to read water and navigate rapids creates a meditative state that many describe as "flow state" - where time seems to stop and worries disappear.'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: '3. Physical Fitness'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Kayaking is an incredible full-body workout that builds core strength, improves cardiovascular health, and enhances balance and coordination. It\'s fitness that doesn\'t feel like exercise because you\'re having too much fun!'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: '4. Connection with Nature'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Paddling through pristine river corridors offers an intimate connection with nature that\'s impossible to experience from the bank. You\'ll see wildlife, untouched landscapes, and gain a deep appreciation for our waterways.'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: '5. Community and Camaraderie'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'The kayaking community is incredibly welcoming and supportive. There\'s something special about sharing the river experience with others who understand the unique challenges and rewards of the sport.'}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'Getting Started: What You Need to Know'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'If you\'re feeling inspired to try white water kayaking, here\'s what you need to know:'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'Essential Skills'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Swimming ability: You must be a confident swimmer', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Basic paddle strokes: Forward, backward, and turning strokes', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Wet exit: How to safely exit your kayak underwater', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'River reading: Understanding water features and hazards', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'Safety First'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'White water kayaking involves inherent risks, which is why proper instruction and safety protocols are crucial. Never attempt to learn on your own - always start with a qualified instructor and proper safety equipment.'}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'Best Places to Learn Near You'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'India offers incredible opportunities for learning white water kayaking:'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Kali River, Dandeli: Perfect for beginners with consistent Class I-II rapids', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Barapole River, Coorg: Exciting rapids in a beautiful setting', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Rivers in Kerala: Monsoon-fed rivers offering world-class kayaking', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'The obsession with white water kayaking isn\'t just about the thrill - it\'s about finding a sport that challenges you physically and mentally while connecting you with nature and an amazing community. Once you experience the magic of navigating your first rapid, you\'ll understand why so many people are falling in love with this incredible sport.'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Ready to start your own kayaking journey? The rivers are calling!'}]
        }
      ],
      seo: {
        metaTitle: 'What is White Water Kayaking? Complete Beginner\'s Guide 2024',
        metaDescription: 'Discover what white water kayaking is and why it\'s becoming India\'s most popular adventure sport. Learn basics, benefits, and how to get started safely.',
        keywords: 'white water kayaking, kayaking for beginners, adventure sports India, water sports, kayaking basics'
      }
    },
    {
      _type: 'post',
      title: 'Where to Learn White Water Kayaking Near Bangalore',
      slug: {
        _type: 'slug',
        current: 'where-to-learn-white-water-kayaking-near-bangalore'
      },
      excerpt: 'Explore the best destinations around Bangalore for learning white water kayaking. From Dandeli\'s Kali River to Coorg\'s Barapole River and Kerala\'s pristine waters, find your perfect learning spot.',
      tags: ['beginner', 'locations', 'courses', 'seasonal'],
      readTime: '10 min read',
      featured: true,
      publishedAt: '2024-09-28T00:00:00Z',
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Bangalore\'s tech professionals and adventure enthusiasts are increasingly drawn to white water kayaking as an escape from city life. Fortunately, the Garden City is perfectly positioned near some of India\'s best kayaking destinations. Here\'s your complete guide to learning white water kayaking near Bangalore.'}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: '1. Kali River, Dandeli (430 km from Bangalore)'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Dandeli is arguably the most popular destination for Bangaloreans looking to learn kayaking. The Kali River offers consistent, beginner-friendly rapids that are perfect for building foundational skills.'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'Why Kali River is Perfect for Beginners'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Consistent flow: Year-round water flow from dam releases', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Class I-II rapids: Perfect progression for beginners', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Professional instruction: Multiple certified instructors available', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Beautiful scenery: Paddle through the Dandeli Wildlife Sanctuary', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'Best Time to Visit'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'October to March: Post-monsoon period with perfect water levels and pleasant weather. The rapids are at their best, and visibility is excellent.', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'April to June: Summer months with lower water levels but still kayakable. Great for learning basic strokes in calmer conditions.', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Avoid July-September: Heavy monsoon rains make the river dangerous for beginners.', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: '2. Barapole River, Coorg (250 km from Bangalore)'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Coorg\'s Barapole River offers some of the most exciting kayaking experiences near Bangalore. The river features more technical rapids than Dandeli, making it perfect for those ready to progress beyond basics.'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'What Makes Barapole Special'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Challenging rapids: Class II-III rapids for intermediate paddlers', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Scenic beauty: Paddle through coffee plantations and dense forests', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Shorter distance: Closer to Bangalore than Dandeli', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Weekend accessibility: Perfect for weekend trips', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: '3. Kodencherry, Kerala (320 km from Bangalore)'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Kerala\'s Kodencherry region offers world-class kayaking on two pristine rivers that provide the perfect progression path from beginner to advanced paddler.'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'The Rivers'}]
        },
        {
          _type: 'block',
          style: 'h4',
          children: [{_type: 'span', text: 'Iruvanjipuzha River'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Perfect for beginners: Gentle Class I-II rapids', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Crystal clear water: Excellent visibility for learning', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Consistent flow: Fed by monsoon and springs', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h4',
          children: [{_type: 'span', text: 'Chalipuzha River'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Intermediate to advanced: Challenging Class II-IV rapids', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Technical lines: Perfect for skill development', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Pristine environment: Untouched forest corridors', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'The adventure of a lifetime is waiting just a few hours from Bangalore. Whether you choose the consistent flows of Dandeli, the challenging rapids of Coorg, or the pristine waters of Kerala, you\'ll find world-class instruction and unforgettable experiences.'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Your kayaking journey starts with that first paddle stroke - and these destinations near Bangalore offer the perfect place to take it!'}]
        }
      ],
      seo: {
        metaTitle: 'Best Places to Learn White Water Kayaking Near Bangalore 2024',
        metaDescription: 'Discover top kayaking destinations near Bangalore including Dandeli, Coorg, and Kerala. Complete guide with best times to visit and course details.',
        keywords: 'kayaking near bangalore, dandeli kayaking, coorg rafting, kerala kayaking, white water kayaking courses'
      }
    },
    {
      _type: 'post',
      title: 'Where to Learn White Water Kayaking in Kerala',
      slug: {
        _type: 'slug',
        current: 'where-to-learn-white-water-kayaking-in-kerala'
      },
      excerpt: 'Kerala offers some of India\'s best white water kayaking experiences. Discover Kodencherry\'s pristine rivers, the famous Malabar River Festival, and why Kerala is perfect for progressing from beginner to pro.',
      tags: ['intermediate', 'locations', 'festivals', 'seasonal'],
      readTime: '12 min read',
      featured: false,
      publishedAt: '2024-09-25T00:00:00Z',
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Kerala, God\'s Own Country, isn\'t just famous for its backwaters and beaches. The state offers some of India\'s most spectacular white water kayaking experiences, particularly in the hidden gem of Kodencherry. Here\'s everything you need to know about learning and progressing in white water kayaking in Kerala.'}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'Kodencherry: Kerala\'s Kayaking Capital'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Nestled in the Western Ghats near the Kerala-Tamil Nadu border, Kodencherry is a small town that has become synonymous with world-class white water kayaking. This pristine location offers two distinct rivers that provide the perfect progression path for kayakers of all levels.'}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'The Rivers of Kodencherry'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'Iruvanjipuzha River'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'The Iruvanjipuzha (often called Iruvanji) is the perfect introduction to Kerala\'s kayaking scene. This crystal-clear river flows through untouched forest and offers ideal conditions for beginners and intermediate paddlers.'}]
        },
        {
          _type: 'block',
          style: 'h4',
          children: [{_type: 'span', text: 'Why Beginners Love Iruvanjipuzha'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Class I-II rapids: Perfect for learning basic strokes and river reading', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Clear water: Excellent visibility helps with confidence building', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Forgiving nature: Mistakes are easily corrected without serious consequences', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Beautiful pools: Calm sections between rapids for rest and instruction', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'Chalipuzha River'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'The Chalipuzha represents the next level of Kerala kayaking. This technical river offers challenging rapids that will push intermediate and advanced paddlers to their limits while providing incredible opportunities for skill development.'}]
        },
        {
          _type: 'block',
          style: 'h4',
          children: [{_type: 'span', text: 'Why Advanced Paddlers Choose Chalipuzha'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Class II-IV rapids: Serious whitewater that demands respect', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Technical lines: Requires precise boat control and line choice', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Continuous action: Rapid-fire sequence of challenging features', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'Best Time to Visit Kerala for Kayaking'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'Peak Season: June to September (Monsoon)'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Kerala\'s monsoon season transforms the state\'s rivers into raging torrents perfect for kayaking. This is when the rivers are at their absolute best:'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Maximum flow: Rivers are at their most powerful and exciting', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Best rapids: All features are fully formed and running well', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Cooler temperatures: Monsoon brings relief from the heat', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{_type: 'span', text: 'The Malabar River Festival'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Every year during the monsoon season, Kodencherry hosts the famous Malabar River Festival, one of Asia\'s premier kayaking events. This festival attracts world-class paddlers from around the globe and offers:'}]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{_type: 'span', text: 'What Makes the Festival Special'}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'International competition: Watch the world\'s best paddlers in action', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Skill clinics: Learn from professional kayakers', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Cultural immersion: Experience Kerala\'s rich culture and cuisine', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [{_type: 'span', text: 'Community building: Connect with paddlers from around the world', marks: [{_type: 'strong'}]}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Kerala\'s kayaking scene offers something truly special - the chance to progress from complete beginner to advanced paddler in one of the world\'s most beautiful settings. Whether you\'re taking your first strokes on the gentle Iruvanjipuzha or charging down the technical rapids of Chalipuzha, Kerala provides an unforgettable kayaking experience.'}]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{_type: 'span', text: 'Join the growing community of paddlers who consider Kerala their spiritual home for white water kayaking. The rivers are calling - will you answer?'}]
        }
      ],
      seo: {
        metaTitle: 'White Water Kayaking in Kerala: Complete Guide to Kodencherry 2024',
        metaDescription: 'Discover Kerala\'s best kayaking destinations including Kodencherry, Iruvanjipuzha and Chalipuzha rivers. Learn about the Malabar River Festival and monsoon kayaking.',
        keywords: 'kerala kayaking, kodencherry kayaking, malabar river festival, monsoon kayaking, iruvanjipuzha river, chalipuzha river'
      }
    }
  ]
}

async function seedSanity() {
  try {
    console.log('🌱 Starting Sanity data seeding...')

    // Create author first
    console.log('📝 Creating author...')
    const author = await client.create(seedData.author)
    console.log('✅ Author created:', author.name)

    // Create category
    console.log('📂 Creating category...')
    const category = await client.create(seedData.category)
    console.log('✅ Category created:', category.title)

    // Create articles
    console.log('📰 Creating articles...')
    for (const articleData of seedData.articles) {
      const article = await client.create({
        ...articleData,
        author: {
          _type: 'reference',
          _ref: author._id
        },
        categories: [{
          _type: 'reference',
          _ref: category._id
        }]
      })
      console.log(`✅ Article created: ${article.title}`)
    }

    console.log('🎉 Seeding completed successfully!')
    console.log('🚀 Visit http://localhost:3001/insights to see your articles!')
    
  } catch (error) {
    console.error('❌ Error seeding data:', error)
  }
}

// Run the seeding function
seedSanity()