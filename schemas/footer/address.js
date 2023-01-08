export default {
  name: 'address',
  title: 'Address',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      readOnly: true,
      initialValue: 'Address'
    },
    {
      name: 'addressLine1',
      title: 'Address line 1',
      description: 'Required. Used as the first line of the address, e.g. Wrights Ave, Highfield, Timaru 7910.',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'addressLine2',
      title: 'Address line 2',
      description: 'Optional. Used as the second line of the address, e.g. South Canterbury, New Zealand.',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone number',
      description: 'Required. In the format: +XX (X) XXX XXXX, e.g. +64 (3) 688 6074.',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      description: 'Required. Should be all lowercase, e.g. admin@craighead.school.nz.',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}