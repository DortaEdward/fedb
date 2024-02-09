
type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number | undefined
  name: string
}

export default function SearchInput({
  handleChange,
  value,
  name
}: Props) {
  return (
    <fieldset className="relative px-2 py-4 bg-white">
      <label htmlFor={name} className="absolute bg-white px-2 top-0 left-3 capitalize">{name}</label>
      <input className="border py-1 outline-none px-3 rounded" name={name} value={value} onChange={handleChange} />
    </fieldset>
  )
}