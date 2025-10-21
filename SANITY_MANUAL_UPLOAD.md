# Manual Sanity Content Upload Guide

## Step 1: Start your development server
```bash
npm run dev
```

## Step 2: Open Sanity Studio
Navigate to: http://localhost:3001/studio

## Step 3: Create the Author (Jogi Pandit)
1. Click on "Authors" in the Sanity Studio sidebar
2. Click "Create new Author"
3. Fill in the details:
   - **Name**: Jogi Pandit
   - **Slug**: jogi-pandit (will auto-generate)
   - **Bio**: Certified kayaking instructor with over 15 years of experience in white water kayaking and outdoor education. Founder of National Outdoor School and passionate advocate for water safety and environmental conservation.
   - **Image**: Upload the image from `public/jogi-instructor-dp.jpg`
   - **Alt Text**: Jogi Pandit - Kayaking Instructor
4. Click "Publish"

## Step 4: Create the Category
1. Click on "Categories" in the Sanity Studio sidebar
2. Click "Create new Category"
3. Fill in the details:
   - **Title**: White Water Kayaking
   - **Slug**: white-water-kayaking (will auto-generate)
   - **Description**: Insights and guides about white water kayaking techniques, safety, and adventures
4. Click "Publish"

## Step 5: Create the Articles
For each of the three articles, follow these steps:

### Article 1: Essential White Water Kayaking Techniques for Beginners
1. Click on "Posts" in the Sanity Studio sidebar
2. Click "Create new Post"
3. Fill in the basic details:
   - **Title**: Essential White Water Kayaking Techniques for Beginners
   - **Slug**: essential-white-water-kayaking-techniques-beginners
   - **Excerpt**: Master the fundamental techniques that every white water kayaker needs to know for safe and enjoyable river adventures.
   - **Published At**: 2025-09-15 (set time to 10:00 AM)
   - **Featured**: ✅ Check this box
   - **Category**: Select "White Water Kayaking"
   - **Author**: Select "Jogi Pandit"
   - **Tags**: Add "technique", "safety", "beginners"

4. SEO Section:
   - **SEO Title**: Essential White Water Kayaking Techniques for Beginners | NOS Guide
   - **SEO Description**: Learn essential white water kayaking techniques for beginners. Master paddle strokes, safety procedures, and river reading skills with expert guidance from National Outdoor School.
   - **SEO Keywords**: white water kayaking, kayaking techniques, beginner kayaking, paddle strokes, river safety

5. Body Content: Copy the content from the JSON file and paste it into the rich text editor

### Article 2: Safety First: Essential Gear and Protocols for White Water Adventures
1. Repeat the same process with these details:
   - **Title**: Safety First: Essential Gear and Protocols for White Water Adventures
   - **Slug**: safety-first-essential-gear-protocols-white-water
   - **Excerpt**: Comprehensive guide to safety equipment and protocols that can save your life on white water adventures.
   - **Published At**: 2025-09-20 (set time to 2:30 PM)
   - **Featured**: ❌ Leave unchecked
   - **Tags**: safety, gear, protocols

### Article 3: Exploring India's Premier White Water Destinations: A Kayaker's Guide
1. Repeat the same process with these details:
   - **Title**: Exploring India's Premier White Water Destinations: A Kayaker's Guide
   - **Slug**: exploring-india-premier-white-water-destinations
   - **Excerpt**: Discover the most thrilling white water kayaking destinations across India, from the Himalayas to the Western Ghats.
   - **Published At**: 2025-09-25 (set time to 9:15 AM)
   - **Featured**: ❌ Leave unchecked
   - **Tags**: destinations, travel, adventure

## Step 6: Test the Insights Page
Once all content is added, visit: http://localhost:3001/insights

You should see:
- Three articles displayed in the grid
- "Essential White Water Kayaking Techniques for Beginners" as the featured article
- Filtering by category working properly
- All articles clickable and displaying properly

## Tips for Adding Rich Text Content:
1. Copy each article's body content from the `sanity-content.json` file
2. Use the rich text editor toolbar to format:
   - Headings (H2, H3)
   - Bold text
   - Lists (bullet points)
   - Paragraphs
3. The content is already structured - just copy and paste each section

## Troubleshooting:
- If images don't appear, make sure the image assets are uploaded to Sanity
- If links don't work, check that slugs match exactly
- If filtering doesn't work, ensure the category reference is properly set

This manual process will take about 15-20 minutes but will give you full control over the content and allow you to see exactly how the Sanity Studio interface works.