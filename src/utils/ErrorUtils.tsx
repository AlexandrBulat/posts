import { ApiError, Constants } from "../constants/Constants";
import moment from 'moment';

export const getErrorMessage = (error: number | string): string => {
    switch (error) {
        case ApiError.FULLY_BOOKED:
            return Constants.ERROR_FULLY_BOOKED
        case ApiError.CANCELED:
            return Constants.ERROR_CLASS_CANCELLED
        case ApiError.CLASS_EXPIRED:
            return Constants.ERROR_EXPIRED_PASS
        case ApiError.CLASS_CANCEL_DENIED:
            return Constants.ERROR_EXPIRED_CANCELLED
        case ApiError.ERROR_NETWORK:
            return Constants.ERROR_NETWORK
        case ApiError.USER_NOT_EXISTS:
            return Constants.ERROR_USER_NOT_EXISTS
        case ApiError.ERROR_UNKNOW:
            return Constants.ERROR_OPERATION_FAILED
        default:
            return Constants.ERROR_OPERATION_FAILED
    }
}

export const isAdult = (date: string): boolean => {
    return moment(new Date()).years() - moment(date).years() >= 18
}

export const getAdultMessage = (isAdult: boolean): string => {
    if (isAdult) {
        return Constants.ADULT_TEEN_MESSAGE
    } else {
        return Constants.ADULT_MESSAGE
    }
}