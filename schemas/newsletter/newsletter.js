export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'releaseDate',
      title: 'Release Date',
      description: 'This will be the URL for the newsletter. It must be unique, so the release date in the format YYYY-MM-DD is strongly recommended.',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
      storeOriginalFilename: false,
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
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
    {
      name: 'featureText',
      title: "Feature Text",
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'principalsAddress',
      title: "Principal's Address",
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'notices',
      title: "Notices",
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'dates',
      title: "Dates",
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'articles',
      title: "Articles",
      type: 'array',
      of: [{type: 'article'}],
    },
  ],
  preview: {
    select: {
      title: 'releaseDate',
    }
  }
}