import React from 'react';
import { element, i18n, components, editor } from 'wp';

const { Fragment } = element;
const { __ } = i18n;

const { Toolbar, ToolbarButton, IconButton, ToggleControl } = components;
const { RichText } = editor;

export default function itemTitle (props) {
    const { item, collapseItemsOnChange, onAttributeSet, onDelete, onOpenToggle } = props;

    const titleLevelButtons = [2, 3, 4].map((level) => (
        <ToolbarButton
            icon="heading"
            title={__(`Level ${level}`)}
            isActive={item.title.level === level}
            onClick={() => onAttributeSet(item.id, 'title', { ...item.title, level })}
            subscript={level}
        />
    ));

    function handleOpenToggle () {
        onAttributeSet(item.id, 'isOpen', !item.isOpen);

        if (collapseItemsOnChange) {
            onOpenToggle(item.id);
        }
    }

    return (
        <Fragment>
            <Toolbar>
                {titleLevelButtons}

                <div className="accordion__item-settings">
                    <ToggleControl
                        label={__('Open')}
                        checked={item.isOpen}
                        onChange={handleOpenToggle}
                    />

                    <IconButton
                        icon="trash"
                        label={__('Delete item')}
                        onClick={() => onDelete(item.id)}
                    />
                </div>
            </Toolbar>

            <RichText
                multiline={false}
                tagName={`h${item.title.level}`}
                placeholder={__('Title')}
                value={item.title.value}
                onChange={(value) => onAttributeSet(item.id, 'title', { ...item.title, value })}
                style={{ textAlign: item.title.alignment }}
            />
        </Fragment>
    );
}
