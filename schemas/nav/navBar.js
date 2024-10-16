import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navBar',
  title: 'Nav Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nav Bar',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dropdown',
      title: 'Dropdown',
      description: 'The links displayed in this drop down.',
      type: 'array',
      of: [{type: 'navMenu'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})