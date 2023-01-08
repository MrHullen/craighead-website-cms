export default {
  name: 'usefulLinks',
  title: 'Useful Links',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      readOnly: true,
      initialValue: 'Useful Links'
    },
    {
      name: 'usefulLinks',
      title: 'Useful links',
      description: 'The list of links that visitors might be interested in, e.g. School Policy Documents, CraigNet, KAMAR, etc.',
      type: 'array',
      of: [
        {
          type: "object",
          name: "usefulLink",
          fields: [
            { type: "string", name: "title" },
            { type: "url", name: "link" }
          ]
        }
      ]
    }
  ]
}