import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

const Box = ({
  children,
  className,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('box', className)}
  >
    {children}
  </Element>
);

Box.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Box.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: undefined,
  renderAs: 'div',
};

export default Box;
