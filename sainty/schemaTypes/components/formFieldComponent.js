export default {
    name: 'formFieldComponent',
    title: 'Form Field',
    type: 'object',
    fields: [
        {
            name: 'fieldType',
            title: 'Field Type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Text',
                        value: 'text'
                    },
                    {
                        title: 'Email',
                        value: 'email'
                    },
                    {
                        title: 'Number',
                        value: 'number'
                    },
                    {
                        title: 'Textarea',
                        value: 'textarea'
                    },
                ],
                layout: 'dropdown',
            },
        },
        {
            name: 'label',
            title: 'Label',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'placeholder',
            title: 'Placeholder',
            type: 'string',
        },
        {
            name: 'options',
            title: 'Options',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({ parent }) => parent.fieldType !== 'select',
        },
    ],
};