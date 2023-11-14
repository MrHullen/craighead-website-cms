import {defineField, defineType} from 'sanity'
import slugify from 'slugify'

async function myAsyncSlugifier(input, schemaType, context) {
  const slug = slugify(input)
  // const {getClient} = context
  // const client = getClient({apiVersion: '2022-12-07'})
  // const query = 'count(*[_type=="article" && slug.current == $slug]{_id})'
  // const params = {slug: slug}
  // return client.fetch(query, params).then((count) => {
  //   console.log('Movies with identical slug', count)
  //   return `${slug}-${count + 1}`
  // })
  console.log(slug)
  return slug
}

async function isUniqueHack(slug, context) {
  const {document, getClient} = context
  const client = getClient({apiVersion: '2022-12-07'})
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  }
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
  const result = await client.fetch(query, params)
  return result
}



export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        // source: (_, context) => context.parent.title,
        // disableArrayWarning: true,
        maxLength: 96,
        isUnique: isUniqueHack,
        slugify: myAsyncSlugifier
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'paragraph'}],
    }),
    defineField({
      name: 'images',
      title: 'Trailing Images',
      type: 'array',
      of: [
        {
          type: 'image',
          storeOriginalFilename: false,
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
      ],
    })
  ],
})
