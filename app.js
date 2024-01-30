import { execute } from './database';
import express from 'express';
import bodyParser from 'body-parser';

execute('SELECT * FROM attendance')
  .then(result => {
    console.log(result[0], result[1]);
  })
  .catch(err => {
    console.log(err);
  });

