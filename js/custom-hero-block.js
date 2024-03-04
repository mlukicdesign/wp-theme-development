// (function() {
//     var el = wp.element.createElement;
//     var registerBlockType = wp.blocks.registerBlockType;
//     var MediaUpload = wp.editor.MediaUpload;
//     var InspectorControls = wp.editor.InspectorControls;
//     var TextControl = wp.components.TextControl;

//     registerBlockType('myplugin/hero-section', {
//         title: 'Hero Section',
//         icon: 'format-image',
//         category: 'common',
//         attributes: {
//             backgroundImage: {
//                 type: 'string',
//                 default: null,
//             },
//             titleText: {
//                 type: 'string',
//                 default: '',
//             },
//             paragraphText: {
//                 type: 'string',
//                 default: '',
//             }
//         },
//         edit: function(props) {
//             var attributes = props.attributes;

//             function onSelectImage(image) {
//                 props.setAttributes({ backgroundImage: image.url });
//             }

//             return [
//                 el(InspectorControls, { key: 'inspector' },
//                     el('div', { className: 'hero-section-inspector-controls' },
//                         el(TextControl, {
//                             label: 'Title Text',
//                             value: attributes.titleText,
//                             onChange: function(newValue) {
//                                 props.setAttributes({ titleText: newValue });
//                             }
//                         }),
//                         el(TextControl, {
//                             label: 'Paragraph Text',
//                             value: attributes.paragraphText,
//                             onChange: function(newValue) {
//                                 props.setAttributes({ paragraphText: newValue });
//                             }
//                         }),
//                         el(MediaUpload, {
//                             onSelect: onSelectImage,
//                             type: 'image',
//                             value: attributes.backgroundImage ? attributes.backgroundImage : '',
//                             render: function(obj) {
//                                 return el('button', {
//                                         className: 'button button-large',
//                                         onClick: obj.open
//                                     },
//                                     obj.value ? el('img', { src: obj.value }) : 'Select Image'
//                                 );
//                             }
//                         })
//                     )
//                 ),
//                 el('div', {
//                         className: props.className,
//                         style: { backgroundImage: 'url(' + attributes.backgroundImage + ')' }
//                     },
//                     el('h2', {}, attributes.titleText),
//                     el('p', {}, attributes.paragraphText)
//                 )
//             ];
//         },
//         save: function(props) {
//             var attributes = props.attributes;

//             return el('div', {
//                     className: props.className,
//                     style: { backgroundImage: 'url(' + attributes.backgroundImage + ')' }
//                 },
//                 el('h2', {}, attributes.titleText),
//                 el('p', {}, attributes.paragraphText)
//             );
//         }
//     });
// })();
