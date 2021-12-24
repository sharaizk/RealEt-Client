import React from 'react'
import { AnimationContainer,SvgContainer } from './elements'
import SVG from '../../../assets/images/loading.svg'
const Loading = () => {
    return (
        <AnimationContainer>
            <SvgContainer src={SVG} alt=""/>
        </AnimationContainer>
    )
}

export default Loading
