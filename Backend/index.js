const express = require('express');

const app = express();

app.use(express.json())

app.post('/users',(request,response)=>{

    const body = request.body;
    console.log(body)

    return response.json({
        event:'hello world',
        aluno:'Marcio da silva santos'
    
    
    })
})

app.listen(3333,()=>{
    console.log('backend running...')
});
   