import { createClient } from '@sanity/client'

// Environment variables from .env.local
const projectId = 'ekczy83i'
const dataset = 'production'
const apiVersion = '2025-10-05'

// Create Sanity client
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

async function testSanityConnection() {
  try {
    console.log('🔍 Testing Sanity connection...')
    
    // Test basic connection
    const projects = await client.fetch('*[_type == "post"][0...5]{title, _id}')
    console.log('✅ Connection successful!')
    console.log('📄 Existing posts:', projects)
    
    // Check for categories
    const categories = await client.fetch('*[_type == "category"]{title, _id}')
    console.log('📂 Existing categories:', categories)
    
    // Check for authors
    const authors = await client.fetch('*[_type == "author"]{name, _id}')
    console.log('👤 Existing authors:', authors)
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message)
  }
}

testSanityConnection()