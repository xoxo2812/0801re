import React from 'react';
import ReactDOM from 'react-dom/client';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import'./scss/ncr.scss'; //scss컴포넌트 import
import { Events } from './component/Events'
import { Form } from './component/Form'
import Hd from './layout/Hd'
import Cat from './component/Cat'

import db from './db/db.json'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Hd dbpath={db.navi}></Hd>
      <Cat dbpath={db.catswiper}></Cat>
      <Events dbpath={db}></Events>
      <Form dbpath={db.banners}></Form>
    </>
);

