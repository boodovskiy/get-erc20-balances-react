import React from 'react';
import TokenThumbnail from './TokenThumbnail';

const TokenField = props => {

    return (
        <div className="d-flex flex-row tokenFieldRow">
            <div className="p-2"><TokenThumbnail contractAddress={props.contractAddress} /></div>
            <div className="p-2">{props.tokenName}</div>
            <div className="p-2">{props.balance}</div>
        </div>
    )
}

export default TokenField