import dayjs from 'dayjs';

const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();
    let currentMonthCount = dayjs(new Date(year, month, 1)).day() - 10;

    return new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
};

export default getMonth;
