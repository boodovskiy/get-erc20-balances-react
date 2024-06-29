import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TokenThumbnail = ({ contractAddress }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTokenData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`);
                setThumbnailUrl(response.data.image.thumb);
            } catch (err) {
                setError(err);
            }

        }

        fetchTokenData();
    }, [contractAddress]);

    return (
        <img src={thumbnailUrl} alt="Token Thumbnail" />
    );
};

export default TokenThumbnail;