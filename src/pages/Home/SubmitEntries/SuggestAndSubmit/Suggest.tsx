import React, { useState } from 'react'
import styled from 'styled-components'
import InfoIcon from 'tsx:svgs/icons/info.svg'
import Tooltip from './Tooltip'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  position: relative;
`

const StyledA = styled.a`
  font-family: 'Orbitron', sans-serif;
  font-size: 20px;
  font-weight: 700;
  align-self: center;
  text-decoration: underline;
  cursor: pointer;
  color: #fff;
`

interface ISuggest {
  activeList: string
}

const Suggest: React.FC<ISuggest> = ({ activeList }) => {
  const [isHovering, setIsHovering] = useState(false)

  const getUrl = () => {
    switch (activeList) {
      case 'CDN':
        return 'https://docs.google.com/forms/d/e/1FAIpQLSeO32UBCpIYu3XIKGM-hLqWu51XcsSG1QRxtuycZPyS9mMtVg/viewform'
      case 'Tokens':
        return 'https://docs.google.com/forms/d/e/1FAIpQLSchZ5RBd1Y8RNpGCUGY9tZyQZSBgnN_4B9oLfKeKuer9oxGnA/viewform'
      case 'Tags':
        return 'https://docs.google.com/forms/d/e/1FAIpQLSdTwlrcbbPOkSCMKuUj42d_koSAEkWjMLz5hhTc5lB6aGCO9w/viewform'
      default:
        return '#'
    }
  }

  return (
    <Container>
      <StyledA href={getUrl()} target="_blank">
        Suggest entry
      </StyledA>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <InfoIcon />
        {isHovering && (
          <Tooltip>
            If you don't want to take the risk <br />
            submitting items on-chain, you can make <br />
            off-chain submissions via this Google Form
          </Tooltip>
        )}
      </div>
    </Container>
  )
}
export default Suggest