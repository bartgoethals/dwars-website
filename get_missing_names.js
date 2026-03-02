const fs = require('fs');
const code = fs.readFileSync('app/redactie/page.tsx', 'utf-8');
const missing = [];
const lines = code.split('\n');
lines.forEach(line => {
    if (line.includes('name: "') && line.includes('role: "') && !line.includes('image: "')) {
        const match = line.match(/name: "([^"]+)"/);
        if (match) missing.push(match[1]);
    }
});
console.log(JSON.stringify(missing));
