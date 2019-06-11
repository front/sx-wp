import React from 'react';
import { element, i18n, components, editor } from 'wp';

import ItemTitle from './ItemTitle';
import ItemContent from './ItemContent';

const { Fragment } = element;
const { __ } = i18n;

const { PanelBody, ToggleControl, Button } = components;
const { InspectorControls } = editor;

export default function edit (props) {
    const { attributes, classes, setAttributes } = props.settings;
    const { collapseItemsOnChange, items } = attributes;

    function getNewItem () {
        const id = `accordion-item-${new Date().getTime()}`;

        return {
            id,
            isOpen: false,
            title: {
                value: '',
                level: 2,
                alignment: 'left'
            },
            content: '',
        }
    }

    function addNewItem () {
        setAttributes({
            items: [
                ...items,
                getNewItem()
            ]
        });
    }

    function closeAllItems () {
        const itemsCopy = [...items].map((item) => ({ ...item, isOpen: false }));

        setAttributes({ items: itemsCopy });
    }

    function handleOtherItemsClose (id) {
        const itemsCopy = [...items].map((item) => {
            if (item.id === id) return item;
            return { ...item, isOpen: false };
        });

        setAttributes({ items: itemsCopy });
    }

    function handleItemAttributeSet (id, attribute, value) {
        const itemsCopy = [...items];
        const index = itemsCopy.findIndex(item => item.id === id);
        itemsCopy[index][attribute] = value;

        setAttributes({ items: itemsCopy });
    }

    function handleItemDelete (id) {
        const itemsCopy = [...items];
        const index = itemsCopy.findIndex(item => item.id === id);
        itemsCopy.splice(index, 1);

        setAttributes({ items: itemsCopy });
    }

    function handleMultipleItemsOpenToggle () {
        if (!collapseItemsOnChange) {
            closeAllItems();
        }

        setAttributes({ collapseItemsOnChange: !collapseItemsOnChange });
    }

    function getItemsList () {
        if (!items.length) return null;

        return (
            <ul className="accordion">
                {items.map((item) => (
                    <li className="accordion__item" key={item.id}>
                        <ItemTitle
                            item={item}
                            collapseItemsOnChange={collapseItemsOnChange}
                            onAttributeSet={handleItemAttributeSet}
                            onDelete={handleItemDelete}
                            onOpenToggle={handleOtherItemsClose}
                        />

                        <ItemContent item={item} onItemAttributeSet={handleItemAttributeSet} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Settings')}>
                    <ToggleControl
                        label={__('Collapse items on change')}
                        help={collapseItemsOnChange ? __('Only one item can be open') : __('Multiple items can be open')}
                        checked={collapseItemsOnChange}
                        onChange={handleMultipleItemsOpenToggle}
                    />
                </PanelBody>
            </InspectorControls>

            <div className={classes}>
                <Button className="button button-primary" onClick={addNewItem}>Add item</Button>
                {getItemsList()}
            </div>
        </Fragment>
    );
}
