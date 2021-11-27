import styled from 'styled-components'

const Name = styled('h1')({
  fontSize: '30rem',
  lineHeight: '22rem',
  textAlign: 'left',
  '& > span': {
    display: 'block',
    fontSize: '6rem',
    fontWeight: 300,
    marginLeft: '2rem',
    lineHeight: '2rem',
    color: 'var(--accent-color)',
  },
  '@media (orientation: portrait)': {
    fontSize: '16rem',
    lineHeight: '12rem',
    marginBottom: '5rem',
    marginTop: '5rem',
    '& > span': {
      fontSize: '3rem',
      marginLeft: '1rem',
    },
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
  '&:hover,&:active,&:focus': {
    backgroundColor: 'var(--text-color)',
    color: 'var(--main-color)',
    border: '2px solid var(--main-color)',
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
    { name: 'GitHub', href: 'https://github.com/bradw', Icon: LinkIcon },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bradley-watton-83387a140', Icon: LinkIcon },
    { name: 'CV / Resume', href: 'https://cv.bradw.io', Icon: LinkIcon },
    { name: 'Send me an email', href: 'mailto:hi@bw.dev', Icon: EmailIcon },
  ]

  return (
    <Flex>
      <Name>
        bw<span>.dev</span>
      </Name>
      <VerticalLine />
      <Links>
        {links.map(({ name, href, Icon }) => (
          <Link href={href} target="_blank">
            { name }
            { Icon }
          </Link>
        ))}
      </Links>
    </Flex>
  )
}
