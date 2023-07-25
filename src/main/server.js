import express from 'express'
import { join } from 'path'

const app = express()
const port = 5678

app.use('/', express.static(join(__dirname, '..', '..', 'resources', 'html')))

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'resources', 'html', 'index.html'))
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
