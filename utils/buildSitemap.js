#! /usr/bin/env node
// I am ./bin/buildSitemap.js

const path = require('path')
const glob = require('glob')
const fs = require('fs')
// const { excludedRoutes } = require('../lib/slugs');
const SITE_ROOT = process.env.SITE_ROOT || 'https://www.greenscapes-gardening.co.uk'
const SOURCE = process.env.SOURCE || path.join(__dirname, '..', 'pages', '/**/*.js')
const DESTINATION = process.env.DESTINATION || path.join(__dirname, '..', 'public', 'sitemap.xml')

let diskPages = glob.sync(SOURCE)

let xml = ''
xml += '<?xml version="1.0" encoding="UTF-8"?>'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

// console.log(diskPages);

// diskPages = diskPages.filter(page => {
//     const fileName = page.replace('/Users/user1/Documents/development/ewalletbooster/frontend/ewalletbooster-new-2019/pages', '').replace('.js', '');    
//     // console.log('fileName: ', fileName)
//     return !excludedRoutes.includes(fileName)}).filter(page => !page.includes('_')).filter(page => {
//     // console.log('page: ' + page + 'includes affiliates? ' + (!page.includes('/affiliates/')))
//     if (!page.includes('/profile/')) {
//         if (!page.includes('/affiliates/')) {
//             return page;
//         }
//     }
// })
// .map(p => {
//     console.log(p)
//     return p;
// })
// console.log(diskPages)
diskPages.forEach((page) => {   
    // console.log('page>>>', page)
    
    let stats = fs.statSync(page)
    let modDate = new Date(stats.mtime)
    let lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${('0' + modDate.getDate()).slice(-2)}`

    page = page.replace(path.join(__dirname, '..', 'pages'), '')
    page = page.replace(/.js$/, '')
    page = `${SITE_ROOT}${page}`

    if (page.match(/.*\/index$/)) {
        page = page.replace(/(.*)index$/, '$1')
    }

    xml += '<url>'
    xml += `<loc>${page}</loc>`
    xml += `<lastmod>${lastMod}</lastmod>`
    xml += `<changefreq>always</changefreq>`
    xml += `<priority>0.5</priority>`
    xml += '</url>'
})

xml += '</urlset>'

fs.writeFileSync(DESTINATION, xml)

console.log(`Wrote sitemap for ${diskPages.length} pages to ${DESTINATION}`)

