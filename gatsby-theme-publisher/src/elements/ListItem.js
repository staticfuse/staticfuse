/** @jsx jsx */
import { jsx } from 'theme-ui'

const ListItem = ({children, variant = 'item', className = ''}) => (
    <article sx={{
        padding: '0',
        width: '100%',
        margin: '0 0 15px 0',
        variant: `styles.${variant}`
    }} className={className}>
    { children }
    </article> 
)

export default ListItem