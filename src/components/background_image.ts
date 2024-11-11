export const bg_image=(image_url:string)=>{
    return(
        {
            backgroundImage:`url(${image_url})`,
            backgroundSize:`cover`,
            backgroundRepeat:`no-repeat`,
            backgroundPosition:`center`,
        }
    )
}