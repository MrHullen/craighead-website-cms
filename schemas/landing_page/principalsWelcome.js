export default {
  name: 'principalsWelcome',
  title: 'Principals Welcome',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      readOnly: true,
      initialValue: `Principal's Quote`
    },
    {
      name: 'quote',
      title: 'Quote',
      description: 'The text that will display next to to (or below on mobile) the image of the Principal.',
      type: 'array',
      of: [{ type: 'block' } ],
      validation: Rule => Rule.required()
    },
    {
      name: 'principal',
      type: 'string',
      title: 'Principal',
      description: `The Principal's name, e.g. Lindy Graham`,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      description: `The photo of the student leaders. This must be a square photo to display properly. Recommended size is at least 1024x1024 pixels.`,
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'The text that will display is the visitor has images turned off or there is a problem with the image file. Should be a short description, e.g. Lindy standing with student leaders.',
        }
      ],
      validation: Rule => Rule.required()
    }
  ]
}