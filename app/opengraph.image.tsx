import {ImageResponse} from "next/og";
export const alt="Build & Bloom Hub";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:80,background:"#F5EFE6",color:"#2B2B2B"}}><div style={{fontSize:84,fontWeight:700}}>{"Build & Bloom Hub"}</div><div style={{fontSize:40,marginTop:24}}>Learn. Build. Grow. Bloom.</div></div>,size);}
