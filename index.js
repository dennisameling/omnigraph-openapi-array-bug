import { printSchema } from 'graphql'
import { loadGraphQLSchemaFromOpenAPI } from '@omnigraph/openapi'
import { writeFileSync } from 'fs'

const schema = await loadGraphQLSchemaFromOpenAPI('petstore', {
    source: './openapi-spec.yaml',
})

writeFileSync('./graphql-schema.graphql', printSchema(schema))