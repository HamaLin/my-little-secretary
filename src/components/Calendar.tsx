import React from 'react';
import styled from 'styled-components';
import { Flex, FlexColumn } from './UI/atoms/layout';

const Wraper = styled(FlexColumn)`
  overflow: visible;

  > div {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #648dcf;
  }

  > div + div {
    flex-grow: 1;
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: inherit;
  }
`;

const DayOfWeek = styled(Flex)`
  height: 2rem;
  justify-content: space-between;
  position: inherit;
`;

const Table = styled(FlexColumn)`
  flex-grow: 1;
  position: inherit;
  overflow: visible;
`;

const TableBody = styled(Flex)`
  height: 100%;
  position: inherit;
  overflow: visible;
`;

const Block = styled.div`
  width: 100%;
  height: auto;
  /* border: 1px solid black; */
  transition-duration: 0.5s;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 4px 4px #bcd1f3;
  border: 2px solid #bcd1f3;
  padding: 5px;
  cursor: pointer;

  :first-of-type {
    margin-left: 0;
  }

  :hover {
    /* background-color: red; */
    border: 1px solid #bcd1f3;
    transform: scale(2, 2.2);
    z-index: 2;
    box-shadow: 1px 1px #bcd1f3;
    /* width: 20%;
    heigth: 20%; */
    /* position: absolute; */
  }
`;

const days = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
  const line = Array.from({ length: 6 }, (_, i) => i + 1);
  const arr = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <Wraper>
      <div>
        <div>{'<'}</div>
        <p style={{ fontWeight: 'bold' }}>May</p>
        <div>{'>'}</div>
      </div>

      <div>
        <DayOfWeek>
          {days.map((data) => (
            <Flex
              key={data}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {data}
            </Flex>
          ))}
        </DayOfWeek>
        <Table>
          {line.map((data) => (
            <TableBody
              key={`parent${data}`}
              style={{ justifyContent: 'space-between' }}
            >
              {arr.map((data) => (
                <Block key={data.toString()}>{data}</Block>
              ))}
            </TableBody>
          ))}
          {/* {arr.map((data) => (
            <div key={data.toString()}>{data}</div>
          ))} */}
        </Table>
      </div>
    </Wraper>
  );
};

export default Calendar;
