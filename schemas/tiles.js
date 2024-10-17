export default {
  name: 'tiles',
  title: 'Tiles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      // hidden: true,
      // readOnly: true,
    },
    {
      name: 'tiles',
      title: 'Tiles',
      type: 'array',
      of: [{type: 'pageTile'}],
    },
  ],
}
