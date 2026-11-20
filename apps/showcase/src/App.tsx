import { useEffect, useMemo, useRef, useState } from 'react'
import {
  CATEGORIES,
  ICON_MANIFEST,
  LayoutDashboardIcon,
  MenuIcon,
  MoonIcon,
  AnimatedNeonIcon,
  SearchIcon,
  SparkleIcon,
  SunIcon,
  XIcon,
} from '@neon-icons/react'
import type { IconMeta, IconVariant, NeonIconName, StrokeWeight } from '@neon-icons/react'
import { ContextPreview } from './ContextPreview'
import { Inspector } from './Inspector'

type DisplayMode = 'outline' | 'filled' | 'compare'

const STROKES: readonly StrokeWeight[] = [1.25, 1.5, 2]
const PREVIEW_SIZES = [16, 20, 24, 32] as const

export function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')
  const [mode, setMode] = useState<DisplayMode>('outline')
  const [stroke, setStroke] = useState<StrokeWeight>(1.5)
  const [previewSize, setPreviewSize] = useState<(typeof PREVIEW_SIZES)[number]>(24)
  const [showContext, setShowContext] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState<IconMeta | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  const searchRef = useRef<HTMLInputElement | null>(null)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('neon-icons-theme', theme)
  }, [theme])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchRef.current && !selectedIcon) {
        e.preventDefault()
        searchRef.current?.focus()
      } else if (e.key === 'Escape' && mobileNavOpen) {
        setMobileNavOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedIcon, mobileNavOpen])

  const filteredIcons = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ICON_MANIFEST.filter((icon) => {
      if (category !== 'all' && icon.category !== category) return false
      if (!q) return true
      return (
        icon.name.includes(q) ||
        icon.category.includes(q) ||
        icon.tags.some((t) => t.toLowerCase().includes(q))
      )
    })
  }, [query, category])

  const activeCategoryLabel =
    category === 'all' ? 'All Icons' : (CATEGORIES.find((c) => c.id === category)?.label ?? 'All Icons')

  const activeVariant: IconVariant = mode === 'filled' ? 'filled' : 'outline'

  function closeInspector(): void {
    setSelectedIcon(null)
    requestAnimationFrame(() => lastTriggerRef.current?.focus())
  }

  function renderCategoryList(onPick?: () => void) {
    return (
      <div className="cat-list" role="navigation" aria-label="Icon categories">
        <button
          type="button"
          className="cat-btn"
          aria-current={category === 'all' ? 'true' : undefined}
          onClick={() => {
            setCategory('all')
            onPick?.()
          }}
        >
          <span className="cat-name">All Icons</span>
          <span className="cat-count">{ICON_MANIFEST.length}</span>
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className="cat-btn"
            aria-current={category === cat.id ? 'true' : undefined}
            onClick={() => {
              setCategory(cat.id)
              onPick?.()
            }}
          >
            <span className="cat-name">{cat.label}</span>
            <span className="cat-count">{cat.count}</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <button
            type="button"
            className="tool-btn tool-icon-btn mobile-menu-btn"
            aria-label="Open categories"
            onClick={() => setMobileNavOpen(true)}
          >
            <MenuIcon size={16} stroke={1.5} />
          </button>

          <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); setCategory('all'); setQuery('') }}>
            <span className="brand-mark">
              <SparkleIcon variant="filled" stroke={1.5} size={18} />
            </span>
            <span>Neon Icons</span>
            <span className="brand-count">{ICON_MANIFEST.length}</span>
          </a>

          <button
            type="button"
            className="tool-btn tool-icon-btn theme-btn-mobile"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? <SunIcon size={16} stroke={1.5} /> : <MoonIcon size={16} stroke={1.5} />}
          </button>

          <div className="search-box">
            <SearchIcon className="search-icon" size={15} stroke={1.5} />
            <input
              ref={searchRef}
              type="text"
              className="search-input"
              placeholder="Search icons or concepts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search icons"
            />
            {query ? (
              <button
                type="button"
                className="search-clear"
                onClick={() => {
                  setQuery('')
                  searchRef.current?.focus()
                }}
                aria-label="Clear search"
              >
                <XIcon size={13} stroke={1.5} />
              </button>
            ) : (
              <span className="search-kbd" aria-hidden="true">/</span>
            )}
          </div>

          <div className="toolbar-controls">
            <div className="segmented" role="group" aria-label="Icon style">
              {(['outline', 'filled', 'compare'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  className="seg-btn"
                  aria-pressed={mode === m}
                  onClick={() => setMode(m)}
                >
                  {m === 'outline' ? 'Outline' : m === 'filled' ? 'Filled' : 'Pair'}
                </button>
              ))}
            </div>

            <div className="segmented" role="group" aria-label="Stroke weight">
              {STROKES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="seg-btn"
                  aria-pressed={stroke === s}
                  onClick={() => setStroke(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="segmented" role="group" aria-label="Preview size">
              {PREVIEW_SIZES.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  className="seg-btn"
                  aria-pressed={previewSize === sz}
                  onClick={() => setPreviewSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="tool-btn"
              aria-pressed={showContext}
              onClick={() => setShowContext((v) => !v)}
            >
              <LayoutDashboardIcon size={15} stroke={1.5} />
              <span>UI Preview</span>
            </button>

            <button
              type="button"
              className="tool-btn tool-icon-btn theme-btn-desktop"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? <SunIcon size={16} stroke={1.5} /> : <MoonIcon size={16} stroke={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <div className="workspace" id="top">
        <aside className="sidebar">{renderCategoryList()}</aside>

        <main className="main-content">
          {showContext ? <ContextPreview variant={activeVariant} stroke={stroke} /> : null}

          <div className="section-bar">
            <h1 className="section-title">{activeCategoryLabel}</h1>
            <span className="section-meta">
              {filteredIcons.length} {filteredIcons.length === 1 ? 'icon' : 'icons'} · {stroke}px stroke
            </span>
          </div>

          {filteredIcons.length === 0 ? (
            <div className="empty-state">
              <SearchIcon size={24} stroke={1.5} />
              <p>No icons match &ldquo;{query}&rdquo;.</p>
              <button
                type="button"
                className="tool-btn"
                onClick={() => {
                  setQuery('')
                  setCategory('all')
                }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className={`icon-grid${mode === 'compare' ? ' icon-grid--pair' : ''}`} role="list">
              {filteredIcons.map((icon) => {
                const name = icon.name as NeonIconName
                const isSelected = selectedIcon?.name === icon.name
                return (
                  <button
                    key={icon.name}
                    type="button"
                    role="listitem"
                    className="icon-tile"
                    data-neon-trigger=""
                    aria-selected={isSelected}
                    title={icon.name}
                    onClick={(e) => {
                      lastTriggerRef.current = e.currentTarget
                      setSelectedIcon(icon)
                    }}
                  >
                    <span className="icon-glyph-stage">
                      {mode === 'compare' ? (
                        <>
                          <AnimatedNeonIcon name={name} variant="outline" stroke={stroke} size={previewSize} />
                          <AnimatedNeonIcon name={name} variant="filled" stroke={stroke} size={previewSize} />
                        </>
                      ) : (
                        <AnimatedNeonIcon name={name} variant={activeVariant} stroke={stroke} size={previewSize} />
                      )}
                    </span>
                    <span className="icon-name">{icon.name}</span>
                  </button>
                )
              })}
            </div>
          )}
        </main>
      </div>

      {mobileNavOpen ? (
        <>
          <div className="backdrop" onClick={() => setMobileNavOpen(false)} aria-hidden="true" />
          <div className="mobile-drawer" role="dialog" aria-label="Icon categories">
            <div className="mobile-drawer-head">
              <span className="section-title">Categories</span>
              <button
                type="button"
                className="tool-btn tool-icon-btn"
                aria-label="Close categories"
                onClick={() => setMobileNavOpen(false)}
              >
                <XIcon size={16} stroke={1.5} />
              </button>
            </div>
            {renderCategoryList(() => setMobileNavOpen(false))}
          </div>
        </>
      ) : null}

      {selectedIcon ? (
        <Inspector
          icon={selectedIcon}
          variant={activeVariant}
          stroke={stroke}
          onSelectVariant={(v, s) => {
            setMode(v)
            setStroke(s)
          }}
          onClose={closeInspector}
        />
      ) : null}
    </div>
  )
}
