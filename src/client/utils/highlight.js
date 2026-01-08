import { app } from '../view'

const PRISM_CDN = 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0'
let Prism
let cssEl

const renderCode = async (el, theme, plugins) => {
  const prismCdn = (app && app.$twikoo.prismCdn) ? app.$twikoo.prismCdn : PRISM_CDN
  window.Prism = window.Prism || {}
  window.Prism.manual = true
  if (!Prism) {
    const prismModule = await import('prismjs')
    Prism = prismModule.default || prismModule
    await import('prismjs/plugins/autoloader/prism-autoloader')
    Prism.plugins.autoloader.languages_path = `${prismCdn}/components/`
    if (plugins) {
      await import('prismjs/plugins/toolbar/prism-toolbar')
      const pluginList = plugins.split(',').map(item => { return item.trim() })
      for (const p of pluginList) {
        if (p === 'showLanguage') {
          await import('prismjs/plugins/show-language/prism-show-language')
        } else if (p === 'copyButton') {
          await import('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard')
        }
      }
    }
  }
  loadCss(theme, prismCdn)
  Prism.highlightAllUnder(el)
}

const loadCss = (theme, prismCdn) => {
  const twikooEl = document.getElementById('twikoo')
  if ((cssEl && twikooEl.contains(cssEl)) || !theme || theme === 'none') return
  cssEl = document.createElement('link')
  if (theme === 'default') {
    cssEl.href = `${prismCdn}/themes/prism.min.css`
  } else {
    cssEl.href = `${prismCdn}/themes/prism-${theme}.min.css`
  }
  cssEl.rel = 'stylesheet'
  cssEl.type = 'text/css'
  twikooEl.appendChild(cssEl)
}

export default renderCode
