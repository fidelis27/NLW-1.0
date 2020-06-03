import express from 'express';

const app = express();

app.get('/users',(req, res)=> {
    return res.json({ok: "ol"})

})

app.listen(3333);