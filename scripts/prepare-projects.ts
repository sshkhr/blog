// scripts/prepare-projects.ts
import fs from 'fs'
import path from 'path'

const rootDir = process.cwd()
import projectsData from '../data/projectsData'

// Write the projects array directly without nesting
const outputPath = path.join(rootDir, 'data', 'projects.json')
fs.writeFileSync(outputPath, JSON.stringify({ projects: projectsData }, null, 2))

console.log('Projects data written to:', outputPath)
