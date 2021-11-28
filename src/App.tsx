import styled from 'styled-components'

const Logo = styled('img')({
  width: '50vw',
  maxWidth: 1000,
  '@media (orientation: portrait)': {
    width: '75vw',
  },
})

const Flex = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '100vh',
  '@media (orientation: portrait)': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const VerticalLine = styled('div')({
  width: 1,
  height: '60%',
  backgroundColor: 'var(--text-color)',
  '@media (orientation: portrait)': {
    height: 1,
    width: '80%',
    visibility: 'hidden',
  },
})

const Links = styled('ul')({
  padding: 0,
  width: '30vw',
  maxWidth: 600,
  listStyleType: 'none',
  '@media (orientation: portrait)': {
    width: '80%',
  },
})

const Link = styled('a')({
  backgroundColor: 'var(--main-color)',
  border: '2px solid var(--text-color)',
  color: 'var(--text-color)',
  padding: 30,
  borderRadius: 10,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  transition: 'all 250ms linear',
  fontSize: '1.2rem',
  position: 'relative',
  '&:hover,&:active,&:focus': {
    backgroundColor: 'var(--text-color)',
    color: 'var(--main-color)',
    border: '2px solid var(--main-color)',
  },
  '& > span': {
    color: 'var(--main-color)',
    position: 'absolute',
    bottom: 10,
    left: 50,
  },
  '& + a': {
    marginTop: 50,
  },
  '@media (orientation: portrait)': {
    '& + a': {
      marginTop: 20,
    },
  },
})

const LinkIcon = <i className="fas fa-external-link-alt" />
const EmailIcon = <i className="fas fa-envelope" />

export const App = () => {
  const links = [
    { name: 'GitHub', href: 'https://github.com/bradw' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bradley-watton-83387a140' },
    { name: 'CV / Resume', href: 'https://cv.bradw.io' },
  ]

  return (
    <Flex>
      {/* <Name>
        bw<span>.dev</span>
      </Name> */}
      <Logo src="/img/bw.dev-transparent.png" />
      <VerticalLine />
      <Links>
        {links.map(({ name, href }) => (
          <Link href={href} target="_blank">
            { name }
            { LinkIcon }
          </Link>
        ))}
        <Link href="mailto:hi@bw.dev" target="_blank">
            Send me an email
            <span>...unless you're a recruiter.</span>
            { EmailIcon }
          </Link>
      </Links>
    </Flex>
  )
}
