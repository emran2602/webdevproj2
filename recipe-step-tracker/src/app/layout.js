import { RecipeProvider } from "./RecipeContext";

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
