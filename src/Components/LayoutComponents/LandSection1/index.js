import React from 'react'
import {LandingScreenContainer,SectionContainer, BuyandSell} from './section1Elements'
import AdvanceSearchField from '../../CustomComponents/advanceSearch'
const LandSection1 = () => {
    return (
        <LandingScreenContainer>
        <SectionContainer
        >
          <BuyandSell>
            Buy and Sell Properties
            <br />
            instantly
          </BuyandSell>
          <AdvanceSearchField />
        </SectionContainer>
      </LandingScreenContainer>
    )
}

export default LandSection1
