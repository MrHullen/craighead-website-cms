import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'craighead-website',

  projectId: 'svq88qt7',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
