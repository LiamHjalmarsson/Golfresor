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
            name: 'image',
            title: 'Header',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: "headerInfo",
            title: "Header Text som finns med i bilden",
            type: "string",
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
        {
            name: 'Otherimages',
            title: 'Fler bilder för landet',
            type: 'array',
            of: [
                {
                    type: "image"
                }
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            image: 'image',
        },
        prepare(selection) {
            let { title, image } = selection;

            return {
                title: title || 'No Title',
                media: image || DocumentTextIcon,
            };
        },
    },
});
