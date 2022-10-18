function abstractString(text: string, length: number) {
    if (text == null) {
        return '';
    }
    if (text.length <= length) {
        return text;
    }
    text = text.substring(0, length);
    text = text.substring(0, text.lastIndexOf(' '));
    return text + '...';
}

function formatPhone(phone: string): string {
    if (!phone) {
        return '';
    }

    return phone.length === 11
        ? `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(
              7,
              9,
          )}-${phone.slice(9)}`
        : phone;
}

const toHex = (value: string): string => {
    let result = '';
    for (let i = 0; i < value.length; i++) {
        result += value.charCodeAt(i).toString(16);
    }
    return result;
};

const fromHex = (value: string): string | null => {
    if (value.length % 2 !== 0) {
        console.error('Invalid hex string');
        return null;
    }

    let result = '';
    for (let i = 0; i < value.length; i += 2) {
        const hexChar = value.substring(i, i + 2);
        result += String.fromCharCode(parseInt(hexChar, 16));
    }

    return result;
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const getNumbers = (value: string) => {
    return value.match(/\d/g)?.join('') || '';
};
