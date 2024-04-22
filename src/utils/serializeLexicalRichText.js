import escapeHTML from 'escape-html'
import React, { Fragment } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

export const IS_BOLD = 1
export const IS_ITALIC = 1 << 1
export const IS_STRIKETHROUGH = 1 << 2
export const IS_UNDERLINE = 1 << 3
export const IS_CODE = 1 << 4
export const IS_SUBSCRIPT = 1 << 5
export const IS_SUPERSCRIPT = 1 << 6
export const IS_HIGHLIGHT = 1 << 7

function generateTextAlign(node) {
  if (node.format === 'right') return 'text-right'
  if (node.format === 'center') return 'text-center'
  else return ''
}

export default function serializeLexicalRichText({ children, customClassNames, parentNode = {} }) {
  return children
    ?.map((node, i) => {
      const classNames = {
        h1: 'mt-6 text-5xl font-bold',
        h2: 'mt-5 text-4xl font-bold',
        h3: 'mt-4 text-3xl font-bold',
        h4: 'mt-3 text-2xl font-bold',
        h5: 'mt-2 text-xl font-bold',
        h6: 'mt-1 text-lg font-bold',
        p: 'text-base',
        ul: 'list-disc',
        ol: 'list-decimal',
        li: 'list-item',
        blockquote: 'font-bold text-lg text-gray-600',
        a: 'text-blue-500 underline',
      }

      if (node.type === 'text') {
        let text = node.text ? (
          <span className="">{node.text}</span>
        ) : (
          <span className="opacity-0">&nbsp;</span>
        )

        if (node.format & IS_BOLD) {
          text = <strong key={i}>{text}</strong>
        }

        if (node.format & IS_CODE) {
          text = <code key={i}>{text}</code>
        }

        if (node.format & IS_ITALIC) {
          text = <em key={i}>{text}</em>
        }

        if (node.format & IS_UNDERLINE) {
          text = (
            <span className="underline" key={i}>
              {text}
            </span>
          )
        }

        if (node.format & IS_STRIKETHROUGH) {
          text = (
            <span className="line-through" key={i}>
              {text}
            </span>
          )
        }

        return <Fragment key={i}>{text}</Fragment>
      }

      if (!node) {
        return null
      }

      if (node.type === 'heading') {
        return (
          <node.tag className={`${classNames[node.tag]} ${generateTextAlign(node)}`} key={i}>
            {serializeLexicalRichText({ children: node.children })}
          </node.tag>
        )
      }

      if (node.type === 'list') {
        if (node.listType === 'bullet') {
          return (
            <ul className={`${classNames.ul}`} key={i}>
              {serializeLexicalRichText({ children: node.children, parentNode: node })}
            </ul>
          )
        } else if (node.listType === 'check') {
          return (
            <ul className={`${classNames.ul} list-none`} key={i}>
              {serializeLexicalRichText({ children: node.children, parentNode: node })}
            </ul>
          )
        } else if (node.listType === 'number') {
          return (
            <ol className={`${classNames.ol}`} key={i}>
              {serializeLexicalRichText({ children: node.children, parentNode: node })}
            </ol>
          )
        }
      }

      if (node.type === 'listitem' && node.checked) {
        return (
          <li className={`${classNames.li} flex gap-1`} key={i}>
            <div>
              <MdCheckBox className="w-4 h-4 text-green-500" />
            </div>
            <div className="line-through">
              {serializeLexicalRichText({ children: node.children })}
            </div>
          </li>
        )
      } else if (node.type === 'listitem' && parentNode.listType === 'check') {
        return (
          <li className={`${classNames.li} flex gap-1`} key={i}>
            <div>
              <MdCheckBoxOutlineBlank className="w-4 h-4 text-green-500" />
            </div>
            <div className="">{serializeLexicalRichText({ children: node.children })}</div>
          </li>
        )
      } else if (node.type === 'listitem') {
        return (
          <li className={`${classNames.li}`} key={i}>
            {serializeLexicalRichText({ children: node.children })}
          </li>
        )
      }

      switch (node.type) {
        case 'quote':
          return (
            <blockquote className={`${classNames.blockquote}`} key={i}>
              {serializeLexicalRichText({ children: node.children })}
            </blockquote>
          )

        case 'link':
          return (
            <a
              className={`${classNames.a}`}
              href={escapeHTML(node.fields?.linkType === 'custom' ? node?.fields?.url : '')}
              target={node.fields?.newTab ? '_blank' : '_self'}
              key={i}
            >
              {serializeLexicalRichText({ children: node.children })}
            </a>
          )

        default:
          return (
            <p className={`${classNames.p} ${generateTextAlign(node)}`} key={i}>
              {serializeLexicalRichText({ children: node.children })}
            </p>
          )
      }
    })
    .filter((node) => node !== null)
}
