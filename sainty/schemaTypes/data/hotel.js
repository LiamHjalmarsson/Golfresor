import { defineType, defineField } from "sanity"
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
    name: 'hotel',
    title: 'Hotel',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Namn',
            type: 'string',
            description: "Skriv in namn på hotel",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Hotel slug",
            options: {
                source: "title"
            },
            description: "Tryck på knappen för att generera url väg till hotel",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "popular",
            title: "Populärt",
            type: "boolean",
            description: "Krysa i om det är ett populärt hotel"
        }),
        defineField({
            name: "deal",
            title: "Erbjudande",
            type: "object",
            description: "Erbjudande information om hotellet",
            fields: [
                {
                    name: "isDeal",
                    title: "Är detta ett erbjudande?",
                    type: "boolean",
                    description: "Kryssa i om det är ett erbjudande hotel"
                },
                {
                    name: "rubrik",
                    title: "rubrik för erbjudande",
                    type: "string",
                },
                {
                    name: "description",
                    title: 'Text som visas med kortet för erbjudande',
                    type: 'string',
                },
                {
                    name: "price",
                    title: 'Pris för erbjudande',
                    type: 'number',
                },
            ]
        }),
        defineField({
            name: 'cardImage',
            title: 'Bild som kommer att visas på kort för hotelet på andra sidor',
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
                    description: 'Alt text beskvriver bilden för exempelvis synskadade',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "description",
                    title: 'Text som visas med kortet',
                    type: 'string',
                    description: "skriv in en text som ska visas med kortet lämna tom om det ska stå antal nätter och pris"
                }
            ],
        }),
        defineField({
            name: 'images',
            title: 'Hotelbilder',
            type: 'array',
            description: "Alla bilder som finns till hotelet",
            validation: (Rule) => Rule.required(),
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                        metadata: ['lqip', 'palette', 'blurhash'],
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternativ text',
                            description: 'Alt text beskvriver bilden för exempelvis synskadade',
                            validation: (Rule) => Rule.required(),
                        }
                    ],
                }
            ],
        }),
        defineField({
            name: "nights",
            title: "Antal nätter",
            type: "number"
        }),
        defineField({
            name: "price",
            title: "Pris",
            type: "number",
        }),
        defineField({
            name: "subTitle",
            title: "Under rubrik",
            description: "Under rubrik visas på hotel sidan ovanför hotel namnet",
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Beskrivning av land i kort',
            type: 'text',
        }),
        defineField({
            name: 'country',
            title: 'Land',
            type: 'reference',
            to: {
                type: "country"
            },
            description: "Välj vilket land som hotelet finns i för att det ska synas på korrekt land"
        }),
        defineField({
            name: 'textBoxes',
            title: 'Informations kort om hotelet',
            description: "Lägg till innehåll om exempelvis hotelets golf bannor, mat, boende",
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Rubrik',
                            type: 'string'
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                                metadata: ['lqip', 'palette', 'blurhash'],
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternativ text',
                                    description: 'Beskrivande text för bilden'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            title: 'Text',
                            type: 'text'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image'
                        },
                        prepare(selection) {
                            let { title, media } = selection;
                            return {
                                title: title,
                                media: media || DocumentTextIcon,
                            };
                        }
                    }
                }
            ]
        }),
        defineField({
            title: "Ikoner med text i Golfpaket med prisgaranti",
            name: "iconWithText",
            type: "array",
            description: "Ikoner med text om flyg/hotel/taxi med mera.",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            title: "Icon",
                            name: "icon",
                            type: "iconPicker",
                            options: {
                                storeSvg: true
                            },
                            validation: Rule => Rule.required(),
                        },
                        {
                            title: "Text",
                            name: "text",
                            type: "string",
                            validation: Rule => Rule.required(),
                        },
                    ],
                }
            ]
        }),
        defineField({
            title: "Ikoner med text",
            name: "detailIcons",
            type: "array",
            description: "Ikoner med text om annat innehåll som golf, spa, hav ",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            title: "Icon",
                            name: "icon",
                            type: "iconPicker",
                            options: {
                                storeSvg: true
                            },
                            validation: Rule => Rule.required(),
                        },
                        {
                            title: "Text",
                            name: "text",
                            type: "string",
                            validation: Rule => Rule.required(),
                        },
                    ],
                }
            ]
        }),
        defineField({
            name: 'priceList',
            title: 'Pris Lista',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Rubrik',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Text',
                            type: 'text'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'title',
                        },
                        prepare({ title }) {
                            return {
                                title: title,
                            };
                        }
                    }
                }
            ]
        }),
    ],
    preview: {
        select: {
            image: 'cardImage',
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
