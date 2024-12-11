export const getDaysInMonth = (date) => {
    if(!(date instanceof Date) || isNaN(date)){
      throw new Error('Invalid Date Provided');
    }
      const year = date.getFullYear();
      const month = date.getMonth();
      
      // Get the first day of the month
      const firstDayOfMonth = new Date(year, month, 1).getDay();
  
      // Get the last day of the month
      const lastDateOfMonth = new Date(year, month + 1, 0);
  
      const daysInMonth = lastDateOfMonth.getDate();
      
      const days = [];
      
      // Add the last few days of the previous month
      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push({date: new Date(year, month, -i), isCurrentMonth: false});
      }
      
      // Add all days in the current month
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({date: new Date(year, month, i), isCurrentMonth: true});
      }
      
      // Add the first few days of the next month
      const lastDayOfMonth = lastDateOfMonth.getDay();
      for (let i = 1; i < 7 - lastDayOfMonth; i++) {
        days.push({date: new Date(year, month + 1, i), isCurrentMonth: false});
      }
      return days;
    };
  
  export const normalizeDate = (date) => new Date(date).setHours(0, 0, 0, 0);
  
  export const getLocalizedMonthName = (date, locale) => {
    return new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
  };
  
  export const roundToNearestStep = (minute, step) => {
    return Math.floor(minute / step) * step;
  };
  