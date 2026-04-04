import { skillCategories } from '../data'
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiMui, SiAntdesign, SiShadcnui,
  SiRedux, SiReactquery, SiCypress, SiTestinglibrary,
  SiGit, SiGithub, SiPostman, SiMysql,
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { TbApi, TbBinaryTree } from 'react-icons/tb'
import { MdScience, MdCode, MdAccountTree } from 'react-icons/md'
import type { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiMui, SiAntdesign, SiShadcnui,
  SiRedux, SiReactquery, SiCypress, SiTestinglibrary,
  SiGit, SiGithub, SiPostman, SiMysql,
  FaReact, SiReact: FaReact,
  VscAzure, SiMicrosoftazure: VscAzure,
  TbApi, TbBinaryTree, MdScience, MdCode, MdAccountTree,
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Skills</h2>
      <h3 className="mb-10 text-3xl font-bold text-fg-heading">Technologies I work with</h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map(cat => (
          <div key={cat.label} className="rounded-xl border border-border p-5">
            <h4 className="mb-3 text-sm font-semibold text-accent uppercase tracking-wide">{cat.label}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(s => {
                const Icon = iconMap[s.icon]
                return (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-accent-light px-3 py-1.5 text-sm font-medium text-fg-heading transition-colors hover:border-accent"
                  >
                    {Icon && <Icon className="text-base" />}
                    {s.name}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
