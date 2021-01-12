import fs from 'fs'
import path from 'path'

type PostList = string[]

export function getPostList(): PostList {
  try {
    const postsDir = path.join(process.cwd(), 'pages', 'post')

    return fs
      .readdirSync(postsDir)
      .map(filename => (
        filename.substring(0, filename.indexOf('.'))
      ))
  } catch (error) {
    console.warn('There are no posts!')

    return []
  }
}
