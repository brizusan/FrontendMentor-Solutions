const api = import.meta.env.VITE_API_URL
export const getCountries = async()=>{
  const url = `${api}/all`

  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error('Error al conectar con la url')
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCountry = async(name:string)=>{
  const url = `${api}/name/${name}`

  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error('Error al conectar con la url')
    const data =  await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}