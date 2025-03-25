import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'our-people',
  title: 'Our People',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Displayed at the top of the page.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      description:
        'The text shown at the top of the page to introduce the visitor to what the page is about in general.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      description: `The image shown behind the title and introduction on the page.`,
      type: 'image',
      storeOriginalFilename: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'peopleSections',
      title: 'Page Sections',
      description: 'Each section will be shown on the page, one after another.',
      type: 'array',
      of: [{type: 'peopleSection'}],
    }),
  ],
})