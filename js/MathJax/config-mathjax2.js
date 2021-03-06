MathJax.Hub.Config({
  extensions: ['tex2jax.js'],
  jax: ['input/TeX', 'output/HTML-CSS'],
  tex2jax: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    processEscapes: true
  },
  'HTML-CSS': { fonts: ['TeX'] }
})
// ;(function() {
//   let script = document.createElement('script')
//   //script.src = 'cdn.jsdelivr.net/npm/mathjax@2/MathJax.js'
//   script.src =
//     'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS-MML_SVG'
//   script.async = true
//   script.defer = true
//   document.head.appendChild(script)
// })()

// window.MathJax = {
//   tex: {
//     inlineMath: [
//       ['$', '$'],
//       ['\\(', '\\)']
//     ],
//     macros: {
//       RR: '{\\bf R}',
//       e: '{\\textrm e}',
//       R: '{\\mathbb R}',
//       Q: '{\\mathbb Q}'
//     },
//     processEscapes: true
//   }
// }
// // console.log('passou em config')
// MathJax.Hub.Config({
//   showProcessingMessages: false,
//   TeX: {
//     equationNumbers: { autoNumber: 'AMS' },
//     Macros: {
//       e: '{\\textrm{e}}',
//       R: '{\\mathbb R}',
//       Q: '{\\mathbb Q}'
//     },
//     extensions: ['autobold.js', 'AMSmath.js', 'AMSsymbols.js']
//   },
//   extensions: ['tex2jax.js'],
//   jax: ['input/TeX', 'output/HTML-CSS'],
//   //TeX: { equationNumbers: { autoNumber: "AMS" } }
//   tex2jax: {
//     inlineMath: [
//       ['$', '$']
//       // ['\\(', '\\)']
//     ],
//     displayMath: [
//       ['$$', '$$'],
//       ['[', ']']
//     ]
//     // processEscapes: false // necessario para $ nao seja confundido
//   },
//   'HTML-CSS': {
//     fonts: ['TeX'],
//     styles: {
//       '.MathJax a': { color: 'green' }
//     }
//   },
//   menuSettings: { zoom: 'Double-Click', mpContext: true, mpMouse: true }
// })
// console.log('passou em config')
//MathJax.Hub.Configured()
