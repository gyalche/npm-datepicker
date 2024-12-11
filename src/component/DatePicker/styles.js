import styled from 'styled-components';
import Input from '../Atoms/Input';

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 2px;
  border-radius: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  color: var(--rds-color-neutral-5);
  border-radius: 5px;
  margin-left: ${({isTimeRange, isRangePicker}) => (isTimeRange || isRangePicker) && '1px'};
`;

export const InputFieldStyle = styled(Input)`
  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
  border: ${({error, activeSecondInput}) => error ? '1px solid red' : 
    activeSecondInput && '1px solid var(--rds-color-primary-1-normal)'};
  outline: ${({error}) => error && 'none'};
  line-height: 22.4px;
  padding-right: 1px;
  font-size: 14px;

  &:hover {
    border: ${({error}) => error && '1px solid red'}
  };

  &:focus {
    border: ${({activeSecondInput}) => activeSecondInput && true};
  };
  &::placeholder {
    color: var(--rds-color-neutral-6);
    padding: 0;
  };
`;

export const IconWrapper = styled.div`
  right: 4px;
  position: absolute;
  top: 20px;
  transform: translateY(-50%);
  width: 24px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: var(--rds-color-neutral-8);
  padding: 12px 12px 0 12px;
  position: relative;
  margin-top: -60px;
`;

export const WeekdayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({isSaturday, isSunday}) => 
    isSaturday ? 'var(--rds-color-teritary-2-dark)' : 
    isSunday ? 'var(--rds-color-secondary-3-deep)' : 
    'var(--rds-color-neutral-7)'};
  padding-bottom: 10px;
`;

export const HeaderIcons = styled.div`
  font-size: 24px;
  z-index: 9999;
  display: flex;
  flex-wrap: nowrap;
  margin-left: ${({m}) => m && m};
`;

export const CalendarContainer = styled.div`
  width: 340px;
  height: 320px; 
  padding: 10px;
  background-color: var(--rds-color-neutral-0);
`;

export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: ${({secondCalendar}) => secondCalendar && '-8px'}
`;

export const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  text-align: center;
  font-size: 12px;
  border: ${({currentDate}) => currentDate && '1px solid var(--rds-color-primary-1-normal)'};
  cursor: ${({isDisabled}) => isDisabled ? 'not-allowed' : 'pointer'};
  border-radius: ${({isSelected, isRangePicker, currentDate, isEndSelect, isToday, isKeyboardSelect}) => {
    if(!isRangePicker || isSelected && isToday || (isKeyboardSelect && !isEndSelect)) return '4px';
    if((currentDate && !isSelected)) return '4px';
    if(isSelected && isRangePicker && !isEndSelect) return '4px 0px 0px 4px';
    if(isSelected && !isRangePicker) return '4px';
    if((isSelected && isEndSelect)) return '0px 4px 4px 0px';
  }};
  background: ${({ isSelected, isInRange, isInHoverRange, isKeyboardSelect, isDisabled, currentDate }) => {
    if(isKeyboardSelect && isKeyboardSelect !== isSelected && !isDisabled && isKeyboardSelect!==currentDate) return 'var(--rds-color-chart-1)';
    if (isSelected) return 'var(--rds-color-primary-1-dark)';
    if (isInRange || isInHoverRange) return 'var(--rds-color-primary-1-subtle)';
    return 'transparent';
  }};
  color: ${({ isSaturday, isSunday, isSelected, isDisabled, currentDate, isKeyboardSelect }) => {
    if (isSelected) return 'var(--rds-color-neutral-0)';
    if (isDisabled) return 'var(--rds-color-neutral-4)';
    if (isSaturday && !isDisabled) return 'var(--rds-color-teritary-2-normal)';
    if (isSunday && !isDisabled) return 'var(--rds-color-secondary-3-normal)';
    if (currentDate && !isKeyboardSelect) return 'var(--rds-color-primary-1-normal)';
    if(isKeyboardSelect && !isSaturday && !isSunday && isKeyboardSelect !== currentDate) return 'var(--rds-color-neutral-0)';
  }};
  pointer-events: ${({isDisabled}) => isDisabled ? 'none' : 'auto'};
  box-shadow: ${({isSelected}) => isSelected && '0px 2px 4px 0px var(--rds-color-neutral-5)'};
  &:hover {
    background-color: ${({isDisabled, isSelected, isKeyboardSelect}) => {
      if(!isDisabled && !isSelected && !isKeyboardSelect) return 'var(--rds-color-primary-1-subtle)';
      if(isKeyboardSelect) return 'var(--rds-color-chart-1)';
    }};

    border-radius: 4px;
  };
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid var(--rds-color-neutral-3);
  box-shadow: 0px 4px 8px 0px var(--rds-color-neutral-5);
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  margin-top: 48px;
  margin-left: ${({isRangePicker, isDoubleView}) => !isRangePicker ? '215px' : 
    isRangePicker && isDoubleView ? '410px' : '65px'};
`;

export const CalendarWrapperEnd = styled(CalendarWrapper)`
  margin-left: ${({isDoubleView}) => isDoubleView ? '407px' : '377px'};
`;

export const Calenders = styled.div`
  display: flex;
  gap: 5px;
  border-radius: 4px;
`;

export const CalenderMonths = styled.div`
  color: var(--rds-color-neutral-9);
  text-align: center;
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TimePickerContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius: 8px;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--rds-color-neutral-3);
  border-radius: 4px;
  width: ${({is12Hour}) => is12Hour ? '120px' : '100px'};
  height: 40px;
  gap: 2px;
`;

export const TimeInput = styled(Input)`
  background: none;
  font-size: 14px;
  width: ${({is12Hour}) => is12Hour ? '80px' : '60px'};
  text-align: center;
  outline: none;
  border: none;
  &:hover {
    border: none;
  };
`;

export const InputIcon = styled.div`
  color: var(--rds-color-neutral-5);
  font-size: 15px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  margin-top: 5px;
  outline: none;
`;

export const Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30px;
  left: ${({ is12Hour }) => !is12Hour && '-10px' };
  width: ${({ is12Hour }) => is12Hour ? '150px' : '100px'};
  margin-left: ${({ is12Hour, isTimeRange }) => {
    if(is12Hour && !isTimeRange) return '57px';
    if(!is12Hour) return '12px';
    if(is12Hour && isTimeRange) return '-70px';
  }};
  border-radius: 4px;
  z-index: 9999;
  display: flex;
  height: 260px;
  overflow-y: hidden;
  box-shadow: 0px 4px 8px 0px var(--rds-color-neutral-5);
  margin-top: 18px;
  background-color: var(--rds-color-neutral-0);
`;
export const EndDropDown = styled(Dropdown)`
  margin-left: ${({ is12Hour }) => {
    if(is12Hour) return '185px';
    if(!is12Hour) return '130px';
    return '50px';
  }};
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 7px 5px;
  border-bottom: 1px solid var(--rds-color-neutral-2);
`;

export const HourMinuteWrapper = styled.div`
  display: flex;
`;

export const ScrollColumn = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-height: 260px;
  overflow-y: auto;
  border-right: 1px solid var(--rds-color-neutral-2);
`;

export const StaticColumn = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
`;

export const TimeOption = styled.li`
  padding: 10px;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  color: ${({ selected, highlighted }) => {
    if(selected) return'var(--rds-color-primary-1-dark)';
    if(highlighted) return 'var(--rds-color-neutral-1)';
  }};
  background-color: ${({selected, highlighted}) => {
    if(selected) return 'var(--rds-color-primary-1-subtle)';
    if(highlighted) return 'var(--rds-color-chart-1)';
  }};
  &:hover {
    background-color: var(--rds-color-neutral-1);
    color: var(--rds-color-neutral-11);
  }
`;

export const NextIcon = styled.img`
  font-size: 25px;
  color: var(--rds-color-neutral-8);
`;

export const CalendarIconBtn = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--rds-color-neutral-1);
    color: black;
  };
  &:focus {
    background-color: var(--rds-color-neutral-1);
    color: black;
  }
`;

export const CalendarIcon = styled.img`
  font-size: 24px;
  margin-top: 5px;
`;

export const DateTimeContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const TextAreaYearMonth = styled.span`
  cursor: ${({openDecade}) => !openDecade ? 'pointer' : 'auto'};
  z-index: 9999;
  &:hover {
    background-color: ${({openDecade}) => !openDecade && 'var(--rds-color-neutral-1)'};
    color: black;
  };
  padding-left: 7px;
  padding-right: 7px;
  border-radius: 5px;

  &:focus {
    background-color: red;
    colo: green;
  }
`;

export const DecadeGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  border-radius: 8px;
  overflow: scroll;
  padding: 20px 10px;
  margin-top: -10px;
  height: 250px;
`;

export const DecadeButton = styled.button`
  font-size: 12px;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 96.33px;
  margin: 8px 0px;
  padding: 9px 15px;
  border: ${({selected}) => selected ? '1px solid var(--rds-color-primary-1-normal)' : 'none'};
  color: ${({selected, keyboardSelect}) => {
    if(selected) return 'var(--rds-color-primary-1-normal)';
    if(keyboardSelect) return 'var(--rds-color-neutral-1)';
  }};
  background-color: ${({keyboardSelect}) => keyboardSelect && 'var(--rds-color-chart-1)'};
  &:hover {
   background-color: ${({keyboardSelect}) => !keyboardSelect && 'var(--rds-color-neutral-1)'}; 
  }

  &:focus {
    outline: none;
  }

  &:active {
    color: var(--rds-color-primary-1-normal);
    border: 1px solid var(--rds-color-primary-1-normal);
  }
`;
