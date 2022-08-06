import React from 'react';
import styled from 'styled-components';
import { IoMdBowtie } from 'react-icons/io';

const StyledGenderToggleButton = styled.label`
  --female-color: fuchsia;
  --color: #e91e63;
  scale: 4;

  #male:before {
    content: 'MALE';
    position: absolute;
    //top: 0;
    //left: 0;
    //width: 0;
    color: var(--color);
    white-space: pre;
    overflow: hidden;
    transition: 0.2s cubic-bezier(0.4, 0, 1, 1) all;
    z-index: 2;
  }
  #gender {
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 1.6rem;
    display: flex;
    justify-content: end;
    align-items: center;
    #fe {
      transform: translateX(-3rem);
      transition: 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) all;
      color: var(--color);
    }
  }
  #gender,
  #path,
  #knob {
    grid-row: 1 / 2;
    grid-column: 1;
  }
  #path {
    width: 12rem;
    //height: 100%
  }
  #knob {
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) all;
    & * {
      color: blue;
    }
  }
  #checkbox {
    &:checked {
      & ~ #gender {
        #fe {
          transform: translateX(0rem);
        }
        #male {
          animation: move 0.2s ease 0.4s;
        }
      }
      & ~ #knob {
        & {
          transform: rotateZ(-135deg);
          box-shadow: 0 0 6px #ffe2fe;
        }
        & * {
          color: var(--female-color);
        }
      }
    }
  }
`;

export const GenderToggleButton = () => {
  const rad = 10;
  const Xpos = 7;
  const size = 4;
  return (
    <StyledGenderToggleButton id="app-cover" className={'grid'}>
      <input className={'hidden'} type="checkbox" id="checkbox" />
      <div id="path" className={'bg-gray-300 rounded-full p-4'}></div>
      <div
        id="knob"
        className={`relative z-10 p-${rad} m-1 bg-white rounded-full w-0 h-0 children:text-black margin-auto children:text-${size}xl children:transform children:-translate-x-1/2 children:translate-y-${Xpos}`}
      >
        <IoMdBowtie />
      </div>
      <div id="gender" className={'p-2'}>
        <div id="fe">FE</div>
        <div id="male">
          <span>MALE</span>
        </div>
      </div>
    </StyledGenderToggleButton>
  );
};
