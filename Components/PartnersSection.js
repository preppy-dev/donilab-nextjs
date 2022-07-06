import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { PartnersData } from '../services/data/PartnerData';
import SectionTitle from "./SectionTitle"
import PartnersSlider from './PartnersSlider';
import { connect, useDispatch, useSelector } from 'react-redux';
import { listPartenaires } from '../store/actions/PartenaireActions';
import { useTranslation } from 'next-i18next';import { useRouter } from '../node_modules/next/router';
import { PartenaireContext } from '../services/partenaire/partenaire.context';
;


const SectionTitletest = styled.div`
color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;

h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
}
 img{
 position: absolute;
 width: 95px;
 left: 48vh;
 bottom: 0vh;

}
span{
 color: #95B71D;
}

`;
const PartnerSection = styled.div`
background-color:#fff;
padding:4rem 0;
overflow:hidden;
`;

const PartnersContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-right: -23vh;

`;
const Partner = styled.div`
 
 margin:0 2rem;
`;

const PartnerImg = styled.img`
 width:250px;
`;




function PartnersSection() {
  const {locale} = useRouter()
  const { t } = useTranslation('common')
  const { state } = useContext(PartenaireContext);
  const {partenaires,loading,error} =  state


  return (
    <PartnerSection>
      <SectionTitle>

        {/* <h1>
          {t('n')}
          <span className="conectimg">
            o
            <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
              <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d" />
              <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d" />
              <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d" />
            </svg>

          </span>
          {t('os')} {t('partner')}
        </h1> */}
        {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_PARTNERS-EN.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_PARTNERS-FR.svg'} className="">
           </object>
           }
      </SectionTitle>
      {
        loading ? <div className='loading-overlay' ><div className="loading"></div></div> :
        <PartnersSlider PartnersData={partenaires} />
      }
      
    </PartnerSection>
  )
}

export default PartnersSection;

