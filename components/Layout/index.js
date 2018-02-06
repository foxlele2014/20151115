/*
* @Author: limin
* @Date:   2018-01-02 15:02:17
* @Last Modified by:   limin
* @Last Modified time: 2018-01-02 16:28:49
*/
import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="wrapper">
                <div className="header">
                    <a href="/">
                        <span className="logo" />
                    </a>
                    <h1 className="title">比你还无聊</h1>
                    <p className="sub">After all, tomorrow is another day.</p>
                </div>
                <div className="content">{children}</div>
                <div className="footer">
                    <p>
                        Copyright © 2016~2017 lele<a
                            href="http://www.miitbeian.gov.cn/"
                            target="_blank"
                        >
                            粤ICP备17010961号
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Layout;
