import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  const avatarPath = joinSegments(baseDir, "static/avatar.png")

  // Split "🚀flowwalker的悟道Wiki" into sub + main title
  // main = "悟道Wiki" (larger, links to wiki), sub = "flowwalker" (smaller, links to blog)
  const deIndex = title.indexOf("的")
  if (deIndex > 0 && deIndex < title.length - 1) {
    const blogName = title.slice(0, deIndex)
    const wikiName = title.slice(deIndex + 1)
    return (
      <h2 class={classNames(displayClass, "page-title", "page-title-split")}>
        <a href={baseDir} class="page-title-avatar-link">
          <img class="page-title-avatar" src={avatarPath} alt="" />
        </a>
        <a href={baseDir} class="page-title-main">
          {wikiName}
        </a>
        <a href="https://flowwalker.top" class="page-title-sub">
          {blogName}
        </a>
      </h2>
    )
  }

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title-split {
  line-height: 1.2;
  text-align: center;
}

.page-title-avatar-link {
  display: block;
  margin-bottom: 0.6rem;
  line-height: 0;
}

.page-title-avatar {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border: 2px solid var(--lightgray);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.page-title-avatar-link:hover .page-title-avatar {
  border-color: var(--tertiary);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.page-title-main {
  color: var(--dark);
  font-weight: 700;
  font-size: 1.15em;
  display: block;
}

.page-title-sub {
  color: var(--secondary);
  font-weight: 500;
  font-size: 0.72em;
  display: block;
  margin-top: 0.15em;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
