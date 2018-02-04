import React from 'react'
import styled from 'styled-components'
import WeekDistance from '../WeekDistance'
import Intro from '../Intro'
import { fonts, colors, media } from '../../utils/commonStyles'

const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  ${media.sm`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
  `}
`

const Box = styled.div`
  grid-area: 1 / 4 / last-line / end;
  background: ${colors.blue900};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    mix-blend-mode: lighten;
    opacity: .1;
    display: block;
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    margin: auto;
    max-width: 100%;
    ${media.sm`
      opacity: .25;
    `}
  }

  &:before {
    content: '';
    padding-top: 145%;
    display: block;
  }

  ${media.sm`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`

const StyledWeekDistance = styled(WeekDistance)`
  grid-row: 4 / last-line;
  grid-column: 1 / span 4;
  align-self: end;
  z-index: 2;
`

const InfoWrapper = styled.header`
  grid-row: 2 / 4;
  grid-column: 1 / 6;
  z-index: 2;
  ${media.md`
    grid-column: 1 / 7;
  `}
  ${media.sm`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${colors.gray500};
  ${media.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #FFF;
    border-bottom: 1px dotted ${colors.gray500};
  }
`

const ProfileIntro = ({ content }) => 
  <ProfileWrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledWeekDistance />
    <Box><img src="/images/michele-mazzucco-portrait.jpg" /></Box>
  </ProfileWrapper>

export default ProfileIntro
