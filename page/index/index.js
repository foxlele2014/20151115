/*
* @Author: limin
* @Date:   2018-01-02 15:02:17
* @Last Modified by:   limin
* @Last Modified time: 2018-01-02 16:28:49
*/
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@components/Layout';
import List from '@components/List';
import navList from '@tools/nav';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="nav">
                    <List list={navList} />
                    <p>nothing~</p>
                </div>
            </Layout>
        );
    }
}

ReactDOM.render(<Index />, document.querySelector('#app'));
