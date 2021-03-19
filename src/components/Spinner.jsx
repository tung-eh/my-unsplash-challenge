import { keyframes } from 'styled-components'
import React from 'react'

import { styled } from 'twin.macro'

const Wrapper = styled.div`
  border-radius: 50%;
  perspective: 800px;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`
const Particle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
`

const rotate1 = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`
const Particle1 = styled(Particle)`
  left: 0;
  top: 0;
  border-bottom: 3px solid #2cfffe;
  animation: ${rotate1} 1s linear infinite;
`

const rotate2 = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`
const Particle2 = styled(Particle)`
  right: 0;
  top: 0;
  border-right: 3px solid #fcc10f;
  animation: ${rotate2} 1s linear infinite;
`

const rotate3 = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`
const Particle3 = styled(Particle)`
  right: 0;
  bottom: 0;
  border-top: 3px solid #ec1b60;
  animation: ${rotate3} 1s linear infinite;
`

const Spinner = ({ size = '4rem', ...props }) => {
  return (
    <Wrapper size={size} {...props}>
      <Particle1 />
      <Particle2 />
      <Particle3 />
    </Wrapper>
  )
}

export default Spinner
