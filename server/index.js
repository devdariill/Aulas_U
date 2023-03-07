import express from 'express'
import app from './app.js'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { BK_PORT } from './config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
app.use(express.static(join(__dirname, '../client/dist')))

app.listen(BK_PORT)
console.log('Server on port', BK_PORT)
