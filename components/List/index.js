import './index.less';
import React from 'react';

const Classify = props => {
    const { items } = props;
    return (
        <ul className="list">
            {items.map((opt, j) => {
                const iconName = opt.iconName ? opt.iconName : 'default-icon';
                return (
                    <li className={`list-li icon ${iconName}`} key={j}>
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

const List = props => {
    const { list } = props;
    return Object.keys(list).map((key, i) => {
        const items = list[key];
        return (
            <div className="classify-box">
                <React.Fragment>
                    <h3>{key}</h3>
                    <Classify items={items} />
                </React.Fragment>
            </div>
        );
    });
};

export default List;
