export default {
    name: 'dealsComponent',
    title: 'Vissa Erbjudande',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Rubrik*',
            type: 'string',
            description: "Rubrik som visas med Erbjudande komponent", 
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'subTitle',
            title: 'Under rubrik',
            type: 'string',
            description: "Underrubrik som visas med Erbjudande komponent", 
        },
    ],
    preview: {
        select: {
            title: 'title',
            subTitle: 'subTitle',
            deals: 'deals',
        },
        prepare({ title, subTitle }) {
            return {
                title: title || 'No primary heading',
                subtitle: subTitle || 'No sub heading',
            };
        },
    },
};