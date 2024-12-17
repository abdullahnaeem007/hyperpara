const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const OPENAI = require("openai")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const openai = new OPENAI(process.env.OPENAI_API_KEY)

app.use(cors())
app.use(express.json())

app.post('/chat', async(request, response) => {
    try{
        const input = request.body.messages
        console.log(request)
        if (!Array.isArray(input) || input.some(inp => !inp.role || !inp.content)) {
            return response.status(400).json({error: "Invalid Response Format."})
        }

        const completion = await openai.chat.completions.create({
            messages: input,
            model: "gpt-4o-mini",
        });

        response.status(200).json(completion.choices[0].message)
    }
    catch(error){
        response.status(500).json({error: error.message || "Invalid Server Error"})
    }
})

app.listen(PORT, () => {
    console.log('Server running on PORT', PORT)
})