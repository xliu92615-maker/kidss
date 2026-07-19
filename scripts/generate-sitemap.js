import fs from 'fs';
import path from 'path';

const domain = 'https://qimengkids.com';

// Paths to output files
const publicDir = path.resolve('public');
const distDir = path.resolve('dist');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('Successfully generated robots.txt in public/');

// 2. Extract dynamic activity IDs from src/data.ts using a robust regex pattern
let activityIds = [];
try {
  const dataTsPath = path.resolve('src/data.ts');
  if (fs.existsSync(dataTsPath)) {
    const dataContent = fs.readFileSync(dataTsPath, 'utf-8');
    // Pattern to capture fields like: id: 'career-1' or id: "career-1"
    const matches = dataContent.matchAll(/id:\s*['"]([^'"]+)['"]/g);
    for (const match of matches) {
      activityIds.push(match[1]);
    }
    // De-duplicate the IDs
    activityIds = [...new Set(activityIds)];
  }
} catch (error) {
  console.error('Error reading src/data.ts to extract activity IDs:', error);
}

console.log(`Extracted ${activityIds.length} dynamic activity IDs:`, activityIds);

// 3. Define all static paths
const staticPaths = [
  '',
  'faq',
  'charity',
  'privacy',
  'favorites',
  'category/subject',
  'category/colearning',
  'category/team',
  'category/study'
];

// Generate sitemap items (both clean canonical versions and hash router fallback versions)
const urls = [];

// Add static pages
staticPaths.forEach(p => {
  const cleanUrl = p ? `${domain}/${p}` : `${domain}/`;
  const hashUrl = p ? `${domain}/#/${p}` : `${domain}/#/`;
  
  // Clean URL (Search engine canonical standard)
  urls.push({
    loc: cleanUrl,
    changefreq: p ? 'weekly' : 'daily',
    priority: p ? '0.8' : '1.0'
  });
  
  // Hash URL (Single Page Application Router fallback)
  urls.push({
    loc: hashUrl,
    changefreq: p ? 'weekly' : 'daily',
    priority: p ? '0.8' : '1.0'
  });
});

// Add dynamic activity pages
activityIds.forEach(id => {
  const cleanUrl = `${domain}/activity/${id}`;
  const hashUrl = `${domain}/#/activity/${id}`;
  
  // Clean URL
  urls.push({
    loc: cleanUrl,
    changefreq: 'weekly',
    priority: '0.7'
  });
  
  // Hash URL
  urls.push({
    loc: hashUrl,
    changefreq: 'weekly',
    priority: '0.7'
  });
});

// Build the XML content
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(item => {
  xml += `  <url>
    <loc>${item.loc}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>
`;
});

xml += `</urlset>\n`;

// Save sitemap.xml to public/
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
console.log('Successfully generated sitemap.xml in public/');

// 4. Also copy directly to dist/ if it exists, to ensure instant dev-environment synchronization
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
  console.log('Successfully synchronized robots.txt and sitemap.xml to dist/');
}
