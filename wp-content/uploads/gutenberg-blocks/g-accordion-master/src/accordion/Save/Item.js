import React from 'react';
import { editor } from 'wp';

const { RichText } = editor;

export default function item (props) {
    const { data } = props;

    const itemClassName = [
        'accordion__item',
        data.isOpen && 'accordion__item--open'
    ].filter(className => !!className).join(' ');

    return (
        <li className={itemClassName}>
            <div className="accordion__item-title-wrapper">
                <RichText.Content
                    className="accordion__item-title"
                    tagName={`h${data.title.level}`}
                    value={data.title.value}
                />

                <button className="accordion__item-toggle-button">{data.isOpen ? 'Close' : 'Open'}</button>
            </div>

            <RichText.Content
                className="accordion__item-content"
                tagName="div"
                value={data.content}
                aria-expanded={data.isOpen}
            />
        </li>
    );
}
