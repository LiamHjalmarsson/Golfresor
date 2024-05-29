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
            title: 'Bilder',
            of: [
                {
                    name: 'imageItem',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Bild',
                            options: {
                                hotspot: true
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative text',
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
                            },
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
