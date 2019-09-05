/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = ({children, variant = 'container', className = ''}) => (
    <div sx={{
        padding: '15px 0',
        maxWidth: '4xl',
        width: '100%',
        margin: '0 auto',
        overflowX: 'hidden',
        variant: `styles.${variant}`
    }}>
    { children }
    </div> 
)

export default Container