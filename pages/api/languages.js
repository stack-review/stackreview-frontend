/**
 * Using hard coded language array for now
 */
import languages from '@/config/languages'

export default (req, res) => {
  res.status(200).json(languages)
}
