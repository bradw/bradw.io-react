import styled from 'styled-components'

const Name = styled('h1')({
  fontSize: '8rem',
  '& > span': {
    fontWeight: 300,
  },
  '@media (orientation: portrait)': {
    fontSize: '6rem',
    marginBottom: 20,
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
  width: 600,
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

const Icon = <i className="fas fa-external-link-alt" />

export const App = () => {
  const links = [
    { name: 'GitHub', href: 'https://github.com/bradw' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bradley-watton-83387a140' },
    { name: 'CV / Resume', href: 'https://cv.bradw.io' },
  ]

  return (
    <Flex>
      <Name>
        Bradley<br />
        <span>Watton</span>
      </Name>
      <VerticalLine />
      <Links>
        {links.map(({ name, href }) => (
          <Link href={href} target="_blank">
            { name }
            { Icon }
          </Link>
        ))}
      </Links>
    </Flex>
  )
}
