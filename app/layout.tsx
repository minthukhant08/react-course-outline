
import { Footer, Layout, Navbar, } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import "./globals.css";
import 'nextra-theme-docs/style.css'
import { ThemeProvider } from 'next-themes'

const navbar = (
  <Navbar
    logo={<b>Road to reactjs</b>}
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © Min Thu Khant.</Footer>

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMap = await getPageMap('/')
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <ThemeProvider 
        attribute={"class"} 
        defaultTheme="system"
        enableSystem>
        <Layout
        sidebar={{
          autoCollapse: false,
          defaultMenuCollapseLevel: 1
        }}
          navbar={navbar}
          pageMap={pageMap}
          footer={footer}
          
        >
          {children}
        </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
