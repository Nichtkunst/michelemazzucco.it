import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import WorksListItem from '../WorksListItem'
import EmailMe from '../EmailMe'
import Divider from './divider.svg'
import { colors, fonts, media } from '../../utils/commonStyles'

const WorksWrapper = styled.div`
  max-width: 80%;
  margin: 5rem auto 0;
  ${media.lg`
    max-width: 100%;
  `}
  ${media.md`
    margin: 5rem auto 0;
  `}
  ${media.sm`
    margin: 3rem auto 0;
  `}

`

const WorksTitle = styled.h3`
  font-size: 1.6rem;
`

const ButtonsWrapper = styled.div`
  padding: .75rem 0 1.5rem;
`

const FilterButton = styled.button`
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  appereance: none;
  font-size: .9rem;
  font-family: ${fonts.mono};
  cursor: pointer;

  &:not(:last-child):after {
    content: '-';
    display: inline-block;
    margin: 0 .5rem;
    color: ${colors.gray500}
  }

  &:focus {
    outline: 0;
  }

  ${props => props.active 
    ? css`
      color: ${colors.yellow500};
    `
    : css`
      color: ${colors.gray500}
    `}
`

const NDAWrapper = styled.div`
  padding-top: 4.5rem;
  text-align: center;
  
  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: #FFF;
    margin-bottom: 1rem;
    line-height: 1.4em;
  }
`

const StyledDivider = styled(Divider)`
  margin-bottom: 3rem;
`

const StyledEmailMe = styled(EmailMe)`
  color: ${colors.yellow500};
  font-family: ${fonts.mono};
  font-size: .9rem;
  border-bottom: 1px dotted ${colors.gray700};
  padding: 0 0 .3rem;
  display: inline-block;
`

const WorksList = ({ 
  works, 
  category, 
  setCategory 
}) => 
  <WorksWrapper>
    <WorksTitle>Selected works</WorksTitle>
    <ButtonsWrapper>
      <FilterButton active={category === 'design'} onClick={() => setCategory('design')}>design</FilterButton>
      <FilterButton active={category === 'code'} onClick={() => setCategory('code')}>code</FilterButton>
      {category && <FilterButton onClick={() => setCategory(null)}>all</FilterButton>}
    </ButtonsWrapper>
    <ul>
      {works.map(({ work }, i) => <WorksListItem key={i} work={work} />)}
    </ul>
    <NDAWrapper>
      <StyledDivider height={6} width={43} />
      <h3>Alcuni dei miei lavori sono sotto NDA, vuoi vederne altri?</h3>
      <StyledEmailMe text='Scrivimi' />
    </NDAWrapper>
  </WorksWrapper>

export default WorksList
