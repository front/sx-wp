import React from 'react';

import Item from './Item';

export default function save (props) {
    const { attributes, classes } = props.settings;
    const { collapseItemsOnChange, items } = attributes;

    function getAccordion () {
        if (!items.length) return null;

        return (
            <ul className="accordion">
                {items.map((item) => <Item key={item.id} data={item} />)}
            </ul>
        );
    }

    return (
        <div className={classes} data-collapse-on-change={collapseItemsOnChange}>
            {getAccordion()}
        </div>
    );
}
