const path = require('path')
const fs = require('fs')
const readLocalFile = path => fs.readFileSync(__dirname + path, 'utf8')

const STATEFULL_COMPONENT_TEMPLATE = readLocalFile('/templates/statefullComponent.template')
const STATELESS_COMPONENT_TEMPLATE = readLocalFile('/templates/statelessComponent.template')
const STYLE_TEMPLATE = readLocalFile('/templates/style.template')

const SRC_FOLDER_PATH = path.join(process.cwd(), 'src')

const generateGenericComponent = (componentName, isStateless) => {
  const genericsComponentPath = path.join(SRC_FOLDER_PATH, 'components', 'generics')
  const generatorFunction = isStateless ? _generateStatelessFile : _generateStatefullFile
  _generateComponent(genericsComponentPath, componentName, generatorFunction)
}

const generateScreenComponent = (componentName) => {
  const screensComponentPath = path.join(SRC_FOLDER_PATH, 'components', 'scenes')
  _generateComponent(screensComponentPath, componentName, _generateStatefullFile)
}

const _generateComponent = (componentPath, componentName, generatorFunction) => {
  const componentFolderPath = componentPath + '/' + componentName
  fs.mkdirSync(componentFolderPath)
  generatorFunction(componentFolderPath, componentName)
  _generateStyleFile(componentFolderPath, componentName)
  _addComponentToIndexFolder(componentPath, componentName)
}

const _generateStyleFile = (basePath, componentName) => {
  const styleContent = _resolveStyleTemplate(componentName)
  fs.writeFileSync(basePath + '/' + componentName + '.scss', styleContent)
}

const _generateStatelessFile = (basePath, componentName) => {
  const componentContent = _resolveStatelessTemplate(componentName)
  fs.writeFileSync(basePath + '/' + componentName + '.jsx', componentContent)
}

const _generateStatefullFile = (basePath, componentName) => {
  const componentContent = _resolveStatefullTemplate(componentName)
  fs.writeFileSync(basePath + '/' + componentName + '.jsx', componentContent)
}

const _resolveTemplate = (templateContent, componentName) => templateContent.replace(/%__COMPONENT_NAME__%/g, componentName)
const _resolveStyleTemplate = (componentName) => _resolveTemplate(STYLE_TEMPLATE, componentName)
const _resolveStatelessTemplate = (componentName) => _resolveTemplate(STATELESS_COMPONENT_TEMPLATE, componentName)
const _resolveStatefullTemplate = (componentName) => _resolveTemplate(STATEFULL_COMPONENT_TEMPLATE, componentName)
const _addComponentToIndexFolder = (basePath, componentName) => {
  const lineToAdd = `export * from './${componentName}/${componentName}'`
  fs.appendFileSync(`${basePath}/index.js`, lineToAdd)
}

const componentGenerator = {
  generateGenericComponent,
  generateScreenComponent,
}

module.exports = componentGenerator

