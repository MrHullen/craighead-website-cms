import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This will be the URL for the page (i.e. craighead.school.nz/slug) so it must be unique. Use the generate button and adjust if there is a uniqueness warning.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      description:
        'The text shown at the top of the page to introduce the visitor to what the page is about in general.',
      type: 'string',
      // type: 'array',
      // of: [{type: 'block'}],
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
      name: 'pageSections',
      title: 'Page Sections',
      description: 'Each section will be shown on the page, one after another. Each section must have a heading, paragraphs, and a banner image. Optionally, you can add tiles.',
      type: 'array',
      of: [{type: 'pageSection'}],
    }),
  ],
})
