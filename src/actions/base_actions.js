const itemsLoaded = (type, newItems) => {
    return {
        type: type,
        payload: newItems
    };
};

const itemsRequested = (type) => {
    return {
        type: type
    }
};

const itemsError = (type, error) => {
    return {
        type: type,
        payload: error
    }
};

export { itemsRequested, itemsLoaded, itemsError }