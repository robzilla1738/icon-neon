import { useEffect, useRef, useState } from 'react'
import { AnimatedNeonIcon, CheckIcon, CodeIcon, CopyIcon, DownloadIcon, NeonIcon, RotateCwIcon, XIcon } from '@neon-icons/react'
import type { IconMeta, IconVariant, NeonIconName, StrokeWeight } from '@neon-icons/react'

interface InspectorProps {
  icon: IconMeta
  variant: IconVariant
  stroke: StrokeWeight
  onSelectVariant: (variant: IconVariant, stroke: StrokeWeight) => void
  onClose: () => void
}

const STROKES: readonly StrokeWeight[] = [1.25, 1.5, 2]
const VARIANTS: readonly IconVariant[] = ['outline', 'filled']
const LADDER_SIZES = [16, 20, 24, 32, 48] as const

export function Inspector({ icon, variant, stroke, onSelectVariant, onClose }: InspectorProps) {
  const [showGrid, setShowGrid] = useState(true)
  const [replay, setReplay] = useState(0)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const previewSvgRef = useRef<SVGSVGElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    closeBtnRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  function getCleanSvgMarkup(): string {
    const el = previewSvgRef.current
    if (!el) return ''
    const clone = el.cloneNode(true) as SVGSVGElement
    clone.setAttribute('width', '24')
    clone.setAttribute('height', '24')
    clone.removeAttribute('aria-hidden')
    const artwork = clone.querySelector('[data-neon-artwork]')
    if (artwork) {
      const nodes = [...artwork.children]
      clone.querySelectorAll('[data-neon-defs], [data-neon-base], [data-neon-parts]').forEach(node => node.remove())
      clone.append(...nodes)
    }
    clone.removeAttribute('data-neon-motion')
    clone.removeAttribute('data-neon-play')
    return clone.outerHTML
  }

  function getJsxSnippet(): string {
    const props: string[] = []
    if (variant !== 'outline') props.push(`variant="${variant}"`)
    if (stroke !== 1.5) props.push(`stroke={${stroke}}`)
    return `<${icon.pascalName}${props.length ? ` ${props.join(' ')}` : ''} />`
  }

  function getImportSnippet(): string {
    return `import { ${icon.pascalName} } from '@neon-icons/react'`
  }

  async function copyText(key: string, value: string): Promise<void> {
    await navigator.clipboard.writeText(value)
    setCopiedKey(key)
    window.setTimeout(() => setCopiedKey((curr) => (curr === key ? null : curr)), 1600)
  }

  function downloadSvg(): void {
    const svg = getCleanSvgMarkup()
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${icon.name}-${variant}-${stroke}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  const iconName = icon.name as NeonIconName

  return (
    <>
      <div className="backdrop" onClick={onClose} aria-hidden="true" />
      <aside className="inspector" role="dialog" aria-label={`Inspect ${icon.name}`}>
        <div className="inspector-header">
          <div className="inspector-title-group">
            <h2 className="inspector-title">{icon.name}</h2>
            <span className="inspector-sub">
              {icon.pascalName} · {icon.category}
            </span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="tool-btn tool-icon-btn"
            onClick={onClose}
            aria-label="Close inspector"
          >
            <XIcon size={16} stroke={1.5} />
          </button>
        </div>

        <div className="inspector-body">
          <div className="stage-card">
            <div className="stage-controls">
              <button type="button" className="stage-control stage-replay" onClick={() => setReplay((count) => count + 1)}>
                <RotateCwIcon size={13} />
                Replay motion
              </button>
              <button
                type="button"
                className="stage-control"
                aria-pressed={showGrid}
                onClick={() => setShowGrid((show) => !show)}
              >
                24px Grid
              </button>
            </div>
            <div className="stage-canvas">
              {showGrid ? (
                <svg className="stage-grid-overlay" viewBox="0 0 24 24" width="144" height="144" fill="none">
                  {Array.from({ length: 23 }, (_, i) => i + 1).map((pos) => (
                    <g key={pos} stroke="var(--grid-line)" strokeWidth="0.08">
                      <line x1={pos} y1="0" x2={pos} y2="24" />
                      <line x1="0" y1={pos} x2="24" y2={pos} />
                    </g>
                  ))}
                  <rect x="2" y="2" width="20" height="20" stroke="var(--grid-keyline)" strokeWidth="0.16" strokeDasharray="0.5 0.5" />
                  <circle cx="12" cy="12" r="9" stroke="var(--grid-keyline)" strokeWidth="0.14" />
                  <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="var(--grid-keyline)" strokeWidth="0.14" />
                </svg>
              ) : null}
              <AnimatedNeonIcon
                key={replay}
                playOnMount={replay > 0}
                ref={previewSvgRef}
                name={iconName}
                variant={variant}
                stroke={stroke}
                size={144}
              />
            </div>
          </div>

          <div>
            <p className="inspector-label">ALL 6 VARIANTS</p>
            <div className="variant-matrix">
              {VARIANTS.map((v) =>
                STROKES.map((s) => {
                  const active = v === variant && s === stroke
                  return (
                    <button
                      key={`${v}-${s}`}
                      type="button"
                      className="matrix-cell"
                      data-neon-trigger=""
                      aria-pressed={active}
                      onClick={() => onSelectVariant(v, s)}
                    >
                      <AnimatedNeonIcon name={iconName} variant={v} stroke={s} size={24} />
                      <span className="matrix-meta">
                        {v === 'outline' ? 'Out' : 'Fill'} {s}
                      </span>
                    </button>
                  )
                }),
              )}
            </div>
          </div>

          <div>
            <p className="inspector-label">OPTICAL SCALE</p>
            <div className="size-ladder">
              {LADDER_SIZES.map((sz) => (
                <div key={sz} className="size-step">
                  <NeonIcon name={iconName} variant={variant} stroke={stroke} size={sz} />
                  <span>{sz}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="inspector-label">EXPORT</p>
            <div className="action-grid">
              <button
                type="button"
                className="action-btn action-btn--primary"
                onClick={() => copyText('svg', getCleanSvgMarkup())}
              >
                {copiedKey === 'svg' ? <CheckIcon size={15} stroke={1.5} /> : <CopyIcon size={15} stroke={1.5} />}
                <span>{copiedKey === 'svg' ? 'Copied SVG' : 'Copy SVG'}</span>
              </button>
              <button
                type="button"
                className="action-btn"
                onClick={() => copyText('jsx', getJsxSnippet())}
              >
                {copiedKey === 'jsx' ? <CheckIcon size={15} stroke={1.5} /> : <CodeIcon size={15} stroke={1.5} />}
                <span>{copiedKey === 'jsx' ? 'Copied JSX' : 'Copy JSX'}</span>
              </button>
              <button
                type="button"
                className="action-btn"
                onClick={() => copyText('import', getImportSnippet())}
              >
                {copiedKey === 'import' ? <CheckIcon size={15} stroke={1.5} /> : <CopyIcon size={15} stroke={1.5} />}
                <span>{copiedKey === 'import' ? 'Copied Import' : 'Copy Import'}</span>
              </button>
              <button type="button" className="action-btn" onClick={downloadSvg}>
                <DownloadIcon size={15} stroke={1.5} />
                <span>Download SVG</span>
              </button>
            </div>
          </div>

          <div>
            <p className="inspector-label">REACT USAGE</p>
            <pre className="code-snippet">{`${getImportSnippet()}\n\n${getJsxSnippet()}`}</pre>
          </div>

          <div>
            <p className="inspector-label">TAGS</p>
            <div className="tag-row">
              {icon.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
