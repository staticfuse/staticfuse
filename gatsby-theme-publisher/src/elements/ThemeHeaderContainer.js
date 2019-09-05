/** @jsx jsx */
import { jsx } from "theme-ui"

const ThemeHeaderContainer = ({ children, variant = "header", className = "" }) => (
  <div
    sx={{
      padding: "15px 0",
      width: "100%",
      margin: "0 auto",
      variant: `styles.${variant}`,
      backgroundColor: `dark`,
    }}
    className={className}
  >
    <div sx={{
      maxWidth: `4xl`,
      margin: '0 auto',
      alignItems: 'center',
      display: `flex`,
      justifyContent: 'space-between'
    }}>
    {children}
    </div>
  </div>
)

export default ThemeHeaderContainer
