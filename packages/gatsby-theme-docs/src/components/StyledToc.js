import styled from '@emotion/styled';
import Theme from '../theme';

const {
  colors,
  fontWeights,
} = Theme;

const StyledToc = styled.div`
  color: ${colors.gray['900']};

  a {
    padding: 5px 0;
    display: inline-block;
    border-bottom: 2px solid transparent;

    &:hover {
      color: ${colors.primary};
    }
  }

  a.is-active {
    border-bottom-color: ${colors.primary}
  }

  span {
    color: ${colors.gray['400']};
  }

  .sfdocs-section-header {
    font-weight: ${fontWeights.bold};
    text-transform: uppercase;
    padding: 10px 0 5px;
  }
`;

export default StyledToc;
