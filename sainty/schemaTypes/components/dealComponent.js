import { DocumentTextIcon } from '@sanity/icons';

export default {
    name: 'dealComponent',
    title: 'Erbjudande',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Rubrik',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Text',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Bild',
            type: 'image',
        },
        {
            name: 'reference',
            title: 'Välj land eller hotell',
            type: 'reference',
            to: [
                { type: 'hotel' },
                { type: 'country' },
            ],
        },
    ],
    icon: DocumentTextIcon,
    preview: {
        select: {
            title: 'title',
            image: 'image',
        },
        prepare({ title, image }) {
            return {
                title: title || 'Untitled',
                media: image || DocumentTextIcon,
            }
        },
    },
};
