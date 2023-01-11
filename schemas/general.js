export default {
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      // hidden: true,
      // readOnly: true,
      initialValue: 'General',
    },
    {
      name: 'favIcon',
      title: 'Favicon',
      description: `The image shown on the tab in the visitor's browser.`,
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo Image',
      description: `The logo in the top right of the navbar.`,
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      description: `The image shown behind the content on the page.`,
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'application',
      title: 'Application Form',
      description: `The PDF file that visitors should be given when they click on the 'Apply Now' button.`,
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
  ],
}
