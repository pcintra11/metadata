'use client'

export default function MainLayoutCli({ children }: { children: React.ReactElement }) {
  return (
    <html>
      <head>
        <title>xxxx yyyy zzzz</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}