import parse from "html-react-parser";
import React, { useContext } from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import { CurrentLangContext } from "../../Context/CurrentLangContext";

const ExpertiseCardContent = styled.div`
//border-right:2px solid #E3E3E3;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
text-align:center;
padding:2rem;
width: 100%;
min-height: 100%;
color:#2755A1;
@media (max-width: 1280px) { 
 border:none
}
&:hover{
background-color:#2755A1;
color:#fff;
}
object{
  margin:0 .5rem .5rem .5rem;
  display:flex;
  align-items:center;
  justify-content:center;
}


object.hover{
display:none
}
&:hover > .donilab-dexpertise_thumnail object.hover {
      display: block;
     }
&:hover > .donilab-dexpertise_thumnail object.default {
      display: none;
     }
    
     .donilab-dexpertise_thumnail{
  margin-top: 20px;
  padding: 0 30px;
}
.donilab-dexpertise__title{
  margin-top: 20px;
  /* padding: 0 30px; */
  /* display:flex;
  align-items:center;
  justify-content:center; */
}
.donilab-dexpertise__title h3{
  font-size:24px;
  font-weight: 700;
}
.donilab-expertise_description{
  margin-top: 20px;
}
.donilab-expertise_description p{
    word-wrap: break-word;
    font-size:17px;
   
/* margin-bottom:2rem; */
font-weight: 500;
/* display:flex;
align-items:center;
justify-content:center; */

}
`;
const BtnLinkExpertiseCard = styled(Link)`
  color:#95B71D;   
  font-size:13px;
  font-weight: bold;
  font-family:"Cera Round Pro";
  text-transform: uppercase;
  border:2px solid #95B71D;
  
  padding:.5rem 1rem;
  margin-top:2rem;
  border-radius: 25px;
`;
function ExpertiseCard({ item }) {
  
  return (
    <ExpertiseCardContent key={item.id} className="donilab-dexpertise-card">
      {/* <img src={item.icon} alt="" srcset=""/> */}
      <div className="donilab-dexpertise_thumnail">
        <object id={item.acf.icon_normal.id} type="image/svg+xml" width="100" height="100" data={item.acf.icon_normal.url} className="svg default">
        </object>
        <object id={item.acf.icon_hover.id} type="image/svg+xml" width="100" height="100" data={item.acf.icon_hover.url} className="svg hover">
        </object>
      </div>
      <div className="donilab-dexpertise__title">
        <h3 > {item.title.rendered}</h3>

      </div>
      <div className="donilab-dexpertise_description">
        {parse(item.excerpt.rendered)}
      </div>
    </ExpertiseCardContent>

  )
}

export default ExpertiseCard
