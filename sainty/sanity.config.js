import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { iconPicker } from 'sanity-plugin-icon-picker';
import {IconManager} from 'sanity-plugin-icon-manager'

export default defineConfig({
  name: 'default',
  title: 'Sanity',

  projectId: 'y7jq2054',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), iconPicker(), IconManager({}),],

  schema: {
    types: schemaTypes,
  },
})
