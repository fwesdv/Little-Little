import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from '../../page/Event/Event.module.css'
export const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <div className={styles.contain_previous}></div>
      </div>
    );
  };
  

export const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
         <div className={styles.contain_next}></div>
      </div>
    );
  };