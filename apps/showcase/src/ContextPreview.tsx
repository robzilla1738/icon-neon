import { useState } from 'react'
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BellIcon,
  BoldIcon,
  BookmarkIcon,
  CalendarIcon,
  CheckCircleIcon,
  CodeIcon,
  FolderIcon,
  GitPullRequestIcon,
  HomeIcon,
  InboxIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  LockIcon,
  MailIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalIcon,
  UnderlineIcon,
  UsersIcon,
} from '@neon-icons/react'
import type { IconVariant, StrokeWeight } from '@neon-icons/react'

interface ContextPreviewProps {
  variant: IconVariant
  stroke: StrokeWeight
}

const NAV_ITEMS = [
  { id: 'home', label: 'Overview', Icon: HomeIcon },
  { id: 'inbox', label: 'Inbox', Icon: InboxIcon },
  { id: 'files', label: 'Files', Icon: FolderIcon },
  { id: 'team', label: 'Members', Icon: UsersIcon },
  { id: 'settings', label: 'Settings', Icon: SettingsIcon },
] as const

export function ContextPreview({ variant, stroke }: ContextPreviewProps) {
  const [activeNav, setActiveNav] = useState<(typeof NAV_ITEMS)[number]['id']>('home')

  return (
    <section className="context-panel" aria-label="In-context family cohesion preview">
      <nav className="ctx-nav" aria-label="Sample application sidebar">
        {NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = activeNav === id
          const itemVariant: IconVariant = isActive ? 'filled' : 'outline'
          return (
            <button
              key={id}
              type="button"
              className={`ctx-nav-item${isActive ? ' ctx-nav-item--active' : ''}`}
              onClick={() => setActiveNav(id)}
            >
              <Icon variant={itemVariant} stroke={stroke} size={17} />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>

      <div className="ctx-right">
        <div className="ctx-toolbar" aria-label="Sample editor toolbar">
          <span className="ctx-icon-chip" title="Bold"><BoldIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="Italic"><ItalicIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="Underline"><UnderlineIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="Code"><CodeIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-sep" />
          <span className="ctx-icon-chip" title="Align left"><AlignLeftIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="Align center"><AlignCenterIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="Align right"><AlignRightIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="List"><ListIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-sep" />
          <span className="ctx-icon-chip" title="Link"><LinkIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="Bookmark"><BookmarkIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="AI"><SparklesIcon variant={variant} stroke={stroke} size={16} /></span>
          <span className="ctx-icon-chip" title="Terminal"><TerminalIcon variant={variant} stroke={stroke} size={16} /></span>
        </div>

        <div className="ctx-cards">
          <div className="ctx-card">
            <ShieldCheckIcon variant={variant} stroke={stroke} size={20} />
            <div className="ctx-card-text">
              <span className="ctx-card-title">SSO Enforced</span>
              <span className="ctx-card-sub">Zero-trust policy active</span>
            </div>
          </div>
          <div className="ctx-card">
            <GitPullRequestIcon variant={variant} stroke={stroke} size={20} />
            <div className="ctx-card-text">
              <span className="ctx-card-title">14 Open Reviews</span>
              <span className="ctx-card-sub">Checks passing</span>
            </div>
          </div>
          <div className="ctx-card">
            <MailIcon variant={variant} stroke={stroke} size={20} />
            <div className="ctx-card-text">
              <span className="ctx-card-title">Digest Scheduled</span>
              <span className="ctx-card-sub">Daily at 08:00 CT</span>
            </div>
          </div>
          <div className="ctx-card">
            <CheckCircleIcon variant={variant} stroke={stroke} size={20} />
            <div className="ctx-card-text">
              <span className="ctx-card-title">Deploy Healthy</span>
              <span className="ctx-card-sub">
                <BellIcon variant={variant} stroke={stroke} size={12} style={{ verticalAlign: -1, marginRight: 3 }} />
                <LockIcon variant={variant} stroke={stroke} size={12} style={{ verticalAlign: -1, marginRight: 3 }} />
                <CalendarIcon variant={variant} stroke={stroke} size={12} style={{ verticalAlign: -1 }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
