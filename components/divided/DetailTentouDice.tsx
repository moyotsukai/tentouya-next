import React from 'react'
import { tentouDiceData } from '../../worksData/tentouDiceData'
import DetailDiceDescription from './DetailDiceDescription'

const DetailTentouDice: React.FC = () => {
  return (
    <React.Fragment>
      {tentouDiceData.map((data, index) => (
        < DetailDiceDescription data={data} key={index} />
      ))}
    </React.Fragment>
  )
}

export default DetailTentouDice