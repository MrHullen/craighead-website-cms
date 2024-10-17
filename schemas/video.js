import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      hidden: true,
      readOnly: true,
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video file',
      type: 'mux.video',
    }),
  ],
})
