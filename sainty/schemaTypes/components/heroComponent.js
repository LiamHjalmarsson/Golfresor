import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
    name: 'heroComponent',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'images',
            type: 'array',
            title: 'Bilder*',
            description: "Lägg till minst en bild som visas i Hero/banner",
            validation: (Rule) => Rule.required(),
            of: [
                {
                    name: 'imageItem',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Bild',
                            validation: (Rule) => Rule.required(),
                            options: {
                                hotspot: true
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative text*',
                                    validation: (Rule) => Rule.required(),
                                },
                            ],
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Rubrik',
                        },
                        {
                            name: 'headerInfo',
                            type: 'string',
                            title: 'Text',
                        },
                    ],
                },
            ],
        }),
    ],
    icon: DocumentTextIcon,
    preview: {
        select: {
            title: 'images.0.title',
            media: 'images.0.image',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Untitled',
                subtitle: 'Hero image',
                media: media || DocumentTextIcon,
            }
        },
    },
});
