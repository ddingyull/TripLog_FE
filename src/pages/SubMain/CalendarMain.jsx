import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import CalendarModule from '../../components/CalendarModule';
import data from '../../data';

export default function CalendarMain({ planDate, pickAreaName, pickAreaImg }) {
  const [value, onChange] = useState(new Date());
  const [areaImg, setAreaImg] = useState(data);

  return (
    <Container>
      <CalendarAll className="card">
        <img alt="지역대표이미지" src={pickAreaImg} />
        <Card.ImgOverlay>
          <CalendarIcon>
            <CalendarModule planDate={planDate} />
          </CalendarIcon>
          <AreaName>{pickAreaName}</AreaName>
          <Areatext>
            온전히 내 취향대로, 나만의 감성을 그대로 담은 나만의 여행로그
          </Areatext>
        </Card.ImgOverlay>
      </CalendarAll>
    </Container>
  );
}
const CalendarAll = styled.div`
  margin: 3% auto;
  width: 75%;
`;
const CalendarIcon = styled.a``;

const AreaName = styled.p`
  color: #fff;
  font: 10rem/1 'ChosunBg';
  margin: 0 0 0 3%;

  @media screen and (max-width: 1200px) {
    font: 6rem/1 'ChosunBg';
    margin: 0 0 0 3%;
  }
  @media screen and (max-width: 992px) {
    font: 4rem/1 'ChosunBg';
    margin: 0 0 0 3%;
  }
  @media screen and (max-width: 576px) {
    font: 3rem/1 'ChosunBg';
    margin: 0 0 0 3%;
  }
`;

const Areatext = styled.p`
  color: #fff;
  font-size: 1.3rem;
  font-family: Inter;
  margin: 0 0 0 3%;
  @media screen and (max-width: 1200px) {
    font: 1rem/1.5 ‘Inter’;
    margin: 0 0 0 3%;
  }
  @media screen and (max-width: 992px) {
    font: 0.8rem/1.5 ‘Inter’;
    margin: 0 0 0 3%;
  }
  @media screen and (max-width: 768px) {
    font: 0.4rem/1.5 ‘Inter’;
    margin: 0 0 0 3%;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
