const componentGenerator = require('./componentGenerator')
const generator = () => {
  const isStateless = process.argv.includes('--stateless')
  const isGenerics = process.argv.includes('--generic')
  const componentName = process.argv[process.argv.indexOf('--name') + 1]
  return isGenerics ? componentGenerator.generateGenericComponent(componentName, isStateless)
    : componentGenerator.generateScreenComponent(componentName)
}

generator()
