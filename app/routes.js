const express = require('express')
const router = express.Router()


// Run this code when a form is submitted to 'colleaguename-answer'
router.post('/colleaguename-answer', function (req, res) {

    // Make a variable and give it the value from 'colleaguename'
    var colleaguename = req.session.data['colleaguename']
  
    // Check whether the variable matches a condition
    if (colleaguename == "Stefania Quattropani"){
      // Send user to next page
      res.redirect('/preferences')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  })

  
  router.post('/new-css/colleaguename-answer', function (req, res) {

    // Make a variable and give it the value from 'colleaguename'
    var colleaguename = req.session.data['colleaguename']
  
    // Check whether the variable matches a condition
    if (colleaguename == "Stefania Quattropani"){
      // Send user to next page
      res.redirect('/new-css/preferences')
    } else {
      // Send user to ineligible page
      res.redirect('/new-css/ineligible')
    }
  })



  


// Add your routes here - above the module.exports line

module.exports = router
