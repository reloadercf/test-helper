export let traerimagenes=async()=>{
    let llave=`iWKgEQDoiJeTYfR71hHj3vXLPEPatbDJ`
    let url=`https://api.giphy.com/v1/gifs/trending?api_key=${llave}`
    let respuesta= await fetch(url)
    let recurso=await respuesta.json()
    let imagen=recurso.data[0].images.downsized.url
    return imagen
  }