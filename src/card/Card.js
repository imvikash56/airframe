import React, { useState } from "react";
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <CompactCard param={props}  />
  );
};

// Compact Card
function CompactCard({ param }) {
  return (
    <motion.div
      className="CompactCard" 
    >
      <div className="detail">       
        <span>{param.title}</span>
        <span>{param.barValue}</span>
        <span>{param.value}</span>
        
      </div>
    </motion.div>
  );
}

export default Card;
