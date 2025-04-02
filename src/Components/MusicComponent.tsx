

export function MusicComponent() {
    return (
        <div className="bg-neutral-300 h-full  rounded-2xl p-4 border border-purple-950 border-">
        <h1 className="text-black font-bold text-2xl">Music TestTest</h1>
    <iframe 
   className="w-[30vw] h-[30vh] rounded-xl"
   src="https://open.spotify.com/embed/playlist/1BJnVp3AMDOMtRcsGJUXne?utm_source=generator"
   frameBorder="0"
   allowFullScreen
   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
   loading="lazy"
 />    
        
        </div>
    );

}