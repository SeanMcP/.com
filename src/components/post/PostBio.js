import React from 'react'

import Icon from '../common/Icon'
import Thumbnail from '../common/Thumbnail'

const socialLinks = [
  {
    href: 'https://github.com/seanmcp',
    icon: 'GitHub',
    name: 'GitHub'
  },
  {
    href: 'https://twitter.com/_seanmcp',
    icon: 'Twitter',
    name: 'Twitter'
  },
  {
    href: 'https://linkedin.com/in/seanmcp',
    icon: 'Linkedin',
    name: 'LinkedIn'
  }
]

const PostBio = () => {
  const links = socialLinks.map(platform => {
    return (
      <li className="_social-item" key={platform.name}>
        <Icon className="_social-icon" icon={platform.icon} />
        <a className="_social-link" href={platform.href}>
          {platform.name}
        </a>
      </li>
    )
  })
  return (
    <section className="PostBio">
      <Thumbnail className={'_image'} />
      <main className="_content">
        <p>
          My name is <strong>Sean McPherson</strong>, and I am a software
          developer in Atlanta, GA. I write about web development, JavaScript,
          React, and occasionally some other things.
        </p>
        <ul className="_social-list">{links}</ul>
      </main>
    </section>
  )
}

export default PostBio
