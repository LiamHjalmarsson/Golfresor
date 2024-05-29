import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
    name: 'textComponent',
    title: 'Text kort',
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
                subtitle: 'Text Card',
                media: image || DocumentTextIcon,
            }
        },
    },
});