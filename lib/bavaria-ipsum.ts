import words from './words.json'

/**
 * The definition of BavariaIpsum class.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const BavariaIpsum = function (opts: any) {
  opts = opts || {}

  /**
   * Array of "all" available bavarian words.
   */
  const source = words

  /**
   * Use start sentence
   */
  const useStartingSentence = opts.useStartingSentence || true

  /**
   * The default starting sentence.
   */
  const startSentence = opts.startSentence || 'Bavaria ipsum dolor sit amet'

  /**
   * Min limit of words in one sentence.
   */
  const minSentenceWords = opts.minSentenceWords || 2

  /**
   * Max limit of words in one sentence.
   */
  const maxSentenceWords = opts.maxSentenceWords || 20

  /**
   * The chance to show comma after next word.
   */
  const showCommaChance = opts.showCommaChance || 0.1

  /**
   * Min limit of sentences in the paragraph.
   */
  const minParagraphSentences = opts.minParagraphSentences || 2

  /**
   * Max limit of sentences in the paragraph.
   */
  const maxParagraphSentences = opts.maxParagraphSentences || 20

  const generateWord = () => {
    return source[_getRandomInt(0, source.length - 1)]
  }

  /**
   * Generate random Bavarian sentence.
   */
  const generateSentence = (length = 0) => {
    let sentence = ''
    let i

    length = length || _getRandomInt(minSentenceWords, maxSentenceWords)

    for (i = 0; i < length; ++i) {
      sentence += generateWord()
      sentence += _shouldShowComma() ? ', ' : ' '
    }

    sentence = sentence.replace(/,?\s*$/, '')
    sentence += new RegExp('[?!.]$').test(sentence) ? '' : '.'

    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }

  /**
   * Generate paragraph
   */
  const generateParagraph = (length) => {
    const sentences = []
    // eslint-disable-next-line prefer-rest-params
    length =
      length || _getRandomInt(minParagraphSentences, maxParagraphSentences)
    let i

    if (useStartingSentence === true) {
      sentences.push(startSentence)
      sentences[sentences.length - 1] += ' '
      sentences[sentences.length - 1] += generateSentence()
      --length
    }

    for (i = 0; i < length; ++i) {
      sentences.push(generateSentence())
    }

    return sentences
  }

  /**
   * Return `true` if comma should be shown after next word.
   */
  const _shouldShowComma = () => {
    return Math.random() < showCommaChance ? true : false
  }

  /**
   * Return random int between min and max.
   */
  const _getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return {
    generateParagraph,
    generateSentence,
  }
}

export default BavariaIpsum
