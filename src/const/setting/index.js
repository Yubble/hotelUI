const dicData = [{
  label: '开启',
  value: 'true'
}, {
  label: '关闭',
  value: 'false'
}]
export const list = [{
  key: 'showTag',
  commit: 'SET_SHOWTAG'
}, {
  key: 'showTheme',
  commit: 'SET_SHOWTHEME'
}, {
  key: 'showColor',
  commit: 'SET_SHOWCOLOR'
}, {
  key: 'showLock',
  commit: 'SET_SHOWLOCK'
}, {
  key: 'showDebug',
  commit: 'SET_SHOWDEBUG'
}, {
  key: 'showFullScren',
  commit: 'SET_SHOWFULLSCREN'
}, {
  key: 'showCollapse',
  commit: 'SET_SHOWCOLLAPSE'
}, {
  key: 'showSearch',
  commit: 'SET_SHOWSEARCH'
}, {
  key: 'showMenu',
  commit: 'SET_SHOWMENU'
}]
export const option = (safe) => {
  const _safe = safe
  return {
    submitBtn: false,
    emptyBtn:false,
    column: [{
      label: 'tag',
      prop: 'showTag',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'log',
      prop: 'showDebug',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'theme',
      prop: 'showTheme',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'theme color',
      prop: 'showColor',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'full screen',
      prop: 'showFullScren',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'lock screen',
      prop: 'showLock',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'search',
      prop: 'showSearch',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'zoom',
      prop: 'showCollapse',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }, {
      label: 'top menu',
      prop: 'showMenu',
      type: 'switch',
      span: 24,
      dicData: dicData,
      click: ({ column }) => {
        _safe.set(column.prop)
      }
    }]
  }
}
