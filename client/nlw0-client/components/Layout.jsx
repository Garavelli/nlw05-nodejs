// components/Layout.js
import theme from '../theme';
function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 10px;
          font-weight: 400;
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
        }
        h1 {
          font-weight: 700;
        }

        :is(textarea, input, button):focus {
          outline: none;
          filter: drop-shadow(0 0 0.1rem ${theme.colors.secondary});
        }

        .red {
          background-color: ${theme.colors.secondary};
        }

        .purple {
          background-color: ${theme.colors.primary};
        }
      `}</style>
    </div>
  )
}

export default Layout