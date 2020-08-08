/**
 * Using hard coded language array for now
 */

const languages = ['Javascript', 'HTML', 'CSS', 'Auth0', 'MongoDB']

export default (req, res) => {
  res.status(200).json(languages)
}
