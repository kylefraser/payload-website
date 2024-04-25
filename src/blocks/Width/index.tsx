export const Width: React.FC<{
  width?: string
  children: React.ReactNode
}> = ({ width, children }) => {
  return <div style={{ width: width ? `${width}%` : undefined }}>{children}</div>
}
