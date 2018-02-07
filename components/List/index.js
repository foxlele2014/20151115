import './index.less';
import React from 'react';

const List = props => {
    const { list } = props;
    return (
        <ul className="list">
            {Object.keys(list).map((key, i) => {
                const opt = list[key];
                const iconName = opt.iconName ? opt.iconName : 'default-icon';
                return (
                    <li className={`list-li icon ${iconName}`} key={i}>
                        <a href={opt.url} target="_blank">
                            <div className="intro">
                                <h3>{opt.name}</h3>
                                <p>{opt.description}</p>
                            </div>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default List;
