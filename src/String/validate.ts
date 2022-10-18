const validateEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateOnlyNumbers = (value: string, maxLength: number) => {
    return value.match(/\d/g)?.join('').slice(0, maxLength) || '';
};

const validateAmount = (value: string) =>
    value.match(/^\d{1,9}(?:\.[0-9]?[0-9]?)?/g)?.join('') || '';
