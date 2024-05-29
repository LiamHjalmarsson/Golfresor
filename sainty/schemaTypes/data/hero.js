export default {
    name: 'heroMainPage',
    title: 'Hero Home Page',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'hotel',
            title: 'Hotel',
            type: 'reference',
            to: {
                type: 'hotel'
            },
        },
        {
            name: 'country',
            title: 'Country',
            type: 'reference',
            to: {
                type: 'country'
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'URL',
            options: {
                source: doc => doc.hotel?.name || doc.country?.name,
                maxLength: 200,
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            },
        },
    ],
};
