import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
    name: 'hotel',
    title: 'Hotel',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Hotel*',
            type: 'string',
            description: "Skriv in namn på hotel",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Hotel slug*",
            options: {
                source: "title"
            },
            description: "Tryck på knappen för att generera url väg till hotel",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "popular",
            title: "Populärt",
            type: "boolean",
            description: "Kryssa i om det är ett populärt hotel",
        }),
        defineField({
            name: "deal",
            title: "Erbjudande",
            type: "object",
            description: "Erbjudande information om hotellet",
            fields: [
                defineField({
                    name: "isDeal",
                    title: "Är detta ett erbjudande?",
                    type: "boolean",
                    description: "Kryssa i om det är ett erbjudande hotel",
                }),
                defineField({
                    name: "rubrik",
                    title: "Rubrik för erbjudande",
                    type: "string",
                    hidden: ({ parent }) => !parent?.isDeal,
                }),
                defineField({
                    name: "description",
                    title: "Text som visas med kortet för erbjudande",
                    type: "string",
                    hidden: ({ parent }) => !parent?.isDeal,
                }),
                defineField({
                    name: "price",
                    title: "Pris för erbjudande",
                    type: "number",
                    hidden: ({ parent }) => !parent?.isDeal,
                }),
            ],
        }),
        defineField({
            name: 'country',
            title: 'Land*',
            type: 'reference',
            to: {
                type: "country"
            },
            description: "Välj vilket land som hotelet finns i för att det ska synas på korrekt land",
        }),
        defineField({
            name: 'cardImage',
            title: 'Bild som kommer att visas på kort för hotelet på andra sidor*',
            type: 'image',
            options: {
                hotspot: true,
                metadata: ['lqip', 'palette', 'blurhash'],
            },
            validation: (Rule) => Rule.required(),
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternativ text*',
                    description: 'Alt text beskriver bilden för exempelvis synskadade',
                    validation: (Rule) => Rule.required(),
                    hidden: ({ parent }) => !parent?.image,

                }),
                defineField({
                    name: "description",
                    title: 'Text som visas med kortet',
                    type: 'string',
                    description: "Skriv in en text som ska visas med kortet, lämna tom om det ska stå antal nätter och pris",
                    hidden: ({ parent }) => !parent?.image,
                })
            ],
        }),
        defineField({
            name: 'images',
            title: 'Hotelbilder*',
            type: 'array',
            description: "Alla bilder som finns till hotelet",
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    type: "image",
                    options: {
                        hotspot: true,
                        metadata: ['lqip', 'palette', 'blurhash'],
                    },
                    fields: [
                        defineField({
                            name: 'alt',
                            type: 'string',
                            title: 'Alternativ text*',
                            description: 'Alt text beskriver bilden för exempelvis synskadade',
                            validation: (Rule) => Rule.required(),
                        })
                    ],
                })
            ],
        }),
        defineField({
            name: "nights",
            title: "Antal nätter",
            type: "number",
        }),
        defineField({
            name: "price",
            title: "Pris",
            type: "number",
        }),
        defineField({
            name: 'description',
            title: 'Beskrivning av hotel',
            type: 'text',
        }),
        defineField({
            title: "Ikoner med text i Golfpaket med prisgaranti",
            name: "iconWithText",
            type: "array",
            description: "Ikoner med text om flyg/hotel/taxi med mera.",
            of: [
                defineField({
                    type: "object",
                    fields: [
                        defineField({
                            type: 'icon.manager',
                            name: 'icon',
                            title: 'Icon',
                        }),
                        defineField({
                            title: "Text*",
                            name: "text",
                            type: "string",
                            validation: Rule => Rule.required(),
                        }),
                    ],
                })
            ]
        }),
        defineField({
            title: "Ikoner med text",
            name: "detailIcons",
            type: "array",
            description: "Ikoner med text om annat innehåll som golf, spa, hav",
            of: [
                defineField({
                    type: "object",
                    fields: [
                        defineField({
                            type: 'icon.manager',
                            name: 'icon',
                            title: 'Icon',
                        }),
                        defineField({
                            title: "Text*",
                            name: "text",
                            type: "string",
                            validation: Rule => Rule.required(),
                        }),
                    ],
                })
            ]
        }),
        defineField({
            name: 'textBoxes',
            title: 'Informations kort om hotelet',
            description: "Lägg till innehåll om exempelvis hotelets golf banor, mat, boende",
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Rubrik',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                                metadata: ['lqip', 'palette', 'blurhash'],
                            },
                            fields: [
                                defineField({
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternativ text',
                                    description: 'Beskrivande text för bilden',
                                })
                            ]
                        }),
                        defineField({
                            name: 'description',
                            title: 'Text',
                            type: 'text',
                        })
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image',
                        },
                        prepare({ title, media }) {
                            return {
                                title: title,
                                media: media || DocumentTextIcon,
                            };
                        }
                    }
                })
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
