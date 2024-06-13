import { DocumentTextIcon } from '@sanity/icons';

export default {
    name: 'contentComponent',
    title: 'Välj att visa visa antingen innehåll av länder eller hotel',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Rubrik*',
            type: 'string',
            description: "Rubrik som visas med hotel eller länder", 
            validation: (Rule) => Rule.required(),
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
            description: "text som visas med hotel eller länder frivillig att lägga till", 
        },
        {
            name: 'contentToDisplay',
            type: 'string',
            title: "Välj innehåll som ska visas*",
            description: "Välj vilket innehåll som ska visas i komponeten", 
            options: {
                list: ['country', 'hotel'],
            },
            validation: (Rule) => Rule.required(),
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
