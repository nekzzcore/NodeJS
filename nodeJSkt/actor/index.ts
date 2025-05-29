import 'dotenv/config'
import express from 'express'
import { router } from './router/router'
import path from 'path'
import fileUpload from 'express-fileupload'

const PORT = process.env.PORT || 5000
const start = () => {
    try {
        const app = express()
        app.use(express.json())
        // app.use(fileUpload({}))
        // app.use(express.static(path.resolve(__dirname,'static')))
        app.use('/', router)
        app.listen(PORT, () => console.log('run with: ', PORT))
    } catch (e) {
        console.log(e.message)
    }
}

start()