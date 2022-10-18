const round = (value: number | string, precision: number): number =>
    Math.round(Number(Number(value) + 'e' + precision + 'e-' + precision));

const formatNumber = (
    value: number | string,
    maximumFractionDigits = 0,
    locales = 'ru-RU',
) => {
    const parsedValue = Number(value);

    return new Intl.NumberFormat(locales, {
        maximumFractionDigits: maximumFractionDigits,
    }).format(parsedValue);
};

const calcPercent = (val: number, sum: number) => {
    return val > 0 ? Math.min(Math.round((sum / val) * 100), 100) : 0;
};
