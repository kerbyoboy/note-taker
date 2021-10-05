const router = require('express').Router()
const fs = require('fs')
// const {createNote, findByID} = require('../lib/notes')
const {notes} = require('../../db/db')
console.log({notes})

router.get('/notes', (req, res)=> {
    res.json(notes)
})

router.post('/notes', (req, res)=> {
   if(!req.body.id) {
       if(notes.length < 1 ){
           req.body.id = '0';
       }else
    req.body.id = notes.length.toString();
    notes.push(req.body)
   console.log(notes);
    res.json(notes)
   }

    
})

module.exports = router;