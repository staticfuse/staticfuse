/** @jsx jsx */
import { jsx } from 'theme-ui'

const HeaderArchive = ({ name }) => (
  <header className="page-header page-header__archive container bottom-spacer">
    <h2 className="archive-title text-sm uppercase font-light border-b mb-4 pb-2 text-gray-500 leading-tight"
    sx={{
      fontSize: 1,
      color: 'muted',
      fontWeight: 1,
      borderBottom: '1px solid #eee',
      pb: 1,
      textTransform: 'uppercase'
    }}>
      {name}
    </h2>
  </header>
);

export default HeaderArchive;
