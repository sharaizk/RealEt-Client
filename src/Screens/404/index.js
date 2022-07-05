import React from 'react'
import NotFoundImgSrc from '../../assets/images/404.svg'
import { useNavigate } from 'react-router-dom'
import { ScreenContainer,NotFoundImg,GoBackBtn } from './Elements'
const NotFoundScreen = () => {
    const navigate = useNavigate()
  return (
      <ScreenContainer>
          <NotFoundImg src={NotFoundImgSrc} alt="404" />
          <GoBackBtn onClick={()=>navigate(-1)}>Go Back</GoBackBtn>
    </ScreenContainer>
  )
}

export default NotFoundScreen