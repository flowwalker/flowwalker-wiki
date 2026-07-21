import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // Split "flowwalker的悟道Wiki" into main title + subtitle
  // main links to blog homepage, subtitle links to wiki root
  const deIndex = title.indexOf("的")
  if (deIndex > 0 && deIndex < title.length - 1) {
    const mainTitle = title.slice(0, deIndex)
    const subTitle = title.slice(deIndex + 1)
    return (
      <h2 class={classNames(displayClass, "page-title", "page-title-split")}>
        <a href="https://flowwalker.top" class="page-title-main">
          {mainTitle}
        </a>
        <a href={baseDir} class="page-title-sub">
          {subTitle}
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
  line-height: 1.3;
}

.page-title-main {
  color: var(--dark);
  font-weight: 700;
  display: block;
}

.page-title-sub {
  color: var(--secondary);
  font-weight: 500;
  font-size: 0.8em;
  display: block;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
