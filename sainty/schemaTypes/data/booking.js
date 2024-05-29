import { defineType, defineField } from "sanity"

export default defineType({
    name: "booking",
    type: "Booking",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Namn",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "hotel",
            title: "Hotel",
            type: "reference",
            to: [{
                type: "hotel"
            }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "checkIn",
            title: "Check In",
            type: "date",
        }),
        defineField({
            name: "checkOut",
            title: "Check Out",
            type: "date",
        }),
        defineField({
            name: "discount",
            title: "Discount",
            type: "string"
        }),
        defineField({
            name: "adults",
            title: "Adults",
            type: "number",
        }),
        defineField({
            name: "children",
            title: "Children",
            type: "number",
        }),
        defineField({
            name: "totalPrice",
            title: "Price",
            type: "number",
        }),
    ]
})