//link to author modelconst
authors = require('../models/author')

// handle request to get all authors
const getAllAuthors = (req, res) => {
  res.send(authors)
} // send list to browser}

module.exports = {
  getAllAuthors
}
