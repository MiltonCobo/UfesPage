window.MathJax = {
  jax: ['input/TeX', 'output/CommonHTML'],
  extensions: ['tex2jax.js', 'Safe.js'],
  styles: {
    '.mjx-chtml': { padding: '0.1em 0.1em', color: 'var(--myGreen)' }
  },
  displayAlign: 'center',

  TeX: {
    equationNumbers: { autoNumber: 'AMS' },
    extensions: ['AMSmath.js', 'AMSsymbols.js', 'AMScd.js', 'autobold.js'],
    Macros: {
      e: '{\\textrm{e}}',
      R: '{\\mathbb{R}}',
      Z: '{\\mathbb Z}',
      KK: '{\\mathbb{K}}'
    }
  },
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
  CommonHTML: {
    scale: 100,
    linebreaks: { automatic: true }
  },

  'HTML-CSS': { linebreaks: { automatic: true } },
  SVG: { linebreaks: { automatic: true } },

  showProcessingMessages: false,
  menuSettings: { zoom: 'Double-Click', mpContext: true, mpMouse: true }
}
;(function() {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.id = 'MathJax-script'
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js'
  //'https://cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js
  //?config=TeX-AMS-MML_SVG'

  script.async = true
  document.head.appendChild(script)
})()
