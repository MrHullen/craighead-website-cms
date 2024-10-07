import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageSection',
  title: 'Page Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'Displayed at the top of the section.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'pageParagraph',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tiles',
      title: 'Tiles',
      type: 'array',
      of: [{type: 'pageTile'}],
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      description: `The image shown at the bottom of the section.`,
      type: 'image',
      storeOriginalFilename: false,
    })
  ],
})
