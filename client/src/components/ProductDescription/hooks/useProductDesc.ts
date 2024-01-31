import { useState } from 'react';

function useProductDesc() {
    const [isFullInfoOpened, setIfFullInfoOpened] = useState(false);

    function toggleFullInfo() {
        setIfFullInfoOpened(!isFullInfoOpened);
    }

    return {
        isFullInfoOpened,
        toggleFullInfo,
    };
}

export default useProductDesc;
