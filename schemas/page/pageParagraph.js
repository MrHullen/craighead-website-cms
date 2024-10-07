import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageParagraph',
  title: 'Page Paragraph',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
