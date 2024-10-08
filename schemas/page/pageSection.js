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
      description: 'Use the Image button to add an image to the paragraph. It will appear beside the next paragraph in the editor.',
      type: 'pageParagraph',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tiles',
      title: 'Tiles',
      description: "These will display in a row under the paragraphs with a heading 'Learn more'. Recommend using either 0 or 3 tiles.",
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
