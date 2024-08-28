import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdown} from './components/CustomMarkdown'
import {singletonActions, singletonTypes} from './structure'
import {structure} from './structure'
import {schemaTypes} from './schema'

export default defineConfig({
  name: 'default',
  title: 'Mind&Soul Healer',
  projectId: 'dmafyhbk',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    media(),
    visionTool(),
    markdownSchema({input: CustomMarkdown}),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
