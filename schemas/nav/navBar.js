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
      hidden: true,
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      description: 'The links displayed on the navigation bar.',
      type: 'array',
      of: [{type: 'navMenu'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})