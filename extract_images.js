const fs = require('fs');
const html = fs.readFileSync('dwars_redactie.html', 'utf-8');
const results = {};
const articles = html.split('<article');
for (const raw of articles) {
    if (!raw.includes('class="redactielid')) continue;
    const nameMatch = raw.match(/<span class="field field--name-title field--type-string field--label-hidden">([^<]+)<\/span>/);
    const imgMatch = raw.match(/<img[^>]+src="([^"]+)"/);
    if (nameMatch && imgMatch) {
        let src = imgMatch[1];
        if (src.includes('standaard%20profielfoto')) continue;
        results[nameMatch[1].trim()] = 'https://www.dwars.be' + src;
    }
}
console.log(JSON.stringify(results, null, 2));
