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
            name: 'image',
            title: 'Bild',
            type: 'image',
            description: 'Välj en bild som ska visas',
            options: {
                hotspot: true,
                metadata: ['lqip', 'palette', 'blurhash'],
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternativ text',
                    description: 'Beskrivande text för bilden',
                },
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
                subtitle: 'title',
                media: image || DocumentTextIcon,
            }
        },
    },
});