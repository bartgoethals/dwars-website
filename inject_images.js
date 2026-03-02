const fs = require('fs');
const pageCode = fs.readFileSync('app/redactie/page.tsx', 'utf-8');
const images = {
    "Thijs van Dam": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Thijs.jpg?itok=bJmUy9fb",
    "Hanne Colémont": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Hanne.jpeg?itok=AMIYRdrn",
    "Lena Vercammen": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-09-min.jpg?itok=bEmONZf6",
    "Laurens Verhaegen": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%283%20van%2033%29.jpg?itok=2jC_3bVF",
    "Anne-Marie Dimitrov": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Anne-Marie.jpeg?itok=1rh0dDok",
    "Merel Naudts": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Merel_0.jpeg?itok=alDqfGYV",
    "Stijn Crick": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Stijn.jpeg?itok=bFHsllOk",
    "Julie Vanstraelen": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Julie_vierkant.jpg?itok=D3E9sTJ9",
    "Remco Terryn": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/985/Remco_Kleur.jpg?itok=Xx4gL1aA",
    "Elena Ceuppens": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Elena.jpg?itok=rQixC950",
    "Ine Cuypers": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-01-min.jpg?itok=awyUVAUT",
    "Casper Peeters": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-08-min.jpg?itok=TOctms6h",
    "Lotte Helmerhorst": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Lotte.jpeg?itok=b63hu3P2",
    "Lena Bernaerts": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/LenaB.jpeg?itok=pXePJTkC",
    "Samuël van Dam": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%285%20van%2033%29.jpg?itok=rJxvwk8S",
    "Finne Rumes": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2823%20van%2033%29.jpg?itok=TRNHqBwa",
    "Robin Rutten": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2829%20van%2033%29.jpg?itok=gV46yVms",
    "Lotte Mertens": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2825%20van%2033%29.jpg?itok=BgR_JNA7",
    "Maxwell Vormezeele": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2811%20van%2033%29.jpg?itok=bCWR6mEO",
    "Bjorn De Busschere": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2815%20van%2033%29.jpg?itok=FudLomOA",
    "Eline Van de Weyer": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2827%20van%2033%29.jpg?itok=ewWRs6qF",
    "Andries Bigaré": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2821%20van%2033%29.jpg?itok=vBm0j6ah",
    "Simon-Leander Schelstraete": "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2819%20van%2033%29.jpg?itok=18rCir_Y"
};

let newCode = pageCode.replace(/name:\s*"([^"]+)",\s*role:\s*"([^"]+)"/g, (match, name, role) => {
    if (images[name]) {
        return 'name: "' + name + '", role: "' + role + '", image: "' + images[name] + '"';
    }
    return match;
});

newCode = newCode.replace(/role: string;/g, "role: string;\\n    image?: string;");

newCode = newCode.replace(
    /<div className="relative z-10 bg-white border-2 border-black p-5 h-full flex flex-col justify-center">/g,
    '<div className="relative z-10 bg-white border-2 border-black p-5 h-full flex flex-col justify-center">\\n' +
    '                                                {member.image && (\\n' +
    '                                                    <div className="w-full aspect-[4/5] object-cover mb-4 border border-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">\\n' +
    '                                                        <img src={member.image} alt={member.name} className="object-cover w-full h-full" />\\n' +
    '                                                    </div>\\n' +
    '                                                )}'
);

fs.writeFileSync('app/redactie/page.tsx', newCode);
console.log('Updated app/redactie/page.tsx successfully.');
