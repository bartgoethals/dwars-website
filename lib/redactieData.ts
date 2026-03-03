export type RedactieLid = {
    name: string;
    role: string;
    image?: string;
};

export type Category = {
    title: string;
    members: RedactieLid[];
};

export const REDACTIE_DATA: Category[] = [
    {
        title: "Hoofdredactie",
        members: [
            { name: "Thijs van Dam", role: "Hoofdredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Thijs.jpg?itok=bJmUy9fb" },
            { name: "Laura Aerts", role: "Adjunct-Hoofdredacteur" },
        ]
    },
    {
        title: "Redactie",
        members: [
            // Verantwoordelijken
            { name: "Hanne Colémont", role: "Beeld", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Hanne.jpeg?itok=AMIYRdrn" },
            { name: "Lena Vercammen", role: "Lay-out", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-09-min.jpg?itok=bEmONZf6" },
            { name: "Laurens Verhaegen", role: "PR", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%283%20van%2033%29.jpg?itok=2jC_3bVF" },
            { name: "Anne-Marie Dimitrov", role: "Sociale Media", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Anne-Marie.jpeg?itok=1rh0dDok" },
            { name: "Merel Naudts", role: "Eindredactie", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Merel_0.jpeg?itok=alDqfGYV" },
            { name: "Stijn Crick", role: "Eindredactie", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Stijn.jpeg?itok=bFHsllOk" },

            // Eindredactie
            { name: "Elena Ceuppens", role: "Eindredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Elena.jpg?itok=rQixC950" },
            { name: "Pauline Bongaerts", role: "Eindredacteur" },
            { name: "Stien Loos", role: "Eindredacteur" },
            { name: "Bjorn De Busschere", role: "Eindredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2815%20van%2033%29.jpg?itok=FudLomOA" },
            { name: "Eline Van de Weyer", role: "Eindredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2827%20van%2033%29.jpg?itok=ewWRs6qF" },

            // Creatief
            { name: "Ine Cuypers", role: "Fotograaf", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-01-min.jpg?itok=awyUVAUT" },
            { name: "Felix Bal", role: "Fotograaf" },
            { name: "Margot Franckx", role: "Illustrator" },
            { name: "Mila de Jager", role: "Illustrator" },
            { name: "Silke Ramaekers", role: "Illustrator" },
            { name: "Otto Van Kerckhove", role: "Illustrator" },
            { name: "Ezri Hofstede", role: "Illustrator" },
            { name: "Casper Schramme", role: "Illustrator" },
            { name: "Gabrielle Hamilton", role: "Illustrator" },
            { name: "Lotte Mertens", role: "Illustrator", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2825%20van%2033%29.jpg?itok=BgR_JNA7" },
            { name: "Rabiatou Jalloh", role: "Lay-outer" },

            // Redactie
            { name: "Julie Vanstraelen", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Julie_vierkant.jpg?itok=D3E9sTJ9" },
            { name: "Remco Terryn", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/985/Remco_Kleur.jpg?itok=Xx4gL1aA" },
            { name: "Casper Peeters", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-08-min.jpg?itok=TOctms6h" },
            { name: "Lotte Helmerhorst", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Lotte.jpeg?itok=b63hu3P2" },
            { name: "Cato Van Lerberghe", role: "Redacteur" },
            { name: "Lena Bernaerts", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/LenaB.jpeg?itok=pXePJTkC" },
            { name: "Jana Geets", role: "Redacteur" },
            { name: "Ainize Casal Demaeght", role: "Redacteur" },
            { name: "Samuël van Dam", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%285%20van%2033%29.jpg?itok=rJxvwk8S" },
            { name: "Milan De Meyere", role: "Redacteur" },
            { name: "Pieter Vierstraete", role: "Redacteur" },
            { name: "Finne Rumes", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2823%20van%2033%29.jpg?itok=TRNHqBwa" },
            { name: "Robin Rutten", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2829%20van%2033%29.jpg?itok=gV46yVms" },
            { name: "Fien Verberckmoes", role: "Redacteur" },
            { name: "Léah De Roy", role: "Redacteur" },
            { name: "Willem Cretskens", role: "Redacteur" },
            { name: "Liesbeth Brusselmans", role: "Redacteur" },
            { name: "Kaat Heylen", role: "Redacteur" },
            { name: "Maxwell Vormezeele", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2811%20van%2033%29.jpg?itok=bCWR6mEO" },
            { name: "Andries Bigaré", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2821%20van%2033%29.jpg?itok=vBm0j6ah" },

            // Overig
            { name: "Laurens Severin", role: "Boekhouder" },
            { name: "Hanne Ghoos", role: "Sociale Media" },
            { name: "Lina Goethals", role: "Lid" },
            { name: "Simon-Leander Schelstraete", role: "Lid", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2819%20van%2033%29.jpg?itok=18rCir_Y" },
            { name: "Tailah Baert", role: "Lid" },
            { name: "Annemarie Bahro", role: "Lid" },
            { name: "Merel Haverkamp", role: "Lid" },
            { name: "Poline Starovoyt", role: "Lid" },
            { name: "Thijs Sneeuwloper", role: "Lid" },
        ]
    }
];

// Helper to generate a slug from a name
export function generateAuthorSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getAuthorBySlug(slug: string): RedactieLid | null {
    for (const category of REDACTIE_DATA) {
        for (const member of category.members) {
            if (generateAuthorSlug(member.name) === slug) {
                return member;
            }
        }
    }
    return null;
}
