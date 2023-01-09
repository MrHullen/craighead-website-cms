export default {
  name: 'studentWelcome',
  title: `Students' Welcome`,
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      readOnly: true,
      initialValue: `Students' Welcome`
    },
    {
      name: 'blurb',
      title: 'Blurb',
      description: 'The welcome text - the very first thing visitors see.',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      description: `The photo of the student leaders. This must be a square photo to display properly. Recommended size is at least 1024x1024 pixels.`,
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'The text that will display on the image. Should be a short description, e.g. Alysha and Zara, student leaders.',
          validation: Rule => Rule.required()
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'The text that will display is the visitor has images turned off or there is a problem with the image file. Should be a short description, e.g. Alysha and Zara, student leaders.'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'prospectis',
      title: 'Prospectus',
      description: `The PDF file that visitors should be given when they click on the 'Prospectus' button.`,
      type: 'file',
      validation: Rule => Rule.required()
    }
  ]
}