const headersObj = {
    headers: {
        'x-business': `${localStorage.getItem('company')}`
    }
};

export default headersObj;