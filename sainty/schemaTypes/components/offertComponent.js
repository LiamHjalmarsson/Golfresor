import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
    name: 'offertComponent',
    title: 'Offert',
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
            name: 'buttonText',
            title: 'Knapp text',
            type: 'string',
            description: 'Text som visas i knappen',
        },
        {
            name: 'link',
            title: 'Länk',
            type: 'string',
            description: 'Vart knappen ska länka till',
        },
        {
            name: 'image',
            title: 'Bild',
            type: 'image',
            description: 'Välj en bild som ska visas',
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
                subtitle: 'title',
                media: image || DocumentTextIcon,
            }
        },
    },
});