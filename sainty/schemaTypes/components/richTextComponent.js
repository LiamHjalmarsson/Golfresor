import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
    name: 'richTextComponent',
    title: 'Text kort med bild',
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
            name: 'description',
            title: 'Text',
            type: 'text',
        },
        {
            name: 'link',
            title: 'Länk',
            type: 'string',
            description: "länk vart knappen ska gå till"
        },
        {
            name: 'buttonText',
            title: 'Knapp Text',
            type: 'string',
            description: "Text som visas i knappen"
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: "Välj en bild",
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
        {
            name: 'imageText',
            title: 'Bild Text',
            type: 'string',
            description: "Välj en text som visas i botten av kortet"
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
                subtitle: 'Text kort med bild',
                media: image || DocumentTextIcon,
            }
        },
    },
});