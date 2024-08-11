import React, {SVGProps} from "react";

export type TTransactionType = 'safe' | 'unsafe' | 'middle' | 'unknown';

const wording: { [key in TTransactionType]: string } = {
  safe: 'Safe transaction',
  unsafe: 'Unsafe transaction',
  middle: 'Middle risk transaction',
  unknown: 'Unknown contract'
}

const MainIcon = ({ type }: SVGProps<SVGSVGElement> & { type: TTransactionType }) => {
  return <>
    <img src={`/${type}.svg`} alt={`${type} icon`}/>
    <div className="text-xl mt-3">
      {wording[type]}
    </div></>
}

export default MainIcon;