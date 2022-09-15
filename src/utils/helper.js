import moment from "moment"

/**
 * @param {number} number 
 * @returns {string}
 */
export const numberWithComma = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const timestamptToMoment = timestamp => moment(timestamp, 'DD-MM-YYYY hh:mm:ss')