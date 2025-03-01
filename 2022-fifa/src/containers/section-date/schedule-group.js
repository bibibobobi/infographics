import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { ContentTab } from '../../components/panel';
import {
  GroupBtn,
  BtnWrapper,
  SwipeWrapper,
  BorderWrapper,
} from '../../components/group-panel';

const Table = styled.table`
  width: 100%;
  height: 501px;
  border-radius: 0 0 8px 8px;
  display: block;
  font-size: 16px;
  @media (min-width: 1200px) {
    font-size: 18px;
    width: 100%;
    height: 363px;
  }
`;

const Thead = styled.thead`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #5d2e7a;
  background: #ffffff;
  border-bottom: 2px solid #5d2e7a;

  th {
    width: 100px;
    height: 51px;
    text-align: left;
    padding-left: 20px;
    @media (min-width: 500px) {
      width: 150px;
    }
    @media (min-width: 1200px) {
      height: 51px;
      width: 275px;
    }
  }
`;

const Tbody = styled.thead`
  color: #5d2e7a;
  display: block;
  overflow: auto;
  height: calc(100% - 57px);
  tr {
    background: #f0eae3;

    :nth-child(even) {
      background: #ffffff;
    }
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1200px) {
      height: 51px;
    }
  }
  .end {
    width: 50px;
    color: #b79ac9;
    font-size: 14px;
    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }
  .time {
    width: 50px;
    margin-left: 20px;
    @media (min-width: 1200px) {
      width: 150px;
    }
  }
  .group {
    display: none;
    font-size: 14px;
    padding: 0 5px;
    background-color: #f5f1f6;
    @media (min-width: 1200px) {
      display: block;
    }
  }
  .dot {
    color: #b79ac9;
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }
  .team {
    display: flex;
    flex-direction: column;
    width: 140px;
    @media (min-width: 1200px) {
      width: 280px;
      flex-direction: row;
    }
  }
  .group-end-wrapper {
    display: flex;
    flex-direction: column;
  }
  .group-mob {
    display: block;
    width: fit-content;
    font-size: 14px;
    background-color: #f5f1f6;
    padding: 0 3px;
    @media (min-width: 1200px) {
      display: none;
    }
  }
`;

const ScheduleGroup = () => {
  // Toggle group panels
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Fetch Data
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await axios(
        'https://storage.googleapis.com/statics.mirrormedia.mg/json/fifa2022_group_schedule.json'
      );
      setSchedule(response?.data);
    };
    fetchSchedule();
  }, []);

  return (
    <BorderWrapper>
      <SwipeWrapper>
        <BtnWrapper>
          <GroupBtn active={toggleState === 1} onClick={() => toggleTab(1)}>
            A 組
          </GroupBtn>
          <GroupBtn active={toggleState === 2} onClick={() => toggleTab(2)}>
            B 組
          </GroupBtn>
          <GroupBtn active={toggleState === 3} onClick={() => toggleTab(3)}>
            C 組
          </GroupBtn>
          <GroupBtn active={toggleState === 4} onClick={() => toggleTab(4)}>
            D 組
          </GroupBtn>
          <GroupBtn active={toggleState === 5} onClick={() => toggleTab(5)}>
            E 組
          </GroupBtn>
          <GroupBtn active={toggleState === 6} onClick={() => toggleTab(6)}>
            F 組
          </GroupBtn>
          <GroupBtn active={toggleState === 7} onClick={() => toggleTab(7)}>
            G 組
          </GroupBtn>
          <GroupBtn active={toggleState === 8} onClick={() => toggleTab(8)}>
            H 組
          </GroupBtn>
        </BtnWrapper>
      </SwipeWrapper>

      <ContentTab active={toggleState === 1}>
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[0].A.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
      <ContentTab active={toggleState === 2}>
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[1].B.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
      <ContentTab active={toggleState === 3}>
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[2].C.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
      <ContentTab active={toggleState === 4}>
        {' '}
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[3].D.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
      <ContentTab active={toggleState === 5}>
        {' '}
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[4].E.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
      <ContentTab active={toggleState === 6}>
        {' '}
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[5].F.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
      <ContentTab active={toggleState === 7}>
        {' '}
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[6].G.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
      <ContentTab active={toggleState === 8}>
        {' '}
        <Table>
          <Thead>
            <tr>
              <th>對戰時間</th>
              <th colSpan={3}>對戰隊伍</th>
            </tr>
          </Thead>
          <Tbody>
            {schedule?.schedule?.[7].H.map((match) => {
              return (
                <tr key={match.key}>
                  <td className='time'>{match.dateTime}</td>
                  <td className='team'>
                    <span>{match.team1}</span>
                    <span className='dot'>・</span>
                    <span>{match.team2}</span>
                  </td>
                  <td className='group-end-wrapper'>
                    <span className='group-mob'>
                      {match.group}
                      {match.group && '組'}
                    </span>
                    <span className='end'>{match.ended && '結束'}</span>
                  </td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </ContentTab>
    </BorderWrapper>
  );
};

export default ScheduleGroup;
