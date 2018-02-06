/*
* @Author: limin
* @Date:   2018-01-02 14:55:24
* @Last Modified by:   limin
* @Last Modified time: 2018-01-02 16:35:50
*/

import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@components/Layout';
import List from '@components/List';
import toolList from '@tools/tools';

const Tools = () => {
    return (
        <Layout>
            <List list={toolList} />
        </Layout>
    );
};

ReactDOM.render(<Tools />, document.querySelector('#tools'));
