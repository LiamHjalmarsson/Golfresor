import { DocumentTextIcon } from '@sanity/icons';

export default {
    name: 'hotel',
    title: 'Hotel',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Namn',
            type: 'string',
        },
        {
            name: "slug",
            type: "slug",
            title: "Hotel slug",
            options: {
                source: "title"
            }
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
                    ],
                },
            ],
        },
        {
            name: 'images',
            title: 'Hotelbilder',
            type: 'array',
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
                        }
                    ],
                }
            ],
        },
        {
            name: "nights",
            title: "Antal nätter",
            type: "number"
        },
        {
            name: "price",
            title: "Pris",
            type: "number",
        },
        {
            name: "subTitle",
            title: "Under rubrik",
            type: 'string',
        },
        {
            name: 'description',
            title: 'Beskrivning av land i kort',
            type: 'text',
        },
        {
            name: 'country',
            title: 'Land',
            type: 'reference',
            to: {
                type: "country"
            },
        },
        {
            name: 'textBoxes',
            title: 'Informations kort om hotelet',
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
                            const { title, media } = selection;
                            return {
                                title: title,
                                media: media || DocumentTextIcon,
                            };
                        }
                    }
                }
            ]
        },
        {
            title: "Ikoner med text i Golfpaket med prisgaranti",
            name: "iconWithText",
            type: "array",
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
                            preview: {
                                select: {
                                    provider: 'icon.provider',
                                    name: 'icon.name',
                                },
                                prepare(icon) {
                                    const iconPreview = preview({ ...icon, options });
                                    return {
                                        title: icon.provider,
                                        subtitle: icon.name,
                                        media: iconPreview,
                                    };
                                },
                            },
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
        },
        {
            title: "Ikoner med text",
            name: "detailIcons",
            type: "array",
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
                            preview: {
                                select: {
                                    provider: 'icon.provider',
                                    name: 'icon.name',
                                },
                                prepare(icon) {
                                    const iconPreview = preview({ ...icon, options });
                                    return {
                                        title: icon.provider,
                                        subtitle: icon.name,
                                        media: iconPreview,
                                    };
                                },
                            },
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
        },
        {
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
                        prepare(selection) {
                            const { title } = selection;
                            return {
                                title: title,
                            };
                        }
                    }
                }
            ]
        },
        {
            name: "popular",
            title: "Populärt",
            type: "boolean",
        }
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
};
