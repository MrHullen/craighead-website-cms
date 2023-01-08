export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      description: 'The text displayed directly below the page title.',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'intro',
      title: 'Introduction',
      description: 'The text shown at the top of the page to introduce the visitor to what the page is about in general.',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    }
  ]
}