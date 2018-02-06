/*
* @Author: limin
* @Date:   2018-01-02 15:02:17
* @Last Modified by:   limin
* @Last Modified time: 2018-01-02 16:28:49
*/
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../common';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="icon tool">
                            <a href="./view/tool/index.html" target="_blank">
                                <div className="intro">
                                    <h3>工具集</h3>
                                    <p>收集各类经常使用的网站</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <p>nothing~</p>
                </div>
            </Layout>
        );
    }
}

ReactDOM.render(<Index />, document.querySelector('#app'));
