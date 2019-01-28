/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor, data } from 'wp';

/**
 * Internal dependencies
 */
import './style.scss';
import './editor.scss';
import defaultImage from './card-16-9.png';

const { Fragment } = element;
const { __ } = i18n;

const {
  PanelBody,
  PanelRow,
  SelectControl,
  RangeControl,
  Toolbar,
  IconButton,
  ToolbarButton,
} = components;
const {
  InspectorControls,
  PanelColorSettings,
  InnerBlocks,
  URLInput,
  BlockControls,
  MediaUpload,
  RichText,
  AlignmentToolbar,
} = editor;

const BLOCK_ATTRIBUTES = {
  content: {
    type: 'string',
    source: 'html',
    selector: 'h2,h3',
    default: '',
  },
  desc: {
    type: 'string',
  },
  level: {
    type: 'number',
    default: 2,
  },
  url: {
    type: 'string',
  },
  backgroundImage: {
    type: 'string',
  },
  backgroundImageId: {
    type: 'number',
  },
  backgroundPosition: {
    type: 'string',
    default: 'center',
  },
  backgroundSize: {
    type: 'string',
    default: 'cover',
  },
  backgroundColor: {
    type: 'string',
  },
  backgroundColorOpacity: {
    type: 'number',
    default: 10,
  },
  image: {
    type: 'string',
    default: defaultImage,
  },
  imageAlt: {
    type: 'string',
  },
  imageId: {
    type: 'number',
  },
  alignment: {
    type: 'string',
  },
};

const BackgroundImage = ({ style }) => (
  <div className="background-image" style={style} />
);

const BackgroundColor = ({ style }) => (
  <div className="background-color" style={style} />
);

const TEMPLATE = [['core/paragraph', { placeholder: __('Short description') }]];

const ALLOWED_BLOCKS = ['core/paragraph', 'core/button'];

const bgPositionOptions = [
  { label: __('None'), value: '' },
  { label: __('Center'), value: 'center' },
  { label: __('Center Top'), value: 'center top' },
  { label: __('Center Bottom'), value: 'center bottom' },
  { label: __('Left Center'), value: 'left center' },
  { label: __('Right Center'), value: 'right center' },
];

const bgSizeOptions = [
  { label: __('None'), value: '' },
  { label: __('Cover'), value: 'cover' },
  { label: __('Contain'), value: 'contain' },
];

export const name = 'card';

export const settings = {
  title: __('Card Block'),

  description: __('A custom block for Gutenberg Cloud'),

  icon: 'cover-image',

  supports: {
    html: false,
  },

  attributes: BLOCK_ATTRIBUTES,

  edit ({ attributes, setAttributes, className, isSelected }) {
    const {
      level,
      url,
      content,
      backgroundImage,
      backgroundImageId,
      backgroundPosition,
      backgroundSize,
      backgroundColor,
      backgroundColorOpacity,
      image,
      imageAlt,
      imageId,
      alignment,
    } = attributes;
    const styles = {
      textAlign: alignment,
    };
    const tagName = `h${level}`;

    const onSelectImage = ({
      id,
      alt,
      sizes: {
        medium: { url: imgURI },
      },
    }) => {
      setAttributes({ image: imgURI, imageId: id, imageAlt: alt });
    };

    const onRemoveImage = () => {
      setAttributes({
        imageId: '',
        image: '',
        imageAlt: '',
      });
    };
    
    const backgroundImgStyle = {};
    if (backgroundPosition) {
      backgroundImgStyle.backgroundPosition = backgroundPosition;
    }
    if (backgroundSize) {
      backgroundImgStyle.backgroundSize = backgroundSize;
    }
    if (backgroundImage) {
      backgroundImgStyle.backgroundImage = `url(${backgroundImage})`;
    }

    const backgroundColorStyle = {};
    if (backgroundColor) {
      backgroundColorStyle.backgroundColor = backgroundColor;
    }
    if (backgroundColorOpacity) {
      backgroundColorStyle.opacity = `${(backgroundColorOpacity * 0.1).toFixed(
        1
      )}`;
    }

    const onSelectBgImage = ({
      id,
      sizes: {
        large: { url: imgURI },
      },
    }) => setAttributes({ backgroundImage: imgURI, backgroundImageId: id });

    const onRemoveBgImage = () => {
      setAttributes({
        backgroundImageId: null,
        backgroundImage: null,
      });
    };

    function onChangeAlignment (updatedAlignment) {
      setAttributes({ alignment: updatedAlignment });
    }

    const classes = [className, 'card'];
    if (url) {
      classes.push('card--arrow');
    }

    return (
      <Fragment>
        <div className={classes.join(' ')} style={styles}>
        {backgroundImage && <BackgroundImage style={backgroundImgStyle} />}
        {backgroundColor && <BackgroundColor style={backgroundColorStyle} />}
          {image && (
            <figure className="card__img-wrapper">
              <img src={image} alt={imageAlt} />
            </figure>
          )}
          <RichText
            placeholder={__('Card title')}
            tagName={tagName}
            className="card__title"
            value={content}
            isSelected={false}
            keepPlaceholderOnFocus={true}
            onChange={content => setAttributes({ content })}
          />

          <div className="card__description">
            <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} />
          </div>

          {isSelected && (
            <URLInput value={url} onChange={url => setAttributes({ url })} />
          )}
        </div>
        <BlockControls>
          <Toolbar>
            <MediaUpload
              type="image"
              onSelect={onSelectImage}
              value={imageId}
              render={({ open }) => (
                <IconButton
                  className="components-toolbar__control"
                  label={__('Image')}
                  icon="format-image"
                  onClick={open}
                />
              )}
            />
            {image && (
              <ToolbarButton
                title={__('Remove image')}
                icon="trash"
                onClick={onRemoveImage}
              />
            )}
            <MediaUpload
              type="image"
              onSelect={onSelectBgImage}
              value={backgroundImageId}
              render={({ open }) => (
                <IconButton
                  className="components-toolbar__control"
                  label={__('Add/Edit background image')}
                  icon="format-image"
                  onClick={open}
                />
              )}
            />
            {backgroundImageId && (
              <ToolbarButton
                title={__('Remove background image')}
                icon="trash"
                onClick={onRemoveBgImage}
              />
            )}
            <ToolbarButton
              icon="heading"
              title={__('Level 2')}
              isActive={level === 2}
              onClick={level => setAttributes({ level: 2 })}
              subscript="2"
            />
            <ToolbarButton
              icon="heading"
              title={__('Level 3')}
              isActive={level === 3}
              onClick={level => setAttributes({ level: 3 })}
              subscript="3"
            />
          </Toolbar>
          <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
        </BlockControls>
        <InspectorControls>
        <PanelColorSettings
            initialOpen={false}
            title={__('Background Color')}
            colorSettings={[
              {
                value: backgroundColor,
                onChange: backgroundColor => {
                  setAttributes({ backgroundColor });
                },
                label: __('Background Color'),
              },
            ]}
          />
          <PanelBody title={__('Background Settings')} initialOpen={false}>
            <RangeControl
              label={__('Background color opacity')}
              value={backgroundColorOpacity}
              onChange={backgroundColorOpacity =>
                setAttributes({ backgroundColorOpacity })
              }
              min={1}
              max={10}
            />
            <PanelRow>
              <label htmlFor="bg-position">{__('Background Position')}</label>
              <SelectControl
                id="bg-position"
                value={backgroundPosition}
                options={bgPositionOptions}
                onChange={backgroundPosition =>
                  setAttributes({ backgroundPosition })
                }
              />
            </PanelRow>
            <PanelRow>
              <label htmlFor="bg-size">{__('Background Size')}</label>
              <SelectControl
                id="bg-size"
                value={backgroundSize}
                options={bgSizeOptions}
                onChange={backgroundSize => setAttributes({ backgroundSize })}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  },

  save ({ attributes, className }) {
    const {
      backgroundImage,
      backgroundPosition,
      backgroundSize,
      backgroundColor,
      backgroundColorOpacity,
      image,
      imageId,
      imageAlt,
      level,
      content,
      url,
      alignment,
    } = attributes;
    const styles = {
      textAlign: alignment,
    };
    const tagName = `h${level}`;

    const classes = [className, 'card'];
    if (url) {
      classes.push('card--arrow');
    }
    if (alignment) {
      classes.push(alignment);
    }

    const backgroundImgStyle = {};
    if (backgroundPosition) {
      backgroundImgStyle.backgroundPosition = backgroundPosition;
    }
    if (backgroundSize) {
      backgroundImgStyle.backgroundSize = backgroundSize;
    }
    if (backgroundImage) {
      backgroundImgStyle.backgroundImage = `url(${backgroundImage})`;
      classes.push('has-background');
    }

    const backgroundColorStyle = {};
    if (backgroundColor) {
      backgroundColorStyle.backgroundColor = backgroundColor;
    }
    if (backgroundColorOpacity) {
      backgroundColorStyle.opacity = `${(backgroundColorOpacity * 0.1).toFixed(
        1
      )}`;
    }

    return (
      <div className={classes.join(' ')} style={styles}>
        {backgroundImage && <BackgroundImage style={backgroundImgStyle} />}
        {backgroundColor && <BackgroundColor style={backgroundColorStyle} />}
        {url && (
          <a className="card__link" href={url}>
            {imageId && (
              <figure className="card__img-wrapper">
                <img src={image} alt={imageAlt} />
              </figure>
            )}
            <RichText.Content
              className="card__title"
              value={content}
              tagName={tagName}
            />
            <div className="card__description">
              <InnerBlocks.Content />
            </div>
          </a>
        )}
        {!url && (
          <Fragment>
            {imageId && (
              <figure className="card__img-wrapper">
                <img src={image} alt={imageAlt} />
              </figure>
            )}
            <RichText.Content
              className="card__title"
              value={content}
              tagName={tagName}
            />
            <div className="card__description">
              <InnerBlocks.Content />
            </div>
          </Fragment>
        )}
      </div>
    );
  },
};
