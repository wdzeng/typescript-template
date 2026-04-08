import helloworld from '#/helloworld'
import packageJson from '##/package.json' with { type: 'json' }

console.log('typescript template: v%s', packageJson.version)
helloworld()
