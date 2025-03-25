import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'peopleSection',
  title: 'People Section',
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
      name: 'description',
      title: 'Description',
      description: '',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'people',
      title: 'People',
      description: "These will display in a row under the description",
      type: 'array',
      of: [{type: 'personTile'}],
    }),
  ],
})