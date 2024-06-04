import { defineType, defineField } from "sanity"
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
    name: 'country',
    title: 'Land',
    type: 'document',
    description: 'description',
    fields: [
        {
            name: 'title',
            title: 'Land',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            type: "slug",
            title: "Land slug",
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "popular",
            title: "Popular",
            type: "boolean",
        },
        {
            name: 'headerImages',
            type: 'array',
            title: 'Bilder',
            of: [
                {
                    name: 'imageItem',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            title: 'Bild',
                            type: 'image',
                            options: {
                                hotspot: true,
                                metadata: ['lqip', 'palette', 'blurhash'],
                            },
                            validation: (Rule) => Rule.required(),
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternativ text',
                                    description: 'Beskrivande text för bilden',
                                },
                            ],
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Rubrik',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'headerInfo',
                            type: 'string',
                            title: 'Text',
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "cardInfoText",
            title: "Text som visas i kortet för landet på andra sidor",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Text som visas inne på landet',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'subTitle',
            title: 'Under rubrik',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'hotelAndResortText',
            title: 'Text om hotel och resort',
            type: 'string',
        },
    ],
    preview: {
        select: {
            image: 'headerImages.0.image.asset',
            title: 'title',
        },
        prepare({ image, title }) {
            return {
                media: image,
                title,
            };
        },
    },
});
