/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactTooltip from 'react-tooltip';

import { CustomImage, ContainerImage } from '~/components/CustomImage';
import Isabele from '~/assets/images/isabele.jpeg';
import Natali from '~/assets/images/natali.jpg';

export default function Main() {
  const ButtonClick = () => {
    console.log('Nome', 'Deu certo aqui');
  };

  return (
    <ContainerImage>
      <a data-tip data-for="sadIsabele">
        <CustomImage onClick={ButtonClick} src={Isabele} />
      </a>
      <ReactTooltip id="sadIsabele" type="dark" effect="solid">
        <span>Isabele</span>
      </ReactTooltip>

      <a data-tip data-for="sadNatali">
        <CustomImage onClick={ButtonClick} src={Natali} />
      </a>
      <ReactTooltip id="sadNatali" type="dark" effect="solid">
        <span>Natali</span>
      </ReactTooltip>
    </ContainerImage>
  );
}
