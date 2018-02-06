import React from 'react';

const List = list => {
    return (
        <ul className="list">
            {list.map((opt, i) => {
                const iconName = opt.iconName ? opt.iconName : 'default-icon';
                return (
                    <li className={`list-li icon ${iconName}`}>
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
