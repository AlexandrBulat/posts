import moment from 'moment';

export const getDates = (startDate: Date, endDate: Date) => {
    var dateArray = [];
    var start = moment(startDate).utc();
    var end = moment(endDate).utc();
    while (start <= end) {
        dateArray.push(moment(start).utc().format('YYYY-MM-DD'))
        start = moment(start).utc().add(1, 'days');
    }
    return dateArray;
}

export const DaysEnum: any = Object.freeze({
    0: "Sunday", 1: "Monday", 2: "Tuesday",
    3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"
})

export const currencyFormat = (currency: string) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency', currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })

export const isEventCancelled = (currentDays: Date, oldDays: Date): boolean => {
    const duration = moment.duration(moment(oldDays).diff(moment(currentDays)));
    return duration.asHours() > 48
}

export const getCurrency: any = Object.freeze({
    'USD': '$', // US Dollar
    'EUR': '€', // Euro
    'CRC': '₡', // Costa Rican Colón
    'GBP': '£', // British Pound Sterling
    'ILS': '₪', // Israeli New Sheqel
    'INR': '₹', // Indian Rupee
    'JPY': '¥', // Japanese Yen
    'KRW': '₩', // South Korean Won
    'NGN': '₦', // Nigerian Naira
    'PHP': '₱', // Philippine Peso
    'PLN': 'zł', // Polish Zloty
    'PYG': '₲', // Paraguayan Guarani
    'THB': '฿', // Thai Baht
    'UAH': '₴', // Ukrainian Hryvnia
    'VND': '₫', // Vietnamese Dong
});