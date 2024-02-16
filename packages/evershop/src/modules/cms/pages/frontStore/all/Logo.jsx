import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

export default function Logo({
  themeConfig: {
    logo: { src, alt = 'BysMax', width = '128px', height = '128px' }
  }
}) {
  return (
    <div className="logo">
      {src && (
        <a href="/" className="logo-icon">
          <img src={src} alt={alt} width={width} height={height} />
        </a>
      )}
      {!src && (
        <a href="/" className="logo-icon">
          BYSMAX
        </a>
      )}
    </div>
  );
}

Logo.propTypes = {
  themeConfig: PropTypes.shape({
    logo: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string
    })
  })
};

Logo.defaultProps = {
  themeConfig: {
    logo: {
      src: '',
      alt: 'Evershop',
      width: '128',
      height: '146'
    }
  }
};

export const layout = {
  areaId: 'header',
  sortOrder: 1
};

export const query = `
  query query {
    themeConfig {
      logo {
        src
        alt
        width
        height
      }
    }
  }
`;
