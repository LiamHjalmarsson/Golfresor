import { DocumentTextIcon } from '@sanity/icons';

export default {
    name: 'contentComponent',
    title: 'Välj att visa visa innehåll av länder eller hotel',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Rubrik',
            type: 'string',
        },
        {
            name: 'subTitle',
            title: 'Underrubrik',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Text',
            type: 'text',
        },
        {
            name: 'contentToDisplay',
            type: 'string',
            title: "Välj innehåll som ska visas",
            options: {
                list: ['country', 'hotel'],
            },
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
                title: title || 'untitled',
                subtitle: 'Innehåll att visa',
                media: image || DocumentTextIcon,
            }
        },
    },
};
