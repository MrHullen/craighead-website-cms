import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'paragraph',
  title: 'Paragraph',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      description: `OPTIONAL: an image to show within the paragraph.`,
      type: 'image',
      storeOriginalFilename: false,
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description:
            'The text that will display is the visitor has images turned off or there is a problem with the image file. Should be a short description, e.g. Student playing the drums.',
        },
      ],
    }),
  ]
})