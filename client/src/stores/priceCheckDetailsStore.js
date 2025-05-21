import { defineStore } from 'pinia'
import { getYYYYMMDD, convertTo24HourFormat, formatDateString, currentDateTime } from 'src/utils/DateFormatter'
import pricingDetails from 'src/data/pricing'

export const usePriceCheckDetailsStore = defineStore('reservation', {
  state: () => ({
    checkInDate: getYYYYMMDD(new Date()),
    checkInTime: convertTo24HourFormat(formatDateString(currentDateTime()).time),
    checkOutTime: null,
    hoursOfStay: null,
    fanOrAircon: "AC",
    price: 0,
    room_type: "Standard",
    roomNo: 1

  }),


  actions: {
    resetDetails() {
      this.checkInDate = getYYYYMMDD(new Date()),
      this.checkInTime = convertTo24HourFormat(formatDateString(currentDateTime()).time),
      this.checkOutTime = null,
      this.hoursOfStay = null,
      this.fanOrAircon = "AC",
      this.price = 0,
      this.room_type ="Standard",
      this.roomNo = 1
    },


    calculatePrice(room_type, fan_or_ac, hours) {
      const standard_room_pricing = pricingDetails[1];  // index 1 = Standard
      const family_room_pricing = pricingDetails[0];    // index 0 = Family

      if (!room_type || !fan_or_ac || !hours) {
        console.warn('Missing parameters for price calculation', { room_type, fan_or_ac, hours });
        return;
      }

      // Get pricing object based on room type
      let pricing;
      if (room_type === 'Standard') {
        pricing = standard_room_pricing;
      } else if (room_type === 'Family') {
        pricing = family_room_pricing;
      } else {
        console.error(`Unknown room type: ${room_type}`);
        return;
      }

      // Get the fan/ac pricing
      let rateTable;
      if (fan_or_ac === 'Fan') {
        rateTable = pricing?.fan;
      } else if (fan_or_ac === 'AC' || fan_or_ac === 'Aircon') {
        rateTable = pricing?.aircon;
      } else {
        console.error(`Unknown fan_or_ac type: ${fan_or_ac}`);
        return;
      }

      if (!rateTable) {
        console.error(`No rate table found for ${fan_or_ac} in ${room_type}`);
        return;
      }

      const rate = rateTable?.[hours];
      if (rate === undefined) {
        console.error(`No rate found for ${hours} hours in ${fan_or_ac} - ${room_type}`);
        return;
      }

      this.price = rate;
    }

  }
})
