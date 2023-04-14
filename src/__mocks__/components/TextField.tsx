// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const TextField = ({ dataTestid, ...more }) => {
  Object.entries(more).forEach(([key, value]) => {
    if (typeof more[key] === 'boolean') {
      if (key === 'disabled') {
        if (more[key]) more[key] = true
        else delete more[key]

        return
      }

      more[key] = `${value}`
    }
  })

  return <input data-testid={dataTestid || 'text-field'} {...more} />
}
