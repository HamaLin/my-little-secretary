import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex, FlexAllCenter, FlexColumn } from './UI/atoms/layout';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Button, IconButton } from './UI/atoms/Button';
import { Paper } from './UI/atoms/Paper';
import moment from 'moment';

const Wraper = styled(FlexColumn)`
  overflow: visible;

  > div {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    transition-duration: 0.2s;
    /* background-color: #648dcf; */
  }

  > div + div {
    flex-grow: 1;
    align-items: normal;
    background-color: ${(props) => props.theme.background.default};
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: inherit;
  }
`;

const ContentHead = styled(Flex)`
  height: 2rem;
  justify-content: space-between;
  position: inherit;
`;

const ContentBody = styled(Flex)`
  flex-grow: 1;
  flex-wrap: wrap;
  position: inherit;
  overflow: visible;
`;

const Block = styled(Paper)<{
  boxColor: string;
}>`
  width: 13%;
  height: auto;
  margin-left: auto;
  margin-top: 10px;
  padding: 7px;
  cursor: pointer;
  transition-duration: 0.5s;

  :hover {
    border: 1px solid ${(props) => props.boxColor};
    transform: scale(2, 2.2);
    z-index: 2;
    box-shadow: 1px 1px ${(props) => props.boxColor};
  }
`;

type DayType = {
  date: number;
  isToday?: boolean;
  isThisMonth?: boolean;
};

type CalendarType = {
  year: number;
  month: number;
  days: DayType[];
};

const CALENDAR_COLORS = [
  '#e28080',
  '#fdff92',
  '#57f1aa',
  '#dd9795',
  '#648dcf',
  '#ff9bee',
  '#7dd6ff',
  '#b9ff9d',
  '#ffb8b8',
  '#57f1aa',
  '#64f157',
  '#eb79f5',
];
const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
  const [calendar, setCalendar] = useState<CalendarType>({
    year: moment().year(),
    month: moment().month(),
    days: [{ date: 0 }],
  });

  const createCalendarDates = (
    setYear: number,
    setMonth: number,
  ): DayType[] => {
    const standard = moment([setYear, setMonth]);
    let month = {
      thisYear: standard.year(),
      thisMonth: standard.month(),
      today: { month: moment().month(), date: moment().date() },
      startOfDay: standard.startOf('month').day(),
      endOfDate: standard.endOf('month').date(),
      endOfDay: standard.endOf('month').day(),
    };
    let result = [];
    let date = 1;

    // 한달에 최대로 나올 수 있는 행의 갯수는 6개 이다.
    for (let i = 0; i < 6 * 7; i++) {
      if (i === 5 * 7 && month.thisMonth !== setMonth) break;

      if (i < month.startOfDay) {
        const idx = moment([month.thisYear, month.thisMonth])
          .startOf('month')
          .add(i - month.startOfDay, 'days')
          .format('DD');

        result.push({ date: +idx, isToday: undefined, isThisMonth: undefined });
      } else {
        result.push({
          date: date,
          isToday:
            date === month.today.date && month.thisMonth === month.today.month
              ? true
              : undefined,
          isThisMonth: month.thisMonth === setMonth ? true : undefined,
        });
        date++;
      }

      if (date > month.endOfDate) {
        date = 1;
        month.thisMonth += 1;
      }
    }

    return result;
  };

  const onChangeCalendar = (moveTo: number): void => {
    let newCalendar = {
      year: calendar.year,
      month: calendar.month + moveTo,
    };

    if (newCalendar.month < 0) {
      newCalendar.month = 11;
      newCalendar.year -= 1;
    }
    if (newCalendar.month > 11) {
      newCalendar.month = 0;
      newCalendar.year += 1;
    }

    const days = createCalendarDates(newCalendar.year, newCalendar.month);

    console.log(newCalendar);
    setCalendar({ ...newCalendar, days: days });

    return;
  };

  useEffect(() => {
    const days = createCalendarDates(calendar.year, calendar.month);
    setCalendar((prev) => ({ ...prev, days: days }));
  }, []);

  return (
    <Wraper>
      <div style={{ backgroundColor: CALENDAR_COLORS[calendar.month] }}>
        <IconButton onClick={() => onChangeCalendar(-1)}>
          <HiChevronLeft />
        </IconButton>
        <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>
          {`${calendar.year} / ${calendar.month + 1}`}
        </p>
        <IconButton onClick={() => onChangeCalendar(1)}>
          <HiChevronRight />
        </IconButton>
      </div>

      <div>
        <ContentHead>
          {DAY_OF_WEEK.map((data) => (
            <FlexAllCenter
              key={data}
              style={{
                width: '100%',
                fontWeight: 'bold',
              }}
            >
              {data}
            </FlexAllCenter>
          ))}
        </ContentHead>
        <ContentBody>
          {calendar?.days.map((data, idx) => (
            <Block
              boxColor={CALENDAR_COLORS[calendar.month]}
              key={`${data.date} + ${idx}`}
              style={{
                backgroundColor: data?.isThisMonth ? 'none' : '#d9d9d9',
              }}
            >
              <span
                style={{
                  backgroundColor: data?.isToday ? 'red' : 'none',
                  color: data?.isToday
                    ? 'white'
                    : data?.isThisMonth
                    ? 'black'
                    : 'gray',
                  width: 'fit-content',
                  padding: '2px 8px',
                  borderRadius: '50%',
                }}
              >
                {data.date}
              </span>
            </Block>
          ))}
        </ContentBody>
      </div>
    </Wraper>
  );
};

export default React.memo(Calendar);
