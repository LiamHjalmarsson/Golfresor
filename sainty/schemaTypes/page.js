
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'page',
    title: "Page",
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Sid namn som exempelvis Om oss"
        }),
        defineField({
            name: 'components',
            title: 'Komponenter',
            type: 'array',
            description: "Bygg upp sidan genom att välja vilka komponenter som ska användas",
            of: [
                {
                    type: 'heroComponent',
                },
                {
                    type: 'textComponent'

                },
                {
                    type: 'richTextComponent'

                },
                {
                    type: 'dealsComponent'

                },
                {
                    type: 'offertComponent'

                },
                {
                    type: 'contentComponent'

                },
            ],
        }),
    ],
});