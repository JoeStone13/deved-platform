import { resolve } from "path"
import fm from "front-matter"
import fs from "fs"

export default (path, options) => {
  const rawFile = fs.readFileSync(resolve(options.dir, path), options.charType)
  const processed = fm(rawFile)
  const [ type, locale, slug ] = path.split('.').shift().split('/')

  processed.attributes.locale = locale
  processed.attributes.type = type
  processed.attributes.slug = slug

  return processed
}