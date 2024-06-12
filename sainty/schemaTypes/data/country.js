import { defineType, defineField } from "sanity"

export default defineType({
    name: 'country',
    title: 'Land',
    type: 'document',
    description: 'description',
    fields: [
        defineField({
            name: 'title',
            title: 'Land',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: "Skriv in ett land att lägga till",
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Land slug",
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
            description: "Generera landets url"
        }),
        defineField({
            name: "popular",
            title: "Popular",
            type: "boolean",
            description: "Fyll i om landet är populärt"
        }),
        defineField({
            name: 'headerImages',
            type: 'array',
            title: 'Bilder',
            description: "Lägg till bilder som vissas i headern",
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
                                    description: 'Beskrivande text för bilden visas för exempelvis synskadade',
                                    validation: (Rule) => Rule.required(),
                                },
                            ],
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Rubrik',
                            validation: (Rule) => Rule.required(),
                            description: "Rubrik text som visas på bilden"
                        },
                        {
                            name: 'headerInfo',
                            type: 'string',
                            title: 'Text',
                            description: "Text som visas på bilden"
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "cardInfoText",
            title: "Text som visas i kortet för landet på andra sidor",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Text som visas inne på landets sida',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
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
