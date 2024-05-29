export default {
    name: 'dealsComponent',
    title: 'Vissa Erbjudande',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Rubrik',
            type: 'string',
        },
        {
            name: 'subTitle',
            title: 'Under rubrik',
            type: 'string',
        },
        {
            name: 'deals',
            title: 'Erbjudande',
            type: 'array',
            of: [
                {
                    type: 'dealComponent'
                }
            ],
            validation: Rule => Rule.max(3).error('Max 3 erbjudande'),
        },
    ],
    preview: {
        select: {
            title: 'title',
            subTitle: 'subTitle',
            deals: 'deals',
        },
        prepare(selection) {
            const { title, subTitle, deals } = selection;
            return {
                title: title || 'No primary heading',
                subtitle: subTitle || 'No sub heading',
                description: `${deals ? deals.length : 0} offer(s)`,
            };
        },
    },
};