import React from 'react';
import { i18n, components, editor } from 'wp';

const { __ } = i18n;

const { RichText } = editor;

export default function itemContent (props) {
    const { item, onItemAttributeSet } = props;

    return (
        <RichText
            value={item.content}
            multiline="p"
            onChange={(content) => onItemAttributeSet(item.id, 'content', content)}
            placeholder={__('Content')}
        />
    );
}
