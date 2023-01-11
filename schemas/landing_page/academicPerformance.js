export default {
  name: 'academicPerformance',
  title: 'Academic Performance',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      readOnly: true,
      initialValue: 'Academic Performance',
    },
    {
      name: 'studentSpotlights',
      title: 'Student Spotlights',
      description:
        'The list of links that visitors might be interested in, e.g. School Policy Documents, CraigNet, KAMAR, etc.',
      type: 'string',
    },
  ],
}
