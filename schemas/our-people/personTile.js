import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'personTile',
  title: 'Person Tile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      storeOriginalFilename: false,
      options: {
        hotspot: true,
      },
    }),
  ],
})
