import { GrNavigate } from "react-icons/gr";

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: GrNavigate,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: 'logo',
            type: 'object',
            title: 'Logo*',
            fields: [
                {
                    name: 'logoType',
                    type: 'string',
                    title: 'Logo Type',
                    options: {
                        list: [
                            { title: 'Text', value: 'text' },
                            { title: 'Image', value: 'image' }
                        ],
                        layout: 'radio'
                    }
                },
                {
                    name: 'textLogo',
                    type: 'string',
                    title: 'Text Logo',
                    hidden: ({ parent }) => parent?.logoType !== 'text'
                },
                {
                    name: 'imageLogo',
                    type: 'image',
                    title: 'Image Logo',
                    options: {
                        hotspot: true,
                        metadata: ['lqip', 'palette', 'blurhash'],
                    },
                    hidden: ({ parent }) => parent?.logoType !== 'image'
                }
            ]
        },
        {
            name: 'links',
            type: 'array',
            title: 'Links*',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: "title",
                            type: "string",
                            title: "Link Title"
                        },
                        {
                            name: 'internalLink',
                            type: 'reference',
                            title: 'Reference to page',
                            to: [{ type: 'page' }],
                        },
                    ]
                }
            ]
        },
        {
            name: 'contact',
            type: 'object',
            title: 'Kontakt information används för footer',
            fields: [
                {
                    name: 'email',
                    type: 'string',
                    title: 'Email'
                },
                {
                    name: 'phone',
                    type: 'string',
                    title: 'Phone Number'
                }
            ]
        }
    ]
}
