export default {
    name: 'formComponent',
    title: 'Form',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'fields',
            title: 'Fields',
            type: 'array',
            of: [
                { type: 'formFieldComponent' }
            ],
        },
    ],
};