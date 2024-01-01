import React from "react";
import "./Cards.css";
import { cardsData } from "../data/Data";
import {Card} from 'reactstrap'

import UserCard from "../card/Card";

const DoNutCards = () => {
  return (
    <div className="Cards">     
      {cardsData.map((card, id) => {
        return (
          <Card>
          <div className="parentContainer" key={id}>
            <UserCard
              title={card.title}
              // color={card.color}
              barValue={card.barValue}
              value={card.value}
              // series={card.series}
            />
          </div>
          </Card>
        );
      })}
    </div>
  );
};

export default DoNutCards;
