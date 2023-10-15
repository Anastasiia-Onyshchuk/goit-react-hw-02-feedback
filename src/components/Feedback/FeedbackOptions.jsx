import React from "react";
import css from './FeedbackOption.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.option_wrapper}>
    {options.map((option) => (
      <button className={css.option_btn} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);