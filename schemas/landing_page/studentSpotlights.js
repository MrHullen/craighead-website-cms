export default {
  name: 'studentSpotlights',
  title: 'Student Spotlights',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      readOnly: true,
      initialValue: `Student Spotlights`,
    },
    {
      name: 'studentSpotlights',
      title: 'Student Spotlights',
      description:
        'The list of links that visitors might be interested in, e.g. School Policy Documents, CraigNet, KAMAR, etc.',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description:
                'The text that will display below the image. Should be a short quote as though from a student, e.g. Craighead is where I feel like I belong. My friends will be with me the rest of my life.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description:
                'The text that will display is the visitor has images turned off or there is a problem with the image file. Should be a short description, e.g. Student playing the drums.',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
