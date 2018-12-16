import React from 'react'
import { Link } from 'gatsby'

const A = ({ children, to }) => (
  <a href={to} target="_blank">
    {children}
  </a>
)

export const About = () => (
  <React.Fragment>
    <p>
      Born and raised in State College, Pennsylvania, I graduated from Edinboro
      University with a degree in Middle-level Education. After working for
      three years as a teacher in Pennsylvania and Georgia, I decided to switch
      careers.
    </p>
    <p>
      I enrolled in The Iron Yard, a coding bootcamp in Atlanta, Georgia. After
      a four-month whirlwind, I graduated with a certificate in Front-end
      Engineering with React. In God's providence, I was given a software
      developer position at TSYS Digital Innovation and haven't looked back
      since.
    </p>
    <p>
      When I'm not coding at work and at home, I enjoy spending time with my
      wife (married '14), son (born '18), and three-legged dog (adopted '17). We
      like to play board games and would love{' '}
      <A to="https://twitter.com/_seanmcp">to hear your recommendations</A>.
    </p>
    <p>
      I also like soccer a little too much, but that's a topic for another page.
    </p>
  </React.Fragment>
)

export const LifeStory = () => (
  <React.Fragment>
    <p>
      I was born and raised in a little town called State College, Pennsylvania.
      You have probably not heard of it, you could find it by looking on a map
      for the exact center of Pennsylvania. You may be familiar with it's
      largest employer: Penn State University. Life in State College revolves
      around the university, and there are many positives (and negatives) that
      come from that relationship.
    </p>
    <h2>Family</h2>
    <p>
      My parents met at Penn State and married thereafter. They settled in State
      College and started a family. My father has worked for over 30 years for
      the State College Area School District (the second largest employer) as a
      Chemistry teacher. Now he's the department administrator for the district,
      overseeing Science teaching and curriculum in grades 7-12.
    </p>
    <p>
      My mom worked various jobs growing up, the greatest of those was raising
      three sons. When those tasks were done, she worked for Residence Life,
      Housing, and Judicial Affairs at Penn State for a good stint. More
      recently, she works with students with special needs at State College Area
      High School. She and my dad drive to work together (mental note: life
      goal).
    </p>
    <p>
      I was the youngest of those three sons. My older brothers both live in
      State College, the eldest with his wife and children and the middle with
      some roommates. I have benefitted so much from having two older brothers
      who have always been as smart as I wish to someday be.
    </p>
    <h2>Childhood</h2>
    <p>
      Growing up, I had many interests. I loved to climb trees, swim, and play
      in the woods and cornfield behind our neighborhood. I also loved time
      inside, happily playing NES and N64 with my brothers. I played sports as
      well, soccer, then football and track, then volleyball. The former and the
      latter I still enjoy.
    </p>
    <p>
      {' '}
      My other interests were creative. I loved to draw and dreamed of growing
      up to be a comic book artist. I used to sit in my room for hours and poor
      over my father's small collection of comics. That love for drawing moved
      into an interest in animation, which lead me to the computer.
    </p>
    <p>
      My first animations were created frame-by-frame on an old version of
      Microsoft Powerpoint. Unfortunatley, those gems have been lost to time. I
      soon purchased a copy of Macromedia Flash and began making "proper"
      animations. <A to="https://www.newgrounds.com/portal/view/283429">Some</A>{' '}
      of <A to="https://www.newgrounds.com/portal/view/558246">that</A>{' '}
      <A to="https://www.newgrounds.com/portal/view/642889">work</A> is still
      available online, at least for the time being.
    </p>
    <p>
      In what would become a theme in my life, my ambitions for my animations
      were far greater than the reality. Dreaming of internet fame, I went in
      search for someone to make me a personal website to host my animations.
    </p>
    <h2>Into the web</h2>
    <p>
      In a suprise turn of events, I did not find anyone who was willing to make
      me a personal website for free. But I did find some people who encouraged
      me to make a website myself. I knew Macromedia also had the website
      builder Dreamweaver, so I procurred that (less legally than Flash) and got
      to work.
    </p>
    <p>
      My first website was a table-based monstrocity that was a thrill to
      create. I loved how easy it was to piece a website together using
      Dreamweaver's WYSIWYG editor. Happy with my work, I proudly shared it on a
      web design forum for the approval of my peers.
    </p>
    <p>
      "Tables?", they laughed through their keyboards, "Divs! And external CSS
      too!" Licking my wounds back in Dreamweaver, I switched to the Split view
      and took a look at the code for the first time. I started to pick apart
      the website and convert it to `div`s with separate `CSS` files like a
      "true web developer".
    </p>
    <p>
      Eventually, I found myself working more in the Code view than anything
      else. I downloaded <A to="https://notepad-plus-plus.org/">Notepad++</A>{' '}
      and happily joined the "in" crowd, mocking anyone using Dreamweaver,
      Frontpage, or using tables. Alas, youth.
    </p>
    <h2>Entrepreneurship</h2>
    <p>
      By the start of high school, I spent far more time building websites than
      animating. I had become a professional by selling a website to an
      organization for $200.00. With dreams of endless riches in mind, I looked
      to start a business doing just that.
    </p>
    <p>
      Halfway through high school, a classmate and I started our own web design
      and development company: Brambling Design. We created websites for small
      businesses and our area and a few clients outside of it. My partner
      quickly picked up Wordpress, and{' '}
      <A to="https://themesinfo.com/theme-authors/brambling-design-themes">
        his work
      </A>{' '}
      is still online, too. I never felt comfortable in Wordpress, so I stuck to
      project management, design, and non-CMS websites.
    </p>
    <p>
      The business was successful, as far as two high-schoolers were concerned.
      But when time came to leave for college, we to shut it down. I was leaving
      town for college and my partner didn't want to keep the business running
      by himself while at Penn State. Founded in 2008, Brambling Design closed
      its doors in 2010.
    </p>
    <h2>Choosing a career</h2>
    <p>
      Back when it came time to choose a college (for everyone in State College
      must go to college), I wanted to decide early on my major. Because I
      struggled so much when creating Wordpress sites, I figured that web
      development wasn't for me. I looked into a few four-year web design
      programs, but decided against it.
    </p>
    <p>
      "Who knows what the internet will look like in 10 years, 20 years?" I
      remember reasoning with myself. "I need to choose something more
      predictable." Risk adverse, even as a teenager.
    </p>
    <p>
      Underpinning all of my endeavors as a creative was a deep appreciation for
      teachers. Much of it stems, I'm sure, from my love for my father and his
      work. "And what is more predictable than the public education system?" I
      asked. I settled on majoring in Education with a focus on Social Studies,
      particularly geography and economics.
    </p>
    <p>
      When looking for a university, I had three requirements: 1) it must have a
      good education program, 2) it must be cheap, and 3) it must not be Penn
      State. Dear Old State was too close to home and far too expensive.
      Searching on College Board, I would drag the tuition scale lower and lower
      until there were only a few options, then read about their programs.
    </p>
    <p>
      In short time, I settled on Edinboro University of Pennsylvania. It was,
      at the time, the most inexpensive four-year university in Pennsylvania and
      had been founding in the mid-19th century as a teacher's school. With
      middling SAT scores, I sent in an application in the summer before my
      senior year. On the second day of school, I received my acceptance letter.
    </p>
    <h2>A still small voice</h2>
    <p>It was about this time that my life took a turn.</p>
    <h2>Edinboro University</h2>
    <p>
      Edinboro University is located in Edinboro, Pennsylvania. The region was
      founded in the early 19th century and was eventually named in honor of the
      Scottish settlers in the area. The university, at the time I attended, was
      around 9,000 students--exceeding the town's 6,000. It was quiet, it was
      quaint, and the people there were lovely.
    </p>
    <p>
      Located in Erie County, Edinboro was firmly within the Snow Belt, the
      region surrounding the Great Lakes that receives heavy snow in the winter
      months. It was common to wake up to over six inches of snow, covering the
      buildings and cars on campus--but never sidewalks.
    </p>
    <p>
      Edinboro University has another reputation, and one in hindsight of which
      I am particularly proud. It is one of the most handicap-accessible
      universities in the country. Despite the regular snowfall, the sidewalks
      on campus were consistently cleared and salted. This is a perfect example
      of{' '}
      <A to="https://ssir.org/articles/entry/the_curb_cut_effect">
        the Curb Cut Effect
      </A>
      , an accommodation that makes everyone's life easier.
    </p>
    <p>
      While at Edinboro, I had the good pleasure to work for the university's
      Office for Students with Disabilities. It was a wonderful opportunity help
      others while working on campus. I also got to see first hand the trials
      and tribulations of using assistive technology, something more developers
      need to experience.
    </p>
    {/* <p>I moved to Atlanta to work for Gwinnett County Public Schools.</p>
        <p>
            I graduated from The Iron Yard with a certificate in Front-end
            Development.
        </p> */}
  </React.Fragment>
)

export const Introduction = () => (
  <React.Fragment>
    <p>
      My name is <strong>Sean McPherson</strong>, and I am a software developer,
      educator, and learner. I work as a UI/UX Developer with React for{' '}
      <A to="https://www.tsys.com/about-us/">TSYS</A> in Atlanta, GA. I also
      organize <A to="https://meetup.com/jrdevatl">Jr Devs</A>, a community for
      junior developers.
    </p>
    <p>
      I am interested in developing web applications to solve problems that{' '}
      <strong>make the world a better place</strong>. I'm particularly intersted
      in the fields of <strong>education</strong>, <strong>clean water</strong>,{' '}
      <strong>renewable energy</strong>, and{' '}
      <strong>economic empowerment</strong>.
    </p>
    <p>
      If you have a project in any other those categories,{' '}
      <Link to={'contact'}>I'd love to hear about it</Link>.
    </p>
    <p>
      Outside of work, I enjoy spending time with my family (wife, son, and
      dog), playing soccer and board games, and living out my faith.
    </p>
  </React.Fragment>
)
