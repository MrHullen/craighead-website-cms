import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'Nav Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The text displayed in the menu.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      description: 'The URL to link to, e.g. /about-us or www.google.com. Links to internal pages should start with a /. If you want to link to a particular section of a page, add a # and the section ID. The section ID will be the heading of the section, all in lowercase and with spaces replaced by hyphens.',
      type: 'string',
      validation: (Rule) => Rule.required(),
      validation: Rule => Rule.uri({
        allowRelative: true,
      })
    }),
  ],
})