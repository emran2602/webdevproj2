import { RecipeProvider } from "./RecipeContext";
import '../../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecipeProvider>
          {children}
        </RecipeProvider>
      </body>
    </html>
  );
}
