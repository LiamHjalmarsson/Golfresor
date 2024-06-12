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